import { NextResponse } from "next/server"
import {
  forbiddenResponse,
  notFoundResponse,
} from "@/lib/api/responses"
import { getAccessibleProject } from "@/lib/project-access"
import { prisma } from "@/lib/prisma"

interface RouteContext {
  params: Promise<{ roomId: string; collaboratorId: string }>
}

export async function DELETE(_request: Request, context: RouteContext) {
  const { roomId, collaboratorId } = await context.params
  const access = await getAccessibleProject(roomId)

  if (access.status === "unauthenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (access.status === "not_found") {
    return notFoundResponse()
  }

  if (access.status === "forbidden") {
    return forbiddenResponse()
  }

  if (access.project.ownerId !== access.identity.userId) {
    return forbiddenResponse()
  }

  const collaborator = await prisma.projectCollaborator.findFirst({
    where: { id: collaboratorId, projectId: roomId },
  })

  if (!collaborator) {
    return notFoundResponse()
  }

  await prisma.projectCollaborator.delete({
    where: { id: collaboratorId },
  })

  return NextResponse.json({ success: true })
}
