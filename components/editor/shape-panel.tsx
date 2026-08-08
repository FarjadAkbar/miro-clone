"use client"

import type { DragEvent, RefObject } from "react"
import { CanvasShapeIcon } from "@/components/editor/canvas-shape-icon"
import { useShapeDrag } from "@/components/editor/shape-drag-preview"
import { cn } from "@/lib/utils"
import {
  CANVAS_SHAPE_DRAG_TYPE,
  NODE_SHAPES,
  SHAPE_DEFAULT_SIZES,
  type CanvasNodeShape,
} from "@/types/canvas"

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
            <CanvasShapeIcon shape={shape} />
          </button>
        ))}
      </div>
    </div>
  )
}
