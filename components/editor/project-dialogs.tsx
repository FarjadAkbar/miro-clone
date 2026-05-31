"use client"

import { useEffect, useRef } from "react"
import { DialogPattern } from "@/components/editor/dialog-pattern"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import type { UseProjectActionsReturn } from "@/hooks/use-project-actions"

interface ProjectDialogsProps {
  actions: UseProjectActionsReturn
}

export function ProjectDialogs({ actions }: ProjectDialogsProps) {
  const {
    dialogType,
    activeProject,
    name,
    roomId,
    loading,
    close,
    handleNameChange,
    submit,
  } = actions

  const renameInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (dialogType === "rename" && renameInputRef.current) {
      renameInputRef.current.focus()
      renameInputRef.current.select()
    }
  }, [dialogType])

  return (
    <>
      <DialogPattern
        open={dialogType === "create"}
        onOpenChange={(open) => !open && close()}
        title="Create project"
        description="Give your architecture workspace a name."
        footer={
          <>
            <Button variant="outline" onClick={close} disabled={loading}>
              Cancel
            </Button>
            <Button
              onClick={() => void submit()}
              disabled={loading || !name.trim() || !roomId}
            >
              {loading ? "Creating…" : "Create"}
            </Button>
          </>
        }
      >
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault()
            void submit()
          }}
        >
          <div className="space-y-2">
            <label
              htmlFor="create-project-name"
              className="text-sm font-medium text-copy-primary"
            >
              Project name
            </label>
            <Input
              id="create-project-name"
              value={name}
              onChange={(event) => handleNameChange(event.target.value)}
              placeholder="e.g. Payment Platform"
              disabled={loading}
              autoFocus
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs text-copy-muted">Room ID preview</p>
            <p className="font-mono text-sm text-copy-secondary">
              {roomId || "—"}
            </p>
          </div>
        </form>
      </DialogPattern>

      <DialogPattern
        open={dialogType === "rename"}
        onOpenChange={(open) => !open && close()}
        title="Rename project"
        description={
          activeProject
            ? `Renaming "${activeProject.name}"`
            : "Update the project name."
        }
        footer={
          <>
            <Button variant="outline" onClick={close} disabled={loading}>
              Cancel
            </Button>
            <Button
              onClick={() => void submit()}
              disabled={loading || !name.trim()}
            >
              {loading ? "Saving…" : "Save"}
            </Button>
          </>
        }
      >
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault()
            void submit()
          }}
        >
          <div className="space-y-2">
            <label
              htmlFor="rename-project-name"
              className="text-sm font-medium text-copy-primary"
            >
              Project name
            </label>
            <Input
              ref={renameInputRef}
              id="rename-project-name"
              value={name}
              onChange={(event) => handleNameChange(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault()
                  void submit()
                }
              }}
              disabled={loading}
            />
          </div>
        </form>
      </DialogPattern>

      <AlertDialog
        open={dialogType === "delete"}
        onOpenChange={(open) => !open && close()}
      >
        <AlertDialogContent className="rounded-3xl border-surface-border bg-bg-surface">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-copy-primary">
              Delete project?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-copy-muted">
              {activeProject
                ? `Are you sure you want to delete "${activeProject.name}"? This action cannot be undone.`
                : "This project will be permanently removed. This cannot be undone."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
            <Button
              variant="destructive"
              disabled={loading}
              onClick={() => void submit()}
            >
              {loading ? "Deleting…" : "Delete"}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
