import type { XYPosition } from "@xyflow/react"
import {
  CANVAS_NODE_TYPE,
  DEFAULT_NODE_COLOR,
  NODE_SHAPES,
  type CanvasNode,
  type CanvasNodeShape,
  type CanvasShapeDragPayload,
} from "@/types/canvas"
import {
  componentKindColor,
  getComponentKindDefinition,
  isComponentKind,
  type ComponentKind,
} from "@/types/component-kind"

let nodeIdCounter = 0

export function createCanvasNodeId(
  shape: CanvasNodeShape,
  componentKind?: ComponentKind
): string {
  nodeIdCounter += 1
  const prefix = componentKind ?? shape
  return `${prefix}-${Date.now()}-${nodeIdCounter}`
}

export function parseShapeDragPayload(raw: string): CanvasShapeDragPayload | null {
  try {
    const parsed = JSON.parse(raw) as Partial<CanvasShapeDragPayload>

    if (typeof parsed.width !== "number" || typeof parsed.height !== "number") {
      return null
    }

    if (
      typeof parsed.componentKind === "string" &&
      isComponentKind(parsed.componentKind)
    ) {
      const definition = getComponentKindDefinition(parsed.componentKind)
      const shape =
        typeof parsed.shape === "string" &&
        NODE_SHAPES.includes(parsed.shape as CanvasNodeShape)
          ? (parsed.shape as CanvasNodeShape)
          : definition.shape

      return {
        componentKind: parsed.componentKind,
        shape,
        width: parsed.width,
        height: parsed.height,
      }
    }

    if (
      typeof parsed.shape !== "string" ||
      !NODE_SHAPES.includes(parsed.shape as CanvasNodeShape)
    ) {
      return null
    }

    return {
      shape: parsed.shape as CanvasNodeShape,
      width: parsed.width,
      height: parsed.height,
    }
  } catch {
    return null
  }
}

interface CreateCanvasNodeInput {
  shape: CanvasNodeShape
  width: number
  height: number
  position: XYPosition
  componentKind?: ComponentKind
}

export function createCanvasNode({
  shape,
  width,
  height,
  position,
  componentKind,
}: CreateCanvasNodeInput): CanvasNode {
  const kindDefaults = componentKind
    ? getComponentKindDefinition(componentKind)
    : null
  const color = componentKind
    ? componentKindColor(componentKind)
    : DEFAULT_NODE_COLOR

  return {
    id: createCanvasNodeId(shape, componentKind),
    type: CANVAS_NODE_TYPE,
    position: {
      x: position.x - width / 2,
      y: position.y - height / 2,
    },
    width,
    height,
    data: {
      label: kindDefaults?.label ?? "",
      color: color.fill,
      textColor: color.text,
      shape,
      ...(componentKind ? { componentKind } : {}),
    },
  }
}
