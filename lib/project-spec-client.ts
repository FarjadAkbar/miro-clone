export function formatSpecDate(iso: string): string {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso))
}

export function specDownloadUrl(roomId: string, specId: string): string {
  return `/api/projects/${roomId}/specs/${specId}/download`
}

export async function downloadProjectSpec(
  roomId: string,
  specId: string,
  filename: string
): Promise<void> {
  const response = await fetch(specDownloadUrl(roomId, specId))

  if (!response.ok) {
    throw new Error("Failed to download spec")
  }

  const blob = await response.blob()
  const objectUrl = URL.createObjectURL(blob)
  const anchor = document.createElement("a")
  anchor.href = objectUrl
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(objectUrl)
}

export async function fetchProjectSpecContent(
  roomId: string,
  specId: string
): Promise<string> {
  const response = await fetch(specDownloadUrl(roomId, specId))

  if (!response.ok) {
    throw new Error("Failed to load spec content")
  }

  return response.text()
}
