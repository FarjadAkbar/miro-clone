import { logger, metadata, task } from "@trigger.dev/sdk"
import { generateSpecMarkdown } from "@/lib/spec-agent-openai"
import { saveProjectSpec } from "@/lib/save-project-spec"
import {
  GENERATE_SPEC_TASK_ID,
  generateSpecPayloadSchema,
} from "@/types/spec-agent"

export const generateSpecTask = task({
  id: GENERATE_SPEC_TASK_ID,
  run: async (payload: unknown) => {
    logger.info("Spec generation started")

    try {
      metadata.set("status", "validating")
      const input = generateSpecPayloadSchema.parse(payload)

      logger.info("Spec generation validated", {
        roomId: input.roomId,
        nodeCount: input.nodes.length,
        edgeCount: input.edges.length,
        chatCount: input.chatHistory.length,
      })

      metadata.set("status", "generating")
      metadata.set("progress", 0.35)

      const markdown = await generateSpecMarkdown(input)

      metadata.set("status", "saving")
      metadata.set("progress", 0.85)

      const specId = await saveProjectSpec(input.projectId, markdown)

      metadata.set("status", "complete")
      metadata.set("progress", 1)
      metadata.set("specId", specId)

      logger.info("Spec generation complete", {
        roomId: input.roomId,
        specId,
        contentLength: markdown.length,
      })

      return { markdown, specId }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Spec generation failed"

      logger.error("Spec generation failed", { message })
      metadata.set("status", "failed")
      metadata.set("error", message)

      throw error
    }
  },
})
