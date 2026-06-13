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
  CANVAS_NODE_TYPE,
  type CanvasEdge,
  type CanvasEdgeData,
  type CanvasNode,
  type CanvasNodeData,
} from "@/types/canvas"

interface CanvasFlowContextValue {
  updateNodeLabel: (nodeId: string, label: string) => void
  updateNodeColor: (nodeId: string, color: string, textColor: string) => void
  updateEdgeLabel: (edgeId: string, label: string) => void
}

const CanvasFlowContext = createContext<CanvasFlowContextValue | null>(null)

interface CanvasFlowProviderProps {
  nodes: CanvasNode[]
  edges: CanvasEdge[]
  onNodesChange: OnNodesChange<CanvasNode>
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
  const updateNodeData = useCallback(
    (nodeId: string, dataPatch: Partial<CanvasNodeData>) => {
      const node = nodes.find((entry) => entry.id === nodeId)
      if (!node) {
        return
      }

      onNodesChange([
        {
          type: "replace",
          id: nodeId,
          item: {
            ...node,
            type: CANVAS_NODE_TYPE,
            data: {
              ...node.data,
              ...dataPatch,
            },
          },
        },
      ])
    },
    [nodes, onNodesChange]
  )

  const updateEdgeData = useCallback(
    (edgeId: string, dataPatch: Partial<CanvasEdgeData>) => {
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
              ...edge.data,
              label: edge.data?.label ?? "",
              ...dataPatch,
            },
          },
        },
      ])
    },
    [edges, onEdgesChange]
  )

  const updateNodeLabel = useCallback(
    (nodeId: string, label: string) => {
      updateNodeData(nodeId, { label })
    },
    [updateNodeData]
  )

  const updateNodeColor = useCallback(
    (nodeId: string, color: string, textColor: string) => {
      updateNodeData(nodeId, { color, textColor })
    },
    [updateNodeData]
  )

  const updateEdgeLabel = useCallback(
    (edgeId: string, label: string) => {
      updateEdgeData(edgeId, { label })
    },
    [updateEdgeData]
  )

  return (
    <CanvasFlowContext.Provider
      value={{ updateNodeLabel, updateNodeColor, updateEdgeLabel }}
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
