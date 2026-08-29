import { describe, expect, it } from "vitest"
import { toDesignAgentPlan } from "@/types/design-agent-actions"

describe("Design plan edge travel sequence", () => {
  it("accepts add_edge with a travel sequence hop", () => {
    const plan = toDesignAgentPlan({
      actions: [
        {
          type: "add_edge",
          id: "edge-a-b",
          label: "HTTP",
          shape: null,
          x: null,
          y: null,
          colorIndex: null,
          width: null,
          height: null,
          source: "a",
          target: "b",
          componentKind: null,
          parentId: null,
          sequence: 1,
        },
      ],
    })

    expect(plan.actions[0]).toEqual({
      type: "add_edge",
      id: "edge-a-b",
      source: "a",
      target: "b",
      label: "HTTP",
      sequence: 1,
    })
  })
})
