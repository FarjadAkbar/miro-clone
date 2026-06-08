"use client"

import { useErrorListener } from "@liveblocks/react/suspense"
import { useState, type ReactNode } from "react"
import { CanvasConnectionError } from "@/components/editor/canvas-connection-error"

interface LiveblocksConnectionGuardProps {
  children: ReactNode
}

export function LiveblocksConnectionGuard({
  children,
}: LiveblocksConnectionGuardProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useErrorListener((error) => {
    setErrorMessage(error.message)
  })

  if (errorMessage) {
    return <CanvasConnectionError message={errorMessage} />
  }

  return children
}
