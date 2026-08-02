# Miro AI

A real-time collaborative workspace for designing and understanding software **systems** on a shared canvas, with AI help and generated specs.

## Language

**System diagram**:
A canvas graph of services and infrastructure and how they connect — not a database ERD.
_Avoid_: ERD, entity-relationship diagram (unless explicitly adding that mode later)

**Node**:
One box on the canvas representing a part of the system (e.g. load balancer, server, database).
_Avoid_: Block (prefer Node until we decide otherwise)

**Edge**:
A connection between two nodes that shows how they relate or communicate.
_Avoid_: Link, arrow (in product language — visual arrows still render edges)

**Design chat**:
The AI Architect sidebar conversation that can add, move, update, or delete nodes and edges on the live canvas.
_Avoid_: Chat option (too vague), Copilot

**AI provider**:
The LLM backend used for Design chat and Spec generation. Chosen provider is OpenAI for both (`gpt-4o` by default; overridable via `OPENAI_MODEL`).
_Avoid_: Gemini (removed from the product path)

**Design plan**:
The structured list of canvas actions (add/move/update/delete nodes and edges) produced by Design chat before applying them to the room.
_Avoid_: AI response (too vague when referring to the mutation plan)
