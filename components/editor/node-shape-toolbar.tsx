"use client"

import type { MouseEvent, PointerEvent } from "react"
import { CanvasShapeIcon } from "@/components/editor/canvas-shape-icon"
import { cn } from "@/lib/utils"
import { NODE_SHAPES, type CanvasNodeShape } from "@/types/canvas"

interface NodeShapeToolbarProps {
  activeShape: CanvasNodeShape
  onSelect: (shape: CanvasNodeShape) => void
}

function stopCanvasInteraction(event: MouseEvent | PointerEvent) {
  event.stopPropagation()
}

export function NodeShapeToolbar({
  activeShape,
  onSelect,
}: NodeShapeToolbarProps) {
  return (
    <div
      className="nodrag nopan nowheel flex items-center gap-1 rounded-full border border-surface-border bg-bg-surface/95 px-1.5 py-1.5 shadow-lg backdrop-blur-sm"
      onPointerDown={stopCanvasInteraction}
      onMouseDown={stopCanvasInteraction}
      role="toolbar"
      aria-label="Node shape"
    >
      {NODE_SHAPES.map((shape) => {
        const isActive = shape === activeShape

        return (
          <button
            key={shape}
            type="button"
            aria-label={`Change shape to ${shape}`}
            aria-pressed={isActive}
            onClick={() => onSelect(shape)}
            onPointerDown={stopCanvasInteraction}
            onMouseDown={stopCanvasInteraction}
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full transition-colors",
              isActive
                ? "bg-accent-dim text-brand"
                : "text-copy-secondary hover:bg-bg-subtle hover:text-copy-primary"
            )}
          >
            <CanvasShapeIcon shape={shape} className="h-4 w-4 stroke-[1.75]" />
          </button>
        )
      })}
    </div>
  )
}
