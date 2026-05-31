import { Prisma } from "@prisma/client"
import { NextResponse } from "next/server"
import { parseInviteCollaboratorBody } from "@/lib/api/collaborators"
import {
  badRequestResponse,
  forbiddenResponse,
  notFoundResponse,
} from "@/lib/api/responses"
import {
  listCollaboratorsForProject,
  toCollaboratorProfiles,
} from "@/lib/collaborators"
import {
  getAccessibleProject,
  getClerkIdentity,
} from "@/lib/project-access"
import { prisma } from "@/lib/prisma"

interface RouteContext {
  params: Promise<{ roomId: string }>
}

export async function GET(_request: Request, context: RouteContext) {
  const { roomId } = await context.params
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

  const collaborators = await listCollaboratorsForProject(roomId)
  const isOwner = access.project.ownerId === access.identity.userId

  return NextResponse.json({ collaborators, isOwner })
}

export async function POST(request: Request, context: RouteContext) {
  const { roomId } = await context.params
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

  const parsed = await parseInviteCollaboratorBody(request)
  if (!parsed.ok) {
    return parsed.response
  }

  const identity = await getClerkIdentity()
  const ownerEmail = identity?.email?.toLowerCase()

  if (ownerEmail && parsed.data.email === ownerEmail) {
    return badRequestResponse("You cannot invite yourself")
  }

  try {
    const collaborator = await prisma.projectCollaborator.create({
      data: {
        projectId: roomId,
        email: parsed.data.email,
      },
    })

    const [enriched] = await toCollaboratorProfiles([collaborator])

    return NextResponse.json({ collaborator: enriched }, { status: 201 })
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return badRequestResponse("This collaborator is already invited")
    }

    throw error
  }
}
