export const DESIGN_AGENT_TASK_ID = "design-agent" as const

export type DesignAgentPayloadIntent = "auto" | "generate"

export interface DesignAgentHistoryItem {
  role: "user" | "assistant"
  content: string
  offerGenerate?: boolean
}

export interface DesignAgentPayload {
  prompt: string
  roomId: string
  intent?: DesignAgentPayloadIntent
  history?: DesignAgentHistoryItem[]
}

export interface DesignAgentTaskOutput {
  roomId: string
  kind: "plan" | "interview"
  actionCount?: number
  offerGenerate?: boolean
}
