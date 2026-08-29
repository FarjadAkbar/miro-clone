import type { CanvasEdge, CanvasFlowNode } from "@/types/canvas"

export interface CanvasSnapshot {
  nodes: CanvasFlowNode[]
  edges: CanvasEdge[]
}

export function isCanvasSnapshot(value: unknown): value is CanvasSnapshot {
  if (!value || typeof value !== "object") {
    return false
  }

  const record = value as Record<string, unknown>
  return Array.isArray(record.nodes) && Array.isArray(record.edges)
}
