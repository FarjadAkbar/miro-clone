import {
  Cloud,
  Cog,
  Database,
  DoorOpen,
  ExternalLink,
  HardDrive,
  ListOrdered,
  MessagesSquare,
  Scale,
  Server,
  Shield,
  Smartphone,
  User,
  Zap,
  type LucideIcon,
} from "lucide-react"
import type { ComponentKind } from "@/types/component-kind"

const COMPONENT_KIND_ICONS: Record<ComponentKind, LucideIcon> = {
  client: Smartphone,
  user: User,
  "load-balancer": Scale,
  server: Server,
  "api-gateway": DoorOpen,
  database: Database,
  queue: ListOrdered,
  "message-broker": MessagesSquare,
  cache: Zap,
  worker: Cog,
  "blob-storage": HardDrive,
  cdn: Cloud,
  firewall: Shield,
  saas: ExternalLink,
}

interface ComponentKindIconProps {
  kind: ComponentKind
  className?: string
}

export function ComponentKindIcon({ kind, className }: ComponentKindIconProps) {
  const Icon = COMPONENT_KIND_ICONS[kind]
  return <Icon className={className} aria-hidden />
}
