"use client"

import type { LucideIcon } from "lucide-react"
import {
  Maximize2,
  Minus,
  Plus,
  Redo2,
  Undo2,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface CanvasControlBarProps {
  onZoomIn: () => void
  onZoomOut: () => void
  onFitView: () => void
  onUndo: () => void
  onRedo: () => void
  canUndo: boolean
  canRedo: boolean
}

interface ControlButtonProps {
  label: string
  icon: LucideIcon
  onClick: () => void
  disabled?: boolean
}

function ControlButton({
  label,
  icon: Icon,
  onClick,
  disabled = false,
}: ControlButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
        disabled
          ? "cursor-not-allowed text-copy-faint opacity-40"
          : "text-copy-secondary hover:bg-bg-subtle hover:text-copy-primary"
      )}
    >
      <Icon className="h-4 w-4" aria-hidden />
    </button>
  )
}

export function CanvasControlBar({
  onZoomIn,
  onZoomOut,
  onFitView,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
}: CanvasControlBarProps) {
  return (
    <div
      className="pointer-events-auto absolute bottom-6 left-6 z-10"
      role="toolbar"
      aria-label="Canvas controls"
    >
      <div className="flex items-center gap-0.5 rounded-full border border-surface-border bg-bg-surface/95 px-2 py-1.5 shadow-lg backdrop-blur-sm">
        <ControlButton label="Zoom out" icon={Minus} onClick={onZoomOut} />
        <ControlButton label="Fit view" icon={Maximize2} onClick={onFitView} />
        <ControlButton label="Zoom in" icon={Plus} onClick={onZoomIn} />
        <div
          className="mx-1 h-6 w-px shrink-0 bg-surface-border"
          aria-hidden
        />
        <ControlButton
          label="Undo"
          icon={Undo2}
          onClick={onUndo}
          disabled={!canUndo}
        />
        <ControlButton
          label="Redo"
          icon={Redo2}
          onClick={onRedo}
          disabled={!canRedo}
        />
      </div>
    </div>
  )
}
