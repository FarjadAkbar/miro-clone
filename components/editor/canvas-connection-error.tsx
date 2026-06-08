import { WifiOff } from "lucide-react"

interface CanvasConnectionErrorProps {
  message?: string
}

export function CanvasConnectionError({
  message = "Unable to connect to the collaborative canvas. Check your connection and try again.",
}: CanvasConnectionErrorProps) {
  return (
    <div className="flex flex-1 items-center justify-center bg-bg-base p-6">
      <div className="flex max-w-md flex-col items-center gap-3 text-center">
        <WifiOff className="h-8 w-8 text-copy-muted" aria-hidden />
        <p className="text-sm text-copy-secondary sm:text-base">{message}</p>
      </div>
    </div>
  )
}
