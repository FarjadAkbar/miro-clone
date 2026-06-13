import { MarkerType, type OnEdgesChange, type OnNodesChange } from "@xyflow/react"
import {
  CANVAS_EDGE_TYPE,
  CANVAS_NODE_TYPE,
  DEFAULT_EDGE_COLOR,
  NODE_COLORS,
  SHAPE_DEFAULT_SIZES,
  type CanvasEdge,
  type CanvasNode,
  type CanvasNodeShape,
} from "@/types/canvas"

export interface CanvasTemplate {
  id: string
  name: string
  description: string
  nodes: CanvasNode[]
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

function templateNode(
  id: string,
  label: string,
  shape: CanvasNodeShape,
  x: number,
  y: number,
  colorIndex: number,
  sizeOverride?: { width?: number; height?: number }
): CanvasNode {
  const color = NODE_COLORS[colorIndex] ?? NODE_COLORS[0]
  const defaults = SHAPE_DEFAULT_SIZES[shape]
  const width = sizeOverride?.width ?? defaults.width
  const height = sizeOverride?.height ?? defaults.height

  return {
    id,
    type: CANVAS_NODE_TYPE,
    position: { x, y },
    width,
    height,
    data: {
      label,
      color: color.fill,
      textColor: color.text,
      shape,
    },
  }
}

function templateEdge(
  id: string,
  source: string,
  target: string,
  label = ""
): CanvasEdge {
  return {
    id,
    type: CANVAS_EDGE_TYPE,
    source,
    target,
    data: { label },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: DEFAULT_EDGE_COLOR,
      width: 16,
      height: 16,
    },
  }
}

export function getNodeDimensions(node: CanvasNode): { width: number; height: number } {
  const defaults = SHAPE_DEFAULT_SIZES[node.data.shape]
  return {
    width: node.width ?? defaults.width,
    height: node.height ?? defaults.height,
  }
}

export function getTemplateBounds(nodes: CanvasNode[]): TemplateBounds {
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

export function getNodeCenter(node: CanvasNode): { x: number; y: number } {
  const { width, height } = getNodeDimensions(node)
  return {
    x: node.position.x + width / 2,
    y: node.position.y + height / 2,
  }
}

export function applyCanvasTemplate(
  template: CanvasTemplate,
  currentNodes: CanvasNode[],
  currentEdges: CanvasEdge[],
  onNodesChange: OnNodesChange<CanvasNode>,
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
    id: "microservices",
    name: "Microservices",
    description:
      "API gateway routing traffic to focused services backed by databases and a message queue.",
    nodes: [
      templateNode("ms-gateway", "API Gateway", "hexagon", 360, 24, 1),
      templateNode("ms-auth", "Auth Service", "rectangle", 80, 180, 2),
      templateNode("ms-users", "User Service", "rectangle", 300, 180, 1),
      templateNode("ms-orders", "Order Service", "rectangle", 520, 180, 3),
      templateNode("ms-notify", "Notifications", "rectangle", 740, 180, 5),
      templateNode("ms-postgres", "PostgreSQL", "cylinder", 180, 360, 6),
      templateNode("ms-redis", "Redis Cache", "cylinder", 400, 360, 7),
      templateNode("ms-queue", "Message Queue", "pill", 620, 372, 2, {
        width: 168,
      }),
    ],
    edges: [
      templateEdge("ms-e1", "ms-gateway", "ms-auth"),
      templateEdge("ms-e2", "ms-gateway", "ms-users"),
      templateEdge("ms-e3", "ms-gateway", "ms-orders"),
      templateEdge("ms-e4", "ms-gateway", "ms-notify"),
      templateEdge("ms-e5", "ms-auth", "ms-postgres"),
      templateEdge("ms-e6", "ms-users", "ms-postgres"),
      templateEdge("ms-e7", "ms-orders", "ms-redis"),
      templateEdge("ms-e8", "ms-orders", "ms-queue"),
      templateEdge("ms-e9", "ms-notify", "ms-queue"),
    ],
  },
  {
    id: "ci-cd-pipeline",
    name: "CI/CD Pipeline",
    description:
      "Linear delivery flow from source control through build, test, and staged production deploys.",
    nodes: [
      templateNode("ci-source", "Source Code", "rectangle", 40, 120, 0),
      templateNode("ci-build", "Build", "rectangle", 240, 120, 1),
      templateNode("ci-test", "Test Suite", "rectangle", 440, 120, 6),
      templateNode("ci-staging", "Deploy Staging", "rectangle", 640, 120, 3),
      templateNode("ci-prod", "Deploy Production", "rectangle", 840, 120, 4),
    ],
    edges: [
      templateEdge("ci-e1", "ci-source", "ci-build", "push"),
      templateEdge("ci-e2", "ci-build", "ci-test", "artifact"),
      templateEdge("ci-e3", "ci-test", "ci-staging", "promote"),
      templateEdge("ci-e4", "ci-staging", "ci-prod", "release"),
    ],
  },
  {
    id: "event-driven",
    name: "Event-Driven System",
    description:
      "Producers publish events to a central bus consumed by multiple services with a dead-letter path.",
    nodes: [
      templateNode("ev-producer", "Producer", "rectangle", 80, 160, 1),
      templateNode("ev-bus", "Event Bus", "hexagon", 340, 140, 2),
      templateNode("ev-consumer-a", "Consumer A", "rectangle", 620, 60, 6),
      templateNode("ev-consumer-b", "Consumer B", "rectangle", 620, 200, 3),
      templateNode("ev-consumer-c", "Consumer C", "rectangle", 620, 340, 5),
      templateNode("ev-dlq", "Dead Letter Queue", "pill", 340, 360, 4, {
        width: 176,
      }),
    ],
    edges: [
      templateEdge("ev-e1", "ev-producer", "ev-bus", "publish"),
      templateEdge("ev-e2", "ev-bus", "ev-consumer-a"),
      templateEdge("ev-e3", "ev-bus", "ev-consumer-b"),
      templateEdge("ev-e4", "ev-bus", "ev-consumer-c"),
      templateEdge("ev-e5", "ev-bus", "ev-dlq", "failed"),
    ],
  },
]
