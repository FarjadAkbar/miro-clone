"use client"

import { Trash2 } from "lucide-react"
import type { MouseEvent, PointerEvent } from "react"
import { cn } from "@/lib/utils"

interface NodeDeleteButtonProps {
  disabled?: boolean
  onDelete: () => void
}

function stopCanvasInteraction(event: MouseEvent | PointerEvent) {
  event.stopPropagation()
}

export function NodeDeleteButton({
  disabled = false,
  onDelete,
}: NodeDeleteButtonProps) {
  return (
    <button
      type="button"
      aria-label="Delete node"
      disabled={disabled}
      onClick={onDelete}
      onPointerDown={stopCanvasInteraction}
      onMouseDown={stopCanvasInteraction}
      className={cn(
        "nodrag nopan nowheel flex h-8 w-8 items-center justify-center rounded-full border border-surface-border bg-bg-surface/95 text-copy-secondary shadow-lg backdrop-blur-sm transition-colors",
        "hover:bg-bg-subtle hover:text-state-error",
        "disabled:pointer-events-none disabled:opacity-40"
      )}
    >
      <Trash2 className="h-4 w-4" />
    </button>
  )
}
