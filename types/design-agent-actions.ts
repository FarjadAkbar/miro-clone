import { z } from "zod"
import { NODE_SHAPES } from "@/types/canvas"

const shapeSchema = z.enum(NODE_SHAPES)

export const designAgentActionSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("add_node"),
    id: z.string().min(1),
    label: z.string(),
    shape: shapeSchema,
    x: z.number(),
    y: z.number(),
    colorIndex: z.number().int().min(0).max(7).optional(),
    width: z.number().positive().optional(),
    height: z.number().positive().optional(),
  }),
  z.object({
    type: z.literal("move_node"),
    id: z.string().min(1),
    x: z.number(),
    y: z.number(),
  }),
  z.object({
    type: z.literal("resize_node"),
    id: z.string().min(1),
    width: z.number().positive(),
    height: z.number().positive(),
  }),
  z.object({
    type: z.literal("update_node"),
    id: z.string().min(1),
    label: z.string().optional(),
    shape: shapeSchema.optional(),
    colorIndex: z.number().int().min(0).max(7).optional(),
  }),
  z.object({
    type: z.literal("delete_node"),
    id: z.string().min(1),
  }),
  z.object({
    type: z.literal("add_edge"),
    id: z.string().min(1),
    source: z.string().min(1),
    target: z.string().min(1),
    label: z.string().optional(),
  }),
  z.object({
    type: z.literal("delete_edge"),
    id: z.string().min(1),
  }),
])

export const designAgentPlanSchema = z.object({
  actions: z.array(designAgentActionSchema),
})

export type DesignAgentAction = z.infer<typeof designAgentActionSchema>
export type DesignAgentPlan = z.infer<typeof designAgentPlanSchema>
