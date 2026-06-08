"use client"

import { useLiveblocksFlow } from "@liveblocks/react-flow"
import {
  Background,
  BackgroundVariant,
  ConnectionMode,
  MiniMap,
  ReactFlow,
} from "@xyflow/react"
import type { CanvasEdge, CanvasNode } from "@/types/canvas"
import "@xyflow/react/dist/style.css"

export function EditorFlowCanvas() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, onDelete } =
    useLiveblocksFlow<CanvasNode, CanvasEdge>({
      suspense: true,
      nodes: { initial: [] },
      edges: { initial: [] },
    })

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDelete={onDelete}
        connectionMode={ConnectionMode.Loose}
        fitView
        className="bg-bg-base"
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1}
          color="var(--color-border-subtle)"
        />
        <MiniMap
          zoomable
          pannable
          className="!rounded-xl !border !border-surface-border !bg-bg-surface"
        />
      </ReactFlow>
    </div>
  )
}
