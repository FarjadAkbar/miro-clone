import { ArchitectureKindIcon } from "@/components/editor/architecture-icons"
import type { ComponentKind } from "@/types/component-kind"

interface ComponentKindIconProps {
  kind: ComponentKind
  className?: string
  withTile?: boolean
  size?: "sm" | "md" | "lg"
}

export function ComponentKindIcon({
  kind,
  className,
  withTile = false,
  size = "sm",
}: ComponentKindIconProps) {
  return (
    <ArchitectureKindIcon
      kind={kind}
      className={className}
      withTile={withTile}
      size={size}
    />
  )
}
