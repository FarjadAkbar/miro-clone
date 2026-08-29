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
  it("returns a Design plan when the turn decides to act", async () => {
    const generatePlan = vi.fn().mockResolvedValue(samplePlan)
    const decideTurn = vi.fn().mockResolvedValue({
      kind: "plan",
      planningPrompt: "add an API server",
    })

    const result = await runDesignAgentTurn(
      { message: "add an API server", canvas: emptyCanvas },
      { decideTurn, generatePlan }
    )

    expect(result).toEqual({ kind: "plan", plan: samplePlan })
    expect(generatePlan).toHaveBeenCalledWith("add an API server", emptyCanvas)
  })

  it("returns a Design interview without generating a plan", async () => {
    const generatePlan = vi.fn()
    const decideTurn = vi.fn().mockResolvedValue({
      kind: "interview",
      message: "What scale and latency targets matter for this WhatsApp design?",
      offerGenerate: false,
    })

    const result = await runDesignAgentTurn(
      { message: "design WhatsApp architecture", canvas: emptyCanvas },
      { decideTurn, generatePlan }
    )

    expect(result).toEqual({
      kind: "interview",
      message: "What scale and latency targets matter for this WhatsApp design?",
      offerGenerate: false,
    })
    expect(generatePlan).not.toHaveBeenCalled()
  })

  it("skips decide and generates a plan when intent is generate", async () => {
    const generatePlan = vi.fn().mockResolvedValue(samplePlan)
    const decideTurn = vi.fn()

    const result = await runDesignAgentTurn(
      {
        message: "Generate on canvas",
        canvas: emptyCanvas,
        intent: "generate",
        history: [
          { role: "user", content: "design WhatsApp" },
          {
            role: "assistant",
            content: "Ready to draw with websocket chat and fanout.",
            offerGenerate: true,
          },
        ],
      },
      { decideTurn, generatePlan }
    )

    expect(result.kind).toBe("plan")
    expect(decideTurn).not.toHaveBeenCalled()
    expect(generatePlan).toHaveBeenCalledOnce()
    const [planningPrompt] = generatePlan.mock.calls[0]
    expect(planningPrompt).toContain("design WhatsApp")
    expect(planningPrompt).toContain("websocket chat")
  })

  it("blocks bare confirm until Generate on canvas was offered", async () => {
    const generatePlan = vi.fn()
    const decideTurn = vi.fn().mockResolvedValue({
      kind: "plan",
      planningPrompt: "draw everything",
    })

    const result = await runDesignAgentTurn(
      {
        message: "yes",
        canvas: emptyCanvas,
        history: [
          { role: "user", content: "design WhatsApp" },
          {
            role: "assistant",
            content: "What scale do you need?",
            offerGenerate: false,
          },
        ],
      },
      { decideTurn, generatePlan }
    )

    expect(result.kind).toBe("interview")
    expect(generatePlan).not.toHaveBeenCalled()
  })
})
