export const DESIGN_AGENT_TASK_ID = "design-agent" as const

export interface DesignAgentPayload {
  prompt: string
  roomId: string
}
