import { badRequestResponse } from "@/lib/api/responses"
import { isCanvasSnapshot, type CanvasSnapshot } from "@/types/canvas-snapshot"

type ParseCanvasBodyResult =
  | { ok: true; data: CanvasSnapshot }
  | { ok: false; response: Response }

export async function parseCanvasSaveBody(
  request: Request
): Promise<ParseCanvasBodyResult> {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return { ok: false, response: badRequestResponse("Invalid JSON body") }
  }

  if (!isCanvasSnapshot(body)) {
    return {
      ok: false,
      response: badRequestResponse("Body must include nodes and edges arrays"),
    }
  }

  return { ok: true, data: body }
}
