import type { JsonObject } from "@liveblocks/client"
import type { Liveblocks } from "@liveblocks/node"
import { getLiveblocks } from "@/lib/liveblocks"
import {
  AI_AGENT_DISPLAY_NAME,
  AI_AGENT_USER_ID,
  AI_CHAT_FEED_ID,
  AI_STATUS_FEED_ID,
  AI_STATUS_MESSAGE_ID,
} from "@/types/tasks"

const AI_AGENT_NAME = AI_AGENT_DISPLAY_NAME
const AI_AGENT_COLOR = "#8b82ff"
const PRESENCE_TTL_SECONDS = 120

async function ensureAiStatusFeed(client: Liveblocks, roomId: string) {
  try {
    await client.createFeed({
      roomId,
      feedId: AI_STATUS_FEED_ID,
      metadata: { name: "AI Status" },
    })
  } catch {
    // Feed already exists.
  }
}

async function ensureAiChatFeed(client: Liveblocks, roomId: string) {
  try {
    await client.createFeed({
      roomId,
      feedId: AI_CHAT_FEED_ID,
      metadata: { name: "AI Chat" },
    })
  } catch {
    // Feed already exists.
  }
}

export async function publishAiStatus(roomId: string, text: string) {
  const client = getLiveblocks()
  const data = { text } as JsonObject

  await ensureAiStatusFeed(client, roomId)

  try {
    await client.updateFeedMessage({
      roomId,
      feedId: AI_STATUS_FEED_ID,
      messageId: AI_STATUS_MESSAGE_ID,
      data,
    })
  } catch {
    await client.createFeedMessage({
      roomId,
      feedId: AI_STATUS_FEED_ID,
      id: AI_STATUS_MESSAGE_ID,
      data,
    })
  }
}

export async function publishAiChatMessage(
  roomId: string,
  content: string,
  options?: { offerGenerate?: boolean }
) {
  const client = getLiveblocks()
  await ensureAiChatFeed(client, roomId)

  const data = {
    sender: AI_AGENT_DISPLAY_NAME,
    role: "assistant",
    content,
    timestamp: Date.now(),
    ...(options?.offerGenerate ? { offerGenerate: true } : {}),
  } as JsonObject

  await client.createFeedMessage({
    roomId,
    feedId: AI_CHAT_FEED_ID,
    data,
  })
}

export async function setAiAgentPresence(
  roomId: string,
  presence: {
    cursor: { x: number; y: number } | null
    thinking: boolean
  }
) {
  const client = getLiveblocks()

  await client.setPresence(roomId, {
    userId: AI_AGENT_USER_ID,
    data: presence,
    userInfo: {
      name: AI_AGENT_NAME,
      avatar: "",
      color: AI_AGENT_COLOR,
    },
    ttl: PRESENCE_TTL_SECONDS,
  })
}

export async function clearAiAgentPresence(roomId: string) {
  await setAiAgentPresence(roomId, {
    cursor: null,
    thinking: false,
  })
}

export { AI_AGENT_USER_ID, AI_AGENT_NAME, AI_AGENT_COLOR }
