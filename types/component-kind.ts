import { NODE_COLORS, type CanvasNodeShape } from "@/types/canvas"

export const COMPONENT_KINDS = [
  "client",
  "user",
  "load-balancer",
  "server",
  "api-gateway",
  "database",
  "queue",
  "message-broker",
  "cache",
  "worker",
  "blob-storage",
  "cdn",
  "firewall",
  "saas",
] as const

export type ComponentKind = (typeof COMPONENT_KINDS)[number]

export interface ComponentKindDefinition {
  id: ComponentKind
  label: string
  shape: CanvasNodeShape
  colorIndex: number
  width: number
  height: number
}

const COMPONENT_KIND_DEFINITIONS: Record<
  ComponentKind,
  Omit<ComponentKindDefinition, "id">
> = {
  client: {
    label: "Client",
    shape: "rectangle",
    colorIndex: 1,
    width: 140,
    height: 80,
  },
  user: {
    label: "User",
    shape: "circle",
    colorIndex: 1,
    width: 96,
    height: 96,
  },
  "load-balancer": {
    label: "Load Balancer",
    shape: "hexagon",
    colorIndex: 2,
    width: 128,
    height: 120,
  },
  server: {
    label: "Server",
    shape: "rectangle",
    colorIndex: 3,
    width: 160,
    height: 88,
  },
  "api-gateway": {
    label: "API Gateway",
    shape: "hexagon",
    colorIndex: 2,
    width: 132,
    height: 120,
  },
  database: {
    label: "Database",
    shape: "cylinder",
    colorIndex: 1,
    width: 112,
    height: 128,
  },
  queue: {
    label: "Queue",
    shape: "pill",
    colorIndex: 5,
    width: 152,
    height: 64,
  },
  "message-broker": {
    label: "Message Broker",
    shape: "pill",
    colorIndex: 5,
    width: 168,
    height: 72,
  },
  cache: {
    label: "Cache",
    shape: "cylinder",
    colorIndex: 6,
    width: 112,
    height: 112,
  },
  worker: {
    label: "Worker",
    shape: "rectangle",
    colorIndex: 3,
    width: 148,
    height: 80,
  },
  "blob-storage": {
    label: "Blob Storage",
    shape: "rectangle",
    colorIndex: 6,
    width: 148,
    height: 88,
  },
  cdn: {
    label: "CDN",
    shape: "circle",
    colorIndex: 7,
    width: 104,
    height: 104,
  },
  firewall: {
    label: "Firewall / WAF",
    shape: "diamond",
    colorIndex: 4,
    width: 120,
    height: 120,
  },
  saas: {
    label: "Third-party / SaaS",
    shape: "rectangle",
    colorIndex: 2,
    width: 140,
    height: 80,
  },
}

export function isComponentKind(value: string): value is ComponentKind {
  return (COMPONENT_KINDS as readonly string[]).includes(value)
}

export function getComponentKindDefinition(
  kind: ComponentKind
): ComponentKindDefinition {
  return { id: kind, ...COMPONENT_KIND_DEFINITIONS[kind] }
}

export function componentKindColor(kind: ComponentKind) {
  const { colorIndex } = getComponentKindDefinition(kind)
  return NODE_COLORS[colorIndex] ?? NODE_COLORS[0]
}
