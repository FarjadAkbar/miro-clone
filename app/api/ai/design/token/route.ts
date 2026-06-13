import { auth } from "@trigger.dev/sdk/v3"
import { NextResponse } from "next/server"
import { parseDesignTokenBody } from "@/lib/api/design"
import {
  getOwnedTaskRun,
  taskRunErrorResponse,
} from "@/lib/task-run-access"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  const parsed = await parseDesignTokenBody(request)
  if (!parsed.ok) {
    return parsed.response
  }

  const access = await getOwnedTaskRun(parsed.data.runId)

  if (access.status !== "ok") {
    return taskRunErrorResponse(access.status)
  }

  try {
    const token = await auth.createPublicToken({
      scopes: {
        read: {
          runs: [parsed.data.runId],
        },
      },
    })

    return NextResponse.json({ token })
  } catch {
    return NextResponse.json(
      { error: "Failed to create public token" },
      { status: 500 }
    )
  }
}
