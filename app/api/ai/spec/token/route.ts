import { auth } from "@trigger.dev/sdk"
import { NextResponse } from "next/server"
import { parseSpecTokenBody } from "@/lib/api/spec"
import {
  getOwnedTaskRun,
  taskRunErrorResponse,
} from "@/lib/task-run-access"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  const parsed = await parseSpecTokenBody(request)
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
      expirationTime: "1h",
    })

    return NextResponse.json({ token })
  } catch {
    return NextResponse.json(
      { error: "Failed to create public token" },
      { status: 500 }
    )
  }
}
