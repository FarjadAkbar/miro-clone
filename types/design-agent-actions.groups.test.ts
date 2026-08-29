import { describe, expect, it } from "vitest"
import { toDesignAgentPlan } from "@/types/design-agent-actions"

describe("Design plan groups", () => {
  it("accepts add_group with label and bounds", () => {
    const plan = toDesignAgentPlan({
      actions: [
        {
          type: "add_group",
          id: "tier-db",
          label: "Database Tier",
          shape: null,
          x: 40,
          y: 200,
          colorIndex: null,
          width: 420,
          height: 280,
          source: null,
          target: null,
          componentKind: null,
          parentId: null,
        },
      ],
    })

    expect(plan.actions[0]).toEqual({
      type: "add_group",
      id: "tier-db",
      label: "Database Tier",
      x: 40,
      y: 200,
      width: 420,
      height: 280,
    })
  })

  it("accepts add_node with parentId to place a Node inside a Group", () => {
    const plan = toDesignAgentPlan({
      actions: [
        {
          type: "add_node",
          id: "db-1",
          label: "Primary DB",
          shape: "cylinder",
          x: 80,
          y: 260,
          colorIndex: null,
          width: null,
          height: null,
          source: null,
          target: null,
          componentKind: "database",
          parentId: "tier-db",
        },
      ],
    })

    expect(plan.actions[0]).toMatchObject({
      type: "add_node",
      id: "db-1",
      parentId: "tier-db",
      componentKind: "database",
      shape: "cylinder",
    })
  })

  it("accepts update_group rename", () => {
    const plan = toDesignAgentPlan({
      actions: [
        {
          type: "update_group",
          id: "tier-db",
          label: "Data Tier",
          shape: null,
          x: null,
          y: null,
          colorIndex: null,
          width: null,
          height: null,
          source: null,
          target: null,
          componentKind: null,
          parentId: null,
        },
      ],
    })

    expect(plan.actions[0]).toEqual({
      type: "update_group",
      id: "tier-db",
      label: "Data Tier",
    })
  })
})
