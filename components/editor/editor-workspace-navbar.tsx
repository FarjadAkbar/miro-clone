"use client"

import {
  AlertCircle,
  Check,
  LayoutTemplate,
  Loader2,
  PanelLeftClose,
  PanelLeftOpen,
  Save,
  Share2,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CanvasSaveStatus } from "@/hooks/use-canvas-autosave"

interface EditorWorkspaceNavbarProps {
  projectName: string
  sidebarOpen: boolean
  aiSidebarOpen: boolean
  saveStatus: CanvasSaveStatus
  onSidebarToggle: () => void
  onAiSidebarToggle: () => void
  onShareClick: () => void
  onTemplatesClick: () => void
  onSaveClick: () => void
}

function saveButtonLabel(status: CanvasSaveStatus): string {
  switch (status) {
    case "saving":
      return "Saving…"
    case "saved":
      return "Saved"
    case "error":
      return "Save failed"
    default:
      return "Save"
  }
}

export function EditorWorkspaceNavbar({
  projectName,
  sidebarOpen,
  aiSidebarOpen,
  saveStatus,
  onSidebarToggle,
  onAiSidebarToggle,
  onShareClick,
  onTemplatesClick,
  onSaveClick,
}: EditorWorkspaceNavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-14 shrink-0 items-center border-b border-surface-border bg-bg-surface px-4">
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onSidebarToggle}
          className="text-copy-secondary hover:bg-bg-subtle hover:text-copy-primary"
          aria-label={sidebarOpen ? "Close projects sidebar" : "Open projects sidebar"}
        >
          {sidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
      </div>

      <div className="flex flex-1 items-center justify-center px-4">
        <h1 className="truncate text-sm font-semibold text-copy-primary sm:text-base">
          {projectName}
        </h1>
      </div>

      <div className="flex items-center gap-1">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-copy-secondary hover:bg-bg-subtle hover:text-copy-primary"
          onClick={onSaveClick}
          disabled={saveStatus === "saving"}
        >
          {saveStatus === "saving" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : saveStatus === "saved" ? (
            <Check className="h-4 w-4 text-state-success" />
          ) : saveStatus === "error" ? (
            <AlertCircle className="h-4 w-4 text-state-error" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          {saveButtonLabel(saveStatus)}
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-copy-secondary hover:bg-bg-subtle hover:text-copy-primary"
          onClick={onTemplatesClick}
        >
          <LayoutTemplate className="h-4 w-4" />
          Templates
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-copy-secondary hover:bg-bg-subtle hover:text-copy-primary"
          onClick={onShareClick}
        >
          <Share2 className="h-4 w-4" />
          Share
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onAiSidebarToggle}
          className="text-copy-secondary hover:bg-bg-subtle hover:text-copy-primary"
          aria-label={aiSidebarOpen ? "Close AI sidebar" : "Open AI sidebar"}
          aria-pressed={aiSidebarOpen}
        >
          <Sparkles className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
