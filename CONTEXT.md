# Miro AI

A real-time collaborative workspace for designing and understanding software **systems** on a shared canvas, with AI help and generated specs.

## Language

**System diagram**:
A canvas graph of services and infrastructure and how they connect — not a database ERD.
_Avoid_: ERD, entity-relationship diagram (unless explicitly adding that mode later)

**Node**:
One box on the canvas representing a part of the system. May be a generic geometric shape or a semantic component kind with a dedicated icon (e.g. load balancer, server, database).
_Avoid_: Block (prefer Node until we decide otherwise)

**Component kind**:
A semantic architecture role for a Node, rendered with a dedicated icon. v1 kinds: client, user, load balancer, server, API gateway, database, queue, message broker, cache, worker, blob storage, CDN, firewall/WAF, third-party/SaaS. Coexists with generic geometric shapes for freeform boxes. In the shape panel, kinds live under Components; geometry under Shapes.
_Avoid_: Shape type alone when you mean the role; icon type

**Edge**:
A connection between two nodes that shows how they relate or communicate.
_Avoid_: Link, arrow (in product language — visual arrows still render edges)

**Group**:
A named frame on the canvas that contains related Nodes as a tier or region (e.g. API Servers, Database Tier). Users and Design chat can create, rename, and move groups; membership is real containment, not just a background band.
_Avoid_: Tier box, frame, container (prefer Group in product language)

**Apply animation**:
Motion when a Design plan is applied — Nodes, Edges, and Groups appear or update with short enter/transition effects rather than popping in instantly.
_Avoid_: Build animation, spawn animation

**Flow animation**:
Motion along Edges that shows how data travels: direction of movement and sequence of travel (ordered hops / steps), as a design annotation — not live telemetry. After Generate on canvas or AI mutate it plays briefly, then settles unless Present mode is on.
_Avoid_: Particle mode, request animation, RPS/metrics overlay (prefer Flow animation for sequenced travel)

**Present mode**:
A canvas viewing mode where Flow animation stays on for demos; editing stays calmer with Flow animation off after the brief post-apply play.
_Avoid_: Demo mode, playback mode

**Design chat**:
The AI Architect sidebar conversation that can interview requirements or apply canvas mutations (add, move, update, delete nodes and edges). Hybrid by default: clear draw/edit asks act now; open-ended architecture asks interview first, then mutate after confirm.
_Avoid_: Chat option (too vague), Copilot

**Design interview**:
The Design chat phase that, for open-ended architecture asks, asks targeted functional and non-functional questions (grilling-style) until the direction is clear; only then does the assistant offer a Generate-on-canvas control before any Design plan is applied.
_Avoid_: Discovery mode, requirements chat (prefer Design interview)

**Generate on canvas**:
The explicit confirm control Design chat offers after a Design interview is ready; accepting it applies the Design plan to the live room. Natural-language confirms may still work once that control has been offered.
_Avoid_: Build button, apply plan (prefer Generate on canvas)

**AI provider**:
The LLM backend used for Design chat and Spec generation. Chosen provider is OpenAI for both (`gpt-4o` by default; overridable via `OPENAI_MODEL`).
_Avoid_: Gemini (removed from the product path)

**Design plan**:
The structured list of canvas actions (add/move/update/delete nodes and edges) produced by Design chat before applying them to the room.
_Avoid_: AI response (too vague when referring to the mutation plan)

**Spec generation**:
Turning the current system diagram (and related Design chat context) into a persisted Markdown technical specification from the Specs tab.
_Avoid_: Export only, download-only (generation creates the artifact; download is separate)
