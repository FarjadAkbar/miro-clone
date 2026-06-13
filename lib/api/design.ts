import { badRequestResponse } from "@/lib/api/responses"

interface ParseResult<T> {
  ok: true
  data: T
}

interface ParseError {
  ok: false
  response: Response
}

type ParseResponse<T> = ParseResult<T> | ParseError

export interface DesignTriggerBody {
  prompt: string
  roomId: string
  projectId: string
}

export async function parseDesignTriggerBody(
  request: Request
): Promise<ParseResponse<DesignTriggerBody>> {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return { ok: false, response: badRequestResponse("Invalid request body") }
  }

  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, response: badRequestResponse("Invalid request body") }
  }

  const record = body as Record<string, unknown>
  const prompt =
    typeof record.prompt === "string" ? record.prompt.trim() : ""
  const roomId = typeof record.roomId === "string" ? record.roomId.trim() : ""
  const projectId =
    typeof record.projectId === "string" ? record.projectId.trim() : ""

  if (!prompt) {
    return { ok: false, response: badRequestResponse("prompt is required") }
  }

  if (!roomId) {
    return { ok: false, response: badRequestResponse("roomId is required") }
  }

  if (!projectId) {
    return {
      ok: false,
      response: badRequestResponse("projectId is required"),
    }
  }

  if (roomId !== projectId) {
    return {
      ok: false,
      response: badRequestResponse("roomId must match projectId"),
    }
  }

  return { ok: true, data: { prompt, roomId, projectId } }
}

export async function parseDesignTokenBody(
  request: Request
): Promise<ParseResponse<{ runId: string }>> {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return { ok: false, response: badRequestResponse("Invalid request body") }
  }

  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, response: badRequestResponse("Invalid request body") }
  }

  const record = body as Record<string, unknown>
  const runId = typeof record.runId === "string" ? record.runId.trim() : ""

  if (!runId) {
    return { ok: false, response: badRequestResponse("runId is required") }
  }

  return { ok: true, data: { runId } }
}
