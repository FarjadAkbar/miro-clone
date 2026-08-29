"use client"

import { useOthers, useFeedMessages } from "@liveblocks/react/suspense"
import { useMemo } from "react"
import {
  AI_AGENT_USER_ID,
  AI_STATUS_FEED_ID,
  isAiGenerationActive,
  parseAiStatusFeedMessage,
} from "@/types/tasks"

export function useAiGenerationState() {
  const others = useOthers()
  const { messages } = useFeedMessages(AI_STATUS_FEED_ID)

  const latestStatus = useMemo(() => {
    for (let i = messages.length - 1; i >= 0; i -= 1) {
      const parsed = parseAiStatusFeedMessage(messages[i].data)
      if (parsed?.text) {
        return parsed.text
      }
    }

    return undefined
  }, [messages])

  const aiThinkingFromPresence = useMemo(
    () =>
      others.some(
        (other) => other.id === AI_AGENT_USER_ID && other.presence.thinking
      ),
    [others]
  )

  const isGenerating =
    aiThinkingFromPresence || isAiGenerationActive(latestStatus)

  return {
    isGenerating,
    /** Miro AI presence thinking — true while a Design run (incl. apply) is in flight. */
    isAiApplyActive: aiThinkingFromPresence,
    latestStatus,
  }
}
