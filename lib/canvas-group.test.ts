import { describe, expect, it } from "vitest"
import {
  createCanvasGroup,
  findGroupContainingPoint,
  isCanvasGroup,
  nestNodeInGroup,
} from "@/lib/canvas-group"
import type { CanvasFlowNode } from "@/types/canvas"

describe("canvas groups", () => {
  it("creates a named Group frame with default size", () => {
    const group = createCanvasGroup({
      label: "API Servers",
      position: { x: 100, y: 80 },
    })

    expect(isCanvasGroup(group)).toBe(true)
    expect(group.data.label).toBe("API Servers")
    expect(group.width).toBeGreaterThan(200)
    expect(group.height).toBeGreaterThan(150)
    expect(group.position).toEqual({ x: 100, y: 80 })
  })

  it("nests a node inside a Group with relative position and parent extent", () => {
    const group = createCanvasGroup({
      id: "tier-api",
      label: "API Servers",
      position: { x: 200, y: 100 },
      width: 400,
      height: 300,
    })

    const nested = nestNodeInGroup(
      {
        id: "api-1",
        position: { x: 260, y: 180 },
        width: 160,
        height: 88,
      },
      group
    )

    expect(nested.parentId).toBe("tier-api")
    expect(nested.extent).toBe("parent")
    expect(nested.position).toEqual({ x: 60, y: 80 })
  })

  it("finds the Group that contains a canvas point", () => {
    const groups: CanvasFlowNode[] = [
      createCanvasGroup({
        id: "a",
        label: "A",
        position: { x: 0, y: 0 },
        width: 100,
        height: 100,
      }),
      createCanvasGroup({
        id: "b",
        label: "B",
        position: { x: 200, y: 0 },
        width: 100,
        height: 100,
      }),
    ]

    expect(findGroupContainingPoint(groups, { x: 250, y: 40 })?.id).toBe("b")
    expect(findGroupContainingPoint(groups, { x: 500, y: 40 })).toBeNull()
  })
})
