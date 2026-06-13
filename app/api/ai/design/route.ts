import { auth, tasks } from "@trigger.dev/sdk/v3"
import { NextResponse } from "next/server"
import { parseDesignTriggerBody } from "@/lib/api/design"
import {
  forbiddenResponse,
  notFoundResponse,
  unauthorizedResponse,
} from "@/lib/api/responses"
import { getAccessibleProject } from "@/lib/project-access"
import { prisma } from "@/lib/prisma"
import type { designAgentTask } from "@/trigger/design-agent"
import { DESIGN_AGENT_TASK_ID } from "@/types/design-agent"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  const parsed = await parseDesignTriggerBody(request)
  if (!parsed.ok) {
    return parsed.response
  }

  const { prompt, roomId, projectId } = parsed.data
  const access = await getAccessibleProject(projectId)

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
    const handle = await tasks.trigger<typeof designAgentTask>(
      DESIGN_AGENT_TASK_ID,
      {
        prompt,
        roomId,
      }
    )

    await prisma.taskRun.create({
      data: {
        runId: handle.id,
        projectId,
        userId: access.identity.userId,
      },
    })

    return NextResponse.json({ runId: handle.id })
  } catch {
    return NextResponse.json(
      { error: "Failed to trigger design task" },
      { status: 500 }
    )
  }
}
