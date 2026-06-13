import { NextResponse } from "next/server"
import {
  forbiddenResponse,
  notFoundResponse,
  unauthorizedResponse,
} from "@/lib/api/responses"
import { specDownloadFilename } from "@/lib/spec-blob"
import { getAccessibleProject } from "@/lib/project-access"
import { prisma } from "@/lib/prisma"

interface RouteContext {
  params: Promise<{ roomId: string; specId: string }>
}

export async function GET(_request: Request, context: RouteContext) {
  const { roomId, specId } = await context.params
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

  const spec = await prisma.projectSpec.findFirst({
    where: {
      id: specId,
      projectId: roomId,
    },
  })

  if (!spec) {
    return notFoundResponse()
  }

  try {
    const response = await fetch(spec.filePath, { cache: "no-store" })

    if (!response.ok) {
      return notFoundResponse()
    }

    const markdown = await response.text()

    return new NextResponse(markdown, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Content-Disposition": `attachment; filename="${specDownloadFilename(specId)}"`,
      },
    })
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch spec file" },
      { status: 500 }
    )
  }
}
