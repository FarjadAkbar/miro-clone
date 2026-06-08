"use client"

import {
  ClientSideSuspense,
  LiveblocksProvider,
  RoomProvider,
} from "@liveblocks/react/suspense"
import { CanvasLoading } from "@/components/editor/canvas-loading"
import { EditorFlowCanvas } from "@/components/editor/editor-flow-canvas"
import { LiveblocksConnectionGuard } from "@/components/editor/liveblocks-connection-guard"

interface EditorCanvasProps {
  roomId: string
}

export function EditorCanvas({ roomId }: EditorCanvasProps) {
  return (
    <div className="min-h-0 flex-1">
      <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
        <RoomProvider
          id={roomId}
          initialPresence={{ cursor: null, isThinking: false }}
        >
          <LiveblocksConnectionGuard>
            <ClientSideSuspense fallback={<CanvasLoading />}>
              <EditorFlowCanvas />
            </ClientSideSuspense>
          </LiveblocksConnectionGuard>
        </RoomProvider>
      </LiveblocksProvider>
    </div>
  )
}
