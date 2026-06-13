"use client"

import { Download, Loader2 } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { SpecMarkdown } from "@/components/editor/spec-markdown"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { formatSpecDate } from "@/lib/format-spec-date"
import {
  downloadProjectSpec,
  fetchProjectSpecContent,
} from "@/lib/project-spec-client"
import type { ProjectSpecListItem } from "@/types/project-spec"

interface SpecPreviewModalProps {
  roomId: string
  spec: ProjectSpecListItem | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SpecPreviewModal({
  roomId,
  spec,
  open,
  onOpenChange,
}: SpecPreviewModalProps) {
  const [content, setContent] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)

  useEffect(() => {
    if (!open || !spec) {
      setContent(null)
      setError(null)
      setIsLoading(false)
      return
    }

    let cancelled = false
    setIsLoading(true)
    setError(null)
    setContent(null)

    void fetchProjectSpecContent(roomId, spec.id)
      .then((markdown) => {
        if (!cancelled) {
          setContent(markdown)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("Could not load spec content.")
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [open, roomId, spec])

  const handleDownload = useCallback(async () => {
    if (!spec) {
      return
    }

    setIsDownloading(true)
    try {
      await downloadProjectSpec(roomId, spec.id, spec.filename)
    } catch {
      setError("Could not download spec.")
    } finally {
      setIsDownloading(false)
    }
  }, [roomId, spec])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-hidden rounded-3xl border-surface-border bg-bg-surface p-0">
        <DialogHeader className="border-b border-surface-border px-6 py-4">
          <DialogTitle className="text-copy-primary">{spec?.filename}</DialogTitle>
          <DialogDescription className="text-copy-muted">
            {spec ? formatSpecDate(spec.createdAt) : ""}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[55vh] px-6 py-4">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-5 w-5 animate-spin text-accent-ai" />
            </div>
          ) : error ? (
            <p className="text-sm text-state-error">{error}</p>
          ) : content ? (
            <SpecMarkdown content={content} />
          ) : null}
        </ScrollArea>

        <DialogFooter className="border-t border-surface-border px-6 py-4">
          <Button
            type="button"
            variant="outline"
            className="border-surface-border text-copy-secondary"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
          <Button
            type="button"
            className="bg-accent-ai text-white hover:bg-accent-ai/90"
            onClick={() => void handleDownload()}
            disabled={!spec || isDownloading}
          >
            {isDownloading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
            Download
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
