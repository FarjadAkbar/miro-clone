"use client"

import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"

interface EditorNavbarProps {
  sidebarOpen: boolean
  onSidebarToggle: () => void
}

export function EditorNavbar({ sidebarOpen, onSidebarToggle }: EditorNavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center border-b border-surface-border bg-bg-surface px-4">
      <div className="flex items-center">
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

      <div className="flex flex-1 items-center justify-center" />

      <div className="flex items-center">
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
