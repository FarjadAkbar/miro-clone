"use client"

import { useRouter } from "next/navigation"
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import type { Project } from "@/types/project"

interface ProjectListItemProps {
  project: Project
  activeProjectId?: string
  showActions?: boolean
  onRename?: (project: Project) => void
  onDelete?: (project: Project) => void
}

export function ProjectListItem({
  project,
  activeProjectId,
  showActions = false,
  onRename,
  onDelete,
}: ProjectListItemProps) {
  const router = useRouter()
  const isActive = activeProjectId === project.id

  return (
    <div
      className={cn(
        "group flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-bg-subtle",
        isActive && "bg-bg-subtle"
      )}
    >
      <button
        type="button"
        className="min-w-0 flex-1 text-left"
        onClick={() => router.push(`/editor/${project.id}`)}
      >
        <p className="truncate text-sm font-medium text-copy-primary">{project.name}</p>
        <p className="truncate font-mono text-xs text-copy-faint">{project.slug}</p>
      </button>
      {showActions && onRename && onDelete ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0 text-copy-muted opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100"
              aria-label={`Actions for ${project.name}`}
              onClick={(event) => event.stopPropagation()}
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="border-surface-border bg-bg-elevated"
          >
            <DropdownMenuItem
              className="text-copy-primary focus:bg-bg-subtle focus:text-copy-primary"
              onClick={() => onRename(project)}
            >
              <Pencil className="h-4 w-4" />
              Rename
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-destructive focus:bg-bg-subtle focus:text-destructive"
              onClick={() => onDelete(project)}
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : null}
    </div>
  )
}
