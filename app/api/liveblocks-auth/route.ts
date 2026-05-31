import { parseLiveblocksAuthBody } from "@/lib/api/liveblocks-auth"
import {
  badRequestResponse,
  forbiddenResponse,
  unauthorizedResponse,
} from "@/lib/api/responses"
import { getLiveblocks } from "@/lib/liveblocks"
import { ensureLiveblocksRoom } from "@/lib/liveblocks-room"
import { buildLiveblocksUserInfo } from "@/lib/liveblocks-session-user"
import { getAccessibleProject } from "@/lib/project-access"

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return badRequestResponse("Invalid request body")
  }

  const parsed = parseLiveblocksAuthBody(body)
  if (!parsed.ok) {
    return parsed.response
  }

  const access = await getAccessibleProject(parsed.room)

  if (access.status === "unauthenticated") {
    return unauthorizedResponse()
  }

  if (access.status !== "ok") {
    return forbiddenResponse()
  }

  await ensureLiveblocksRoom(parsed.room)

  const userInfo = await buildLiveblocksUserInfo(access.identity)

  const liveblocks = getLiveblocks()
  const session = liveblocks.prepareSession(access.identity.userId, {
    userInfo,
  })

  session.allow(parsed.room, session.FULL_ACCESS)

  const { status, body: responseBody } = await session.authorize()

  return new Response(responseBody, { status })
}
