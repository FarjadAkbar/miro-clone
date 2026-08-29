import { MarkerType, type OnEdgesChange, type OnNodesChange } from "@xyflow/react"
import { createCanvasGroup } from "@/lib/canvas-group"
import {
  CANVAS_EDGE_TYPE,
  CANVAS_NODE_TYPE,
  DEFAULT_EDGE_COLOR,
  NODE_COLORS,
  SHAPE_DEFAULT_SIZES,
  type CanvasEdge,
  type CanvasFlowNode,
  type CanvasGroup,
  type CanvasNode,
  type CanvasNodeShape,
} from "@/types/canvas"
import {
  getComponentKindDefinition,
  type ComponentKind,
} from "@/types/component-kind"

export interface CanvasTemplate {
  id: string
  name: string
  description: string
  nodes: CanvasFlowNode[]
  edges: CanvasEdge[]
}

export interface TemplateBounds {
  minX: number
  minY: number
  maxX: number
  maxY: number
  width: number
  height: number
}

function templateGroup(
  id: string,
  label: string,
  x: number,
  y: number,
  width: number,
  height: number
): CanvasGroup {
  return createCanvasGroup({
    id,
    label,
    position: { x, y },
    width,
    height,
  })
}

function templateNode(
  id: string,
  label: string,
  shape: CanvasNodeShape,
  x: number,
  y: number,
  colorIndex: number,
  options?: {
    width?: number
    height?: number
    componentKind?: ComponentKind
    parentId?: string
  }
): CanvasNode {
  const kind = options?.componentKind
    ? getComponentKindDefinition(options.componentKind)
    : null
  const color =
    NODE_COLORS[options?.componentKind ? kind!.colorIndex : colorIndex] ??
    NODE_COLORS[0]
  const defaults = kind
    ? { width: kind.width, height: kind.height }
    : SHAPE_DEFAULT_SIZES[shape]
  const width = options?.width ?? defaults.width
  const height = options?.height ?? defaults.height

  return {
    id,
    type: CANVAS_NODE_TYPE,
    position: { x, y },
    width,
    height,
    ...(options?.parentId
      ? { parentId: options.parentId, extent: "parent" as const }
      : {}),
    data: {
      label,
      color: color.fill,
      textColor: color.text,
      shape: kind?.shape ?? shape,
      ...(options?.componentKind
        ? { componentKind: options.componentKind }
        : {}),
    },
  }
}

function templateEdge(
  id: string,
  source: string,
  target: string,
  label = "",
  sequence?: number
): CanvasEdge {
  return {
    id,
    type: CANVAS_EDGE_TYPE,
    source,
    target,
    data: {
      label,
      ...(sequence !== undefined ? { sequence } : {}),
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: DEFAULT_EDGE_COLOR,
      width: 16,
      height: 16,
    },
  }
}

export function getNodeDimensions(node: CanvasFlowNode): {
  width: number
  height: number
} {
  if (node.type === CANVAS_NODE_TYPE) {
    const defaults = SHAPE_DEFAULT_SIZES[node.data.shape]
    return {
      width: node.width ?? defaults.width,
      height: node.height ?? defaults.height,
    }
  }

  return {
    width: node.width ?? 420,
    height: node.height ?? 280,
  }
}

export function getTemplateBounds(nodes: CanvasFlowNode[]): TemplateBounds {
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  for (const node of nodes) {
    const { width, height } = getNodeDimensions(node)
    minX = Math.min(minX, node.position.x)
    minY = Math.min(minY, node.position.y)
    maxX = Math.max(maxX, node.position.x + width)
    maxY = Math.max(maxY, node.position.y + height)
  }

  if (!Number.isFinite(minX)) {
    return { minX: 0, minY: 0, maxX: 0, maxY: 0, width: 0, height: 0 }
  }

  return {
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX,
    height: maxY - minY,
  }
}

export function getNodeCenter(node: CanvasFlowNode): { x: number; y: number } {
  const { width, height } = getNodeDimensions(node)
  return {
    x: node.position.x + width / 2,
    y: node.position.y + height / 2,
  }
}

export function applyCanvasTemplate(
  template: CanvasTemplate,
  currentNodes: CanvasFlowNode[],
  currentEdges: CanvasEdge[],
  onNodesChange: OnNodesChange<CanvasFlowNode>,
  onEdgesChange: OnEdgesChange<CanvasEdge>
): void {
  onEdgesChange([
    ...currentEdges.map((edge) => ({ type: "remove" as const, id: edge.id })),
    ...template.edges.map((edge) => ({ type: "add" as const, item: edge })),
  ])

  onNodesChange([
    ...currentNodes.map((node) => ({ type: "remove" as const, id: node.id })),
    ...template.nodes.map((node) => ({ type: "add" as const, item: node })),
  ])
}

export const CANVAS_TEMPLATES: CanvasTemplate[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    description:
      "Scalable chat: clients, edge, chat + presence services, Kafka fan-out, Cassandra/media stores.",
    nodes: [
      templateGroup("wa-clients", "Clients", 40, 40, 280, 420),
      templateGroup("wa-edge", "Edge", 380, 40, 300, 420),
      templateGroup("wa-app", "Application", 740, 40, 720, 420),
      templateGroup("wa-data", "Data & Messaging", 1520, 40, 620, 520),
      templateNode("wa-mobile", "Mobile App", "rectangle", 50, 60, 1, {
        componentKind: "client",
        parentId: "wa-clients",
      }),
      templateNode("wa-web", "Web Client", "rectangle", 50, 200, 1, {
        componentKind: "client",
        parentId: "wa-clients",
      }),
      templateNode("wa-cdn", "CDN", "hexagon", 50, 60, 7, {
        componentKind: "cdn",
        parentId: "wa-edge",
      }),
      templateNode("wa-lb", "Load Balancer", "hexagon", 50, 220, 2, {
        componentKind: "load-balancer",
        parentId: "wa-edge",
      }),
      templateNode("wa-gateway", "API Gateway", "hexagon", 40, 40, 2, {
        componentKind: "api-gateway",
        parentId: "wa-app",
      }),
      templateNode("wa-chat", "Chat Service", "rectangle", 260, 40, 3, {
        componentKind: "server",
        parentId: "wa-app",
      }),
      templateNode("wa-presence", "Presence", "rectangle", 260, 180, 5, {
        componentKind: "server",
        parentId: "wa-app",
      }),
      templateNode("wa-media", "Media Service", "rectangle", 480, 40, 3, {
        componentKind: "server",
        parentId: "wa-app",
      }),
      templateNode("wa-push", "Push Worker", "rectangle", 480, 180, 4, {
        componentKind: "worker",
        parentId: "wa-app",
      }),
      templateNode("wa-kafka", "Kafka", "pill", 40, 40, 2, {
        componentKind: "message-broker",
        parentId: "wa-data",
        width: 168,
      }),
      templateNode("wa-cassandra", "Cassandra", "cylinder", 260, 40, 6, {
        componentKind: "database",
        parentId: "wa-data",
      }),
      templateNode("wa-redis", "Redis", "cylinder", 260, 220, 7, {
        componentKind: "cache",
        parentId: "wa-data",
      }),
      templateNode("wa-blob", "Media Blob", "rectangle", 420, 40, 1, {
        componentKind: "blob-storage",
        parentId: "wa-data",
      }),
    ],
    edges: [
      templateEdge("wa-e1", "wa-mobile", "wa-cdn", "assets", 1),
      templateEdge("wa-e2", "wa-mobile", "wa-lb", "ws/https", 1),
      templateEdge("wa-e3", "wa-web", "wa-lb", "https", 1),
      templateEdge("wa-e4", "wa-lb", "wa-gateway", "route", 2),
      templateEdge("wa-e5", "wa-gateway", "wa-chat", "send/recv", 3),
      templateEdge("wa-e6", "wa-gateway", "wa-presence", "online", 3),
      templateEdge("wa-e7", "wa-gateway", "wa-media", "upload", 3),
      templateEdge("wa-e8", "wa-chat", "wa-kafka", "events", 4),
      templateEdge("wa-e9", "wa-presence", "wa-redis", "session", 4),
      templateEdge("wa-e10", "wa-media", "wa-blob", "store", 4),
      templateEdge("wa-e11", "wa-kafka", "wa-push", "fan-out", 5),
      templateEdge("wa-e12", "wa-chat", "wa-cassandra", "persist", 5),
    ],
  },
  {
    id: "youtube",
    name: "YouTube",
    description:
      "Video platform: upload pipeline, CDN playback, recommendations, and watch analytics.",
    nodes: [
      templateGroup("yt-clients", "Clients", 40, 40, 260, 360),
      templateGroup("yt-edge", "Edge & Ingest", 360, 40, 340, 520),
      templateGroup("yt-app", "Application", 760, 40, 700, 520),
      templateGroup("yt-data", "Data Plane", 1520, 40, 700, 560),
      templateNode("yt-viewer", "Viewer", "circle", 60, 50, 1, {
        componentKind: "user",
        parentId: "yt-clients",
      }),
      templateNode("yt-creator", "Creator Studio", "rectangle", 40, 200, 1, {
        componentKind: "client",
        parentId: "yt-clients",
      }),
      templateNode("yt-cdn", "Global CDN", "hexagon", 60, 40, 7, {
        componentKind: "cdn",
        parentId: "yt-edge",
      }),
      templateNode("yt-waf", "WAF", "hexagon", 60, 200, 4, {
        componentKind: "firewall",
        parentId: "yt-edge",
      }),
      templateNode("yt-upload", "Upload API", "hexagon", 60, 360, 2, {
        componentKind: "api-gateway",
        parentId: "yt-edge",
      }),
      templateNode("yt-watch", "Watch API", "rectangle", 40, 40, 3, {
        componentKind: "server",
        parentId: "yt-app",
      }),
      templateNode("yt-transcode", "Transcode Workers", "rectangle", 280, 40, 4, {
        componentKind: "worker",
        parentId: "yt-app",
        width: 180,
      }),
      templateNode("yt-reco", "Recommendations", "rectangle", 40, 220, 5, {
        componentKind: "server",
        parentId: "yt-app",
        width: 180,
      }),
      templateNode("yt-search", "Search", "rectangle", 280, 220, 3, {
        componentKind: "server",
        parentId: "yt-app",
      }),
      templateNode("yt-analytics", "Analytics", "rectangle", 480, 120, 6, {
        componentKind: "worker",
        parentId: "yt-app",
      }),
      templateNode("yt-queue", "Upload Queue", "pill", 40, 40, 5, {
        componentKind: "queue",
        parentId: "yt-data",
        width: 168,
      }),
      templateNode("yt-object", "Video Object Store", "rectangle", 260, 40, 1, {
        componentKind: "blob-storage",
        parentId: "yt-data",
        width: 180,
      }),
      templateNode("yt-meta", "Metadata DB", "cylinder", 40, 220, 6, {
        componentKind: "database",
        parentId: "yt-data",
      }),
      templateNode("yt-cache", "Watch Cache", "cylinder", 260, 220, 7, {
        componentKind: "cache",
        parentId: "yt-data",
      }),
      templateNode("yt-warehouse", "Analytics Store", "cylinder", 480, 220, 1, {
        componentKind: "database",
        parentId: "yt-data",
      }),
    ],
    edges: [
      templateEdge("yt-e1", "yt-viewer", "yt-cdn", "playback", 1),
      templateEdge("yt-e2", "yt-viewer", "yt-waf", "api", 1),
      templateEdge("yt-e3", "yt-creator", "yt-upload", "upload", 1),
      templateEdge("yt-e4", "yt-waf", "yt-watch", "route", 2),
      templateEdge("yt-e5", "yt-upload", "yt-queue", "enqueue", 2),
      templateEdge("yt-e6", "yt-queue", "yt-transcode", "job", 3),
      templateEdge("yt-e7", "yt-transcode", "yt-object", "renditions", 4),
      templateEdge("yt-e8", "yt-watch", "yt-cache", "hot path", 3),
      templateEdge("yt-e9", "yt-watch", "yt-reco", "home", 3),
      templateEdge("yt-e10", "yt-watch", "yt-search", "query", 3),
      templateEdge("yt-e11", "yt-cdn", "yt-object", "origin", 4),
      templateEdge("yt-e12", "yt-reco", "yt-meta", "features", 4),
      templateEdge("yt-e13", "yt-watch", "yt-analytics", "events", 4),
      templateEdge("yt-e14", "yt-analytics", "yt-warehouse", "batch", 5),
    ],
  },
  {
    id: "microservices",
    name: "Microservices",
    description:
      "API gateway routing traffic to focused services backed by databases and a message queue.",
    nodes: [
      templateNode("ms-gateway", "API Gateway", "hexagon", 360, 24, 1, {
        componentKind: "api-gateway",
      }),
      templateNode("ms-auth", "Auth Service", "rectangle", 80, 200, 2, {
        componentKind: "server",
      }),
      templateNode("ms-users", "User Service", "rectangle", 320, 200, 1, {
        componentKind: "server",
      }),
      templateNode("ms-orders", "Order Service", "rectangle", 560, 200, 3, {
        componentKind: "server",
      }),
      templateNode("ms-notify", "Notifications", "rectangle", 800, 200, 5, {
        componentKind: "worker",
      }),
      templateNode("ms-postgres", "PostgreSQL", "cylinder", 200, 400, 6, {
        componentKind: "database",
      }),
      templateNode("ms-redis", "Redis Cache", "cylinder", 480, 400, 7, {
        componentKind: "cache",
      }),
      templateNode("ms-queue", "Message Queue", "pill", 720, 412, 2, {
        componentKind: "queue",
        width: 168,
      }),
    ],
    edges: [
      templateEdge("ms-e1", "ms-gateway", "ms-auth", "", 1),
      templateEdge("ms-e2", "ms-gateway", "ms-users", "", 1),
      templateEdge("ms-e3", "ms-gateway", "ms-orders", "", 1),
      templateEdge("ms-e4", "ms-gateway", "ms-notify", "", 1),
      templateEdge("ms-e5", "ms-auth", "ms-postgres", "", 2),
      templateEdge("ms-e6", "ms-users", "ms-postgres", "", 2),
      templateEdge("ms-e7", "ms-orders", "ms-redis", "", 2),
      templateEdge("ms-e8", "ms-orders", "ms-queue", "", 2),
      templateEdge("ms-e9", "ms-notify", "ms-queue", "", 2),
    ],
  },
  {
    id: "ci-cd-pipeline",
    name: "CI/CD Pipeline",
    description:
      "Linear delivery flow from source control through build, test, and staged production deploys.",
    nodes: [
      templateNode("ci-source", "Source Code", "rectangle", 40, 120, 0),
      templateNode("ci-build", "Build", "rectangle", 280, 120, 1),
      templateNode("ci-test", "Test Suite", "rectangle", 520, 120, 6),
      templateNode("ci-staging", "Deploy Staging", "rectangle", 760, 120, 3),
      templateNode("ci-prod", "Deploy Production", "rectangle", 1000, 120, 4),
    ],
    edges: [
      templateEdge("ci-e1", "ci-source", "ci-build", "push", 1),
      templateEdge("ci-e2", "ci-build", "ci-test", "artifact", 2),
      templateEdge("ci-e3", "ci-test", "ci-staging", "promote", 3),
      templateEdge("ci-e4", "ci-staging", "ci-prod", "release", 4),
    ],
  },
  {
    id: "event-driven",
    name: "Event-Driven System",
    description:
      "Producers publish events to a central bus consumed by multiple services with a dead-letter path.",
    nodes: [
      templateNode("ev-producer", "Producer", "rectangle", 80, 160, 1, {
        componentKind: "server",
      }),
      templateNode("ev-bus", "Event Bus", "hexagon", 360, 140, 2, {
        componentKind: "message-broker",
      }),
      templateNode("ev-consumer-a", "Consumer A", "rectangle", 660, 40, 6, {
        componentKind: "worker",
      }),
      templateNode("ev-consumer-b", "Consumer B", "rectangle", 660, 200, 3, {
        componentKind: "worker",
      }),
      templateNode("ev-consumer-c", "Consumer C", "rectangle", 660, 360, 5, {
        componentKind: "worker",
      }),
      templateNode("ev-dlq", "Dead Letter Queue", "pill", 360, 380, 4, {
        componentKind: "queue",
        width: 176,
      }),
    ],
    edges: [
      templateEdge("ev-e1", "ev-producer", "ev-bus", "publish", 1),
      templateEdge("ev-e2", "ev-bus", "ev-consumer-a", "", 2),
      templateEdge("ev-e3", "ev-bus", "ev-consumer-b", "", 2),
      templateEdge("ev-e4", "ev-bus", "ev-consumer-c", "", 2),
      templateEdge("ev-e5", "ev-bus", "ev-dlq", "failed", 3),
    ],
  },
]
