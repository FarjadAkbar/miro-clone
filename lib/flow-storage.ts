export const FLOW_STORAGE_KEY = "flow"

interface LiveStorageNode {
  get: (key: string) => unknown
}

function isLiveStorageNode(value: unknown): value is LiveStorageNode {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as LiveStorageNode).get === "function"
  )
}

/** True when `"flow"` is a LiveObject with LiveMap `nodes` and `edges`. */
export function isValidFlowStorage(flow: unknown): boolean {
  if (!isLiveStorageNode(flow)) {
    return false
  }

  const nodes = flow.get("nodes")
  const edges = flow.get("edges")

  return isLiveStorageNode(nodes) && isLiveStorageNode(edges)
}
