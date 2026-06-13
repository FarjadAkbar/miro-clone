import { badRequestResponse } from "@/lib/api/responses"
import {
  specTokenBodySchema,
  specTriggerBodySchema,
} from "@/types/spec-agent"

interface ParseResult<T> {
  ok: true
  data: T
}

interface ParseError {
  ok: false
  response: Response
}

type ParseResponse<T> = ParseResult<T> | ParseError

async function parseJsonBody(request: Request): Promise<ParseResponse<unknown>> {
  try {
    return { ok: true, data: await request.json() }
  } catch {
    return { ok: false, response: badRequestResponse("Invalid request body") }
  }
}

function zodErrorResponse(error: { issues: { message: string }[] }): ParseError {
  const message = error.issues[0]?.message ?? "Invalid request body"
  return { ok: false, response: badRequestResponse(message) }
}

export async function parseSpecTriggerBody(request: Request) {
  const parsed = await parseJsonBody(request)
  if (!parsed.ok) {
    return parsed
  }

  const result = specTriggerBodySchema.safeParse(parsed.data)
  if (!result.success) {
    return zodErrorResponse(result.error)
  }

  return { ok: true as const, data: result.data }
}

export async function parseSpecTokenBody(request: Request) {
  const parsed = await parseJsonBody(request)
  if (!parsed.ok) {
    return parsed
  }

  const result = specTokenBodySchema.safeParse(parsed.data)
  if (!result.success) {
    return zodErrorResponse(result.error)
  }

  return { ok: true as const, data: result.data }
}
