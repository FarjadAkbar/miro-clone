import { logger, task } from "@trigger.dev/sdk"
import { applyDesignActions } from "@/lib/canvas-design-actions"
import { getCanvasFlowSnapshot } from "@/lib/canvas-flow-snapshot"
import { generateDesignPlan } from "@/lib/design-agent-openai"
import { runDesignAgentTurn } from "@/lib/design-agent-turn"
import {
  clearAiAgentPresence,
  publishAiStatus,
  setAiAgentPresence,
} from "@/lib/liveblocks-ai-agent"
import {
  DESIGN_AGENT_TASK_ID,
  type DesignAgentPayload,
} from "@/types/design-agent"

export const designAgentTask = task({
  id: DESIGN_AGENT_TASK_ID,
  run: async (payload: DesignAgentPayload) => {
    const { prompt, roomId } = payload

    logger.info("Design agent started", { roomId, promptLength: prompt.length })

    try {
      await publishAiStatus(roomId, "Starting design generation…")
      await setAiAgentPresence(roomId, {
        cursor: { x: 120, y: 120 },
        thinking: true,
      })

      await publishAiStatus(roomId, "Reading current canvas…")
      const canvas = await getCanvasFlowSnapshot(roomId)

      await publishAiStatus(roomId, "Interpreting your prompt…")
      const turn = await runDesignAgentTurn(
        { message: prompt, canvas },
        { generatePlan: generateDesignPlan }
      )
      const { plan } = turn

      logger.info("Design plan generated", {
        roomId,
        actionCount: plan.actions.length,
      })

      await publishAiStatus(
        roomId,
        `Applying ${plan.actions.length} canvas updates…`
      )

      await applyDesignActions(roomId, plan.actions, async (_action, cursor) => {
        if (cursor) {
          await setAiAgentPresence(roomId, {
            cursor,
            thinking: true,
          })
        }
      })

      await publishAiStatus(roomId, "Design complete.")
      await clearAiAgentPresence(roomId)

      return {
        roomId,
        actionCount: plan.actions.length,
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Design generation failed"

      logger.error("Design agent failed", { roomId, message })

      await publishAiStatus(roomId, `Design failed: ${message}`)
      await clearAiAgentPresence(roomId)

      throw error
    }
  },
})
