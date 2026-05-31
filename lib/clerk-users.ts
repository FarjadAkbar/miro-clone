import { clerkClient } from "@clerk/nextjs/server"

export interface ClerkUserProfile {
  displayName: string | null
  imageUrl: string | null
}

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

/** Looks up Clerk users by email for collaborator display enrichment. */
export async function lookupClerkUsersByEmail(
  emails: string[]
): Promise<Map<string, ClerkUserProfile>> {
  const profiles = new Map<string, ClerkUserProfile>()
  const uniqueEmails = [...new Set(emails.map((email) => email.toLowerCase()))]

  const client = await clerkClient()

  await Promise.all(
    uniqueEmails.map(async (email) => {
      try {
        const response = await client.users.getUserList({
          emailAddress: [email],
          limit: 1,
        })

        const user = response.data[0]
        if (!user) return

        profiles.set(email, {
          displayName: resolveDisplayName(user),
          imageUrl: user.imageUrl,
        })
      } catch {
        // Fall back to email-only display when Clerk lookup fails.
      }
    })
  )

  return profiles
}
