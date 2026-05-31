import { slugifyProjectName } from "@/lib/project-slug"

const PROJECT_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export function shortSuffix(): string {
  return Math.random().toString(36).slice(2, 6)
}

export function buildRoomId(name: string, suffix: string): string {
  const slug = slugifyProjectName(name)
  return slug ? `${slug}-${suffix}` : `project-${suffix}`
}

export function isValidProjectId(id: string): boolean {
  return id.length >= 1 && id.length <= 128 && PROJECT_ID_PATTERN.test(id)
}
