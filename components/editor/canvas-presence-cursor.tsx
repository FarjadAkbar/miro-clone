"use client"

import type { CursorsCursorProps } from "@liveblocks/react-flow"
import { Loader2 } from "lucide-react"
import { useOther, useUser } from "@liveblocks/react/suspense"

export function CanvasPresenceCursor({
  userId,
  connectionId,
}: CursorsCursorProps) {
  const { user } = useUser(userId)
  const thinking = useOther(connectionId, (other) => other.presence.thinking)
  const color = user.color || "var(--color-brand)"
  const name = user.name || "Guest"

  return (
    <div className="pointer-events-none select-none" style={{ color }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-5 w-5"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="m.088 1.75 11.25 29.422c.409 1.07 1.908 1.113 2.377.067l5.223-11.653c.13-.288.36-.518.648-.648l11.653-5.223c1.046-.47 1.004-1.968-.067-2.377L1.75.088C.71-.31-.31.71.088 1.75Z"
        />
      </svg>
      <div
        className="ml-3 mt-0.5 flex w-max max-w-[160px] items-center gap-1 truncate rounded-md px-2 py-0.5 text-xs font-medium text-white shadow-sm"
        style={{ backgroundColor: color }}
      >
        {thinking ? (
          <Loader2 className="h-3 w-3 shrink-0 animate-spin" aria-hidden />
        ) : null}
        <span className="truncate">{name}</span>
      </div>
    </div>
  )
}
