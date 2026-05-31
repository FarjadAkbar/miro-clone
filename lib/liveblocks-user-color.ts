/** Distinct cursor colors for multiplayer presence (dark canvas). */
const CURSOR_COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#ec4899",
  "#f43f5e",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#14b8a6",
  "#06b6d4",
  "#3b82f6",
] as const

/** Maps a user ID to a stable color from {@link CURSOR_COLORS}. */
export function cursorColorForUserId(userId: string): string {
  let hash = 0
  for (let index = 0; index < userId.length; index += 1) {
    hash = (hash * 31 + userId.charCodeAt(index)) >>> 0
  }
  return CURSOR_COLORS[hash % CURSOR_COLORS.length]
}
