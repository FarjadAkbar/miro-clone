"use client"

import { useCallback } from "react"
import { DialogPattern } from "@/components/editor/dialog-pattern"
import {
  CANVAS_TEMPLATES,
  getNodeCenter,
  getNodeDimensions,
  getTemplateBounds,
  type CanvasTemplate,
} from "@/components/editor/starter-templates"
import { Button } from "@/components/ui/button"
import type { CanvasEdge, CanvasNode, CanvasNodeShape } from "@/types/canvas"

const PREVIEW_WIDTH = 280
const PREVIEW_HEIGHT = 156
const PREVIEW_PADDING = 16

interface StarterTemplatesModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onImport: (template: CanvasTemplate) => void
}

function PreviewNodeShape({
  shape,
  x,
  y,
  width,
  height,
  fill,
}: {
  shape: CanvasNodeShape
  x: number
  y: number
  width: number
  height: number
  fill: string
}) {
  const stroke = "var(--color-border-subtle)"

  if (shape === "circle") {
    return (
      <ellipse
        cx={x + width / 2}
        cy={y + height / 2}
        rx={width / 2}
        ry={height / 2}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
      />
    )
  }

  if (shape === "pill") {
    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={height / 2}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
      />
    )
  }

  if (shape === "diamond") {
    const cx = x + width / 2
    const cy = y + height / 2
    return (
      <polygon
        points={`${cx},${y + 4} ${x + width - 4},${cy} ${cx},${y + height - 4} ${x + 4},${cy}`}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
      />
    )
  }

  if (shape === "hexagon") {
    return (
      <polygon
        points={`${x + width * 0.28},${y + 4} ${x + width * 0.72},${y + 4} ${x + width - 4},${y + height / 2} ${x + width * 0.72},${y + height - 4} ${x + width * 0.28},${y + height - 4} ${x + 4},${y + height / 2}`}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
      />
    )
  }

  if (shape === "cylinder") {
    const rx = width * 0.38
    const ry = height * 0.09
    const top = y + ry
    const bottom = y + height - ry
    return (
      <g>
        <rect x={x + width * 0.12} y={top} width={width * 0.76} height={bottom - top} fill={fill} />
        <ellipse cx={x + width / 2} cy={top} rx={rx} ry={ry} fill={fill} stroke={stroke} strokeWidth={1.5} />
        <ellipse cx={x + width / 2} cy={bottom} rx={rx} ry={ry} fill={fill} stroke={stroke} strokeWidth={1.5} />
      </g>
    )
  }

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={8}
      fill={fill}
      stroke={stroke}
      strokeWidth={1.5}
    />
  )
}

function TemplateDiagramPreview({
  nodes,
  edges,
}: {
  nodes: CanvasNode[]
  edges: CanvasEdge[]
}) {
  const bounds = getTemplateBounds(nodes)
  const innerWidth = PREVIEW_WIDTH - PREVIEW_PADDING * 2
  const innerHeight = PREVIEW_HEIGHT - PREVIEW_PADDING * 2
  const scale =
    bounds.width > 0 && bounds.height > 0
      ? Math.min(innerWidth / bounds.width, innerHeight / bounds.height)
      : 1

  const offsetX =
    PREVIEW_PADDING + (innerWidth - bounds.width * scale) / 2 - bounds.minX * scale
  const offsetY =
    PREVIEW_PADDING + (innerHeight - bounds.height * scale) / 2 - bounds.minY * scale

  const nodeById = new Map(nodes.map((node) => [node.id, node]))

  return (
    <svg
      viewBox={`0 0 ${PREVIEW_WIDTH} ${PREVIEW_HEIGHT}`}
      className="h-[156px] w-full rounded-xl border border-surface-border bg-bg-base"
      aria-hidden
    >
      {edges.map((edge) => {
        const source = nodeById.get(edge.source)
        const target = nodeById.get(edge.target)
        if (!source || !target) {
          return null
        }

        const sourceCenter = getNodeCenter(source)
        const targetCenter = getNodeCenter(target)

        return (
          <line
            key={edge.id}
            x1={sourceCenter.x * scale + offsetX}
            y1={sourceCenter.y * scale + offsetY}
            x2={targetCenter.x * scale + offsetX}
            y2={targetCenter.y * scale + offsetY}
            stroke="var(--color-border-subtle)"
            strokeWidth={1.5}
            markerEnd="url(#template-preview-arrow)"
          />
        )
      })}

      {nodes.map((node) => {
        const { width, height } = getNodeDimensions(node)
        return (
          <PreviewNodeShape
            key={node.id}
            shape={node.data.shape}
            x={node.position.x * scale + offsetX}
            y={node.position.y * scale + offsetY}
            width={width * scale}
            height={height * scale}
            fill={node.data.color}
          />
        )
      })}

      <defs>
        <marker
          id="template-preview-arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-border-subtle)" />
        </marker>
      </defs>
    </svg>
  )
}

function TemplateCard({
  template,
  onImport,
}: {
  template: CanvasTemplate
  onImport: (template: CanvasTemplate) => void
}) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-surface-border bg-bg-elevated p-4">
      <TemplateDiagramPreview nodes={template.nodes} edges={template.edges} />
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-copy-primary">{template.name}</h3>
        <p className="text-sm text-copy-muted">{template.description}</p>
      </div>
      <Button
        type="button"
        size="sm"
        className="mt-auto w-full"
        onClick={() => onImport(template)}
      >
        Import template
      </Button>
    </article>
  )
}

export function StarterTemplatesModal({
  open,
  onOpenChange,
  onImport,
}: StarterTemplatesModalProps) {
  const handleImport = useCallback(
    (template: CanvasTemplate) => {
      onImport(template)
      onOpenChange(false)
    },
    [onImport, onOpenChange]
  )

  return (
    <DialogPattern
      open={open}
      onOpenChange={onOpenChange}
      title="Starter templates"
      description="Replace the current canvas with a pre-built system design diagram."
      className="flex max-h-[85vh] flex-col sm:max-w-3xl"
    >
      <div className="-mx-1 max-h-[min(56vh,520px)] overflow-y-auto px-1 pb-1">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CANVAS_TEMPLATES.map((template) => (
            <TemplateCard key={template.id} template={template} onImport={handleImport} />
          ))}
        </div>
      </div>
    </DialogPattern>
  )
}
