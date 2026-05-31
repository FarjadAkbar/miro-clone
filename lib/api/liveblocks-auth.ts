import { badRequestResponse } from "@/lib/api/responses"

export function parseLiveblocksAuthBody(
  body: unknown
): { ok: true; room: string } | { ok: false; response: Response } {
  if (typeof body !== "object" || body === null) {
    return { ok: false, response: badRequestResponse("Invalid request body") }
  }

  const room = "room" in body ? body.room : undefined

  if (typeof room !== "string" || !room.trim()) {
    return { ok: false, response: badRequestResponse("Room is required") }
  }

  return { ok: true, room: room.trim() }
}
