import { generateObject } from "ai"
import {
  formatCanvasFlowSnapshot,
  type CanvasFlowSnapshot,
} from "@/lib/canvas-flow-snapshot"
import type {
  DesignAgentChatTurn,
  DesignAgentDecideResult,
} from "@/lib/design-agent-turn"
import { getOpenAIModel } from "@/lib/openai"
import { z } from "zod"

const decideSchema = z.object({
  kind: z.enum(["interview", "plan"]),
  message: z.string().nullable(),
  offerGenerate: z.boolean().nullable(),
  planningPrompt: z.string().nullable(),
})

const SYSTEM_PROMPT = `You are Archflow deciding the next Design chat turn for a collaborative architecture canvas.

Choose exactly one outcome:
1) interview — open-ended architecture asks, or continuing a Design interview to gather functional/non-functional requirements. Ask one focused question (or a short tight set). Set offerGenerate=true only when requirements are clear enough to draw the diagram.
2) plan — the user wants an immediate canvas mutation (add/update/delete/connect/rename nodes or Groups) OR confirmed generation after interview. Set planningPrompt to a concrete instruction for the canvas planner (include FR/NFR from the conversation when generating a full architecture).

Rules:
- "design WhatsApp", "architect X", "help me design…" without specifics → interview, offerGenerate=false
- Clear edits like "add a load balancer", "delete the cache", "connect A to B", "put servers in an API Servers group" → plan
- User confirms ("yes", "generate", "build it", "looks good", "Generate on canvas") after interview → plan with a rich planningPrompt summarizing the agreed design
- Prefer interview while critical scale/latency/consistency/storage questions remain unanswered
- message is required for interview (shown in chat). planningPrompt is required for plan.
- Unused fields must be null.`

function formatHistory(history: DesignAgentChatTurn[]): string {
  if (history.length === 0) {
    return "None"
  }

  return history
    .map((turn) => {
      const offer = turn.offerGenerate ? " [offerGenerate]" : ""
      return `- ${turn.role}${offer}: ${turn.content}`
    })
    .join("\n")
}

export async function decideDesignAgentTurn(input: {
  message: string
  canvas: CanvasFlowSnapshot
  history: DesignAgentChatTurn[]
}): Promise<DesignAgentDecideResult> {
  const canvasContext = formatCanvasFlowSnapshot(input.canvas)

  const { object } = await generateObject({
    model: getOpenAIModel(),
    schema: decideSchema,
    system: SYSTEM_PROMPT,
    prompt: `${canvasContext}

Chat history:
${formatHistory(input.history)}

User message:
${input.message}`,
  })

  if (object.kind === "interview") {
    const message = object.message?.trim()
    if (!message) {
      throw new Error("Interview turn missing message")
    }
    return {
      kind: "interview",
      message,
      offerGenerate: Boolean(object.offerGenerate),
    }
  }

  const planningPrompt = object.planningPrompt?.trim()
  if (!planningPrompt) {
    throw new Error("Plan turn missing planningPrompt")
  }

  return {
    kind: "plan",
    planningPrompt,
  }
}
