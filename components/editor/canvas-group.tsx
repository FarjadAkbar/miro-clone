"use client"

import {
  NodeResizer,
  NodeToolbar,
  Position,
  type NodeProps,
} from "@xyflow/react"
import { useCallback, useState } from "react"
import { useCanvasFlow } from "@/components/editor/canvas-flow-context"
import { CanvasNodeLabelEditor } from "@/components/editor/canvas-node-label-editor"
import { NodeDeleteButton } from "@/components/editor/node-delete-button"
import { cn } from "@/lib/utils"
import type { CanvasGroup as CanvasGroupNode } from "@/types/canvas"

const MIN_GROUP_WIDTH = 240
const MIN_GROUP_HEIGHT = 160

export function CanvasGroup({
  id,
  data,
  selected,
}: NodeProps<CanvasGroupNode>) {
  const { updateNodeLabel, removeGroup } = useCanvasFlow()
  const [isEditing, setIsEditing] = useState(false)

  const handleLabelChange = useCallback(
    (label: string) => {
      updateNodeLabel(id, label)
    },
    [id, updateNodeLabel]
  )

  const handleDelete = useCallback(() => {
    if (isEditing) {
      return
    }
    removeGroup(id)
  }, [id, isEditing, removeGroup])

  return (
    <>
      <NodeToolbar isVisible={selected} position={Position.Top} offset={12}>
        <NodeDeleteButton disabled={isEditing} onDelete={handleDelete} />
      </NodeToolbar>
      <NodeResizer
        isVisible={selected}
        minWidth={MIN_GROUP_WIDTH}
        minHeight={MIN_GROUP_HEIGHT}
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
      <div
        className={cn(
          "relative h-full w-full rounded-2xl border-2 border-dashed bg-bg-subtle/40",
          selected ? "border-brand" : "border-surface-border"
        )}
      >
        <div className="absolute left-3 right-3 top-2 z-10 h-8 min-w-0">
          <CanvasNodeLabelEditor
            label={data.label}
            textColor="var(--color-copy-secondary)"
            isEditing={isEditing}
            onStartEdit={() => setIsEditing(true)}
            onLabelChange={handleLabelChange}
            onEndEdit={() => setIsEditing(false)}
          />
        </div>
      </div>
    </>
  )
}
