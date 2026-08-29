import { badRequestResponse } from "@/lib/api/responses"
import type {
  DesignAgentHistoryItem,
  DesignAgentPayloadIntent,
} from "@/types/design-agent"

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
  intent: DesignAgentPayloadIntent
  history: DesignAgentHistoryItem[]
}

function parseHistory(value: unknown): DesignAgentHistoryItem[] | null {
  if (value === undefined) {
    return []
  }

  if (!Array.isArray(value)) {
    return null
  }

  const history: DesignAgentHistoryItem[] = []

  for (const entry of value) {
    if (entry === null || typeof entry !== "object" || Array.isArray(entry)) {
      return null
    }

    const record = entry as Record<string, unknown>
    const role = record.role
    const content =
      typeof record.content === "string" ? record.content.trim() : ""

    if ((role !== "user" && role !== "assistant") || !content) {
      return null
    }

    history.push({
      role,
      content,
      ...(typeof record.offerGenerate === "boolean"
        ? { offerGenerate: record.offerGenerate }
        : {}),
    })
  }

  return history
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
  const intentRaw = record.intent
  const intent: DesignAgentPayloadIntent =
    intentRaw === "generate" ? "generate" : "auto"
  const history = parseHistory(record.history)

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

  if (history === null) {
    return { ok: false, response: badRequestResponse("history is invalid") }
  }

  return { ok: true, data: { prompt, roomId, projectId, intent, history } }
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
