import { mutateFlow } from "@liveblocks/react-flow/node"
import { getLiveblocks } from "@/lib/liveblocks"
import type { CanvasEdge, CanvasNode } from "@/types/canvas"

export interface CanvasFlowSnapshot {
  nodes: CanvasNode[]
  edges: CanvasEdge[]
}

/** Read-only snapshot of the room's Liveblocks flow for Design chat / planning. */
export async function getCanvasFlowSnapshot(
  roomId: string
): Promise<CanvasFlowSnapshot> {
  let snapshot: CanvasFlowSnapshot = { nodes: [], edges: [] }

  await mutateFlow<CanvasNode, CanvasEdge>(
    { client: getLiveblocks(), roomId },
    (flow) => {
      const json = flow.toJSON()
      snapshot = {
        nodes: [...json.nodes],
        edges: [...json.edges],
      }
    }
  )

  return snapshot
}

export function formatCanvasFlowSnapshot(snapshot: CanvasFlowSnapshot): string {
  const nodes =
    snapshot.nodes.length === 0
      ? "None"
      : snapshot.nodes
          .map((node) => {
            const width = node.width ?? "?"
            const height = node.height ?? "?"
            const kind = node.data.componentKind
              ? ` kind=${node.data.componentKind}`
              : ""
            return `- id="${node.id}" label="${node.data.label}" shape=${node.data.shape}${kind} at (${node.position.x}, ${node.position.y}) size=${width}x${height}`
          })
          .join("\n")

  const edges =
    snapshot.edges.length === 0
      ? "None"
      : snapshot.edges
          .map((edge) => {
            const label = edge.data?.label ? ` label="${edge.data.label}"` : ""
            return `- id="${edge.id}" ${edge.source} -> ${edge.target}${label}`
          })
          .join("\n")

  return `Existing nodes:\n${nodes}\n\nExisting edges:\n${edges}`
}
