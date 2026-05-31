"use client"

import { Plus, X } from "lucide-react"
import { ProjectListItem } from "@/components/editor/project-list-item"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Project } from "@/types/project"

interface ProjectSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  ownedProjects: Project[]
  sharedProjects: Project[]
  activeProjectId?: string
  onNewProject: () => void
  onRename: (project: Project) => void
  onDelete: (project: Project) => void
}

function ProjectList({
  projects,
  emptyTitle,
  emptyDescription,
  activeProjectId,
  showActions,
  onRename,
  onDelete,
}: {
  projects: Project[]
  emptyTitle: string
  emptyDescription: string
  activeProjectId?: string
  showActions: boolean
  onRename: (project: Project) => void
  onDelete: (project: Project) => void
}) {
  if (projects.length === 0) {
    return (
      <div className="flex h-full min-h-[12rem] flex-col items-center justify-center text-center">
        <p className="text-sm text-copy-muted">{emptyTitle}</p>
        <p className="mt-1 text-xs text-copy-faint">{emptyDescription}</p>
      </div>
    )
  }

  return (
    <ul className="space-y-1">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectListItem
            project={project}
            activeProjectId={activeProjectId}
            showActions={showActions}
            onRename={onRename}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  )
}

export function ProjectSidebar({
  open,
  onOpenChange,
  ownedProjects,
  sharedProjects,
  activeProjectId,
  onNewProject,
  onRename,
  onDelete,
}: ProjectSidebarProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="flex w-80 flex-col border-r border-surface-border bg-bg-surface p-0 sm:max-w-sm"
      >
        <SheetHeader className="border-b border-surface-border p-4">
            <SheetTitle className="text-copy-primary">Projects</SheetTitle>
        </SheetHeader>

        <Tabs defaultValue="my-projects" className="flex min-h-0 flex-1 flex-col">
          <TabsList className="w-full justify-start rounded-none border-b border-surface-border bg-transparent p-0">
            <TabsTrigger
              value="my-projects"
              className="rounded-none border-b-2 border-transparent px-4 py-2 text-copy-secondary data-[state=active]:border-brand data-[state=active]:bg-bg-subtle data-[state=active]:text-copy-primary"
            >
              My Projects
            </TabsTrigger>
            <TabsTrigger
              value="shared"
              className="rounded-none border-b-2 border-transparent px-4 py-2 text-copy-secondary data-[state=active]:border-brand data-[state=active]:bg-bg-subtle data-[state=active]:text-copy-primary"
            >
              Shared
            </TabsTrigger>
          </TabsList>

          <TabsContent value="my-projects" className="mt-0 flex-1 overflow-y-auto p-4">
            <ProjectList
              projects={ownedProjects}
              emptyTitle="No projects yet"
              emptyDescription="Create your first project to get started"
              activeProjectId={activeProjectId}
              showActions
              onRename={onRename}
              onDelete={onDelete}
            />
          </TabsContent>

          <TabsContent value="shared" className="mt-0 flex-1 overflow-y-auto p-4">
            <ProjectList
              projects={sharedProjects}
              emptyTitle="No shared projects"
              emptyDescription="Projects shared with you will appear here"
              activeProjectId={activeProjectId}
              showActions={false}
              onRename={onRename}
              onDelete={onDelete}
            />
          </TabsContent>
        </Tabs>

        <div className="border-t border-surface-border p-4">
          <Button type="button" className="w-full" onClick={onNewProject}>
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
