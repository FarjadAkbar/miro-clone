"use client"

import {
  ClientSideSuspense,
  LiveblocksProvider,
  RoomProvider,
} from "@liveblocks/react/suspense"
import { CanvasLoading } from "@/components/editor/canvas-loading"
import { EditorAiSidebar } from "@/components/editor/editor-ai-sidebar"
import { EditorFlowCanvas } from "@/components/editor/editor-flow-canvas"
import { LiveblocksConnectionGuard } from "@/components/editor/liveblocks-connection-guard"
import type { CanvasSaveStatus } from "@/hooks/use-canvas-autosave"

interface EditorCanvasProps {
  roomId: string
  templatesOpen: boolean
  onTemplatesOpenChange: (open: boolean) => void
  aiSidebarOpen: boolean
  onAiSidebarOpenChange: (open: boolean) => void
  onSaveStatusChange?: (status: CanvasSaveStatus) => void
  onSaveReady?: (saveNow: () => Promise<void>) => void
}

export function EditorCanvas({
  roomId,
  templatesOpen,
  onTemplatesOpenChange,
  aiSidebarOpen,
  onAiSidebarOpenChange,
  onSaveStatusChange,
  onSaveReady,
}: EditorCanvasProps) {
  return (
    <div className="relative min-h-0 flex-1">
      <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
        <RoomProvider
          id={roomId}
          initialPresence={{ cursor: null, thinking: false }}
        >
          <LiveblocksConnectionGuard>
            <ClientSideSuspense fallback={<CanvasLoading />}>
              <EditorFlowCanvas
                roomId={roomId}
                templatesOpen={templatesOpen}
                onTemplatesOpenChange={onTemplatesOpenChange}
                onSaveStatusChange={onSaveStatusChange}
                onSaveReady={onSaveReady}
              />
              <EditorAiSidebar
                open={aiSidebarOpen}
                onOpenChange={onAiSidebarOpenChange}
                roomId={roomId}
              />
            </ClientSideSuspense>
          </LiveblocksConnectionGuard>
        </RoomProvider>
      </LiveblocksProvider>
    </div>
  )
}
