"use client"

import { useState } from "react"
import { EditorAiSidebarPlaceholder } from "@/components/editor/editor-ai-sidebar-placeholder"
import { EditorCanvas } from "@/components/editor/editor-canvas"
import { EditorWorkspaceNavbar } from "@/components/editor/editor-workspace-navbar"
import { ProjectDialogs } from "@/components/editor/project-dialogs"
import { ShareDialog } from "@/components/editor/share-dialog"
import { ProjectSidebar } from "@/components/editor/project-sidebar"
import { useProjectActions } from "@/hooks/use-project-actions"
import type { Project } from "@/types/project"

interface EditorWorkspaceShellProps {
  roomId: string
  projectName: string
  isOwner: boolean
  ownedProjects: Project[]
  sharedProjects: Project[]
}

export function EditorWorkspaceShell({
  roomId,
  projectName,
  isOwner,
  ownedProjects,
  sharedProjects,
}: EditorWorkspaceShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [aiSidebarOpen, setAiSidebarOpen] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  const actions = useProjectActions({ activeProjectId: roomId })

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-bg-base">
      <EditorWorkspaceNavbar
        projectName={projectName}
        sidebarOpen={sidebarOpen}
        aiSidebarOpen={aiSidebarOpen}
        onSidebarToggle={() => setSidebarOpen((open) => !open)}
        onAiSidebarToggle={() => setAiSidebarOpen((open) => !open)}
        onShareClick={() => setShareOpen(true)}
      />

      <ProjectSidebar
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}
        ownedProjects={ownedProjects}
        sharedProjects={sharedProjects}
        activeProjectId={roomId}
        onNewProject={actions.openCreate}
        onRename={actions.openRename}
        onDelete={actions.openDelete}
      />

      <div className="flex min-h-0 flex-1 pt-14">
        <EditorCanvas roomId={roomId} />
        <EditorAiSidebarPlaceholder open={aiSidebarOpen} />
      </div>

      <ProjectDialogs actions={actions} />
      <ShareDialog
        open={shareOpen}
        onOpenChange={setShareOpen}
        roomId={roomId}
        isOwner={isOwner}
      />
    </div>
  )
}
