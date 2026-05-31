"use client"

import { useState } from "react"
import { EditorHome } from "@/components/editor/editor-home"
import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectDialogs } from "@/components/editor/project-dialogs"
import { ProjectSidebar } from "@/components/editor/project-sidebar"
import { useProjectActions } from "@/hooks/use-project-actions"
import type { Project } from "@/types/project"

interface EditorShellProps {
  ownedProjects: Project[]
  sharedProjects: Project[]
}

export function EditorShell({ ownedProjects, sharedProjects }: EditorShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const actions = useProjectActions()

  return (
    <div className="relative min-h-screen bg-bg-base">
      <EditorNavbar
        sidebarOpen={sidebarOpen}
        onSidebarToggle={() => setSidebarOpen((open) => !open)}
      />

      <ProjectSidebar
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}
        ownedProjects={ownedProjects}
        sharedProjects={sharedProjects}
        onNewProject={actions.openCreate}
        onRename={actions.openRename}
        onDelete={actions.openDelete}
      />

      <main className="flex min-h-screen flex-col pt-14">
        <EditorHome onNewProject={actions.openCreate} />
      </main>

      <ProjectDialogs actions={actions} />
    </div>
  )
}
