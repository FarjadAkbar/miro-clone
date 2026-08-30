"use client"

import { Loader2 } from "lucide-react"
import { useAiGenerationState } from "@/hooks/use-ai-generation-state"

interface AiRunStatusStripProps {
  active: boolean
}

export function AiRunStatusStrip({ active }: AiRunStatusStripProps) {
  const { latestStatus } = useAiGenerationState()

  if (!active) {
    return null
  }

  return (
    <div className="flex items-center gap-2 border-t border-surface-border bg-bg-base px-4 py-2">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-chat opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-chat" />
      </span>
      <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin text-accent-chat" />
      <p className="truncate text-xs text-copy-primary">
        {latestStatus ?? "Archflow is updating the canvas…"}
      </p>
    </div>
  )
}
