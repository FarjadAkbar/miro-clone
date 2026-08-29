import type { SpecTriggerBody } from "@/types/spec-agent"

export interface SpecAgentTriggerResult {
  runId: string
  publicToken: string
}

export async function triggerSpecGeneration(
  body: SpecTriggerBody
): Promise<SpecAgentTriggerResult> {
  const specResponse = await fetch("/api/ai/spec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })

  if (!specResponse.ok) {
    throw new Error("Failed to start spec generation")
  }

  const specData = (await specResponse.json()) as { runId?: string }
  const runId = specData.runId

  if (!runId) {
    throw new Error("Spec response did not include a run ID")
  }

  const tokenResponse = await fetch("/api/ai/spec/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ runId }),
  })

  if (!tokenResponse.ok) {
    throw new Error("Failed to authorize spec run")
  }

  const tokenData = (await tokenResponse.json()) as { token?: string }
  const publicToken = tokenData.token

  if (!publicToken) {
    throw new Error("Token response did not include a public token")
  }

  return { runId, publicToken }
}
