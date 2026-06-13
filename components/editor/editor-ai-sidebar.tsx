"use client"

import { useSelf } from "@liveblocks/react/suspense"
import { Bot, Loader2, Send, X } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { AiSpecsTab } from "@/components/editor/ai-specs-tab"
import { AiChatMessageItem } from "@/components/editor/ai-chat-message"
import { AiRunStatusStrip } from "@/components/editor/ai-run-status-strip"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useAiChatFeed } from "@/hooks/use-ai-chat-feed"
import { useDesignAgentRun } from "@/hooks/use-design-agent-run"
import { cn } from "@/lib/utils"

interface EditorAiSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  roomId: string
}

const STARTER_PROMPTS = [
  "Design an e-commerce backend",
  "Create a chat app architecture",
  "Build a CI/CD pipeline",
] as const

const TEXTAREA_MIN_HEIGHT_PX = 72
const TEXTAREA_MAX_HEIGHT_PX = 160

function AiSidebarHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex items-start gap-3 border-b border-surface-border px-4 py-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-ai/15 text-accent-ai">
        <Bot className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="text-sm font-semibold text-copy-primary">AI Workspace</h2>
        <p className="text-xs text-copy-muted">Collaborate with Miro AI</p>
      </div>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="shrink-0 text-copy-secondary hover:text-copy-primary"
        onClick={onClose}
        aria-label="Close AI sidebar"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
}

function AiArchitectTab({ roomId }: { roomId: string }) {
  const self = useSelf()
  const { chatMessages, sendUserMessage, sendAssistantMessage } = useAiChatFeed()
  const [draft, setDraft] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const onRunComplete = useCallback(async () => {
    await sendAssistantMessage(
      "Design complete. Check the canvas for updates."
    )
  }, [sendAssistantMessage])

  const onRunFailed = useCallback(
    async (message: string) => {
      await sendAssistantMessage(`Design failed: ${message}`)
    },
    [sendAssistantMessage]
  )

  const { startRun, isRunActive } = useDesignAgentRun({
    onRunComplete,
    onRunFailed,
  })

  const resizeTextarea = useCallback(() => {
    const textarea = textareaRef.current
    if (!textarea) {
      return
    }

    textarea.style.height = "auto"
    const nextHeight = Math.min(
      Math.max(textarea.scrollHeight, TEXTAREA_MIN_HEIGHT_PX),
      TEXTAREA_MAX_HEIGHT_PX
    )
    textarea.style.height = `${nextHeight}px`
  }, [])

  useEffect(() => {
    resizeTextarea()
  }, [draft, resizeTextarea])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatMessages.length])

  const submitMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim()
      if (!trimmed || isRunActive) {
        return
      }

      try {
        await sendUserMessage(trimmed)
        setDraft("")
      } catch {
        await sendAssistantMessage("Could not send your message. Try again.")
        return
      }

      await startRun(trimmed, roomId)
    },
    [isRunActive, roomId, sendAssistantMessage, sendUserMessage, startRun]
  )

  const handleSend = () => {
    void submitMessage(draft)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      if (!isRunActive) {
        handleSend()
      }
    }
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
        {chatMessages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-ai/15 text-accent-ai">
              <Bot className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-copy-primary">
                Start architecting
              </p>
              <p className="max-w-[220px] text-xs text-copy-muted">
                Describe a system design and Ghost AI will update the canvas
                for everyone in the room.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {STARTER_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => !isRunActive && setDraft(prompt)}
                  disabled={isRunActive}
                  className="rounded-full bg-bg-subtle px-3 py-1.5 text-xs text-accent-ai-text transition-colors hover:bg-bg-elevated disabled:opacity-60"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {chatMessages.map((item) => (
              <AiChatMessageItem
                key={item.id}
                message={item.message}
                isOwnMessage={
                  item.message.sender === (self.info.name || "Guest")
                }
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <AiRunStatusStrip active={isRunActive} />

      <div className="border-t border-surface-border p-4">
        <div className="flex items-end gap-2">
          <Textarea
            ref={textareaRef}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Describe your system design…"
            rows={3}
            disabled={isRunActive}
            className="min-h-[72px] max-h-40 resize-none border-surface-border bg-bg-elevated text-copy-primary disabled:opacity-60"
            style={{ height: TEXTAREA_MIN_HEIGHT_PX }}
          />
          <Button
            type="button"
            size="icon"
            className="h-10 w-10 shrink-0 bg-accent-chat text-accent-chat-foreground hover:bg-accent-chat/90 disabled:bg-accent-chat/40 disabled:text-accent-chat-foreground/70"
            onClick={handleSend}
            disabled={!draft.trim() || isRunActive}
            aria-label="Send message"
          >
            {isRunActive ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

export function EditorAiSidebar({
  open,
  onOpenChange,
  roomId,
}: EditorAiSidebarProps) {
  return (
    <aside
      aria-hidden={open ? undefined : true}
      className={cn(
        "fixed right-4 top-[calc(3.5rem+1rem)] bottom-4 z-40 flex w-80 flex-col overflow-hidden rounded-2xl border border-surface-border bg-bg-base/95 shadow-lg backdrop-blur-sm transition-transform duration-300 ease-out",
        open
          ? "translate-x-0"
          : "pointer-events-none translate-x-[calc(100%+1rem)]"
      )}
    >
      <AiSidebarHeader onClose={() => onOpenChange(false)} />

      <Tabs defaultValue="architect" className="flex min-h-0 flex-1 flex-col">
        <div className="border-b border-surface-border px-4 py-3">
          <TabsList className="grid h-9 w-full grid-cols-2 bg-bg-subtle p-1">
            <TabsTrigger
              value="architect"
              className="rounded-md text-copy-muted data-[state=active]:bg-accent-ai data-[state=active]:text-white"
            >
              AI Architect
            </TabsTrigger>
            <TabsTrigger
              value="specs"
              className="rounded-md text-copy-muted data-[state=active]:bg-accent-ai data-[state=active]:text-white"
            >
              Specs
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="architect" className="mt-0 flex min-h-0 flex-1 flex-col">
          <AiArchitectTab roomId={roomId} />
        </TabsContent>

        <TabsContent value="specs" className="mt-0 flex min-h-0 flex-1 flex-col">
          <AiSpecsTab roomId={roomId} />
        </TabsContent>
      </Tabs>
    </aside>
  )
}
