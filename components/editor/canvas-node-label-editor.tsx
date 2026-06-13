"use client"

import {
  useEffect,
  useRef,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react"
import { NODE_LABEL_PLACEHOLDER } from "@/lib/canvas-node-constants"
import { cn } from "@/lib/utils"

interface CanvasNodeLabelEditorProps {
  label: string
  textColor: string
  isEditing: boolean
  onStartEdit: () => void
  onLabelChange: (label: string) => void
  onEndEdit: () => void
}

function stopPointerPropagation(event: ReactPointerEvent) {
  event.stopPropagation()
}

function stopMousePropagation(event: React.MouseEvent) {
  event.stopPropagation()
}

export function CanvasNodeLabelEditor({
  label,
  textColor,
  isEditing,
  onStartEdit,
  onLabelChange,
  onEndEdit,
}: CanvasNodeLabelEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!isEditing || !textareaRef.current) {
      return
    }

    textareaRef.current.focus()
    textareaRef.current.select()
  }, [isEditing])

  if (isEditing) {
    return (
      <div className="absolute inset-0 z-10 flex items-center justify-center px-3">
        <textarea
          ref={textareaRef}
          value={label}
          rows={1}
          placeholder={NODE_LABEL_PLACEHOLDER}
          onChange={(event) => onLabelChange(event.target.value)}
          onBlur={onEndEdit}
          onKeyDown={(event) => {
            event.stopPropagation()
            if (event.key === "Escape") {
              event.preventDefault()
              onEndEdit()
            }
          }}
          onPointerDown={stopPointerPropagation}
          onMouseDown={stopMousePropagation}
          className={cn(
            "nodrag nopan nowheel h-6 w-[90%] resize-none border-none bg-transparent",
            "text-center text-sm leading-6 outline-none"
          )}
          style={{ color: textColor }}
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      className={cn(
        "absolute inset-0 z-10 flex cursor-text items-center justify-center px-3",
        "border-none bg-transparent text-center text-sm"
      )}
      style={{ color: label ? textColor : "var(--color-copy-muted)" }}
      onDoubleClick={(event) => {
        event.stopPropagation()
        onStartEdit()
      }}
      onPointerDown={stopPointerPropagation}
      onMouseDown={stopMousePropagation}
      aria-label="Edit node label"
    >
      <span className="pointer-events-none truncate">
        {label || NODE_LABEL_PLACEHOLDER}
      </span>
    </button>
  )
}
