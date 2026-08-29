import type { CanvasFlowSnapshot } from "@/lib/canvas-flow-snapshot"
import {
  historyOfferedGenerate,
  isGenerateConfirmMessage,
} from "@/lib/design-agent-confirm"
import type { DesignAgentPlan } from "@/types/design-agent-actions"
import type {
  DesignAgentHistoryItem,
  DesignAgentPayloadIntent,
} from "@/types/design-agent"

export type DesignAgentChatTurn = DesignAgentHistoryItem
export type DesignAgentTurnIntent = DesignAgentPayloadIntent

export interface DesignAgentTurnInput {
  message: string
  canvas: CanvasFlowSnapshot
  history?: DesignAgentChatTurn[]
  intent?: DesignAgentTurnIntent
}

export interface DesignAgentTurnPlanResult {
  kind: "plan"
  plan: DesignAgentPlan
}

export interface DesignAgentTurnInterviewResult {
  kind: "interview"
  message: string
  offerGenerate: boolean
}

export type DesignAgentTurnResult =
  | DesignAgentTurnPlanResult
  | DesignAgentTurnInterviewResult

export interface DesignAgentDecidePlan {
  kind: "plan"
  planningPrompt: string
}

export interface DesignAgentDecideInterview {
  kind: "interview"
  message: string
  offerGenerate: boolean
}

export type DesignAgentDecideResult =
  | DesignAgentDecidePlan
  | DesignAgentDecideInterview

export interface DesignAgentTurnDeps {
  decideTurn: (input: {
    message: string
    canvas: CanvasFlowSnapshot
    history: DesignAgentChatTurn[]
  }) => Promise<DesignAgentDecideResult>
  generatePlan: (
    message: string,
    canvas: CanvasFlowSnapshot
  ) => Promise<DesignAgentPlan>
}

export function buildGeneratePlanningPrompt(
  history: DesignAgentChatTurn[],
  message: string
): string {
  const transcript = history
    .map((turn) => `${turn.role}: ${turn.content}`)
    .join("\n")

  return `Generate the system diagram on the canvas now from this Design interview.

Conversation:
${transcript || "(none)"}

Final confirm:
${message}

Produce a complete Design plan using component kinds and Groups for tiers where helpful. Reuse existing canvas nodes when they match.`
}

/**
 * One Design chat turn: snapshot + message (+ history) → interview or Design plan.
 * intent "generate" forces Generate on canvas after a Design interview.
 */
export async function runDesignAgentTurn(
  input: DesignAgentTurnInput,
  deps: DesignAgentTurnDeps
): Promise<DesignAgentTurnResult> {
  const history = input.history ?? []

  if (input.intent === "generate") {
    const planningPrompt = buildGeneratePlanningPrompt(history, input.message)
    const plan = await deps.generatePlan(planningPrompt, input.canvas)
    return { kind: "plan", plan }
  }

  const decision = await deps.decideTurn({
    message: input.message,
    canvas: input.canvas,
    history,
  })

  if (
    decision.kind === "plan" &&
    isGenerateConfirmMessage(input.message) &&
    !historyOfferedGenerate(history)
  ) {
    return {
      kind: "interview",
      message:
        "Before we draw on the canvas, I still need a clearer direction. What scale, consistency, and latency requirements should drive this architecture?",
      offerGenerate: false,
    }
  }

  if (decision.kind === "interview") {
    return {
      kind: "interview",
      message: decision.message,
      offerGenerate: decision.offerGenerate,
    }
  }

  const plan = await deps.generatePlan(decision.planningPrompt, input.canvas)
  return { kind: "plan", plan }
}
