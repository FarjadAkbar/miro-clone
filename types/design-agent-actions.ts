import { z } from "zod"
import { NODE_SHAPES } from "@/types/canvas"
import {
  COMPONENT_KINDS,
  getComponentKindDefinition,
  isComponentKind,
  type ComponentKind,
} from "@/types/component-kind"

const shapeSchema = z.enum(NODE_SHAPES)
const componentKindSchema = z.enum(COMPONENT_KINDS)

export const DESIGN_AGENT_ACTION_TYPES = [
  "add_node",
  "move_node",
  "resize_node",
  "update_node",
  "delete_node",
  "add_edge",
  "delete_edge",
] as const

export type DesignAgentActionType = (typeof DESIGN_AGENT_ACTION_TYPES)[number]

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
    componentKind: componentKindSchema.optional(),
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
    componentKind: componentKindSchema.optional(),
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

/**
 * Flat schema for OpenAI structured outputs.
 * OpenAI rejects `oneOf` and requires every property key in `required`
 * (use null for unused fields — do not use Zod `.optional()`).
 */
export const designAgentActionLlmSchema = z.object({
  type: z.enum(DESIGN_AGENT_ACTION_TYPES),
  id: z.string().min(1),
  label: z.string().nullable(),
  shape: shapeSchema.nullable(),
  x: z.number().nullable(),
  y: z.number().nullable(),
  colorIndex: z.number().int().min(0).max(7).nullable(),
  width: z.number().positive().nullable(),
  height: z.number().positive().nullable(),
  source: z.string().nullable(),
  target: z.string().nullable(),
  componentKind: componentKindSchema.nullable(),
})

export const designAgentPlanLlmSchema = z.object({
  actions: z.array(designAgentActionLlmSchema),
})

export type DesignAgentAction = z.infer<typeof designAgentActionSchema>
export type DesignAgentPlan = z.infer<typeof designAgentPlanSchema>
export type DesignAgentActionLlm = z.infer<typeof designAgentActionLlmSchema>
export type DesignAgentPlanLlm = z.infer<typeof designAgentPlanLlmSchema>

function requireNumber(value: number | null | undefined, field: string): number {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new Error(`Missing required number field: ${field}`)
  }
  return value
}

function requireString(value: string | null | undefined, field: string): string {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Missing required string field: ${field}`)
  }
  return value
}

function resolveOptionalComponentKind(
  value: string | null | undefined
): ComponentKind | undefined {
  if (value == null || value === "") {
    return undefined
  }
  if (!isComponentKind(value)) {
    throw new Error(`Unknown component kind: ${value}`)
  }
  return value
}

/** Narrow a flat LLM action into a typed canvas action. */
export function narrowDesignAgentAction(
  action: DesignAgentActionLlm
): DesignAgentAction {
  switch (action.type) {
    case "add_node": {
      const componentKind = resolveOptionalComponentKind(action.componentKind)
      const kindDefaults = componentKind
        ? getComponentKindDefinition(componentKind)
        : null

      return designAgentActionSchema.parse({
        type: "add_node",
        id: action.id,
        label: action.label ?? kindDefaults?.label ?? "",
        shape: action.shape ?? kindDefaults?.shape ?? "rectangle",
        x: requireNumber(action.x, "x"),
        y: requireNumber(action.y, "y"),
        colorIndex: action.colorIndex ?? kindDefaults?.colorIndex ?? undefined,
        width: action.width ?? kindDefaults?.width ?? undefined,
        height: action.height ?? kindDefaults?.height ?? undefined,
        componentKind,
      })
    }
    case "move_node":
      return designAgentActionSchema.parse({
        type: "move_node",
        id: action.id,
        x: requireNumber(action.x, "x"),
        y: requireNumber(action.y, "y"),
      })
    case "resize_node":
      return designAgentActionSchema.parse({
        type: "resize_node",
        id: action.id,
        width: requireNumber(action.width, "width"),
        height: requireNumber(action.height, "height"),
      })
    case "update_node": {
      const componentKind = resolveOptionalComponentKind(action.componentKind)
      const kindDefaults = componentKind
        ? getComponentKindDefinition(componentKind)
        : null

      return designAgentActionSchema.parse({
        type: "update_node",
        id: action.id,
        label: action.label ?? undefined,
        shape: action.shape ?? kindDefaults?.shape ?? undefined,
        colorIndex: action.colorIndex ?? kindDefaults?.colorIndex ?? undefined,
        componentKind,
      })
    }
    case "delete_node":
      return designAgentActionSchema.parse({
        type: "delete_node",
        id: action.id,
      })
    case "add_edge":
      return designAgentActionSchema.parse({
        type: "add_edge",
        id: action.id,
        source: requireString(action.source, "source"),
        target: requireString(action.target, "target"),
        label: action.label ?? undefined,
      })
    case "delete_edge":
      return designAgentActionSchema.parse({
        type: "delete_edge",
        id: action.id,
      })
    default: {
      const exhaustive: never = action.type
      throw new Error(`Unknown design action type: ${exhaustive}`)
    }
  }
}

export function toDesignAgentPlan(raw: DesignAgentPlanLlm): DesignAgentPlan {
  return {
    actions: raw.actions.map((action, index) => {
      try {
        return narrowDesignAgentAction(action)
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Invalid action"
        throw new Error(`Invalid design action at index ${index}: ${message}`)
      }
    }),
  }
}
