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
  FLOW_EDGE_DURATION_MS,
  getMaxTravelSequence,
  nextActiveHop,
  resolveTravelSequences,
  shouldPlayFlowAnimation,
  shouldStartBriefFlowPlayFromStatus,
  type FlowEdgeInput,
} from "@/lib/flow-animation"

interface FlowPlayContextValue {
  presentMode: boolean
  togglePresentMode: () => void
  isFlowPlaying: boolean
  activeHop: number | null
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
  const [activeHop, setActiveHop] = useState<number | null>(null)
  const previousStatusRef = useRef<string | undefined>(undefined)

  const sequenceByEdgeId = useMemo(
    () => resolveTravelSequences(edges),
    [edges]
  )
  const maxHop = useMemo(
    () => getMaxTravelSequence(sequenceByEdgeId),
    [sequenceByEdgeId]
  )

  const isFlowPlaying = shouldPlayFlowAnimation({
    presentMode,
    briefPlayActive,
  })

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
    if (!isFlowPlaying || maxHop < 1) {
      setActiveHop(null)
      return
    }

    setActiveHop(1)
  }, [isFlowPlaying, maxHop])

  useEffect(() => {
    if (!isFlowPlaying || activeHop == null || maxHop < 1) {
      return
    }

    const timer = window.setTimeout(() => {
      const next = nextActiveHop(activeHop, maxHop, presentMode)
      if (next == null) {
        setBriefPlayActive(false)
        setActiveHop(null)
        return
      }
      setActiveHop(next)
    }, FLOW_EDGE_DURATION_MS)

    return () => {
      window.clearTimeout(timer)
    }
  }, [activeHop, isFlowPlaying, maxHop, presentMode])

  const togglePresentMode = useCallback(() => {
    setPresentMode((current) => !current)
  }, [])

  const value = useMemo(
    () => ({
      presentMode,
      togglePresentMode,
      isFlowPlaying,
      activeHop,
      sequenceByEdgeId,
    }),
    [
      activeHop,
      isFlowPlaying,
      presentMode,
      sequenceByEdgeId,
      togglePresentMode,
    ]
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
