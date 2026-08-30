import { generateText } from "ai"
import { getOpenAIModel } from "@/lib/openai"
import type { GenerateSpecPayload } from "@/types/spec-agent"

const SYSTEM_PROMPT = `You are Archflow, a technical writing assistant for system architecture diagrams.

Write a complete Markdown technical specification from the provided canvas graph and room chat history.

Requirements:
- Use clear Markdown headings (##, ###)
- Include: Overview, Components, Data Flow, Integration Points, and Implementation Notes
- Reference component labels and connections from the canvas
- Incorporate relevant context from the chat history
- Be concise but thorough; prefer bullet lists where appropriate
- Do not wrap the output in code fences
- Output plain Markdown only`

function formatChatHistory(
  chatHistory: GenerateSpecPayload["chatHistory"]
): string {
  if (chatHistory.length === 0) {
    return "No chat messages."
  }

  return chatHistory
    .map(
      (message) =>
        `[${message.role}] ${message.sender} (${new Date(message.timestamp).toISOString()}): ${message.content}`
    )
    .join("\n")
}

function formatCanvas(payload: GenerateSpecPayload): string {
  const nodes = payload.nodes
    .map(
      (node) =>
        `- ${node.id} (${node.data.shape}): "${node.data.label}" at (${node.position.x}, ${node.position.y})`
    )
    .join("\n")

  const edges = payload.edges
    .map((edge) => {
      const label = edge.data?.label ? ` label="${edge.data.label}"` : ""
      return `- ${edge.id}: ${edge.source} -> ${edge.target}${label}`
    })
    .join("\n")

  return `Nodes:\n${nodes || "None"}\n\nEdges:\n${edges || "None"}`
}

export async function generateSpecMarkdown(
  payload: GenerateSpecPayload
): Promise<string> {
  const prompt = `Project room: ${payload.roomId}

Canvas:
${formatCanvas(payload)}

Chat history:
${formatChatHistory(payload.chatHistory)}

Generate the Markdown technical specification.`

  const { text } = await generateText({
    model: getOpenAIModel(),
    system: SYSTEM_PROMPT,
    prompt,
  })

  const markdown = text.trim()
  if (!markdown) {
    throw new Error("Spec generation returned empty content")
  }

  return markdown
}
