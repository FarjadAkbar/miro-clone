"use client"

import { useCallback, useEffect, useState } from "react"
import type {
  ProjectSpecListItem,
  ProjectSpecListResponse,
} from "@/types/project-spec"

export function useProjectSpecs(roomId: string) {
  const [specs, setSpecs] = useState<ProjectSpecListItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/projects/${roomId}/specs`)

      if (!response.ok) {
        throw new Error("Failed to load specs")
      }

      const data = (await response.json()) as ProjectSpecListResponse
      setSpecs(data.specs)
    } catch {
      setError("Could not load specs.")
      setSpecs([])
    } finally {
      setIsLoading(false)
    }
  }, [roomId])

  useEffect(() => {
    void refresh()
  }, [refresh])

  return {
    specs,
    isLoading,
    error,
    refresh,
  }
}
