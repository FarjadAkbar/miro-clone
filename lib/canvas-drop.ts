import type { XYPosition } from "@xyflow/react"
import {
  createCanvasGroup,
  findGroupContainingPoint,
  nestNodeInGroup,
} from "@/lib/canvas-group"
import { createCanvasNode } from "@/lib/canvas-node-factory"
import type {
  CanvasFlowNode,
  CanvasNodeShape,
} from "@/types/canvas"
import type { ComponentKind } from "@/types/component-kind"

interface DropShapeInput {
  kind: "shape"
  shape: CanvasNodeShape
  width: number
  height: number
  position: XYPosition
  componentKind?: ComponentKind
  existingNodes: CanvasFlowNode[]
}

interface DropGroupInput {
  kind: "group"
  width: number
  height: number
  position: XYPosition
}

export type CanvasDropInput = DropShapeInput | DropGroupInput

/** Build the flow node for a palette drop, including Group nesting. */
export function createNodeFromCanvasDrop(
  input: CanvasDropInput
): CanvasFlowNode {
  if (input.kind === "group") {
    return createCanvasGroup({
      position: {
        x: input.position.x - input.width / 2,
        y: input.position.y - input.height / 2,
      },
      width: input.width,
      height: input.height,
    })
  }

  const node = createCanvasNode({
    shape: input.shape,
    width: input.width,
    height: input.height,
    position: input.position,
    componentKind: input.componentKind,
  })

  const containingGroup = findGroupContainingPoint(
    input.existingNodes,
    input.position
  )
  if (!containingGroup) {
    return node
  }

  const nested = nestNodeInGroup(node, containingGroup)
  return {
    ...node,
    parentId: nested.parentId,
    extent: nested.extent,
    position: nested.position,
  }
}
