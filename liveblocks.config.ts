declare global {
  interface Liveblocks {
    Presence: {
      cursor: { x: number; y: number } | null
      thinking: boolean
    }
    UserMeta: {
      id: string
      info: {
        name: string
        avatar: string
        color: string
      }
    }
    FeedMessageData: {
      "ai-status-feed": {
        text?: string
      }
      "ai-chat": {
        sender: string
        role: "user" | "assistant"
        content: string
        timestamp: number
      }
    }
  }
}

export {}
