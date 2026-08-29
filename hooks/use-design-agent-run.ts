"use client"

import { useRealtimeRun } from "@trigger.dev/react-hooks"
import { useCallback, useEffect, useRef, useState } from "react"
import {
  triggerDesignAgent,
  type TriggerDesignAgentOptions,
} from "@/lib/design-agent-client"
import type { DesignAgentTaskOutput } from "@/types/design-agent"

const TERMINAL_RUN_STATUSES = new Set([
  "COMPLETED",
  "FAILED",
  "CANCELED",
  "CRASHED",
  "TIMED_OUT",
  "SYSTEM_FAILURE",
  "EXPIRED",
])

interface UseDesignAgentRunOptions {
  onRunComplete: (output?: DesignAgentTaskOutput) => void | Promise<void>
  onRunFailed: (message: string) => void | Promise<void>
}

export function useDesignAgentRun({
  onRunComplete,
  onRunFailed,
}: UseDesignAgentRunOptions) {
  const [runId, setRunId] = useState<string | null>(null)
  const [publicToken, setPublicToken] = useState<string | null>(null)
  const [isStarting, setIsStarting] = useState(false)
  const handledRunRef = useRef<string | null>(null)

  const { run, error: runError } = useRealtimeRun(runId ?? undefined, {
    accessToken: publicToken ?? undefined,
    enabled: Boolean(runId && publicToken),
  })

  const isRunActive = Boolean(
    runId &&
      publicToken &&
      (!run || !TERMINAL_RUN_STATUSES.has(run.status))
  )

  const clearRun = useCallback(() => {
    setRunId(null)
    setPublicToken(null)
  }, [])

  const startRun = useCallback(
    async (
      prompt: string,
      roomId: string,
      options: TriggerDesignAgentOptions = {}
    ) => {
      setIsStarting(true)

      try {
        const result = await triggerDesignAgent(prompt, roomId, options)
        handledRunRef.current = null
        setRunId(result.runId)
        setPublicToken(result.publicToken)
        return true
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Could not start design generation"
        await onRunFailed(message)
        return false
      } finally {
        setIsStarting(false)
      }
    },
    [onRunFailed]
  )

  useEffect(() => {
    if (!run || !runId || !TERMINAL_RUN_STATUSES.has(run.status)) {
      return
    }

    if (handledRunRef.current === runId) {
      return
    }

    handledRunRef.current = runId

    if (run.status === "COMPLETED") {
      const output = run.output as DesignAgentTaskOutput | undefined
      void Promise.resolve(onRunComplete(output)).finally(clearRun)
      return
    }

    const failureMessage =
      runError?.message ?? "Design generation failed. Please try again."
    void Promise.resolve(onRunFailed(failureMessage)).finally(clearRun)
  }, [clearRun, onRunComplete, onRunFailed, run, runError, runId])

  return {
    startRun,
    isStarting,
    isRunActive: isStarting || isRunActive,
  }
}
