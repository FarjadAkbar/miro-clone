"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react"
import {
  APPLY_ENTER_DURATION_MS,
  applyEdgeEnterClassName,
  applyEnterClassName,
} from "@/lib/apply-enter"

const ApplyEnterActiveContext = createContext(false)

interface ApplyEnterProviderProps {
  active: boolean
  children: ReactNode
}

export function ApplyEnterProvider({
  active,
  children,
}: ApplyEnterProviderProps) {
  return (
    <ApplyEnterActiveContext.Provider value={active}>
      {children}
    </ApplyEnterActiveContext.Provider>
  )
}

function useIsApplyEntering(): boolean {
  const active = useContext(ApplyEnterActiveContext)
  const [isEntering, setIsEntering] = useState(active)

  useEffect(() => {
    if (!isEntering) {
      return
    }

    const timer = window.setTimeout(() => {
      setIsEntering(false)
    }, APPLY_ENTER_DURATION_MS)

    return () => {
      window.clearTimeout(timer)
    }
  }, [isEntering])

  return isEntering
}

/** CSS class for Node/Group enter motion when mounting during a Design apply. */
export function useApplyEnterClassName(): string {
  return applyEnterClassName(useIsApplyEntering())
}

/** CSS class for Edge enter motion when mounting during a Design apply. */
export function useApplyEdgeEnterClassName(): string {
  return applyEdgeEnterClassName(useIsApplyEntering())
}

export function applyEnterDurationStyle(): CSSProperties {
  return {
    ["--apply-enter-duration" as string]: `${APPLY_ENTER_DURATION_MS}ms`,
  }
}
