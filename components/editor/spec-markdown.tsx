"use client"

import Markdown from "react-markdown"
import { cn } from "@/lib/utils"

interface SpecMarkdownProps {
  content: string
  className?: string
}

export function SpecMarkdown({ content, className }: SpecMarkdownProps) {
  return (
    <div className={cn("space-y-3 text-sm leading-relaxed text-copy-primary", className)}>
      <Markdown
        components={{
        h1: ({ children }) => (
          <h1 className="text-lg font-semibold text-copy-primary">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-base font-semibold text-copy-primary">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-sm font-semibold text-copy-primary">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="text-sm leading-relaxed text-copy-secondary">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc space-y-1 pl-5 text-copy-secondary">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal space-y-1 pl-5 text-copy-secondary">{children}</ol>
        ),
        li: ({ children }) => <li className="text-sm text-copy-secondary">{children}</li>,
        strong: ({ children }) => (
          <strong className="font-semibold text-copy-primary">{children}</strong>
        ),
        code: ({ children }) => (
          <code className="rounded bg-bg-subtle px-1 py-0.5 font-mono text-xs text-accent-ai-text">
            {children}
          </code>
        ),
      }}
      >
        {content}
      </Markdown>
    </div>
  )
}
