# 05 — Wire Spec generation

**What to build:** Specs tab Generate Spec runs the existing pipeline; list/preview/download work for new specs.

**Blocked by:** None (parallel; richer after 4)

**Status:** done

- [x] Generate Spec builds trigger body from live canvas + Design chat (omit Groups)
- [x] POST `/api/ai/spec` + token + Trigger realtime run (mirror Design agent client/hook)
- [x] Button shows generating state and surface errors
- [x] On complete, Specs list refreshes so preview/download work for the new spec
- [x] Tests at `buildSpecTriggerBody` seam
