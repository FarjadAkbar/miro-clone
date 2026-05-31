import { Prisma } from "@prisma/client"
import { NextResponse } from "next/server"
import { isAuthError, requireUserId } from "@/lib/api/auth"
import { parseCreateProjectBody } from "@/lib/api/projects"
import { badRequestResponse } from "@/lib/api/responses"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const userId = await requireUserId()
  if (isAuthError(userId)) {
    return userId
  }

  const projects = await prisma.project.findMany({
    where: { ownerId: userId },
    orderBy: { createdAt: "desc" },
  })

  return NextResponse.json({ projects })
}

export async function POST(request: Request) {
  const userId = await requireUserId()
  if (isAuthError(userId)) {
    return userId
  }

  const parsed = await parseCreateProjectBody(request)
  if (!parsed.ok) {
    return parsed.response
  }

  try {
    const project = await prisma.project.create({
      data: {
        ...(parsed.data.id ? { id: parsed.data.id } : {}),
        ownerId: userId,
        name: parsed.data.name,
      },
    })

    return NextResponse.json({ project }, { status: 201 })
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return badRequestResponse("A project with this id already exists")
    }

    throw error
  }
}
