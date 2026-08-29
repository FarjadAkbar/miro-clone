import { Handle, Position } from "@xyflow/react"
import { cn } from "@/lib/utils"

const handleClassName = cn(
  "canvas-node-handle",
  "!h-3.5 !w-3.5 !rounded-full !border-2 !border-border-default !bg-white",
  "opacity-40 transition-opacity duration-150",
  "group-hover/node:opacity-100 hover:!opacity-100 hover:!border-accent-ai hover:!bg-accent-ai"
)

const handlePositions = [
  { position: Position.Top, id: "top" },
  { position: Position.Right, id: "right" },
  { position: Position.Bottom, id: "bottom" },
  { position: Position.Left, id: "left" },
] as const

export function CanvasNodeHandles() {
  return (
    <>
      {handlePositions.map(({ position, id }) => (
        <Handle
          key={`source-${id}`}
          id={id}
          type="source"
          position={position}
          className={handleClassName}
          isConnectable
        />
      ))}
      {handlePositions.map(({ position, id }) => (
        <Handle
          key={`target-${id}`}
          id={`${id}-target`}
          type="target"
          position={position}
          className={handleClassName}
          isConnectable
        />
      ))}
    </>
  )
}
