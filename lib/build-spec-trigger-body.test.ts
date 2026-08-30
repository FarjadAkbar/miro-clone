import { describe, expect, it } from "vitest"
import { buildSpecTriggerBody } from "@/lib/build-spec-trigger-body"
import type { CanvasFlowNode, CanvasEdge } from "@/types/canvas"
import type { AiChatMessage } from "@/types/tasks"

describe("buildSpecTriggerBody", () => {
  it("maps room canvas and chat into a Spec trigger body", () => {
    const nodes: CanvasFlowNode[] = [
      {
        id: "api-1",
        type: "canvasNode",
        position: { x: 10, y: 20 },
        width: 160,
        height: 88,
        data: {
          label: "API",
          color: "#1F1F1F",
          textColor: "#EDEDED",
          shape: "rectangle",
          componentKind: "server",
        },
      },
      {
        id: "tier-api",
        type: "canvasGroup",
        position: { x: 0, y: 0 },
        width: 420,
        height: 280,
        data: { label: "API Servers" },
      },
    ]

    const edges: CanvasEdge[] = [
      {
        id: "e1",
        type: "canvasEdge",
        source: "api-1",
        target: "api-1",
        data: { label: "self" },
      },
    ]

    const chatHistory: AiChatMessage[] = [
      {
        sender: "Ada",
        role: "user",
        content: "design WhatsApp",
        timestamp: 1,
      },
      {
        sender: "Archflow",
        role: "assistant",
        content: "Ready to draw.",
        timestamp: 2,
        offerGenerate: true,
      },
    ]

    const body = buildSpecTriggerBody({
      roomId: "room-1",
      nodes,
      edges,
      chatHistory,
    })

    expect(body.roomId).toBe("room-1")
    expect(body.nodes).toEqual([
      {
        id: "api-1",
        position: { x: 10, y: 20 },
        width: 160,
        height: 88,
        data: {
          label: "API",
          color: "#1F1F1F",
          textColor: "#EDEDED",
          shape: "rectangle",
        },
      },
    ])
    expect(body.edges).toEqual([
      {
        id: "e1",
        source: "api-1",
        target: "api-1",
        data: { label: "self" },
      },
    ])
    expect(body.chatHistory).toEqual(chatHistory)
  })

  it("omits Groups and edges that touch Groups", () => {
    const body = buildSpecTriggerBody({
      roomId: "room-1",
      nodes: [
        {
          id: "n1",
          type: "canvasNode",
          position: { x: 1, y: 2 },
          data: {
            label: "API",
            color: "#1F1F1F",
            textColor: "#EDEDED",
            shape: "rectangle",
          },
        },
        {
          id: "g1",
          type: "canvasGroup",
          position: { x: 0, y: 0 },
          data: { label: "Tier" },
        },
      ],
      edges: [
        {
          id: "to-group",
          type: "canvasEdge",
          source: "n1",
          target: "g1",
          data: { label: "into" },
        },
        {
          id: "keep",
          type: "canvasEdge",
          source: "n1",
          target: "n1",
          data: { label: "self" },
        },
      ],
      chatHistory: [],
    })

    expect(body.nodes.map((node) => node.id)).toEqual(["n1"])
    expect(body.edges.map((edge) => edge.id)).toEqual(["keep"])
  })
})
