"use client"

import type { CanvasNodeShape } from "@/types/canvas"

interface CanvasShapeIconProps {
  shape: CanvasNodeShape
  className?: string
}

export function CanvasShapeIcon({
  shape,
  className = "h-5 w-5 stroke-[1.75]",
}: CanvasShapeIconProps) {
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
