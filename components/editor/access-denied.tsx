import Link from "next/link"
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AccessDenied() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-base px-6 text-center">
      <Lock className="h-10 w-10 text-copy-muted" strokeWidth={1.5} />
      <h1 className="mt-4 text-xl font-semibold text-copy-primary">Access denied</h1>
      <p className="mt-2 max-w-sm text-sm text-copy-muted">
        You don&apos;t have permission to view this project, or it doesn&apos;t exist.
      </p>
      <Button asChild className="mt-6">
        <Link href="/editor">Back to projects</Link>
      </Button>
    </div>
  )
}
