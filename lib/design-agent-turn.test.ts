import { describe, expect, it, vi } from "vitest"
import type { CanvasFlowSnapshot } from "@/lib/canvas-flow-snapshot"
import { runDesignAgentTurn } from "@/lib/design-agent-turn"
import type { DesignAgentPlan } from "@/types/design-agent-actions"

const emptyCanvas: CanvasFlowSnapshot = { nodes: [], edges: [] }

const samplePlan: DesignAgentPlan = {
  actions: [
    {
      type: "add_node",
      id: "api-server",
      label: "API Server",
      shape: "rectangle",
      x: 100,
      y: 80,
    },
  ],
}

describe("runDesignAgentTurn", () => {
  it("returns a Design plan for a user message and canvas snapshot", async () => {
    const generatePlan = vi.fn().mockResolvedValue(samplePlan)

    const result = await runDesignAgentTurn(
      { message: "add an API server", canvas: emptyCanvas },
      { generatePlan }
    )

    expect(result).toEqual({ kind: "plan", plan: samplePlan })
  })

  it("passes the message and canvas snapshot to plan generation", async () => {
    const canvas: CanvasFlowSnapshot = {
      nodes: [
        {
          id: "lb",
          type: "canvasNode",
          position: { x: 0, y: 0 },
          data: {
            label: "Load Balancer",
            color: "#1F1F1F",
            textColor: "#EDEDED",
            shape: "hexagon",
          },
        },
      ],
      edges: [],
    }
    const generatePlan = vi.fn().mockResolvedValue({ actions: [] })

    await runDesignAgentTurn(
      { message: "connect a database", canvas },
      { generatePlan }
    )

    expect(generatePlan).toHaveBeenCalledWith("connect a database", canvas)
  })
})
