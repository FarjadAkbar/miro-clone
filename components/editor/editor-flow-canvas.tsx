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
  SelectionMode,
  useReactFlow,
} from "@xyflow/react"
import { useCallback, useMemo, type DragEvent } from "react"
import { StarterTemplatesModal } from "@/components/editor/starter-templates-modal"
import {
  applyCanvasTemplate,
  type CanvasTemplate,
} from "@/components/editor/starter-templates"
import { CanvasControlBar } from "@/components/editor/canvas-control-bar"
import { CanvasGroup } from "@/components/editor/canvas-group"
import { CanvasPresenceAvatars } from "@/components/editor/canvas-presence-avatars"
import { CanvasPresenceCursor } from "@/components/editor/canvas-presence-cursor"
import { CanvasEdge } from "@/components/editor/canvas-edge"
import { CanvasFlowProvider } from "@/components/editor/canvas-flow-context"
import { CanvasNode } from "@/components/editor/canvas-node"
import { ShapeDragPreviewProvider } from "@/components/editor/shape-drag-preview"
import { ShapePanel } from "@/components/editor/shape-panel"
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts"
import { useAiGenerationState } from "@/hooks/use-ai-generation-state"
import {
  ApplyEnterProvider,
  applyEnterDurationStyle,
} from "@/hooks/use-apply-enter"
import { FlowPlayProvider, useFlowPlay } from "@/hooks/use-flow-play"
import {
  useCanvasAutosave,
  type CanvasSaveStatus,
} from "@/hooks/use-canvas-autosave"
import { useFlowStorageReady } from "@/hooks/use-flow-storage-ready"
import { CANVAS_MAX_ZOOM, CANVAS_MIN_ZOOM, CANVAS_ZOOM_DURATION_MS } from "@/lib/canvas-control-constants"
import { createNodeFromCanvasDrop } from "@/lib/canvas-drop"
import { parseGroupDragPayload } from "@/lib/canvas-group"
import { parseShapeDragPayload } from "@/lib/canvas-node-factory"
import { cn } from "@/lib/utils"
import {
  CANVAS_EDGE_TYPE,
  CANVAS_GROUP_DRAG_TYPE,
  CANVAS_GROUP_TYPE,
  CANVAS_NODE_TYPE,
  CANVAS_SHAPE_DRAG_TYPE,
  DEFAULT_EDGE_COLOR,
  type CanvasEdge as CanvasEdgeType,
  type CanvasFlowNode,
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
    useLiveblocksFlow<CanvasFlowNode, CanvasEdgeType>({
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

  const { isAiApplyActive } = useAiGenerationState()

  const nodeTypes = useMemo(
    () => ({
      [CANVAS_NODE_TYPE]: CanvasNode,
      [CANVAS_GROUP_TYPE]: CanvasGroup,
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

      const position = reactFlow.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      })

      const groupRaw = event.dataTransfer.getData(CANVAS_GROUP_DRAG_TYPE)
      if (groupRaw) {
        const payload = parseGroupDragPayload(groupRaw)
        if (!payload) {
          return
        }

        onNodesChange([
          {
            type: "add",
            item: createNodeFromCanvasDrop({
              kind: "group",
              width: payload.width,
              height: payload.height,
              position,
            }),
          },
        ])
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

      onNodesChange([
        {
          type: "add",
          item: createNodeFromCanvasDrop({
            kind: "shape",
            shape: payload.shape,
            width: payload.width,
            height: payload.height,
            position,
            componentKind: payload.componentKind,
            existingNodes: nodes,
          }),
        },
      ])
    },
    [isFlowReady, nodes, onNodesChange, reactFlow]
  )

  return (
    <CanvasFlowProvider
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
    >
      <FlowPlayProvider
        edges={edges.map((edge) => ({
          id: edge.id,
          source: edge.source,
          target: edge.target,
          sequence: edge.data?.sequence,
        }))}
      >
        <ApplyEnterProvider active={isAiApplyActive}>
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
              connectionRadius={48}
              connectionLineStyle={{
                stroke: "var(--color-accent-ai)",
                strokeWidth: 2,
              }}
              minZoom={CANVAS_MIN_ZOOM}
              maxZoom={CANVAS_MAX_ZOOM}
              fitView
              fitViewOptions={{ padding: 0.2, minZoom: CANVAS_MIN_ZOOM }}
              selectionOnDrag
              selectionMode={SelectionMode.Partial}
              panOnDrag={[1, 2]}
              multiSelectionKeyCode="Shift"
              deleteKeyCode={["Backspace", "Delete"]}
              className={cn(
                "bg-bg-base",
                isAiApplyActive && "canvas-apply-animating"
              )}
              style={applyEnterDurationStyle()}
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
            <CanvasControlsWithPresent
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
        </ApplyEnterProvider>
      </FlowPlayProvider>
    </CanvasFlowProvider>
  )
}

function CanvasControlsWithPresent({
  onZoomIn,
  onZoomOut,
  onFitView,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
}: {
  onZoomIn: () => void
  onZoomOut: () => void
  onFitView: () => void
  onUndo: () => void
  onRedo: () => void
  canUndo: boolean
  canRedo: boolean
}) {
  const { presentMode, togglePresentMode } = useFlowPlay()

  return (
    <CanvasControlBar
      onZoomIn={onZoomIn}
      onZoomOut={onZoomOut}
      onFitView={onFitView}
      onUndo={onUndo}
      onRedo={onRedo}
      canUndo={canUndo}
      canRedo={canRedo}
      presentMode={presentMode}
      onPresentModeToggle={togglePresentMode}
    />
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
