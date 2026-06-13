import { put } from "@vercel/blob"
import { NextResponse } from "next/server"
import { parseCanvasSaveBody } from "@/lib/api/canvas"
import {
  forbiddenResponse,
  notFoundResponse,
  unauthorizedResponse,
} from "@/lib/api/responses"
import { canvasBlobPathname } from "@/lib/canvas-blob"
import { getAccessibleProject } from "@/lib/project-access"
import { prisma } from "@/lib/prisma"

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

  const { canvasJsonPath } = access.project

  if (!canvasJsonPath) {
    return NextResponse.json({ nodes: [], edges: [] })
  }

  try {
    const response = await fetch(canvasJsonPath, { cache: "no-store" })

    if (!response.ok) {
      return NextResponse.json({ nodes: [], edges: [] })
    }

    const snapshot = await response.json()
    return NextResponse.json(snapshot)
  } catch {
    return NextResponse.json({ nodes: [], edges: [] })
  }
}

export async function PUT(request: Request, context: RouteContext) {
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

  const parsed = await parseCanvasSaveBody(request)
  if (!parsed.ok) {
    return parsed.response
  }

  try {
    const pathname = canvasBlobPathname(roomId)
    const body = JSON.stringify(parsed.data)

    const blob = await put(pathname, body, {
      access: "public",
      contentType: "application/json",
      allowOverwrite: true,
      cacheControlMaxAge: 60,
    })

    await prisma.project.update({
      where: { id: roomId },
      data: { canvasJsonPath: blob.url },
    })

    return NextResponse.json({
      canvasJsonPath: blob.url,
    })
  } catch {
    return NextResponse.json(
      { error: "Failed to save canvas" },
      { status: 500 }
    )
  }
}
