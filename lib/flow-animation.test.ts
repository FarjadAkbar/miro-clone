import { describe, expect, it } from "vitest"
import {
  FLOW_BRIEF_PLAY_MS,
  FLOW_EDGE_DURATION_MS,
  FLOW_HOP_STAGGER_MS,
  flowHopDelayMs,
  flowMotionTiming,
  getMaxTravelSequence,
  isEdgeActiveForHop,
  nextActiveHop,
  resolveTravelSequences,
  shouldPlayFlowAnimation,
  shouldStartBriefFlowPlay,
  shouldStartBriefFlowPlayFromStatus,
} from "@/lib/flow-animation"

describe("shouldPlayFlowAnimation", () => {
  it("plays in Present mode even without a brief play", () => {
    expect(
      shouldPlayFlowAnimation({ presentMode: true, briefPlayActive: false })
    ).toBe(true)
  })

  it("plays during brief post-apply play", () => {
    expect(
      shouldPlayFlowAnimation({ presentMode: false, briefPlayActive: true })
    ).toBe(true)
  })

  it("stays calm while editing", () => {
    expect(
      shouldPlayFlowAnimation({ presentMode: false, briefPlayActive: false })
    ).toBe(false)
  })
})

describe("shouldStartBriefFlowPlay", () => {
  it("starts when Design apply ends", () => {
    expect(
      shouldStartBriefFlowPlay({ wasApplyActive: true, isApplyActive: false })
    ).toBe(true)
  })

  it("does not start while still applying or idle", () => {
    expect(
      shouldStartBriefFlowPlay({ wasApplyActive: true, isApplyActive: true })
    ).toBe(false)
    expect(
      shouldStartBriefFlowPlay({ wasApplyActive: false, isApplyActive: false })
    ).toBe(false)
  })
})

describe("shouldStartBriefFlowPlayFromStatus", () => {
  it("starts when Design complete is newly reported", () => {
    expect(
      shouldStartBriefFlowPlayFromStatus({
        previousStatus: "Applying 4 canvas updates…",
        currentStatus: "Design complete.",
      })
    ).toBe(true)
  })

  it("ignores interview statuses and unchanged text", () => {
    expect(
      shouldStartBriefFlowPlayFromStatus({
        previousStatus: "Starting Design chat…",
        currentStatus: "Design interview in progress.",
      })
    ).toBe(false)
    expect(
      shouldStartBriefFlowPlayFromStatus({
        previousStatus: "Design complete.",
        currentStatus: "Design complete.",
      })
    ).toBe(false)
  })
})

describe("resolveTravelSequences", () => {
  it("keeps explicit sequence values on edges", () => {
    const sequences = resolveTravelSequences([
      { id: "e2", source: "b", target: "c", sequence: 2 },
      { id: "e1", source: "a", target: "b", sequence: 1 },
    ])

    expect(sequences.get("e1")).toBe(1)
    expect(sequences.get("e2")).toBe(2)
  })

  it("assigns hop order along a path when sequence is missing", () => {
    const sequences = resolveTravelSequences([
      { id: "e-mid", source: "b", target: "c" },
      { id: "e-start", source: "a", target: "b" },
      { id: "e-end", source: "c", target: "d" },
    ])

    expect(sequences.get("e-start")).toBe(1)
    expect(sequences.get("e-mid")).toBe(2)
    expect(sequences.get("e-end")).toBe(3)
  })

  it("fills missing sequences without colliding with explicit ones", () => {
    const sequences = resolveTravelSequences([
      { id: "e-a", source: "a", target: "b", sequence: 1 },
      { id: "e-b", source: "b", target: "c" },
    ])

    expect(sequences.get("e-a")).toBe(1)
    expect(sequences.get("e-b")).toBe(2)
  })
})

describe("sequential hop playhead", () => {
  it("only activates edges for the current hop", () => {
    expect(isEdgeActiveForHop(1, 1)).toBe(true)
    expect(isEdgeActiveForHop(2, 1)).toBe(false)
    expect(isEdgeActiveForHop(1, null)).toBe(false)
  })

  it("advances hop by hop and loops or settles", () => {
    expect(nextActiveHop(1, 3, false)).toBe(2)
    expect(nextActiveHop(3, 3, false)).toBe(null)
    expect(nextActiveHop(3, 3, true)).toBe(1)
  })

  it("reads max hop from resolved sequences", () => {
    expect(
      getMaxTravelSequence(
        new Map([
          ["a", 1],
          ["b", 4],
          ["c", 2],
        ])
      )
    ).toBe(4)
    expect(getMaxTravelSequence(new Map())).toBe(0)
  })
})

describe("flowHopDelayMs", () => {
  it("staggers later hops so travel reads as a sequence", () => {
    expect(flowHopDelayMs(1)).toBe(0)
    expect(flowHopDelayMs(2)).toBe(FLOW_HOP_STAGGER_MS)
    expect(flowHopDelayMs(3)).toBe(FLOW_HOP_STAGGER_MS * 2)
  })
})

describe("flow brief play duration", () => {
  it("is long enough to show a short travel story", () => {
    expect(FLOW_BRIEF_PLAY_MS).toBeGreaterThanOrEqual(3000)
    expect(FLOW_BRIEF_PLAY_MS).toBeLessThanOrEqual(8000)
    expect(flowMotionTiming(2).durationSec).toBe(FLOW_EDGE_DURATION_MS / 1000)
  })
})
