"use client"

import { Cursors, useLiveblocksFlow } from "@liveblocks/react-flow"
import {
  useCanRedo,
  useCanUndo,
  useRedo,
  useUndo,
} from "@liveblocks/react/suspense"
import {
  Background,
  BackgroundVariant,
  ConnectionLineType,
  ConnectionMode,
  MarkerType,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
} from "@xyflow/react"
import { useCallback, useMemo, type DragEvent } from "react"
import { StarterTemplatesModal } from "@/components/editor/starter-templates-modal"
import {
  applyCanvasTemplate,
  type CanvasTemplate,
} from "@/components/editor/starter-templates"
import { CanvasControlBar } from "@/components/editor/canvas-control-bar"
import { CanvasPresenceAvatars } from "@/components/editor/canvas-presence-avatars"
import { CanvasPresenceCursor } from "@/components/editor/canvas-presence-cursor"
import { CanvasEdge } from "@/components/editor/canvas-edge"
import { CanvasFlowProvider } from "@/components/editor/canvas-flow-context"
import { CanvasNode } from "@/components/editor/canvas-node"
import { ShapeDragPreviewProvider } from "@/components/editor/shape-drag-preview"
import { ShapePanel } from "@/components/editor/shape-panel"
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts"
import {
  useCanvasAutosave,
  type CanvasSaveStatus,
} from "@/hooks/use-canvas-autosave"
import { useFlowStorageReady } from "@/hooks/use-flow-storage-ready"
import { CANVAS_ZOOM_DURATION_MS } from "@/lib/canvas-control-constants"
import {
  createCanvasNode,
  parseShapeDragPayload,
} from "@/lib/canvas-node-factory"
import {
  CANVAS_EDGE_TYPE,
  CANVAS_NODE_TYPE,
  CANVAS_SHAPE_DRAG_TYPE,
  DEFAULT_EDGE_COLOR,
  type CanvasEdge as CanvasEdgeType,
  type CanvasNode as CanvasNodeType,
} from "@/types/canvas"
import "@xyflow/react/dist/style.css"

interface EditorFlowCanvasInnerProps {
  roomId: string
  templatesOpen: boolean
  onTemplatesOpenChange: (open: boolean) => void
  onSaveStatusChange?: (status: CanvasSaveStatus) => void
  onSaveReady?: (saveNow: () => Promise<void>) => void
}

function EditorFlowCanvasInner({
  roomId,
  templatesOpen,
  onTemplatesOpenChange,
  onSaveStatusChange,
  onSaveReady,
}: EditorFlowCanvasInnerProps) {
  const reactFlow = useReactFlow()
  const undo = useUndo()
  const redo = useRedo()
  const canUndo = useCanUndo()
  const canRedo = useCanRedo()

  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, onDelete } =
    useLiveblocksFlow<CanvasNodeType, CanvasEdgeType>({
      suspense: true,
      nodes: { initial: [] },
      edges: { initial: [] },
    })

  const isFlowReady = useFlowStorageReady()

  const handleCanvasRestored = useCallback(() => {
    requestAnimationFrame(() => {
      void reactFlow.fitView({ duration: CANVAS_ZOOM_DURATION_MS, padding: 0.15 })
    })
  }, [reactFlow])

  useCanvasAutosave({
    roomId,
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    isFlowReady,
    onStatusChange: onSaveStatusChange,
    onSaveReady,
    onCanvasRestored: handleCanvasRestored,
  })

  const zoomOptions = useMemo(
    () => ({ duration: CANVAS_ZOOM_DURATION_MS }),
    []
  )

  const handleZoomIn = useCallback(() => {
    void reactFlow.zoomIn(zoomOptions)
  }, [reactFlow, zoomOptions])

  const handleZoomOut = useCallback(() => {
    void reactFlow.zoomOut(zoomOptions)
  }, [reactFlow, zoomOptions])

  const handleFitView = useCallback(() => {
    void reactFlow.fitView(zoomOptions)
  }, [reactFlow, zoomOptions])

  useKeyboardShortcuts({
    reactFlow,
    undo,
    redo,
    canUndo,
    canRedo,
  })

  const nodeTypes = useMemo(
    () => ({
      [CANVAS_NODE_TYPE]: CanvasNode,
    }),
    []
  )

  const edgeTypes = useMemo(
    () => ({
      [CANVAS_EDGE_TYPE]: CanvasEdge,
    }),
    []
  )

  const cursorComponents = useMemo(
    () => ({
      Cursor: CanvasPresenceCursor,
    }),
    []
  )

  const defaultEdgeOptions = useMemo(
    () => ({
      type: CANVAS_EDGE_TYPE,
      data: { label: "" },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: DEFAULT_EDGE_COLOR,
        width: 16,
        height: 16,
      },
    }),
    []
  )

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const handleImportTemplate = useCallback(
    (template: CanvasTemplate) => {
      if (!isFlowReady) {
        return
      }

      applyCanvasTemplate(template, nodes, edges, onNodesChange, onEdgesChange)

      requestAnimationFrame(() => {
        void reactFlow.fitView({ duration: CANVAS_ZOOM_DURATION_MS, padding: 0.15 })
      })
    },
    [edges, isFlowReady, nodes, onEdgesChange, onNodesChange, reactFlow]
  )

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault()

      if (!isFlowReady) {
        return
      }

      const raw = event.dataTransfer.getData(CANVAS_SHAPE_DRAG_TYPE)
      if (!raw) {
        return
      }

      const payload = parseShapeDragPayload(raw)
      if (!payload) {
        return
      }

      const position = reactFlow.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      })

      const node = createCanvasNode({
        shape: payload.shape,
        width: payload.width,
        height: payload.height,
        position,
        componentKind: payload.componentKind,
      })

      onNodesChange([{ type: "add", item: node }])
    },
    [isFlowReady, onNodesChange, reactFlow]
  )

  return (
    <CanvasFlowProvider
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
    >
      <div
        className="relative h-[90vh] w-full"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          defaultEdgeOptions={defaultEdgeOptions}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDelete={onDelete}
          connectionMode={ConnectionMode.Loose}
          connectionLineType={ConnectionLineType.SmoothStep}
          fitView
          className="bg-bg-base"
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={20}
            size={1}
            color="var(--color-border-subtle)"
          />
          <Cursors components={cursorComponents} />
        </ReactFlow>
        <CanvasPresenceAvatars />
        <CanvasControlBar
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onFitView={handleFitView}
          onUndo={undo}
          onRedo={redo}
          canUndo={canUndo}
          canRedo={canRedo}
        />
        <ShapePanel />
        <StarterTemplatesModal
          open={templatesOpen}
          onOpenChange={onTemplatesOpenChange}
          onImport={handleImportTemplate}
        />
      </div>
    </CanvasFlowProvider>
  )
}

interface EditorFlowCanvasProps {
  roomId: string
  templatesOpen: boolean
  onTemplatesOpenChange: (open: boolean) => void
  onSaveStatusChange?: (status: CanvasSaveStatus) => void
  onSaveReady?: (saveNow: () => Promise<void>) => void
}

export function EditorFlowCanvas({
  roomId,
  templatesOpen,
  onTemplatesOpenChange,
  onSaveStatusChange,
  onSaveReady,
}: EditorFlowCanvasProps) {
  return (
    <ReactFlowProvider>
      <ShapeDragPreviewProvider>
        <EditorFlowCanvasInner
          roomId={roomId}
          templatesOpen={templatesOpen}
          onTemplatesOpenChange={onTemplatesOpenChange}
          onSaveStatusChange={onSaveStatusChange}
          onSaveReady={onSaveReady}
        />
      </ShapeDragPreviewProvider>
    </ReactFlowProvider>
  )
}
