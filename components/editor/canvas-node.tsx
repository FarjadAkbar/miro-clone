"use client"

import {
  NodeResizer,
  NodeToolbar,
  Position,
  useReactFlow,
  type NodeProps,
} from "@xyflow/react"
import { useCallback, useState } from "react"
import { useCanvasFlow } from "@/components/editor/canvas-flow-context"
import { CanvasNodeLabelEditor } from "@/components/editor/canvas-node-label-editor"
import { CanvasNodeHandles } from "@/components/editor/canvas-node-handles"
import { CanvasNodeShapeView } from "@/components/editor/canvas-node-shape"
import { NodeColorToolbar } from "@/components/editor/node-color-toolbar"
import { NodeDeleteButton } from "@/components/editor/node-delete-button"
import { NodeShapeToolbar } from "@/components/editor/node-shape-toolbar"
import {
  MIN_NODE_HEIGHT,
  MIN_NODE_WIDTH,
} from "@/lib/canvas-node-constants"
import {
  resolveNodeTextColor,
  type CanvasNode,
  type CanvasNodeShape,
} from "@/types/canvas"

export function CanvasNode({ id, data, selected }: NodeProps<CanvasNode>) {
  const { deleteElements } = useReactFlow()
  const { updateNodeLabel, updateNodeColor, updateNodeShape } = useCanvasFlow()
  const [isEditing, setIsEditing] = useState(false)
  const textColor = resolveNodeTextColor(data)

  const handleLabelChange = useCallback(
    (label: string) => {
      updateNodeLabel(id, label)
    },
    [id, updateNodeLabel]
  )

  const handleColorSelect = useCallback(
    (color: string, nextTextColor: string) => {
      updateNodeColor(id, color, nextTextColor)
    },
    [id, updateNodeColor]
  )

  const handleShapeSelect = useCallback(
    (shape: CanvasNodeShape) => {
      updateNodeShape(id, shape)
    },
    [id, updateNodeShape]
  )

  const handleDelete = useCallback(() => {
    if (isEditing) {
      return
    }

    void deleteElements({ nodes: [{ id }] })
  }, [deleteElements, id, isEditing])

  return (
    <>
      <NodeToolbar isVisible={selected} position={Position.Top} offset={12}>
        <div className="flex flex-col items-center gap-1.5">
          <NodeShapeToolbar
            activeShape={data.shape}
            onSelect={handleShapeSelect}
          />
          <div className="flex items-center gap-1.5">
            <NodeColorToolbar
              activeFill={data.color}
              onSelect={handleColorSelect}
            />
            <NodeDeleteButton disabled={isEditing} onDelete={handleDelete} />
          </div>
        </div>
      </NodeToolbar>
      <NodeResizer
        isVisible={selected}
        minWidth={MIN_NODE_WIDTH}
        minHeight={MIN_NODE_HEIGHT}
        color="var(--color-border-subtle)"
        handleStyle={{
          width: 8,
          height: 8,
          borderRadius: 2,
          backgroundColor: "var(--color-bg-elevated)",
          border: "1px solid var(--color-border-subtle)",
        }}
        lineStyle={{ borderColor: "var(--color-border-subtle)" }}
      />
      <div className="group/node relative h-full w-full">
        <CanvasNodeHandles />
        <CanvasNodeShapeView
          shape={data.shape}
          label={data.label}
          fill={data.color}
          textColor={textColor}
          selected={selected}
          renderLabel={(labelTextColor) => (
            <CanvasNodeLabelEditor
              label={data.label}
              textColor={labelTextColor}
              isEditing={isEditing}
              onStartEdit={() => setIsEditing(true)}
              onLabelChange={handleLabelChange}
              onEndEdit={() => setIsEditing(false)}
            />
          )}
        />
      </div>
    </>
  )
}
