import { badRequestResponse } from "@/lib/api/responses"
import { isValidProjectId } from "@/lib/project-room-id"

const DEFAULT_PROJECT_NAME = "Untitled Project"

interface ParseResult<T> {
  ok: true
  data: T
}

interface ParseError {
  ok: false
  response: Response
}

type ParseResponse<T> = ParseResult<T> | ParseError

export async function parseCreateProjectBody(
  request: Request
): Promise<ParseResponse<{ name: string; id?: string }>> {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return { ok: true, data: { name: DEFAULT_PROJECT_NAME } }
  }

  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, response: badRequestResponse("Invalid request body") }
  }

  const record = body as Record<string, unknown>
  const rawName = record.name

  if (rawName === undefined || rawName === null || rawName === "") {
    return { ok: true, data: { name: DEFAULT_PROJECT_NAME } }
  }

  if (typeof rawName !== "string") {
    return { ok: false, response: badRequestResponse("name must be a string") }
  }

  const name = rawName.trim()
  const resolvedName = name || DEFAULT_PROJECT_NAME

  const rawId = record.id
  if (rawId === undefined || rawId === null) {
    return { ok: true, data: { name: resolvedName } }
  }

  if (typeof rawId !== "string") {
    return { ok: false, response: badRequestResponse("id must be a string") }
  }

  const id = rawId.trim()
  if (!isValidProjectId(id)) {
    return {
      ok: false,
      response: badRequestResponse("id must be a lowercase slug"),
    }
  }

  return { ok: true, data: { name: resolvedName, id } }
}

export async function parseRenameProjectBody(
  request: Request
): Promise<ParseResponse<{ name: string }>> {
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
  const rawName = record.name

  if (typeof rawName !== "string") {
    return { ok: false, response: badRequestResponse("name is required") }
  }

  const name = rawName.trim()
  if (!name) {
    return { ok: false, response: badRequestResponse("name cannot be empty") }
  }

  return { ok: true, data: { name } }
}
