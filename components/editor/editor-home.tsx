"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EditorHomeProps {
  onNewProject: () => void
}

export function EditorHome({ onNewProject }: EditorHomeProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <h1 className="max-w-lg text-2xl font-semibold tracking-tight text-copy-primary sm:text-3xl">
        Create a project or open an existing one
      </h1>
      <p className="mt-3 max-w-md text-sm text-copy-muted sm:text-base">
        Start a new architecture workspace, or choose a project from the sidebar.
      </p>
      <Button type="button" className="mt-8" onClick={onNewProject}>
        <Plus className="h-4 w-4" />
        New Project
      </Button>
    </div>
  )
}
