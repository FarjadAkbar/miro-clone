"use client"

import type { ReactFlowInstance } from "@xyflow/react"
import { useEffect } from "react"
import { CANVAS_ZOOM_DURATION_MS } from "@/lib/canvas-control-constants"

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  const tagName = target.tagName
  if (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") {
    return true
  }

  return target.isContentEditable
}

interface UseKeyboardShortcutsOptions {
  reactFlow: ReactFlowInstance
  undo: () => void
  redo: () => void
  canUndo: boolean
  canRedo: boolean
}

export function useKeyboardShortcuts({
  reactFlow,
  undo,
  redo,
  canUndo,
  canRedo,
}: UseKeyboardShortcutsOptions) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target)) {
        return
      }

      const modifier = event.metaKey || event.ctrlKey

      if ((event.key === "+" || event.key === "=") && !modifier) {
        event.preventDefault()
        void reactFlow.zoomIn({ duration: CANVAS_ZOOM_DURATION_MS })
        return
      }

      if (event.key === "-" && !modifier) {
        event.preventDefault()
        void reactFlow.zoomOut({ duration: CANVAS_ZOOM_DURATION_MS })
        return
      }

      if (modifier && event.key.toLowerCase() === "z" && !event.shiftKey) {
        if (canUndo) {
          event.preventDefault()
          undo()
        }
        return
      }

      if (modifier && event.key.toLowerCase() === "z" && event.shiftKey) {
        if (canRedo) {
          event.preventDefault()
          redo()
        }
        return
      }

      if (modifier && event.key.toLowerCase() === "y") {
        if (canRedo) {
          event.preventDefault()
          redo()
        }
        return
      }

      if (event.key === "Delete" || event.key === "Backspace") {
        const selectedNodes = reactFlow.getNodes().filter((node) => node.selected)
        const selectedEdges = reactFlow.getEdges().filter((edge) => edge.selected)

        if (selectedNodes.length === 0 && selectedEdges.length === 0) {
          return
        }

        event.preventDefault()
        void reactFlow.deleteElements({
          nodes: selectedNodes,
          edges: selectedEdges,
        })
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [canRedo, canUndo, reactFlow, redo, undo])
}
