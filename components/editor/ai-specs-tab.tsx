"use client"

import { Download, FileText, Loader2 } from "lucide-react"
import { useCallback, useState } from "react"
import { SpecPreviewModal } from "@/components/editor/spec-preview-modal"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useProjectSpecs } from "@/hooks/use-project-specs"
import { formatSpecDate } from "@/lib/format-spec-date"
import { downloadProjectSpec } from "@/lib/project-spec-client"
import type { ProjectSpecListItem } from "@/types/project-spec"

interface AiSpecsTabProps {
  roomId: string
}

export function AiSpecsTab({ roomId }: AiSpecsTabProps) {
  const { specs, isLoading, error } = useProjectSpecs(roomId)
  const [selectedSpec, setSelectedSpec] = useState<ProjectSpecListItem | null>(
    null
  )
  const [previewOpen, setPreviewOpen] = useState(false)
  const [downloadingId, setDownloadingId] = useState<string | null>(null)

  const openPreview = useCallback((spec: ProjectSpecListItem) => {
    setSelectedSpec(spec)
    setPreviewOpen(true)
  }, [])

  const handleDownload = useCallback(
    async (spec: ProjectSpecListItem) => {
      setDownloadingId(spec.id)
      try {
        await downloadProjectSpec(roomId, spec.id, spec.filename)
      } finally {
        setDownloadingId(null)
      }
    },
    [roomId]
  )

  return (
    <>
      <div className="flex min-h-0 flex-1 flex-col gap-4 px-4 py-4">
        <Button
          type="button"
          className="w-full shrink-0 bg-accent-ai text-white hover:bg-accent-ai/90"
        >
          Generate Spec
        </Button>

        {isLoading ? (
          <div className="flex flex-1 items-center justify-center py-8">
            <Loader2 className="h-5 w-5 animate-spin text-accent-ai" />
          </div>
        ) : error ? (
          <p className="text-xs text-state-error">{error}</p>
        ) : specs.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 py-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-ai/15 text-accent-ai">
              <FileText className="h-5 w-5" />
            </div>
            <div className="max-w-[240px] space-y-1">
              <p className="text-sm font-medium text-copy-secondary">
                No specs yet
              </p>
              <p className="text-xs text-copy-muted">
                Use Generate Spec above to turn your canvas into a Markdown technical specification.
              </p>
            </div>
          </div>
        ) : (
          <ScrollArea className="min-h-0 flex-1">
            <ul className="space-y-2 pr-3">
              {specs.map((spec) => (
                <li key={spec.id}>
                  <div className="rounded-2xl border border-surface-border bg-bg-elevated p-3">
                    <button
                      type="button"
                      onClick={() => openPreview(spec)}
                      className="w-full text-left"
                    >
                      <p className="truncate text-sm font-medium text-copy-primary">
                        {spec.filename}
                      </p>
                      <p className="mt-0.5 text-xs text-copy-muted">
                        {formatSpecDate(spec.createdAt)}
                      </p>
                    </button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-3 w-full border-surface-border text-copy-secondary"
                      onClick={() => void handleDownload(spec)}
                      disabled={downloadingId === spec.id}
                    >
                      {downloadingId === spec.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Download className="h-4 w-4" />
                      )}
                      Download
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        )}
      </div>

      <SpecPreviewModal
        roomId={roomId}
        spec={selectedSpec}
        open={previewOpen}
        onOpenChange={setPreviewOpen}
      />
    </>
  )
}
