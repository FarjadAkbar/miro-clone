import { z } from "zod"

export const AI_AGENT_USER_ID = "miro-ai" as const
export const AI_AGENT_DISPLAY_NAME = "Miro AI" as const
export const AI_STATUS_FEED_ID = "ai-status-feed" as const
export const AI_STATUS_MESSAGE_ID = "ai-status-latest" as const
export const AI_CHAT_FEED_ID = "ai-chat" as const

export const aiStatusFeedMessageSchema = z.object({
  text: z.string().optional(),
})

export type AiStatusFeedMessage = z.infer<typeof aiStatusFeedMessageSchema>

export const aiChatMessageRoleSchema = z.enum(["user", "assistant"])

export const aiChatMessageSchema = z.object({
  sender: z.string(),
  role: aiChatMessageRoleSchema,
  content: z.string(),
  timestamp: z.number(),
  offerGenerate: z.boolean().optional(),
})

export type AiChatMessage = z.infer<typeof aiChatMessageSchema>

export function parseAiStatusFeedMessage(
  data: unknown
): AiStatusFeedMessage | null {
  const result = aiStatusFeedMessageSchema.safeParse(data)
  return result.success ? result.data : null
}

export function parseAiChatMessage(data: unknown): AiChatMessage | null {
  const result = aiChatMessageSchema.safeParse(data)
  return result.success ? result.data : null
}

export function isAiGenerationActive(text: string | undefined): boolean {
  if (!text) {
    return false
  }

  const normalized = text.toLowerCase()
  return (
    !normalized.includes("complete") &&
    !normalized.includes("failed") &&
    !normalized.includes("error")
  )
}
