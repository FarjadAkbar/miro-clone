import { describe, expect, it } from "vitest"
import {
  historyOfferedGenerate,
  isGenerateConfirmMessage,
} from "@/lib/design-agent-confirm"

describe("design agent confirm gate", () => {
  it("treats bare yes/generate as confirm phrases", () => {
    expect(isGenerateConfirmMessage("yes")).toBe(true)
    expect(isGenerateConfirmMessage("Generate on canvas")).toBe(true)
    expect(isGenerateConfirmMessage("looks good")).toBe(true)
  })

  it("does not treat clear edit prompts as confirms", () => {
    expect(isGenerateConfirmMessage("add a cache")).toBe(false)
    expect(isGenerateConfirmMessage("connect API to DB")).toBe(false)
  })

  it("detects whether Generate on canvas was offered", () => {
    expect(
      historyOfferedGenerate([
        { offerGenerate: false },
        { offerGenerate: true },
      ])
    ).toBe(true)
    expect(historyOfferedGenerate([{ offerGenerate: false }])).toBe(false)
  })
})
