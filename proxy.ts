import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { AUTH_REDIRECT_URL } from "@/lib/clerk-routes"

const signInUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in"
const signUpUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL ?? "/sign-up"

const isAuthRoute = createRouteMatcher([
  `${signInUrl}(.*)`,
  `${signUpUrl}(.*)`,
])

export const proxy = clerkMiddleware(async (auth, request) => {
  const { userId } = await auth()

  if (userId && isAuthRoute(request)) {
    return NextResponse.redirect(new URL(AUTH_REDIRECT_URL, request.url))
  }

  if (!isAuthRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
}