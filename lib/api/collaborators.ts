import { badRequestResponse } from "@/lib/api/responses"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface ParseResult<T> {
  ok: true
  data: T
}

interface ParseError {
  ok: false
  response: Response
}

type ParseResponse<T> = ParseResult<T> | ParseError

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase()
}

export function isValidEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email)
}

export async function parseInviteCollaboratorBody(
  request: Request
): Promise<ParseResponse<{ email: string }>> {
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
  const rawEmail = record.email

  if (typeof rawEmail !== "string") {
    return { ok: false, response: badRequestResponse("email is required") }
  }

  const email = normalizeEmail(rawEmail)

  if (!email || !isValidEmail(email)) {
    return { ok: false, response: badRequestResponse("email must be valid") }
  }

  return { ok: true, data: { email } }
}
