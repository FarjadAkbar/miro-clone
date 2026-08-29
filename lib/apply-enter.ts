/** Short enter motion when Design plan mutations land on the canvas. */
export const APPLY_ENTER_DURATION_MS = 280

/**
 * Pause between Design plan mutations so each enter can play before the next
 * Liveblocks update arrives.
 */
export const APPLY_ACTION_GAP_MS = 300

export const APPLY_ENTER_CLASS = "canvas-apply-enter" as const
export const APPLY_EDGE_ENTER_CLASS = "canvas-apply-edge-enter" as const

export function applyEnterClassName(isEntering: boolean): string {
  return isEntering ? APPLY_ENTER_CLASS : ""
}

export function applyEdgeEnterClassName(isEntering: boolean): string {
  return isEntering ? APPLY_EDGE_ENTER_CLASS : ""
}

/** Delay after applying action at `actionIndex` before the next mutation. */
export function nextApplyActionDelayMs(
  actionIndex: number,
  actionCount: number,
  gapMs = APPLY_ACTION_GAP_MS
): number {
  if (actionCount <= 1) {
    return 0
  }

  if (actionIndex < 0 || actionIndex >= actionCount - 1) {
    return 0
  }

  return gapMs
}
