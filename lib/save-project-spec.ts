import { randomUUID } from "node:crypto"
import { put } from "@vercel/blob"
import { prisma } from "@/lib/prisma"
import { specBlobPathname } from "@/lib/spec-blob"

export async function saveProjectSpec(
  projectId: string,
  markdown: string
): Promise<string> {
  const specId = randomUUID()
  const pathname = specBlobPathname(projectId, specId)

  const blob = await put(pathname, markdown, {
    access: "public",
    contentType: "text/markdown; charset=utf-8",
    allowOverwrite: true,
    cacheControlMaxAge: 60,
  })

  const spec = await prisma.projectSpec.create({
    data: {
      id: specId,
      projectId,
      filePath: blob.url,
    },
  })

  return spec.id
}
