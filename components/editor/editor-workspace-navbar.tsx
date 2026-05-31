"use client"

import { PanelLeftClose, PanelLeftOpen, Share2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"

interface EditorWorkspaceNavbarProps {
  projectName: string
  sidebarOpen: boolean
  aiSidebarOpen: boolean
  onSidebarToggle: () => void
  onAiSidebarToggle: () => void
  onShareClick: () => void
}

export function EditorWorkspaceNavbar({
  projectName,
  sidebarOpen,
  aiSidebarOpen,
  onSidebarToggle,
  onAiSidebarToggle,
  onShareClick,
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
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-8 w-8",
            },
          }}
        />
      </div>
    </header>
  )
}
