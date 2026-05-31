import type { ProjectCollaborator } from "@prisma/client"
import { lookupClerkUsersByEmail } from "@/lib/clerk-users"
import { prisma } from "@/lib/prisma"
import type { CollaboratorProfile } from "@/types/collaborator"

export async function toCollaboratorProfiles(
  collaborators: ProjectCollaborator[]
): Promise<CollaboratorProfile[]> {
  const clerkProfiles = await lookupClerkUsersByEmail(
    collaborators.map((collaborator) => collaborator.email)
  )

  return collaborators.map((collaborator) => {
    const normalizedEmail = collaborator.email.toLowerCase()
    const clerkProfile = clerkProfiles.get(normalizedEmail)

    return {
      id: collaborator.id,
      email: collaborator.email,
      displayName: clerkProfile?.displayName ?? null,
      imageUrl: clerkProfile?.imageUrl ?? null,
      createdAt: collaborator.createdAt.toISOString(),
    }
  })
}

export async function listCollaboratorsForProject(
  projectId: string
): Promise<CollaboratorProfile[]> {
  const collaborators = await prisma.projectCollaborator.findMany({
    where: { projectId },
    orderBy: { createdAt: "asc" },
  })

  return toCollaboratorProfiles(collaborators)
}

