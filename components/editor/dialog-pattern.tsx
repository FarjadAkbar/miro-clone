"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface DialogPatternProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export function DialogPattern({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  className,
}: DialogPatternProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "rounded-3xl border-surface-border bg-bg-surface text-copy-primary sm:max-w-md [&>button.absolute]:hidden",
          className
        )}
      >
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5 text-left">
              <DialogTitle className="text-copy-primary">{title}</DialogTitle>
              {description ? (
                <DialogDescription className="text-copy-muted">
                  {description}
                </DialogDescription>
              ) : null}
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="shrink-0 text-copy-secondary hover:text-copy-primary"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </DialogHeader>
        {children}
        {footer ? <DialogFooter>{footer}</DialogFooter> : null}
      </DialogContent>
    </Dialog>
  )
}
