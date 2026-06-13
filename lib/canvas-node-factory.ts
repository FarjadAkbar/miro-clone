import type { XYPosition } from "@xyflow/react"
import {
  CANVAS_NODE_TYPE,
  DEFAULT_NODE_COLOR,
  NODE_SHAPES,
  type CanvasNode,
  type CanvasNodeShape,
  type CanvasShapeDragPayload,
} from "@/types/canvas"

let nodeIdCounter = 0

export function createCanvasNodeId(shape: CanvasNodeShape): string {
  nodeIdCounter += 1
  return `${shape}-${Date.now()}-${nodeIdCounter}`
}

export function parseShapeDragPayload(raw: string): CanvasShapeDragPayload | null {
  try {
    const parsed = JSON.parse(raw) as Partial<CanvasShapeDragPayload>

    if (
      typeof parsed.shape !== "string" ||
      typeof parsed.width !== "number" ||
      typeof parsed.height !== "number" ||
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
}

export function createCanvasNode({
  shape,
  width,
  height,
  position,
}: CreateCanvasNodeInput): CanvasNode {
  return {
    id: createCanvasNodeId(shape),
    type: CANVAS_NODE_TYPE,
    position: {
      x: position.x - width / 2,
      y: position.y - height / 2,
    },
    width,
    height,
    data: {
      label: "",
      color: DEFAULT_NODE_COLOR.fill,
      textColor: DEFAULT_NODE_COLOR.text,
      shape,
    },
  }
}
