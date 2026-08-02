import { openai } from "@ai-sdk/openai"

const DEFAULT_OPENAI_MODEL = "gpt-4o"

export function getOpenAIModel() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not set")
  }

  const modelId = process.env.OPENAI_MODEL?.trim() || DEFAULT_OPENAI_MODEL
  return openai(modelId)
}

export { DEFAULT_OPENAI_MODEL }
