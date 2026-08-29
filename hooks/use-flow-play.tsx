"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { useAiGenerationState } from "@/hooks/use-ai-generation-state"
import {
  FLOW_BRIEF_PLAY_MS,
  resolveTravelSequences,
  shouldPlayFlowAnimation,
  shouldStartBriefFlowPlayFromStatus,
  type FlowEdgeInput,
} from "@/lib/flow-animation"

interface FlowPlayContextValue {
  presentMode: boolean
  togglePresentMode: () => void
  isFlowPlaying: boolean
  sequenceByEdgeId: Map<string, number>
}

const FlowPlayContext = createContext<FlowPlayContextValue | null>(null)

interface FlowPlayProviderProps {
  edges: FlowEdgeInput[]
  children: ReactNode
}

export function FlowPlayProvider({ edges, children }: FlowPlayProviderProps) {
  const { latestStatus } = useAiGenerationState()
  const [presentMode, setPresentMode] = useState(false)
  const [briefPlayActive, setBriefPlayActive] = useState(false)
  const previousStatusRef = useRef<string | undefined>(undefined)

  useEffect(() => {
    if (
      shouldStartBriefFlowPlayFromStatus({
        previousStatus: previousStatusRef.current,
        currentStatus: latestStatus,
      })
    ) {
      setBriefPlayActive(true)
    }
    previousStatusRef.current = latestStatus
  }, [latestStatus])

  useEffect(() => {
    if (!briefPlayActive || presentMode) {
      return
    }

    const timer = window.setTimeout(() => {
      setBriefPlayActive(false)
    }, FLOW_BRIEF_PLAY_MS)

    return () => {
      window.clearTimeout(timer)
    }
  }, [briefPlayActive, presentMode])

  const togglePresentMode = useCallback(() => {
    setPresentMode((current) => !current)
  }, [])

  const isFlowPlaying = shouldPlayFlowAnimation({
    presentMode,
    briefPlayActive,
  })

  const sequenceByEdgeId = useMemo(
    () => resolveTravelSequences(edges),
    [edges]
  )

  const value = useMemo(
    () => ({
      presentMode,
      togglePresentMode,
      isFlowPlaying,
      sequenceByEdgeId,
    }),
    [isFlowPlaying, presentMode, sequenceByEdgeId, togglePresentMode]
  )

  return (
    <FlowPlayContext.Provider value={value}>{children}</FlowPlayContext.Provider>
  )
}

export function useFlowPlay(): FlowPlayContextValue {
  const value = useContext(FlowPlayContext)
  if (!value) {
    throw new Error("useFlowPlay must be used within FlowPlayProvider")
  }
  return value
}
