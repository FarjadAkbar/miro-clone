import type { Project as PrismaProject } from "@prisma/client"
import { getClerkIdentity } from "@/lib/project-access"
import { prisma } from "@/lib/prisma"
import type { Project } from "@/types/project"

function toProjectListItem(project: PrismaProject, owned: boolean): Project {
  return {
    id: project.id,
    name: project.name,
    slug: project.id,
    owned,
  }
}

export async function getProjectsForUser(): Promise<{
  ownedProjects: Project[]
  sharedProjects: Project[]
}> {
  const identity = await getClerkIdentity()

  if (!identity) {
    return { ownedProjects: [], sharedProjects: [] }
  }

  const owned = await prisma.project.findMany({
    where: { ownerId: identity.userId },
    orderBy: { createdAt: "desc" },
  })

  let shared: PrismaProject[] = []

  if (identity.email) {
    const collaborations = await prisma.projectCollaborator.findMany({
      where: { email: identity.email },
      include: { project: true },
      orderBy: { createdAt: "desc" },
    })

    shared = collaborations
      .map((entry) => entry.project)
      .filter((project) => project.ownerId !== identity.userId)
  }

  return {
    ownedProjects: owned.map((project) => toProjectListItem(project, true)),
    sharedProjects: shared.map((project) => toProjectListItem(project, false)),
  }
}
