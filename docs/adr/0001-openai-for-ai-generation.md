# OpenAI for Design chat and Spec generation

We generate Design plans and Markdown specs with LLMs. Gemini was the first provider; we switched to OpenAI so Design chat and Spec generation share one API key and model stack, with `gpt-4o` as the default for reliable structured canvas actions.

## Status

accepted

## Considered options

- Keep Gemini for both — rejected; product preference is OpenAI
- Split providers (OpenAI design, Gemini specs) — rejected; two keys and two failure modes
- Configurable multi-provider — deferred; `OPENAI_MODEL` is enough for now

## Consequences

- Require `OPENAI_API_KEY`; optional `OPENAI_MODEL` (default `gpt-4o`)
- Remove `@ai-sdk/google` / `GEMINI_API_KEY` from the runtime path
