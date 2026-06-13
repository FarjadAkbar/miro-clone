import { tasks } from "@trigger.dev/sdk/v3"
import { NextResponse } from "next/server"
import { parseSpecTriggerBody } from "@/lib/api/spec"
import {
  forbiddenResponse,
  notFoundResponse,
  unauthorizedResponse,
} from "@/lib/api/responses"
import { getAccessibleProject } from "@/lib/project-access"
import { prisma } from "@/lib/prisma"
import type { generateSpecTask } from "@/trigger/generate-spec"
import { GENERATE_SPEC_TASK_ID } from "@/types/spec-agent"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  const parsed = await parseSpecTriggerBody(request)
  if (!parsed.ok) {
    return parsed.response
  }

  const { roomId, chatHistory, nodes, edges } = parsed.data
  const access = await getAccessibleProject(roomId)

  if (access.status === "unauthenticated") {
    return unauthorizedResponse()
  }

  if (access.status === "not_found") {
    return notFoundResponse()
  }

  if (access.status === "forbidden") {
    return forbiddenResponse()
  }

  try {
    const handle = await tasks.trigger<typeof generateSpecTask>(
      GENERATE_SPEC_TASK_ID,
      {
        projectId: roomId,
        roomId,
        chatHistory,
        nodes,
        edges,
      }
    )

    await prisma.taskRun.create({
      data: {
        runId: handle.id,
        projectId: roomId,
        userId: access.identity.userId,
      },
    })

    return NextResponse.json({ runId: handle.id })
  } catch {
    return NextResponse.json(
      { error: "Failed to trigger spec generation" },
      { status: 500 }
    )
  }
}
