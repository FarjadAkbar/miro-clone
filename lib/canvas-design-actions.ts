import { mutateFlow } from "@liveblocks/react-flow/node"
import { MarkerType } from "@xyflow/react"
import { getLiveblocks } from "@/lib/liveblocks"
import {
  CANVAS_EDGE_TYPE,
  CANVAS_NODE_TYPE,
  DEFAULT_EDGE_COLOR,
  NODE_COLORS,
  SHAPE_DEFAULT_SIZES,
  textColorForFill,
  type CanvasEdge,
  type CanvasNode,
  type CanvasNodeShape,
} from "@/types/canvas"
import type { DesignAgentAction } from "@/types/design-agent-actions"

function buildNode(
  action: Extract<DesignAgentAction, { type: "add_node" }>
): CanvasNode {
  const color = NODE_COLORS[action.colorIndex ?? 0] ?? NODE_COLORS[0]
  const defaults = SHAPE_DEFAULT_SIZES[action.shape as CanvasNodeShape]
  const width = action.width ?? defaults.width
  const height = action.height ?? defaults.height

  return {
    id: action.id,
    type: CANVAS_NODE_TYPE,
    position: { x: action.x, y: action.y },
    width,
    height,
    data: {
      label: action.label,
      color: color.fill,
      textColor: color.text,
      shape: action.shape,
    },
  }
}

function buildEdge(
  action: Extract<DesignAgentAction, { type: "add_edge" }>
): CanvasEdge {
  return {
    id: action.id,
    type: CANVAS_EDGE_TYPE,
    source: action.source,
    target: action.target,
    data: { label: action.label ?? "" },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: DEFAULT_EDGE_COLOR,
      width: 16,
      height: 16,
    },
  }
}

export async function applyDesignAction(
  roomId: string,
  action: DesignAgentAction
): Promise<{ cursor: { x: number; y: number } | null }> {
  let cursor: { x: number; y: number } | null = null

  await mutateFlow<CanvasNode, CanvasEdge>(
    { client: getLiveblocks(), roomId },
    (flow) => {
      switch (action.type) {
        case "add_node": {
          const node = buildNode(action)
          flow.addNode(node)
          cursor = {
            x: node.position.x + (node.width ?? 0) / 2,
            y: node.position.y + (node.height ?? 0) / 2,
          }
          break
        }
        case "move_node": {
          flow.updateNode(action.id, { position: { x: action.x, y: action.y } })
          const node = flow.getNode(action.id)
          if (node) {
            cursor = {
              x: action.x + (node.width ?? 0) / 2,
              y: action.y + (node.height ?? 0) / 2,
            }
          }
          break
        }
        case "resize_node": {
          flow.updateNode(action.id, {
            width: action.width,
            height: action.height,
          })
          const node = flow.getNode(action.id)
          if (node) {
            cursor = {
              x: node.position.x + action.width / 2,
              y: node.position.y + action.height / 2,
            }
          }
          break
        }
        case "update_node": {
          const node = flow.getNode(action.id)
          if (!node) {
            break
          }

          const colorIndex = action.colorIndex
          const color =
            colorIndex !== undefined
              ? (NODE_COLORS[colorIndex] ?? NODE_COLORS[0])
              : null

          flow.updateNode(action.id, {
            data: {
              ...node.data,
              ...(action.label !== undefined ? { label: action.label } : {}),
              ...(action.shape !== undefined ? { shape: action.shape } : {}),
              ...(color
                ? { color: color.fill, textColor: color.text }
                : {}),
            },
            ...(action.shape !== undefined
              ? {
                  width:
                    node.width ?? SHAPE_DEFAULT_SIZES[action.shape].width,
                  height:
                    node.height ?? SHAPE_DEFAULT_SIZES[action.shape].height,
                }
              : {}),
          })
          cursor = {
            x: node.position.x + (node.width ?? 0) / 2,
            y: node.position.y + (node.height ?? 0) / 2,
          }
          break
        }
        case "delete_node": {
          flow.removeNode(action.id)
          break
        }
        case "add_edge": {
          flow.addEdge(buildEdge(action))
          break
        }
        case "delete_edge": {
          flow.removeEdge(action.id)
          break
        }
      }
    }
  )

  return { cursor }
}

export async function applyDesignActions(
  roomId: string,
  actions: DesignAgentAction[],
  onActionApplied?: (
    action: DesignAgentAction,
    cursor: { x: number; y: number } | null
  ) => Promise<void>
) {
  for (const action of actions) {
    const { cursor } = await applyDesignAction(roomId, action)
    if (onActionApplied) {
      await onActionApplied(action, cursor)
    }
  }
}
