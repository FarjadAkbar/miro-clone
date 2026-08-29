import { mutateFlow } from "@liveblocks/react-flow/node"
import { MarkerType } from "@xyflow/react"
import { nextApplyActionDelayMs } from "@/lib/apply-enter"
import { createCanvasGroup, isCanvasGroup, nestNodeInGroup } from "@/lib/canvas-group"
import { getLiveblocks } from "@/lib/liveblocks"
import {
  CANVAS_EDGE_TYPE,
  CANVAS_NODE_TYPE,
  DEFAULT_EDGE_COLOR,
  DEFAULT_GROUP_SIZE,
  NODE_COLORS,
  SHAPE_DEFAULT_SIZES,
  type CanvasEdge,
  type CanvasFlowNode,
  type CanvasNode,
  type CanvasNodeShape,
} from "@/types/canvas"
import { getComponentKindDefinition } from "@/types/component-kind"
import type { DesignAgentAction } from "@/types/design-agent-actions"

function buildNode(
  action: Extract<DesignAgentAction, { type: "add_node" }>,
  existingNodes: CanvasFlowNode[]
): CanvasNode {
  const color = NODE_COLORS[action.colorIndex ?? 0] ?? NODE_COLORS[0]
  const defaults = SHAPE_DEFAULT_SIZES[action.shape as CanvasNodeShape]
  const width = action.width ?? defaults.width
  const height = action.height ?? defaults.height

  let position = { x: action.x, y: action.y }
  let parentId: string | undefined
  let extent: "parent" | undefined

  if (action.parentId) {
    const parent = existingNodes.find(
      (node) => node.id === action.parentId && isCanvasGroup(node)
    )
    if (parent && isCanvasGroup(parent)) {
      const nested = nestNodeInGroup(
        { id: action.id, position, width, height },
        parent
      )
      position = nested.position
      parentId = nested.parentId
      extent = nested.extent
    }
  }

  return {
    id: action.id,
    type: CANVAS_NODE_TYPE,
    position,
    width,
    height,
    ...(parentId ? { parentId, extent } : {}),
    data: {
      label: action.label,
      color: color.fill,
      textColor: color.text,
      shape: action.shape,
      ...(action.componentKind
        ? { componentKind: action.componentKind }
        : {}),
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
    data: {
      label: action.label ?? "",
      ...(action.sequence !== undefined ? { sequence: action.sequence } : {}),
    },
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

  await mutateFlow<CanvasFlowNode, CanvasEdge>(
    { client: getLiveblocks(), roomId },
    (flow) => {
      switch (action.type) {
        case "add_group": {
          const group = createCanvasGroup({
            id: action.id,
            label: action.label,
            position: { x: action.x, y: action.y },
            width: action.width ?? DEFAULT_GROUP_SIZE.width,
            height: action.height ?? DEFAULT_GROUP_SIZE.height,
          })
          flow.addNode(group)
          cursor = {
            x: group.position.x + (group.width ?? 0) / 2,
            y: group.position.y + (group.height ?? 0) / 2,
          }
          break
        }
        case "update_group": {
          const node = flow.getNode(action.id)
          if (!node || !isCanvasGroup(node)) {
            break
          }

          flow.updateNode(action.id, {
            data: {
              ...node.data,
              ...(action.label !== undefined ? { label: action.label } : {}),
            },
            ...(action.x !== undefined || action.y !== undefined
              ? {
                  position: {
                    x: action.x ?? node.position.x,
                    y: action.y ?? node.position.y,
                  },
                }
              : {}),
            ...(action.width !== undefined ? { width: action.width } : {}),
            ...(action.height !== undefined ? { height: action.height } : {}),
          })
          cursor = {
            x: node.position.x + (node.width ?? 0) / 2,
            y: node.position.y + (node.height ?? 0) / 2,
          }
          break
        }
        case "delete_group": {
          const nodes = flow.toJSON().nodes as CanvasFlowNode[]
          const group = nodes.find(
            (node) => node.id === action.id && isCanvasGroup(node)
          )
          if (group && isCanvasGroup(group)) {
            for (const child of nodes) {
              if (child.parentId !== action.id) {
                continue
              }
              flow.updateNode(child.id, {
                parentId: undefined,
                extent: undefined,
                position: {
                  x: group.position.x + child.position.x,
                  y: group.position.y + child.position.y,
                },
              })
            }
          }
          flow.removeNode(action.id)
          break
        }
        case "add_node": {
          const existing = flow.toJSON().nodes as CanvasFlowNode[]
          const node = buildNode(action, existing)
          flow.addNode(node)
          cursor = {
            x:
              (node.parentId
                ? (existing.find((entry) => entry.id === node.parentId)
                    ?.position.x ?? 0) + node.position.x
                : node.position.x) + (node.width ?? 0) / 2,
            y:
              (node.parentId
                ? (existing.find((entry) => entry.id === node.parentId)
                    ?.position.y ?? 0) + node.position.y
                : node.position.y) + (node.height ?? 0) / 2,
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
          if (!node || node.type !== CANVAS_NODE_TYPE) {
            break
          }

          const colorIndex = action.colorIndex
          const color =
            colorIndex !== undefined
              ? (NODE_COLORS[colorIndex] ?? NODE_COLORS[0])
              : null
          const kindDefaults = action.componentKind
            ? getComponentKindDefinition(action.componentKind)
            : null

          let parentPatch: Partial<CanvasNode> = {}
          if (action.parentId) {
            const existing = flow.toJSON().nodes as CanvasFlowNode[]
            const parent = existing.find(
              (entry) => entry.id === action.parentId && isCanvasGroup(entry)
            )
            if (parent && isCanvasGroup(parent)) {
              const absolute = {
                x: parent.position.x + node.position.x,
                y: parent.position.y + node.position.y,
              }
              const nested = nestNodeInGroup(
                {
                  id: node.id,
                  position: node.parentId ? absolute : node.position,
                  width: node.width,
                  height: node.height,
                },
                parent
              )
              parentPatch = {
                parentId: nested.parentId,
                extent: nested.extent,
                position: nested.position,
              }
            }
          }

          flow.updateNode(action.id, {
            data: {
              ...node.data,
              ...(action.label !== undefined ? { label: action.label } : {}),
              ...(action.shape !== undefined ? { shape: action.shape } : {}),
              ...(action.componentKind !== undefined
                ? { componentKind: action.componentKind }
                : {}),
              ...(color
                ? { color: color.fill, textColor: color.text }
                : {}),
            },
            ...parentPatch,
            ...(action.shape !== undefined || kindDefaults
              ? {
                  width:
                    kindDefaults?.width ??
                    node.width ??
                    (action.shape
                      ? SHAPE_DEFAULT_SIZES[action.shape].width
                      : undefined),
                  height:
                    kindDefaults?.height ??
                    node.height ??
                    (action.shape
                      ? SHAPE_DEFAULT_SIZES[action.shape].height
                      : undefined),
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
  for (let index = 0; index < actions.length; index += 1) {
    const action = actions[index]
    const { cursor } = await applyDesignAction(roomId, action)
    if (onActionApplied) {
      await onActionApplied(action, cursor)
    }

    const delayMs = nextApplyActionDelayMs(index, actions.length)
    if (delayMs > 0) {
      await new Promise((resolve) => {
        setTimeout(resolve, delayMs)
      })
    }
  }
}
