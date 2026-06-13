"use client"

import type { CSSProperties, MouseEvent, PointerEvent } from "react"
import { cn } from "@/lib/utils"
import { NODE_COLORS } from "@/types/canvas"

interface NodeColorToolbarProps {
  activeFill: string
  onSelect: (fill: string, text: string) => void
}

function stopCanvasInteraction(event: MouseEvent | PointerEvent) {
  event.stopPropagation()
}

export function NodeColorToolbar({
  activeFill,
  onSelect,
}: NodeColorToolbarProps) {
  return (
    <div
      className="nodrag nopan nowheel flex items-center gap-1.5 rounded-full border border-surface-border bg-bg-surface/95 px-2 py-1.5 shadow-lg backdrop-blur-sm"
      onPointerDown={stopCanvasInteraction}
      onMouseDown={stopCanvasInteraction}
      role="toolbar"
      aria-label="Node color"
    >
      {NODE_COLORS.map((pair) => {
        const isActive = pair.fill === activeFill

        return (
          <button
            key={pair.fill}
            type="button"
            aria-label="Change node color"
            aria-pressed={isActive}
            onClick={() => onSelect(pair.fill, pair.text)}
            onPointerDown={stopCanvasInteraction}
            onMouseDown={stopCanvasInteraction}
            className={cn(
              "h-6 w-6 rounded-full border-2 transition-[box-shadow,transform]",
              isActive
                ? "scale-110 border-brand"
                : "border-transparent hover:scale-105 hover:shadow-[0_0_5px_var(--swatch-glow)]"
            )}
            style={
              {
                backgroundColor: pair.fill,
                "--swatch-glow": pair.text,
                boxShadow: isActive
                  ? `0 0 0 1px ${pair.text}, 0 0 6px color-mix(in srgb, ${pair.text} 55%, transparent)`
                  : undefined,
              } as CSSProperties
            }
          />
        )
      })}
    </div>
  )
}
