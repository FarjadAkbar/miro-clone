import { auth, currentUser } from "@clerk/nextjs/server"
import type { Project as PrismaProject } from "@prisma/client"
import { prisma } from "@/lib/prisma"

export interface ClerkIdentity {
  userId: string
  email: string | null
}

export type ProjectAccessResult =
  | { status: "unauthenticated" }
  | { status: "not_found" }
  | { status: "forbidden" }
  | { status: "ok"; project: PrismaProject; identity: ClerkIdentity }

export async function getClerkIdentity(): Promise<ClerkIdentity | null> {
  const { userId } = await auth()

  if (!userId) {
    return null
  }

  const user = await currentUser()
  const email =
    user?.emailAddresses.find((entry) => entry.id === user.primaryEmailAddressId)
      ?.emailAddress ?? user?.emailAddresses[0]?.emailAddress ?? null

  return { userId, email }
}

export async function getProjectByRoomId(
  roomId: string
): Promise<PrismaProject | null> {
  return prisma.project.findUnique({
    where: { id: roomId },
  })
}

export async function userHasProjectAccess(
  project: PrismaProject,
  identity: ClerkIdentity
): Promise<boolean> {
  if (project.ownerId === identity.userId) {
    return true
  }

  if (!identity.email) {
    return false
  }

  const collaborator = await prisma.projectCollaborator.findUnique({
    where: {
      projectId_email: {
        projectId: project.id,
        email: identity.email,
      },
    },
  })

  return collaborator !== null
}

export async function getAccessibleProject(
  roomId: string
): Promise<ProjectAccessResult> {
  const identity = await getClerkIdentity()

  if (!identity) {
    return { status: "unauthenticated" }
  }

  const project = await getProjectByRoomId(roomId)

  if (!project) {
    return { status: "not_found" }
  }

  const hasAccess = await userHasProjectAccess(project, identity)

  if (!hasAccess) {
    return { status: "forbidden" }
  }

  return { status: "ok", project, identity }
}
