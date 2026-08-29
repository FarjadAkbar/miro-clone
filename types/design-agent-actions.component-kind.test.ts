import { describe, expect, it } from "vitest"
import { toDesignAgentPlan } from "@/types/design-agent-actions"

describe("Design plan component kinds", () => {
  it("accepts add_node with a component kind and fills shape from the catalog when shape is null", () => {
    const plan = toDesignAgentPlan({
      actions: [
        {
          type: "add_node",
          id: "db-1",
          label: "User DB",
          shape: null,
          x: 40,
          y: 80,
          colorIndex: null,
          width: null,
          height: null,
          source: null,
          target: null,
          componentKind: "database",
        },
      ],
    })

    expect(plan.actions[0]).toMatchObject({
      type: "add_node",
      id: "db-1",
      label: "User DB",
      shape: "cylinder",
      componentKind: "database",
      x: 40,
      y: 80,
    })
  })

  it("accepts update_node that changes component kind", () => {
    const plan = toDesignAgentPlan({
      actions: [
        {
          type: "update_node",
          id: "svc-1",
          label: null,
          shape: null,
          x: null,
          y: null,
          colorIndex: null,
          width: null,
          height: null,
          source: null,
          target: null,
          componentKind: "cache",
        },
      ],
    })

    expect(plan.actions[0]).toEqual({
      type: "update_node",
      id: "svc-1",
      shape: "cylinder",
      colorIndex: 6,
      componentKind: "cache",
    })
  })
})
