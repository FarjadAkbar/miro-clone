import type { JSX } from "react"
import type { ComponentKind } from "@/types/component-kind"

/** Accent for the icon tile — matches reference diagram color language. */
export const ARCHITECTURE_ICON_ACCENT: Record<
  ComponentKind,
  { tile: string; ink: string }
> = {
  client: { tile: "transparent", ink: "#E8EEF7" },
  user: { tile: "transparent", ink: "#E8EEF7" },
  "load-balancer": { tile: "#7C3AED", ink: "#FFFFFF" },
  server: { tile: "#F97316", ink: "#FFFFFF" },
  "api-gateway": { tile: "#EA580C", ink: "#FFFFFF" },
  database: { tile: "transparent", ink: "#F8FAFC" },
  queue: { tile: "#DB2777", ink: "#FFFFFF" },
  "message-broker": { tile: "#C026D3", ink: "#FFFFFF" },
  cache: { tile: "#0D9488", ink: "#FFFFFF" },
  worker: { tile: "#F59E0B", ink: "#111827" },
  "blob-storage": { tile: "#16A34A", ink: "#FFFFFF" },
  cdn: { tile: "transparent", ink: "#F8FAFC" },
  firewall: { tile: "#DC2626", ink: "#FFFFFF" },
  saas: { tile: "#6366F1", ink: "#FFFFFF" },
}

interface ArchitectureGlyphProps {
  className?: string
  color?: string
}

function PhoneGlyph({ className, color = "currentColor" }: ArchitectureGlyphProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect
        x="14"
        y="4"
        width="20"
        height="40"
        rx="3.5"
        stroke={color}
        strokeWidth="2.25"
      />
      <rect x="20" y="8" width="8" height="2" rx="1" fill={color} />
      <circle cx="24" cy="40" r="1.6" fill={color} />
    </svg>
  )
}

function UserGlyph({ className, color = "currentColor" }: ArchitectureGlyphProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <circle cx="24" cy="16" r="8" stroke={color} strokeWidth="2.25" />
      <path
        d="M10 40c2.5-8 8-12 14-12s11.5 4 14 12"
        stroke={color}
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

function LoadBalancerGlyph({
  className,
  color = "currentColor",
}: ArchitectureGlyphProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <circle cx="24" cy="12" r="5" fill={color} />
      <path
        d="M24 17v7M24 24l-10 8M24 24l10 8"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="14" cy="34" r="4" fill={color} />
      <circle cx="24" cy="36" r="4" fill={color} />
      <circle cx="34" cy="34" r="4" fill={color} />
    </svg>
  )
}

function ServerStackGlyph({
  className,
  color = "currentColor",
}: ArchitectureGlyphProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect x="10" y="8" width="28" height="9" rx="2" fill={color} />
      <rect x="10" y="20" width="28" height="9" rx="2" fill={color} />
      <rect x="10" y="32" width="28" height="9" rx="2" fill={color} />
      <circle cx="15" cy="12.5" r="1.4" fill="#111827" opacity="0.35" />
      <circle cx="15" cy="24.5" r="1.4" fill="#111827" opacity="0.35" />
      <circle cx="15" cy="36.5" r="1.4" fill="#111827" opacity="0.35" />
    </svg>
  )
}

function GatewayGlyph({ className, color = "currentColor" }: ArchitectureGlyphProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M8 18h32v18a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V18Z"
        stroke={color}
        strokeWidth="2.25"
      />
      <path
        d="M16 18V14a8 8 0 0 1 16 0v4"
        stroke={color}
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      <circle cx="24" cy="28" r="2.5" fill={color} />
      <path d="M24 30.5V34" stroke={color} strokeWidth="2.25" strokeLinecap="round" />
    </svg>
  )
}

function DatabaseGlyph({ className, color = "currentColor" }: ArchitectureGlyphProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <ellipse cx="24" cy="12" rx="14" ry="6" stroke={color} strokeWidth="2.25" />
      <path
        d="M10 12v24c0 3.3 6.3 6 14 6s14-2.7 14-6V12"
        stroke={color}
        strokeWidth="2.25"
      />
      <ellipse cx="24" cy="24" rx="14" ry="6" stroke={color} strokeWidth="2" opacity="0.7" />
      <ellipse cx="24" cy="36" rx="14" ry="6" stroke={color} strokeWidth="2" opacity="0.7" />
    </svg>
  )
}

function QueueGlyph({ className, color = "currentColor" }: ArchitectureGlyphProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect x="8" y="10" width="32" height="8" rx="4" fill={color} />
      <rect x="8" y="20" width="32" height="8" rx="4" fill={color} opacity="0.75" />
      <rect x="8" y="30" width="32" height="8" rx="4" fill={color} opacity="0.5" />
    </svg>
  )
}

function BrokerGlyph({ className, color = "currentColor" }: ArchitectureGlyphProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect x="18" y="18" width="12" height="12" rx="2" fill={color} />
      <path
        d="M24 10v8M24 30v8M10 24h8M30 24h8M14 14l6 6M28 28l6 6M34 14l-6 6M20 28l-6 6"
        stroke={color}
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CacheGlyph({ className, color = "currentColor" }: ArchitectureGlyphProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M24 6 28 18h12L30 26l4 12-10-7-10 7 4-12L8 18h12L24 6Z"
        fill={color}
      />
    </svg>
  )
}

function WorkerGlyph({ className, color = "currentColor" }: ArchitectureGlyphProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <circle cx="24" cy="24" r="8" stroke={color} strokeWidth="2.5" />
      <path
        d="M24 8v4M24 36v4M8 24h4M36 24h4M12.5 12.5l2.8 2.8M32.7 32.7l2.8 2.8M35.5 12.5l-2.8 2.8M15.3 32.7l-2.8 2.8"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BucketGlyph({ className, color = "currentColor" }: ArchitectureGlyphProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M10 16h28l-3 22a4 4 0 0 1-4 3.5H17A4 4 0 0 1 13 38L10 16Z"
        fill={color}
      />
      <path
        d="M8 16h32"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M18 10h12c1 0 2 1 2 2v4H16v-4c0-1 1-2 2-2Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  )
}

function CloudGlyph({ className, color = "currentColor" }: ArchitectureGlyphProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M16 34h18a8 8 0 0 0 1.2-15.9A10 10 0 0 0 16.2 14 8.5 8.5 0 0 0 16 34Z"
        fill={color}
      />
      <circle cx="24" cy="26" r="3.5" fill="#080809" opacity="0.35" />
    </svg>
  )
}

function FirewallGlyph({ className, color = "currentColor" }: ArchitectureGlyphProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M24 6 38 12v12c0 10-6.5 16.5-14 18-7.5-1.5-14-8-14-18V12L24 6Z"
        fill={color}
      />
      <path
        d="M18 24h12M24 18v12"
        stroke="#080809"
        strokeWidth="2.25"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  )
}

function SaasGlyph({ className, color = "currentColor" }: ArchitectureGlyphProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect x="10" y="12" width="28" height="24" rx="4" stroke={color} strokeWidth="2.25" />
      <path
        d="M18 28h6M28 20l6 4-6 4"
        stroke={color}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ARCHITECTURE_GLYPHS: Record<
  ComponentKind,
  (props: ArchitectureGlyphProps) => JSX.Element
> = {
  client: PhoneGlyph,
  user: UserGlyph,
  "load-balancer": LoadBalancerGlyph,
  server: ServerStackGlyph,
  "api-gateway": GatewayGlyph,
  database: DatabaseGlyph,
  queue: QueueGlyph,
  "message-broker": BrokerGlyph,
  cache: CacheGlyph,
  worker: WorkerGlyph,
  "blob-storage": BucketGlyph,
  cdn: CloudGlyph,
  firewall: FirewallGlyph,
  saas: SaasGlyph,
}

interface ArchitectureKindIconProps {
  kind: ComponentKind
  className?: string
  /** When true, wrap the glyph in the accent tile used on the canvas. */
  withTile?: boolean
  size?: "sm" | "md" | "lg"
}

const SIZE_CLASS = {
  sm: { wrap: "h-7 w-7", glyph: "h-4 w-4", radius: "rounded-lg" },
  md: { wrap: "h-11 w-11", glyph: "h-7 w-7", radius: "rounded-xl" },
  lg: { wrap: "h-14 w-14", glyph: "h-9 w-9", radius: "rounded-2xl" },
} as const

export function ArchitectureKindIcon({
  kind,
  className,
  withTile = false,
  size = "md",
}: ArchitectureKindIconProps) {
  const Glyph = ARCHITECTURE_GLYPHS[kind]
  const accent = ARCHITECTURE_ICON_ACCENT[kind]
  const dims = SIZE_CLASS[size]

  if (!withTile) {
    return (
      <Glyph
        className={className ?? dims.glyph}
        color={accent.ink}
      />
    )
  }

  const tileBackground =
    accent.tile === "transparent" ? "var(--color-bg-elevated)" : accent.tile

  return (
    <span
      className={`inline-flex items-center justify-center ${dims.wrap} ${dims.radius} border border-surface-border/60 ${className ?? ""}`}
      style={{ backgroundColor: tileBackground }}
      aria-hidden
    >
      <Glyph className={dims.glyph} color={accent.ink} />
    </span>
  )
}
