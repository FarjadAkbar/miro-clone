import { EditorShell } from "@/components/editor/editor-shell"
import { getProjectsForUser } from "@/lib/projects"

export default async function EditorPage() {
  const { ownedProjects, sharedProjects } = await getProjectsForUser()

  return (
    <EditorShell
      ownedProjects={ownedProjects}
      sharedProjects={sharedProjects}
    />
  )
}
