"use client"

import type { DragEvent, RefObject } from "react"
import { useShapeDrag } from "@/components/editor/shape-drag-preview"
import { cn } from "@/lib/utils"
import {
  CANVAS_SHAPE_DRAG_TYPE,
  NODE_SHAPES,
  SHAPE_DEFAULT_SIZES,
  type CanvasNodeShape,
} from "@/types/canvas"

function ShapeIcon({ shape }: { shape: CanvasNodeShape }) {
  const className = "h-5 w-5 stroke-[1.75]"

  switch (shape) {
    case "rectangle":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <rect x="4" y="7" width="16" height="10" rx="2" stroke="currentColor" />
        </svg>
      )
    case "diamond":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 3 21 12 12 21 3 12Z"
            stroke="currentColor"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "circle":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <circle cx="12" cy="12" r="8" stroke="currentColor" />
        </svg>
      )
    case "pill":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <rect x="3" y="8" width="18" height="8" rx="4" stroke="currentColor" />
        </svg>
      )
    case "cylinder":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <ellipse cx="12" cy="7" rx="7" ry="2.5" stroke="currentColor" />
          <path
            d="M5 7v10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V7"
            stroke="currentColor"
          />
          <ellipse cx="12" cy="17" rx="7" ry="2.5" stroke="currentColor" />
        </svg>
      )
    case "hexagon":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M8 4h8l4 7-4 7H8L4 11Z"
            stroke="currentColor"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}

function handleShapeDragStart(
  event: DragEvent<HTMLButtonElement>,
  shape: CanvasNodeShape,
  startShapeDrag: (state: {
    shape: CanvasNodeShape
    width: number
    height: number
    x: number
    y: number
  }) => void,
  dragImageRef: RefObject<HTMLImageElement | null>
) {
  const size = SHAPE_DEFAULT_SIZES[shape]

  event.dataTransfer.setData(
    CANVAS_SHAPE_DRAG_TYPE,
    JSON.stringify({
      shape,
      width: size.width,
      height: size.height,
    })
  )
  event.dataTransfer.effectAllowed = "move"

  if (dragImageRef.current) {
    event.dataTransfer.setDragImage(dragImageRef.current, 0, 0)
  }

  startShapeDrag({
    shape,
    width: size.width,
    height: size.height,
    x: event.clientX,
    y: event.clientY,
  })
}

export function ShapePanel() {
  const { startShapeDrag, endShapeDrag, dragImageRef } = useShapeDrag()

  return (
    <div
      className="pointer-events-auto absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      role="toolbar"
      aria-label="Shape panel"
    >
      <div className="flex items-center gap-1 rounded-full border border-surface-border bg-bg-surface/95 px-2 py-2 shadow-lg backdrop-blur-sm">
        {NODE_SHAPES.map((shape) => (
          <button
            key={shape}
            type="button"
            draggable
            onDragStart={(event) =>
              handleShapeDragStart(event, shape, startShapeDrag, dragImageRef)
            }
            onDragEnd={endShapeDrag}
            className={cn(
              "flex h-10 w-10 cursor-grab items-center justify-center rounded-full",
              "text-copy-secondary transition-colors hover:bg-bg-subtle hover:text-copy-primary",
              "active:cursor-grabbing"
            )}
            aria-label={`Drag ${shape} onto canvas`}
          >
            <ShapeIcon shape={shape} />
          </button>
        ))}
      </div>
    </div>
  )
}
