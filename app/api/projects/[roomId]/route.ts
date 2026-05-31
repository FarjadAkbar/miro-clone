import { NextResponse } from "next/server"
import { isAuthError, requireUserId } from "@/lib/api/auth"
import { parseRenameProjectBody } from "@/lib/api/projects"
import {
  forbiddenResponse,
  notFoundResponse,
} from "@/lib/api/responses"
import { prisma } from "@/lib/prisma"

interface RouteContext {
  params: Promise<{ roomId: string }>
}

export async function PATCH(request: Request, context: RouteContext) {
  const userId = await requireUserId()
  if (isAuthError(userId)) {
    return userId
  }

  const { roomId } = await context.params

  const existing = await prisma.project.findUnique({
    where: { id: roomId },
  })

  if (!existing) {
    return notFoundResponse()
  }

  if (existing.ownerId !== userId) {
    return forbiddenResponse()
  }

  const parsed = await parseRenameProjectBody(request)
  if (!parsed.ok) {
    return parsed.response
  }

  const project = await prisma.project.update({
    where: { id: roomId },
    data: { name: parsed.data.name },
  })

  return NextResponse.json({ project })
}

export async function DELETE(_request: Request, context: RouteContext) {
  const userId = await requireUserId()
  if (isAuthError(userId)) {
    return userId
  }

  const { roomId } = await context.params

  const existing = await prisma.project.findUnique({
    where: { id: roomId },
  })

  if (!existing) {
    return notFoundResponse()
  }

  if (existing.ownerId !== userId) {
    return forbiddenResponse()
  }

  await prisma.project.delete({
    where: { id: roomId },
  })

  return NextResponse.json({ success: true })
}
