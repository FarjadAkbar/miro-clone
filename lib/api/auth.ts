import { auth } from "@clerk/nextjs/server"
import { unauthorizedResponse } from "@/lib/api/responses"

export async function requireUserId(): Promise<string | Response> {
  const { userId } = await auth()
  console.log(userId, "userId");
  if (!userId) {
    return unauthorizedResponse()
  }

  return userId
}

export function isAuthError(result: string | Response): result is Response {
  return result instanceof Response
}
