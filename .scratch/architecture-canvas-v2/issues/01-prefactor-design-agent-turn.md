# 01 — Prefactor Design agent turn

**What to build:** Same Design chat behavior as today, but planning lives behind one testable “turn” module (snapshot + message → plan). Liveblocks/UI unchanged.

**Blocked by:** None — can start immediately.

**Status:** done

- [x] `runDesignAgentTurn` accepts canvas snapshot + message and returns a Design plan outcome
- [x] Trigger design-agent task routes planning through the turn module
- [x] Unit tests at the Design agent turn seam (LLM injected)
- [x] Product behavior unchanged (always plan/apply)
