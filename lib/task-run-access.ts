import { getClerkIdentity, userHasProjectAccess } from "@/lib/project-access"
import { prisma } from "@/lib/prisma"
import {
  forbiddenResponse,
  notFoundResponse,
  unauthorizedResponse,
} from "@/lib/api/responses"

export async function getOwnedTaskRun(runId: string) {
  const identity = await getClerkIdentity()

  if (!identity) {
    return { status: "unauthenticated" as const }
  }

  const taskRun = await prisma.taskRun.findUnique({
    where: { runId },
    include: { project: true },
  })

  if (!taskRun) {
    return { status: "not_found" as const }
  }

  if (taskRun.userId !== identity.userId) {
    return { status: "forbidden" as const }
  }

  const hasAccess = await userHasProjectAccess(taskRun.project, identity)

  if (!hasAccess) {
    return { status: "forbidden" as const }
  }

  return {
    status: "ok" as const,
    taskRun,
    identity,
  }
}

export function taskRunErrorResponse(
  status: "unauthenticated" | "not_found" | "forbidden"
) {
  switch (status) {
    case "unauthenticated":
      return unauthorizedResponse()
    case "not_found":
      return notFoundResponse()
    case "forbidden":
      return forbiddenResponse()
  }
}
