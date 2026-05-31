import { currentUser } from "@clerk/nextjs/server"
import type { ClerkIdentity } from "@/lib/project-access"
import { cursorColorForUserId } from "@/lib/liveblocks-user-color"

function resolveDisplayName(user: {
  firstName: string | null
  lastName: string | null
  username: string | null
}): string | null {
  const fullName = [user.firstName, user.lastName].filter(Boolean).join(" ").trim()
  if (fullName) return fullName
  if (user.username) return user.username
  return null
}

export async function buildLiveblocksUserInfo(identity: ClerkIdentity) {
  const user = await currentUser()
  const name =
    (user
      ? resolveDisplayName(user)
      : null) ??
    identity.email ??
    "Anonymous"

  return {
    name,
    avatar: user?.imageUrl ?? "",
    color: cursorColorForUserId(identity.userId),
  }
}
