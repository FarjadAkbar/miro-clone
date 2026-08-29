/** True when the message is a bare generate/confirm, not a concrete canvas edit. */
export function isGenerateConfirmMessage(message: string): boolean {
  const normalized = message.trim().toLowerCase()

  if (
    /^(add|delete|remove|connect|move|rename|update|resize|change|link|put|create)\b/.test(
      normalized
    )
  ) {
    return false
  }

  return (
    /^(yes|yep|yeah|y|ok|okay|sure)[.!]*$/.test(normalized) ||
    /^(generate( on canvas)?|build it|looks good|go ahead|do it)[.!]*$/.test(
      normalized
    )
  )
}

export function historyOfferedGenerate(
  history: Array<{ offerGenerate?: boolean }>
): boolean {
  return history.some((turn) => turn.offerGenerate === true)
}
