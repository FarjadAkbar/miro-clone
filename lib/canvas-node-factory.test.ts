import { describe, expect, it } from "vitest"
import {
  createCanvasNode,
  parseShapeDragPayload,
} from "@/lib/canvas-node-factory"

describe("canvas node factory component kinds", () => {
  it("parses a component-kind drag payload", () => {
    const payload = parseShapeDragPayload(
      JSON.stringify({
        componentKind: "server",
        width: 160,
        height: 88,
      })
    )

    expect(payload).toEqual({
      componentKind: "server",
      shape: "rectangle",
      width: 160,
      height: 88,
    })
  })

  it("creates a node that persists the component kind", () => {
    const node = createCanvasNode({
      shape: "rectangle",
      componentKind: "server",
      width: 160,
      height: 88,
      position: { x: 100, y: 100 },
    })

    expect(node.data.componentKind).toBe("server")
    expect(node.data.label).toBe("Server")
    expect(node.data.shape).toBe("rectangle")
  })

  it("still creates geometric-only nodes without a component kind", () => {
    const node = createCanvasNode({
      shape: "diamond",
      width: 132,
      height: 132,
      position: { x: 50, y: 50 },
    })

    expect(node.data.componentKind).toBeUndefined()
    expect(node.data.label).toBe("")
  })
})
