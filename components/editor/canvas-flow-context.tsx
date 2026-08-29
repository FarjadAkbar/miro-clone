"use client"

import type { OnEdgesChange, OnNodesChange } from "@xyflow/react"
import {
  createContext,
  useCallback,
  useContext,
  type ReactNode,
} from "react"
import {
  CANVAS_EDGE_TYPE,
  CANVAS_GROUP_TYPE,
  CANVAS_NODE_TYPE,
  type CanvasEdge,
  type CanvasFlowNode,
  type CanvasGroup,
  type CanvasNode,
} from "@/types/canvas"

interface CanvasFlowContextValue {
  updateNodeLabel: (nodeId: string, label: string) => void
  updateNodeColor: (nodeId: string, color: string, textColor: string) => void
  updateEdgeLabel: (edgeId: string, label: string) => void
  removeGroup: (groupId: string) => void
}

const CanvasFlowContext = createContext<CanvasFlowContextValue | null>(null)

interface CanvasFlowProviderProps {
  nodes: CanvasFlowNode[]
  edges: CanvasEdge[]
  onNodesChange: OnNodesChange<CanvasFlowNode>
  onEdgesChange: OnEdgesChange<CanvasEdge>
  children: ReactNode
}

export function CanvasFlowProvider({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  children,
}: CanvasFlowProviderProps) {
  const updateNodeLabel = useCallback(
    (nodeId: string, label: string) => {
      const node = nodes.find((entry) => entry.id === nodeId)
      if (!node) {
        return
      }

      if (node.type === CANVAS_GROUP_TYPE) {
        const group = node as CanvasGroup
        onNodesChange([
          {
            type: "replace",
            id: nodeId,
            item: {
              ...group,
              type: CANVAS_GROUP_TYPE,
              data: {
                ...group.data,
                label,
              },
            },
          },
        ])
        return
      }

      const canvasNode = node as CanvasNode
      onNodesChange([
        {
          type: "replace",
          id: nodeId,
          item: {
            ...canvasNode,
            type: CANVAS_NODE_TYPE,
            data: {
              ...canvasNode.data,
              label,
            },
          },
        },
      ])
    },
    [nodes, onNodesChange]
  )

  const updateNodeColor = useCallback(
    (nodeId: string, color: string, textColor: string) => {
      const node = nodes.find((entry) => entry.id === nodeId)
      if (!node || node.type !== CANVAS_NODE_TYPE) {
        return
      }

      const canvasNode = node as CanvasNode
      onNodesChange([
        {
          type: "replace",
          id: nodeId,
          item: {
            ...canvasNode,
            type: CANVAS_NODE_TYPE,
            data: {
              ...canvasNode.data,
              color,
              textColor,
            },
          },
        },
      ])
    },
    [nodes, onNodesChange]
  )

  const updateEdgeLabel = useCallback(
    (edgeId: string, label: string) => {
      const edge = edges.find((entry) => entry.id === edgeId)
      if (!edge) {
        return
      }

      onEdgesChange([
        {
          type: "replace",
          id: edgeId,
          item: {
            ...edge,
            type: CANVAS_EDGE_TYPE,
            data: {
              label,
            },
          },
        },
      ])
    },
    [edges, onEdgesChange]
  )

  const removeGroup = useCallback(
    (groupId: string) => {
      const group = nodes.find(
        (entry) => entry.id === groupId && entry.type === CANVAS_GROUP_TYPE
      ) as CanvasGroup | undefined
      if (!group) {
        return
      }

      const childUpdates = nodes
        .filter((entry) => entry.parentId === groupId)
        .map((child) => ({
          type: "replace" as const,
          id: child.id,
          item: {
            ...child,
            parentId: undefined,
            extent: undefined,
            position: {
              x: group.position.x + child.position.x,
              y: group.position.y + child.position.y,
            },
          },
        }))

      onNodesChange([
        ...childUpdates,
        { type: "remove", id: groupId },
      ])
    },
    [nodes, onNodesChange]
  )

  return (
    <CanvasFlowContext.Provider
      value={{ updateNodeLabel, updateNodeColor, updateEdgeLabel, removeGroup }}
    >
      {children}
    </CanvasFlowContext.Provider>
  )
}

export function useCanvasFlow() {
  const context = useContext(CanvasFlowContext)
  if (!context) {
    throw new Error("useCanvasFlow must be used within CanvasFlowProvider")
  }
  return context
}
