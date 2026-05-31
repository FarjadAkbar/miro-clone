"use client"

import { useCallback, useEffect, useState } from "react"
import { Check, Link2, Loader2, Trash2 } from "lucide-react"
import { DialogPattern } from "@/components/editor/dialog-pattern"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getCollaboratorInitials } from "@/lib/collaborator-display"
import type { CollaboratorProfile } from "@/types/collaborator"

interface ShareDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  roomId: string
  isOwner: boolean
}

export function ShareDialog({
  open,
  onOpenChange,
  roomId,
  isOwner,
}: ShareDialogProps) {
  const [collaborators, setCollaborators] = useState<CollaboratorProfile[]>([])
  const [inviteEmail, setInviteEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [inviting, setInviting] = useState(false)
  const [removingId, setRemovingId] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const projectUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/editor/${roomId}`
      : `/editor/${roomId}`

  const loadCollaborators = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/projects/${roomId}/collaborators`)

      if (!response.ok) {
        setError("Failed to load collaborators")
        return
      }

      const data = (await response.json()) as {
        collaborators: CollaboratorProfile[]
      }
      setCollaborators(data.collaborators)
    } catch {
      setError("Failed to load collaborators")
    } finally {
      setLoading(false)
    }
  }, [roomId])

  useEffect(() => {
    if (open) {
      void loadCollaborators()
      setInviteEmail("")
      setCopied(false)
      setError(null)
    }
  }, [open, loadCollaborators])

  const handleInvite = async () => {
    const email = inviteEmail.trim()
    if (!email) return

    setInviting(true)
    setError(null)

    try {
      const response = await fetch(`/api/projects/${roomId}/collaborators`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = (await response.json()) as {
        error?: string
        collaborator?: CollaboratorProfile
      }

      if (!response.ok) {
        setError(data.error ?? "Failed to invite collaborator")
        return
      }

      if (data.collaborator) {
        setCollaborators((current) => [...current, data.collaborator!])
      } else {
        await loadCollaborators()
      }

      setInviteEmail("")
    } catch {
      setError("Failed to invite collaborator")
    } finally {
      setInviting(false)
    }
  }

  const handleRemove = async (collaboratorId: string) => {
    setRemovingId(collaboratorId)
    setError(null)

    try {
      const response = await fetch(
        `/api/projects/${roomId}/collaborators/${collaboratorId}`,
        { method: "DELETE" }
      )

      if (!response.ok) {
        setError("Failed to remove collaborator")
        return
      }

      setCollaborators((current) =>
        current.filter((collaborator) => collaborator.id !== collaboratorId)
      )
    } catch {
      setError("Failed to remove collaborator")
    } finally {
      setRemovingId(null)
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(projectUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setError("Failed to copy link")
    }
  }

  return (
    <DialogPattern
      open={open}
      onOpenChange={onOpenChange}
      title="Share project"
      description={
        isOwner
          ? "Invite collaborators by email or copy the project link."
          : "People with access to this project."
      }
      className="sm:max-w-lg"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium text-copy-primary">Project link</p>
          <div className="flex gap-2">
            <Input readOnly value={projectUrl} className="font-mono text-xs" />
            <Button
              type="button"
              variant="outline"
              className="shrink-0"
              onClick={() => void handleCopyLink()}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Link2 className="h-4 w-4" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>

        {isOwner ? (
          <div className="space-y-2">
            <p className="text-sm font-medium text-copy-primary">
              Invite by email
            </p>
            <form
              className="flex gap-2"
              onSubmit={(event) => {
                event.preventDefault()
                void handleInvite()
              }}
            >
              <Input
                type="email"
                placeholder="collaborator@example.com"
                value={inviteEmail}
                onChange={(event) => setInviteEmail(event.target.value)}
                disabled={inviting}
              />
              <Button type="submit" disabled={inviting || !inviteEmail.trim()}>
                {inviting ? "Inviting…" : "Invite"}
              </Button>
            </form>
          </div>
        ) : null}

        <div className="space-y-3">
          <p className="text-sm font-medium text-copy-primary">Collaborators</p>

          {loading ? (
            <div className="flex items-center justify-center py-6 text-copy-muted">
              <Loader2 className="h-5 w-5 animate-spin" />
            </div>
          ) : collaborators.length === 0 ? (
            <p className="text-sm text-copy-muted">No collaborators yet.</p>
          ) : (
            <ul className="space-y-2">
              {collaborators.map((collaborator) => (
                <li
                  key={collaborator.id}
                  className="flex items-center gap-3 rounded-xl border border-surface-border bg-bg-elevated px-3 py-2"
                >
                  <Avatar className="h-9 w-9">
                    {collaborator.imageUrl ? (
                      <AvatarImage
                        src={collaborator.imageUrl}
                        alt={collaborator.displayName ?? collaborator.email}
                      />
                    ) : null}
                    <AvatarFallback className="bg-bg-subtle text-xs text-copy-secondary">
                      {getCollaboratorInitials(collaborator.email)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-copy-primary">
                      {collaborator.displayName ?? collaborator.email}
                    </p>
                    {collaborator.displayName ? (
                      <p className="truncate text-xs text-copy-muted">
                        {collaborator.email}
                      </p>
                    ) : null}
                  </div>
                  {isOwner ? (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="shrink-0 text-copy-muted hover:text-destructive"
                      disabled={removingId === collaborator.id}
                      onClick={() => void handleRemove(collaborator.id)}
                      aria-label={`Remove ${collaborator.email}`}
                    >
                      {removingId === collaborator.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                    </Button>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </div>

        {error ? <p className="text-sm text-destructive">{error}</p> : null}
      </div>
    </DialogPattern>
  )
}
