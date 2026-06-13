import { NextResponse } from "next/server"
import {
  forbiddenResponse,
  notFoundResponse,
  unauthorizedResponse,
} from "@/lib/api/responses"
import { specDownloadFilename } from "@/lib/spec-blob"
import { getAccessibleProject } from "@/lib/project-access"
import { prisma } from "@/lib/prisma"
import type { ProjectSpecListResponse } from "@/types/project-spec"

interface RouteContext {
  params: Promise<{ roomId: string }>
}

export async function GET(_request: Request, context: RouteContext) {
  const { roomId } = await context.params
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

  const specs = await prisma.projectSpec.findMany({
    where: { projectId: roomId },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      createdAt: true,
    },
  })

  const response: ProjectSpecListResponse = {
    specs: specs.map((spec) => ({
      id: spec.id,
      createdAt: spec.createdAt.toISOString(),
      filename: specDownloadFilename(spec.id),
    })),
  }

  return NextResponse.json(response)
}
