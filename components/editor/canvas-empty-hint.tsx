"use client"

interface CanvasEmptyHintProps {
  visible: boolean
}

export function CanvasEmptyHint({ visible }: CanvasEmptyHintProps) {
  if (!visible) {
    return null
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center px-6">
      <div className="max-w-sm text-center">
        <p className="text-sm font-medium text-copy-secondary">
          Start your system design
        </p>
        <p className="mt-1.5 text-xs text-copy-muted">
          Drag a shape below or ask the AI to generate an architecture.
        </p>
      </div>
    </div>
  )
}
