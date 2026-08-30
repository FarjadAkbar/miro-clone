"use client"

import { Loader2 } from "lucide-react"
import { useAiGenerationState } from "@/hooks/use-ai-generation-state"

export function AiStatusIndicator() {
  const { isGenerating, latestStatus } = useAiGenerationState()

  if (!isGenerating && !latestStatus) {
    return null
  }

  return (
    <div className="flex items-center gap-2 border-b border-surface-border bg-bg-subtle/60 px-4 py-2">
      {isGenerating ? (
        <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin text-accent-ai" />
      ) : null}
      <p className="truncate text-xs text-accent-ai-text">
        {latestStatus ?? (isGenerating ? "Archflow is working…" : "")}
      </p>
    </div>
  )
}
