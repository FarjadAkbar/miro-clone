/** How long Flow animation runs after Design apply settles (unless Present mode). */
export const FLOW_BRIEF_PLAY_MS = 4500

/** Delay between hop sequence numbers so travel reads as ordered steps. */
export const FLOW_HOP_STAGGER_MS = 380

/** One traveler pass along an edge. */
export const FLOW_EDGE_DURATION_MS = 1100

export interface FlowPlayFlags {
  presentMode: boolean
  briefPlayActive: boolean
}

export function shouldPlayFlowAnimation({
  presentMode,
  briefPlayActive,
}: FlowPlayFlags): boolean {
  return presentMode || briefPlayActive
}

export function shouldStartBriefFlowPlay(options: {
  wasApplyActive: boolean
  isApplyActive: boolean
}): boolean {
  return options.wasApplyActive && !options.isApplyActive
}

/** True when status newly reports Design plan apply finished (not interview-only). */
export function shouldStartBriefFlowPlayFromStatus(options: {
  previousStatus: string | undefined
  currentStatus: string | undefined
}): boolean {
  if (!options.currentStatus) {
    return false
  }

  if (options.previousStatus === options.currentStatus) {
    return false
  }

  return /design complete/i.test(options.currentStatus)
}

export function flowMotionTiming(sequence: number | undefined): {
  delaySec: number
  durationSec: number
} {
  return {
    delaySec: sequence ? flowHopDelayMs(sequence) / 1000 : 0,
    durationSec: FLOW_EDGE_DURATION_MS / 1000,
  }
}

export interface FlowEdgeInput {
  id: string
  source: string
  target: string
  sequence?: number | null
}

/** Resolve travel hop order: explicit sequence wins; else topological discovery. */
export function resolveTravelSequences(
  edges: readonly FlowEdgeInput[]
): Map<string, number> {
  const result = new Map<string, number>()
  const used = new Set<number>()

  for (const edge of edges) {
    if (
      typeof edge.sequence === "number" &&
      Number.isFinite(edge.sequence) &&
      edge.sequence >= 1
    ) {
      const sequence = Math.floor(edge.sequence)
      result.set(edge.id, sequence)
      used.add(sequence)
    }
  }

  const pending = edges
    .filter((edge) => !result.has(edge.id))
    .slice()
    .sort((a, b) => a.id.localeCompare(b.id))

  if (pending.length === 0) {
    return result
  }

  const indegree = new Map<string, number>()
  const outgoing = new Map<string, FlowEdgeInput[]>()

  for (const edge of edges) {
    indegree.set(edge.source, indegree.get(edge.source) ?? 0)
    indegree.set(edge.target, (indegree.get(edge.target) ?? 0) + 1)

    const list = outgoing.get(edge.source) ?? []
    list.push(edge)
    outgoing.set(edge.source, list)
  }

  for (const list of outgoing.values()) {
    list.sort((a, b) => a.id.localeCompare(b.id))
  }

  const queue = [...indegree.entries()]
    .filter(([, degree]) => degree === 0)
    .map(([node]) => node)
    .sort((a, b) => a.localeCompare(b))

  if (queue.length === 0) {
    for (const edge of pending) {
      if (!queue.includes(edge.source)) {
        queue.push(edge.source)
      }
    }
    queue.sort((a, b) => a.localeCompare(b))
  }

  const ordered: FlowEdgeInput[] = []
  const remaining = new Set(pending.map((edge) => edge.id))
  const localIndegree = new Map(indegree)
  const visitedNodes = new Set<string>()

  while (queue.length > 0) {
    const node = queue.shift()
    if (!node || visitedNodes.has(node)) {
      continue
    }
    visitedNodes.add(node)

    for (const edge of outgoing.get(node) ?? []) {
      if (remaining.has(edge.id)) {
        ordered.push(edge)
        remaining.delete(edge.id)
      }

      const nextDegree = (localIndegree.get(edge.target) ?? 1) - 1
      localIndegree.set(edge.target, nextDegree)
      if (nextDegree === 0) {
        queue.push(edge.target)
      }
    }
  }

  for (const edge of pending) {
    if (remaining.has(edge.id)) {
      ordered.push(edge)
      remaining.delete(edge.id)
    }
  }

  let nextSequence = 1
  for (const edge of ordered) {
    while (used.has(nextSequence)) {
      nextSequence += 1
    }
    result.set(edge.id, nextSequence)
    used.add(nextSequence)
    nextSequence += 1
  }

  return result
}

export function flowHopDelayMs(
  sequence: number,
  staggerMs = FLOW_HOP_STAGGER_MS
): number {
  const hop = Math.max(1, Math.floor(sequence))
  return (hop - 1) * staggerMs
}
