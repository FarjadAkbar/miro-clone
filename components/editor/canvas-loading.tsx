import { Loader2 } from "lucide-react"

export function CanvasLoading() {
  return (
    <div className="flex flex-1 items-center justify-center bg-bg-base">
      <div className="flex flex-col items-center gap-3 text-copy-muted">
        <Loader2 className="h-6 w-6 animate-spin" aria-hidden />
        <p className="text-sm">Loading canvas…</p>
      </div>
    </div>
  )
}
