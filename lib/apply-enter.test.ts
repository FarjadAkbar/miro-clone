import { describe, expect, it } from "vitest"
import {
  APPLY_ACTION_GAP_MS,
  APPLY_EDGE_ENTER_CLASS,
  APPLY_ENTER_CLASS,
  APPLY_ENTER_DURATION_MS,
  applyEdgeEnterClassName,
  applyEnterClassName,
  nextApplyActionDelayMs,
} from "@/lib/apply-enter"

describe("applyEnterClassName", () => {
  it("returns the enter class while entering", () => {
    expect(applyEnterClassName(true)).toBe(APPLY_ENTER_CLASS)
  })

  it("returns empty when settled", () => {
    expect(applyEnterClassName(false)).toBe("")
  })
})

describe("applyEdgeEnterClassName", () => {
  it("returns the edge enter class while entering", () => {
    expect(applyEdgeEnterClassName(true)).toBe(APPLY_EDGE_ENTER_CLASS)
  })
})

describe("nextApplyActionDelayMs", () => {
  it("paces between Design plan actions so enter motion can play", () => {
    expect(nextApplyActionDelayMs(0, 3)).toBe(APPLY_ACTION_GAP_MS)
    expect(nextApplyActionDelayMs(1, 3)).toBe(APPLY_ACTION_GAP_MS)
  })

  it("skips delay after the last action", () => {
    expect(nextApplyActionDelayMs(2, 3)).toBe(0)
    expect(nextApplyActionDelayMs(0, 1)).toBe(0)
  })
})

describe("apply enter timing", () => {
  it("keeps enter duration short and aligned with action gap", () => {
    expect(APPLY_ENTER_DURATION_MS).toBeGreaterThan(0)
    expect(APPLY_ENTER_DURATION_MS).toBeLessThanOrEqual(400)
    expect(APPLY_ACTION_GAP_MS).toBeGreaterThanOrEqual(APPLY_ENTER_DURATION_MS)
  })
})
