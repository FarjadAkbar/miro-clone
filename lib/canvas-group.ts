import type { XYPosition } from "@xyflow/react"
import {
  CANVAS_GROUP_TYPE,
  DEFAULT_GROUP_SIZE,
  type CanvasFlowNode,
  type CanvasGroup,
} from "@/types/canvas"

let groupIdCounter = 0

export function isCanvasGroup(node: CanvasFlowNode): node is CanvasGroup {
  return node.type === CANVAS_GROUP_TYPE
}

export function createCanvasGroupId(): string {
  groupIdCounter += 1
  return `group-${Date.now()}-${groupIdCounter}`
}

interface CreateCanvasGroupInput {
  id?: string
  label?: string
  position: XYPosition
  width?: number
  height?: number
}

export function createCanvasGroup({
  id,
  label = "Group",
  position,
  width = DEFAULT_GROUP_SIZE.width,
  height = DEFAULT_GROUP_SIZE.height,
}: CreateCanvasGroupInput): CanvasGroup {
  return {
    id: id ?? createCanvasGroupId(),
    type: CANVAS_GROUP_TYPE,
    position,
    width,
    height,
    zIndex: -1,
    data: {
      label,
    },
  }
}

interface NestableNode {
  id: string
  position: XYPosition
  width?: number | null
  height?: number | null
}

/** Convert absolute canvas coords into Group-relative containment. */
export function nestNodeInGroup(
  node: NestableNode,
  group: Pick<CanvasGroup, "id" | "position">
): {
  parentId: string
  extent: "parent"
  position: XYPosition
} {
  return {
    parentId: group.id,
    extent: "parent",
    position: {
      x: node.position.x - group.position.x,
      y: node.position.y - group.position.y,
    },
  }
}

export function findGroupContainingPoint(
  nodes: CanvasFlowNode[],
  point: XYPosition
): CanvasGroup | null {
  const groups = nodes.filter(isCanvasGroup)

  for (let index = groups.length - 1; index >= 0; index -= 1) {
    const group = groups[index]
    const width = group.width ?? DEFAULT_GROUP_SIZE.width
    const height = group.height ?? DEFAULT_GROUP_SIZE.height
    const inside =
      point.x >= group.position.x &&
      point.x <= group.position.x + width &&
      point.y >= group.position.y &&
      point.y <= group.position.y + height

    if (inside) {
      return group
    }
  }

  return null
}

export function parseGroupDragPayload(
  raw: string
): { width: number; height: number } | null {
  try {
    const parsed = JSON.parse(raw) as { width?: unknown; height?: unknown }
    if (typeof parsed.width !== "number" || typeof parsed.height !== "number") {
      return null
    }
    return { width: parsed.width, height: parsed.height }
  } catch {
    return null
  }
}
