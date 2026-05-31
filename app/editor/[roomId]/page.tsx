import { redirect } from "next/navigation"
import { AccessDenied } from "@/components/editor/access-denied"
import { EditorWorkspaceShell } from "@/components/editor/editor-workspace-shell"
import { getAccessibleProject } from "@/lib/project-access"
import { getProjectsForUser } from "@/lib/projects"

interface EditorWorkspacePageProps {
  params: Promise<{ roomId: string }>
}

export default async function EditorWorkspacePage({
  params,
}: EditorWorkspacePageProps) {
  const { roomId } = await params
  const access = await getAccessibleProject(roomId)

  if (access.status === "unauthenticated") {
    redirect("/sign-in")
  }

  if (access.status === "not_found" || access.status === "forbidden") {
    return <AccessDenied />
  }

  const { ownedProjects, sharedProjects } = await getProjectsForUser()
  const isOwner = access.project.ownerId === access.identity.userId

  return (
    <EditorWorkspaceShell
      roomId={roomId}
      projectName={access.project.name}
      isOwner={isOwner}
      ownedProjects={ownedProjects}
      sharedProjects={sharedProjects}
    />
  )
}
