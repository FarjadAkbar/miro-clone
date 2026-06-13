"use client"

import { UserButton, useUser } from "@clerk/nextjs"
import { useOthers } from "@liveblocks/react/suspense"
import { useMemo } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { getPresenceInitials } from "@/lib/presence-display"
import { cn } from "@/lib/utils"

const MAX_VISIBLE_COLLABORATORS = 5
const AVATAR_SIZE_CLASS = "h-8 w-8"

function CollaboratorAvatar({
  name,
  avatar,
  className,
}: {
  name: string
  avatar: string
  className?: string
}) {
  return (
    <Avatar
      className={cn(
        AVATAR_SIZE_CLASS,
        "pointer-events-none ring-2 ring-bg-base",
        className
      )}
      aria-hidden
    >
      {avatar ? <AvatarImage src={avatar} alt="" /> : null}
      <AvatarFallback className="bg-bg-subtle text-[10px] font-medium text-copy-secondary">
        {getPresenceInitials(name)}
      </AvatarFallback>
    </Avatar>
  )
}

export function CanvasPresenceAvatars() {
  const { user: clerkUser } = useUser()
  const others = useOthers()

  const collaborators = useMemo(() => {
    if (!clerkUser) {
      return []
    }

    const seen = new Set<string>()

    return others.filter((other) => {
      if (other.id === clerkUser.id || seen.has(other.id)) {
        return false
      }

      seen.add(other.id)
      return true
    })
  }, [clerkUser, others])

  const visibleCollaborators = collaborators.slice(0, MAX_VISIBLE_COLLABORATORS)
  const overflowCount = collaborators.length - visibleCollaborators.length

  return (
    <div className="pointer-events-none absolute right-4 top-4 z-10">
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-surface-border bg-bg-surface/90 px-2 py-1.5 shadow-sm backdrop-blur-sm">
        {visibleCollaborators.length > 0 ? (
          <div className="flex items-center -space-x-2" aria-label="Active collaborators">
            {visibleCollaborators.map((other) => (
              <CollaboratorAvatar
                key={other.connectionId}
                name={other.info.name}
                avatar={other.info.avatar}
              />
            ))}
            {overflowCount > 0 ? (
              <div
                className={cn(
                  AVATAR_SIZE_CLASS,
                  "flex items-center justify-center rounded-full bg-bg-subtle text-xs font-medium text-copy-secondary ring-2 ring-bg-base"
                )}
                aria-hidden
              >
                +{overflowCount}
              </div>
            ) : null}
          </div>
        ) : null}

        {collaborators.length > 0 ? (
          <Separator orientation="vertical" className="h-6 bg-surface-border" />
        ) : null}

        <UserButton
          appearance={{
            elements: {
              avatarBox: AVATAR_SIZE_CLASS,
            },
          }}
        />
      </div>
    </div>
  )
}
