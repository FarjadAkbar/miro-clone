import type { CanvasFlowSnapshot } from "@/lib/canvas-flow-snapshot"
import type { DesignAgentPlan } from "@/types/design-agent-actions"

export interface DesignAgentTurnInput {
  message: string
  canvas: CanvasFlowSnapshot
}

export interface DesignAgentTurnPlanResult {
  kind: "plan"
  plan: DesignAgentPlan
}

export type DesignAgentTurnResult = DesignAgentTurnPlanResult

export interface DesignAgentTurnDeps {
  generatePlan: (
    message: string,
    canvas: CanvasFlowSnapshot
  ) => Promise<DesignAgentPlan>
}

/**
 * One Design chat turn: canvas snapshot + user message → outcome.
 * Today always returns a Design plan; interview outcomes land here later.
 */
export async function runDesignAgentTurn(
  input: DesignAgentTurnInput,
  deps: DesignAgentTurnDeps
): Promise<DesignAgentTurnResult> {
  const plan = await deps.generatePlan(input.message, input.canvas)
  return { kind: "plan", plan }
}
