import { google } from "@ai-sdk/google"
import { generateObject } from "ai"
import { NODE_COLORS, NODE_SHAPES } from "@/types/canvas"
import {
  designAgentPlanSchema,
  type DesignAgentPlan,
} from "@/types/design-agent-actions"

const COLOR_GUIDE = NODE_COLORS.map(
  (entry, index) => `${index}: fill ${entry.fill}, text ${entry.text}`
).join("\n")

const SYSTEM_PROMPT = `You are Ghost AI, a system design assistant for a collaborative architecture canvas.

Return a JSON plan with canvas actions only. Use these action types:
- add_node, move_node, resize_node, update_node, delete_node, add_edge, delete_edge

Rules:
- Shapes (use exactly these): ${NODE_SHAPES.join(", ")}
- Colors (colorIndex 0-${NODE_COLORS.length - 1}):
${COLOR_GUIDE}
- Use unique string ids for nodes (kebab-case) and edges (edge-{source}-{target} or similar)
- Layout: left-to-right or top-to-bottom flows, 180-260px spacing between nodes, avoid overlap
- Default sizes are fine; only set width/height when a shape needs emphasis
- Prefer rectangle for services, cylinder for databases, hexagon for gateways/buses, pill for queues
- Connect related components with add_edge after nodes exist
- Keep labels short (1-3 words)
- Generate enough nodes to satisfy the user prompt, typically 3-8 nodes`

export async function generateDesignPlan(
  prompt: string
): Promise<DesignAgentPlan> {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not set")
  }

  const { object } = await generateObject({
    model: google("gemini-2.5-flash"),
    schema: designAgentPlanSchema,
    system: SYSTEM_PROMPT,
    prompt,
  })

  return object
}
