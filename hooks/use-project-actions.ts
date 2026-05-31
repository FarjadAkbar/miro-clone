"use client"

import { usePathname, useRouter } from "next/navigation"
import { useCallback, useMemo, useState } from "react"
import { buildRoomId, shortSuffix } from "@/lib/project-room-id"
import type { Project } from "@/types/project"

export type DialogType = "create" | "rename" | "delete" | null

interface UseProjectActionsOptions {
  activeProjectId?: string
}

export function useProjectActions({ activeProjectId }: UseProjectActionsOptions = {}) {
  const router = useRouter()
  const pathname = usePathname()

  const [dialogType, setDialogType] = useState<DialogType>(null)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [name, setName] = useState("")
  const [suffix, setSuffix] = useState("")
  const [loading, setLoading] = useState(false)

  const roomId = useMemo(() => {
    if (!name.trim()) return ""
    return buildRoomId(name, suffix)
  }, [name, suffix])

  const openCreate = useCallback(() => {
    setSuffix(shortSuffix())
    setName("")
    setActiveProject(null)
    setDialogType("create")
  }, [])

  const openRename = useCallback((project: Project) => {
    setName(project.name)
    setActiveProject(project)
    setDialogType("rename")
  }, [])

  const openDelete = useCallback((project: Project) => {
    setActiveProject(project)
    setDialogType("delete")
  }, [])

  const close = useCallback(() => {
    setDialogType(null)
    setActiveProject(null)
    setName("")
    setSuffix("")
  }, [])

  const handleNameChange = useCallback((value: string) => {
    setName(value)
  }, [])

  const submit = useCallback(async () => {
    if (dialogType === "create") {
      const trimmed = name.trim()
      if (!trimmed || !roomId) return

      setLoading(true)
      try {
        const response = await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: trimmed, id: roomId }),
        })

        if (!response.ok) return

        const { project } = (await response.json()) as { project: { id: string } }
        setDialogType(null)
        setActiveProject(null)
        setName("")
        setSuffix("")
        router.push(`/editor/${project.id}`)
      } finally {
        setLoading(false)
      }

      return
    }

    if (dialogType === "rename" && activeProject) {
      const trimmed = name.trim()
      if (!trimmed) return

      setLoading(true)
      try {
        const response = await fetch(`/api/projects/${activeProject.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: trimmed }),
        })

        if (!response.ok) return

        close()
        router.refresh()
      } finally {
        setLoading(false)
      }

      return
    }

    if (dialogType === "delete" && activeProject) {
      setLoading(true)
      try {
        const response = await fetch(`/api/projects/${activeProject.id}`, {
          method: "DELETE",
        })

        if (!response.ok) return

        const isActiveWorkspace =
          activeProjectId === activeProject.id ||
          pathname === `/editor/${activeProject.id}`

        close()

        if (isActiveWorkspace) {
          router.push("/editor")
        } else {
          router.refresh()
        }
      } finally {
        setLoading(false)
      }
    }
  }, [
    activeProject,
    activeProjectId,
    close,
    dialogType,
    name,
    pathname,
    roomId,
    router,
  ])

  return {
    dialogType,
    activeProject,
    name,
    roomId,
    loading,
    openCreate,
    openRename,
    openDelete,
    close,
    handleNameChange,
    submit,
  }
}

export type UseProjectActionsReturn = ReturnType<typeof useProjectActions>
