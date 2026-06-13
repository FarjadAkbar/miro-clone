export interface DesignAgentTriggerResult {
  runId: string
  publicToken: string
}

export async function triggerDesignAgent(
  prompt: string,
  roomId: string
): Promise<DesignAgentTriggerResult> {
  const designResponse = await fetch("/api/ai/design", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt,
      roomId,
      projectId: roomId,
    }),
  })

  if (!designResponse.ok) {
    throw new Error("Failed to start design generation")
  }

  const designData = (await designResponse.json()) as { runId?: string }
  const runId = designData.runId

  if (!runId) {
    throw new Error("Design response did not include a run ID")
  }

  const tokenResponse = await fetch("/api/ai/design/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ runId }),
  })

  if (!tokenResponse.ok) {
    throw new Error("Failed to authorize design run")
  }

  const tokenData = (await tokenResponse.json()) as { token?: string }
  const publicToken = tokenData.token

  if (!publicToken) {
    throw new Error("Token response did not include a public token")
  }

  return { runId, publicToken }
}
