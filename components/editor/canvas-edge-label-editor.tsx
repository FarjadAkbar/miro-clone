"use client"

import {
  useEffect,
  useRef,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from "react"
import { EDGE_LABEL_PLACEHOLDER } from "@/lib/canvas-edge-constants"
import { cn } from "@/lib/utils"

interface CanvasEdgeLabelEditorProps {
  label: string
  isEditing: boolean
  showHint: boolean
  onStartEdit: () => void
  onLabelChange: (label: string) => void
  onSave: () => void
}

function stopCanvasInteraction(event: MouseEvent | PointerEvent | KeyboardEvent) {
  event.stopPropagation()
}

export function CanvasEdgeLabelEditor({
  label,
  isEditing,
  showHint,
  onStartEdit,
  onLabelChange,
  onSave,
}: CanvasEdgeLabelEditorProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isEditing || !inputRef.current) {
      return
    }

    inputRef.current.focus()
    inputRef.current.select()
  }, [isEditing])

  if (isEditing) {
    return (
      <input
        ref={inputRef}
        type="text"
        value={label}
        placeholder={EDGE_LABEL_PLACEHOLDER}
        onChange={(event) => onLabelChange(event.target.value)}
        onBlur={onSave}
        onKeyDown={(event) => {
          stopCanvasInteraction(event)
          if (event.key === "Enter" || event.key === "Escape") {
            event.preventDefault()
            onSave()
          }
        }}
        onPointerDown={stopCanvasInteraction}
        onMouseDown={stopCanvasInteraction}
        className={cn(
          "nodrag nopan nowheel min-w-[4ch] max-w-[20ch] rounded-full",
          "border border-surface-border bg-bg-surface px-2 py-0.5",
          "text-center text-xs text-copy-primary outline-none"
        )}
        style={{ width: `${Math.max(4, label.length + 1)}ch` }}
      />
    )
  }

  if (label) {
    return (
      <button
        type="button"
        onDoubleClick={(event) => {
          event.stopPropagation()
          onStartEdit()
        }}
        onPointerDown={stopCanvasInteraction}
        onMouseDown={stopCanvasInteraction}
        className={cn(
          "nodrag nopan rounded-full border border-surface-border",
          "bg-bg-surface px-2 py-0.5 text-xs text-copy-secondary"
        )}
      >
        {label}
      </button>
    )
  }

  if (!showHint) {
    return null
  }

  return (
    <button
      type="button"
      onDoubleClick={(event) => {
        event.stopPropagation()
        onStartEdit()
      }}
      onPointerDown={stopCanvasInteraction}
      onMouseDown={stopCanvasInteraction}
      className="nodrag nopan text-xs text-copy-faint"
    >
      {EDGE_LABEL_PLACEHOLDER}
    </button>
  )
}
