"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  useCreateFeed,
  useCreateFeedMessage,
  useFeedMessages,
  useSelf,
} from "@liveblocks/react/suspense"
import {
  AI_AGENT_DISPLAY_NAME,
  AI_CHAT_FEED_ID,
  parseAiChatMessage,
  type AiChatMessage,
} from "@/types/tasks"

export interface AiChatFeedItem {
  id: string
  createdAt: number
  message: AiChatMessage
}

export function useAiChatFeed() {
  const self = useSelf()
  const createFeed = useCreateFeed()
  const createFeedMessage = useCreateFeedMessage()
  const { messages } = useFeedMessages(AI_CHAT_FEED_ID)

  useEffect(() => {
    void createFeed(AI_CHAT_FEED_ID, { metadata: { name: "AI Chat" } }).catch(
      () => {
        // Feed already exists.
      }
    )
  }, [createFeed])

  const chatMessages = useMemo(() => {
    const parsed: AiChatFeedItem[] = []

    for (const message of messages) {
      const data = parseAiChatMessage(message.data)
      if (!data) {
        continue
      }

      parsed.push({
        id: message.id,
        createdAt: message.createdAt,
        message: data,
      })
    }

    return parsed.sort((a, b) => a.createdAt - b.createdAt)
  }, [messages])

  const sendUserMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim()
      if (!trimmed) {
        return false
      }

      await createFeedMessage(AI_CHAT_FEED_ID, {
        sender: self.info.name || "Guest",
        role: "user",
        content: trimmed,
        timestamp: Date.now(),
      })

      return true
    },
    [createFeedMessage, self.info.name]
  )

  const sendAssistantMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim()
      if (!trimmed) {
        return false
      }

      await createFeedMessage(AI_CHAT_FEED_ID, {
        sender: AI_AGENT_DISPLAY_NAME,
        role: "assistant",
        content: trimmed,
        timestamp: Date.now(),
      })

      return true
    },
    [createFeedMessage]
  )

  return {
    chatMessages,
    sendUserMessage,
    sendAssistantMessage,
  }
}
