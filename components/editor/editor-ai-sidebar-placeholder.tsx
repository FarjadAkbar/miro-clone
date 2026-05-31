interface EditorAiSidebarPlaceholderProps {
  open: boolean
}

export function EditorAiSidebarPlaceholder({
  open,
}: EditorAiSidebarPlaceholderProps) {
  if (!open) {
    return null
  }

  return (
    <aside className="flex w-80 shrink-0 flex-col border-l border-surface-border bg-bg-surface">
      <div className="border-b border-surface-border px-4 py-3">
        <h2 className="text-sm font-semibold text-copy-primary">AI Assistant</h2>
      </div>
      <div className="flex flex-1 items-center justify-center p-6">
        <p className="text-center text-sm text-copy-muted">
          AI chat will appear here in a future update.
        </p>
      </div>
    </aside>
  )
}
