"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { CanvasNodeShapeView } from "@/components/editor/canvas-node-shape"
import { DEFAULT_NODE_COLOR, type CanvasNodeShape } from "@/types/canvas"

interface ShapeDragState {
  shape: CanvasNodeShape
  width: number
  height: number
  x: number
  y: number
}

interface ShapeDragContextValue {
  startShapeDrag: (state: Omit<ShapeDragState, "x" | "y"> & { x: number; y: number }) => void
  endShapeDrag: () => void
  dragImageRef: React.RefObject<HTMLImageElement | null>
}

const ShapeDragContext = createContext<ShapeDragContextValue | null>(null)

export function useShapeDrag() {
  const context = useContext(ShapeDragContext)
  if (!context) {
    throw new Error("useShapeDrag must be used within ShapeDragPreviewProvider")
  }
  return context
}

export function ShapeDragPreviewProvider({ children }: { children: ReactNode }) {
  const [drag, setDrag] = useState<ShapeDragState | null>(null)
  const dragImageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const image = new Image()
    image.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
    dragImageRef.current = image
  }, [])

  const startShapeDrag = useCallback(
    (state: ShapeDragState) => {
      setDrag(state)
    },
    []
  )

  const endShapeDrag = useCallback(() => {
    setDrag(null)
  }, [])

  useEffect(() => {
    if (!drag) {
      return
    }

    const handleDragOver = (event: DragEvent) => {
      event.preventDefault()
      setDrag((current) =>
        current
          ? { ...current, x: event.clientX, y: event.clientY }
          : null
      )
    }

    const handleDragEnd = () => {
      setDrag(null)
    }

    document.addEventListener("dragover", handleDragOver)
    document.addEventListener("dragend", handleDragEnd)
    document.addEventListener("drop", handleDragEnd)

    return () => {
      document.removeEventListener("dragover", handleDragOver)
      document.removeEventListener("dragend", handleDragEnd)
      document.removeEventListener("drop", handleDragEnd)
    }
  }, [Boolean(drag)])

  return (
    <ShapeDragContext.Provider
      value={{ startShapeDrag, endShapeDrag, dragImageRef }}
    >
      {children}
      {drag ? (
        <div
          className="pointer-events-none fixed z-50 opacity-80"
          style={{
            left: drag.x - drag.width / 2,
            top: drag.y - drag.height / 2,
            width: drag.width,
            height: drag.height,
          }}
          aria-hidden
        >
          <CanvasNodeShapeView
            shape={drag.shape}
            label=""
            fill={DEFAULT_NODE_COLOR.fill}
          />
        </div>
      ) : null}
    </ShapeDragContext.Provider>
  )
}
