"use client"

import {
  BaseEdge,
  EdgeLabelRenderer,
  getSmoothStepPath,
  type EdgeProps,
} from "@xyflow/react"
import { useCallback, useState } from "react"
import { useCanvasFlow } from "@/components/editor/canvas-flow-context"
import { CanvasEdgeLabelEditor } from "@/components/editor/canvas-edge-label-editor"
import {
  EDGE_COLOR_REST,
  EDGE_INTERACTION_WIDTH,
} from "@/lib/canvas-edge-constants"
import { DEFAULT_EDGE_COLOR, type CanvasEdge } from "@/types/canvas"
import { useApplyEdgeEnterClassName } from "@/hooks/use-apply-enter"

export function CanvasEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  selected,
  data,
  markerEnd,
}: EdgeProps<CanvasEdge>) {
  const { updateEdgeLabel } = useCanvasFlow()
  const [hovered, setHovered] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [draftLabel, setDraftLabel] = useState("")
  const applyEnterClass = useApplyEdgeEnterClassName()

  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius: 8,
  })

  const label = data?.label ?? ""
  const isActive = selected || hovered || isEditing
  const strokeColor = isActive ? DEFAULT_EDGE_COLOR : EDGE_COLOR_REST

  const startEditing = useCallback(() => {
    setDraftLabel(label)
    setIsEditing(true)
  }, [label])

  const handleSave = useCallback(() => {
    updateEdgeLabel(id, draftLabel)
    setIsEditing(false)
  }, [draftLabel, id, updateEdgeLabel])

  return (
    <>
      <g
        className={applyEnterClass}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <BaseEdge
          id={id}
          path={edgePath}
          interactionWidth={EDGE_INTERACTION_WIDTH}
          markerEnd={markerEnd}
          style={{
            stroke: strokeColor,
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </g>
      <EdgeLabelRenderer>
        <div
          className="nodrag nopan nowheel pointer-events-auto absolute"
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
          }}
          onDoubleClick={(event) => {
            event.stopPropagation()
            startEditing()
          }}
        >
          <CanvasEdgeLabelEditor
            label={isEditing ? draftLabel : label}
            isEditing={isEditing}
            showHint={isActive}
            onStartEdit={startEditing}
            onLabelChange={setDraftLabel}
            onSave={handleSave}
          />
        </div>
      </EdgeLabelRenderer>
    </>
  )
}
