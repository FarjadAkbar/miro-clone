import { z } from "zod"
import { NODE_SHAPES } from "@/types/canvas"
import { aiChatMessageSchema } from "@/types/tasks"

export const GENERATE_SPEC_TASK_ID = "generate-spec" as const

const shapeSchema = z.enum(NODE_SHAPES)

export const specCanvasNodeInputSchema = z.object({
  id: z.string().min(1),
  position: z.object({
    x: z.number(),
    y: z.number(),
  }),
  width: z.number().optional(),
  height: z.number().optional(),
  data: z.object({
    label: z.string(),
    color: z.string(),
    textColor: z.string().optional(),
    shape: shapeSchema,
  }),
})

export const specCanvasEdgeInputSchema = z.object({
  id: z.string().min(1),
  source: z.string().min(1),
  target: z.string().min(1),
  data: z.object({ label: z.string() }).optional(),
})

export const generateSpecPayloadSchema = z.object({
  projectId: z.string().min(1),
  roomId: z.string().min(1),
  chatHistory: z.array(aiChatMessageSchema),
  nodes: z.array(specCanvasNodeInputSchema),
  edges: z.array(specCanvasEdgeInputSchema),
})

export type GenerateSpecPayload = z.infer<typeof generateSpecPayloadSchema>

export const specTriggerBodySchema = z.object({
  roomId: z.string().min(1),
  chatHistory: z.array(aiChatMessageSchema),
  nodes: z.array(specCanvasNodeInputSchema),
  edges: z.array(specCanvasEdgeInputSchema),
})

export type SpecTriggerBody = z.infer<typeof specTriggerBodySchema>

export const specTokenBodySchema = z.object({
  runId: z.string().min(1),
})
