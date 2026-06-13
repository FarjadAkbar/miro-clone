"use client"

import { LiveMap, LiveObject } from "@liveblocks/client"
import { useHistory, useMutation, useStorage } from "@liveblocks/react/suspense"
import { useEffect, useState } from "react"
import {
  FLOW_STORAGE_KEY,
  isValidFlowStorage,
} from "@/lib/flow-storage"

export function useFlowStorageReady(storageKey = FLOW_STORAGE_KEY) {
  const history = useHistory()
  const isStorageLoaded = useStorage(() => true) ?? false
  const [isFlowReady, setIsFlowReady] = useState(false)

  const ensureFlowStorage = useMutation(
    ({ storage }) => {
      const flow = storage.get(storageKey)

      if (isValidFlowStorage(flow)) {
        return
      }

      if (flow !== undefined) {
        storage.delete(storageKey)
      }

      storage.set(
        storageKey,
        new LiveObject({
          nodes: new LiveMap(),
          edges: new LiveMap(),
        })
      )
    },
    [storageKey]
  )

  useEffect(() => {
    if (!isStorageLoaded) {
      setIsFlowReady(false)
      return
    }

    history.disable(() => {
      ensureFlowStorage()
    })
    setIsFlowReady(true)
  }, [ensureFlowStorage, history, isStorageLoaded])

  return isFlowReady
}
