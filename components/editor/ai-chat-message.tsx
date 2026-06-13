"use client"

import { formatChatTimestamp } from "@/lib/format-chat-timestamp"
import { cn } from "@/lib/utils"
import type { AiChatMessage } from "@/types/tasks"

interface AiChatMessageProps {
  message: AiChatMessage
  isOwnMessage: boolean
}

export function AiChatMessageItem({ message, isOwnMessage }: AiChatMessageProps) {
  const isAssistant = message.role === "assistant"

  return (
    <article
      className={cn(
        "max-w-[85%] rounded-2xl px-3 py-2",
        isOwnMessage
          ? "ml-auto bg-accent-chat text-accent-chat-foreground"
          : isAssistant
            ? "border border-surface-border bg-bg-elevated"
            : "border border-surface-border bg-bg-subtle"
      )}
    >
      <div className="mb-1 flex items-baseline gap-2 text-[11px]">
        <span
          className={cn(
            "truncate font-medium",
            isOwnMessage
              ? "text-accent-chat-foreground/80"
              : isAssistant
                ? "text-accent-ai-text"
                : "text-copy-secondary"
          )}
        >
          {message.sender}
        </span>
        <time
          className={cn(
            "shrink-0",
            isOwnMessage ? "text-accent-chat-foreground/70" : "text-copy-muted"
          )}
          dateTime={new Date(message.timestamp).toISOString()}
        >
          {formatChatTimestamp(message.timestamp)}
        </time>
      </div>
      <p
        className={cn(
          "text-sm leading-relaxed",
          isOwnMessage
            ? "text-accent-chat-foreground"
            : isAssistant
              ? "text-copy-primary"
              : "text-copy-primary"
        )}
      >
        {message.content}
      </p>
    </article>
  )
}
