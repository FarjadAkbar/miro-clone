Fix the runtime error that blocks shape drops and other canvas mutations when `useLiveblocksFlow` tries to write to Liveblocks Storage.

---

## Problem

Dropping a shape from the bottom panel throws:

```
Uncaught TypeError: flow.get is not a function
    at useLiveblocksFlow.useMutation[onNodesChange]
    at EditorFlowCanvasInner.useCallback[handleDrop] (editor-flow-canvas.tsx)
```

The failure happens when `handleDrop` calls:

```ts
onNodesChange([{ type: "add", item: node }])
```

The same error can also appear when:

- importing a starter template
- restoring canvas state from autosave
- editing node labels, colors, or edge labels through `CanvasFlowProvider`

---

## Root Cause

`@liveblocks/react-flow` stores the diagram under the top-level Storage key `"flow"` (default `storageKey`).

Inside a mutation, `useLiveblocksFlow` does:

1. `const flow = storage.get("flow")`
2. `flow.get("nodes")` / `flow.get("edges")`

That only works when `"flow"` is a **LiveObject** containing **LiveMap** children.

The error means step 1 returned a truthy value that is **not** a LiveObject — usually one of:

| Cause | What happens |
|-------|----------------|
| Storage not initialized yet | `setInitialStorage` runs in a `useEffect` after Storage loads; early mutations can no-op or race |
| Corrupted / legacy room data | `"flow"` exists as plain JSON from an old experiment or manual dashboard edit, so init is skipped (`storage.get("flow") !== undefined`) but mutations fail |
| Package version skew | `@liveblocks/client` / `@liveblocks/react` out of sync with `@liveblocks/react-flow` / `@liveblocks/node` can deserialize Storage incorrectly |

The UI may still **read** nodes from a plain JSON snapshot (bracket access in selectors), while **writes** through `onNodesChange` fail.

---

## Implementation

### 1. Align Liveblocks package versions

Pin all Liveblocks packages to the **same patch version** in `package.json`:

- `@liveblocks/client`
- `@liveblocks/react`
- `@liveblocks/react-flow`
- `@liveblocks/node`

Reinstall and verify `npm run build` passes.

### 2. Add a flow-storage readiness guard

Do not call `onNodesChange` / `onEdgesChange` until Liveblocks flow storage is ready for mutations.

Options (pick one consistent approach):

**A — Use loading state from the hook**

- If not using `suspense: true`, check `isLoading` from `useLiveblocksFlow` before drop, template import, and autosave restore.
- Disable shape panel drag-drop and show no-op until `isLoading === false`.

**B — Small helper hook (preferred for reuse)**

Create e.g. `hooks/use-flow-storage-ready.ts` that returns `isFlowReady` when:

- Liveblocks Storage has loaded, and
- the `"flow"` entry exists as a valid LiveObject (or initialization has completed)

Use it in:

- `editor-flow-canvas.tsx` — `handleDrop`, `handleImportTemplate`
- `use-canvas-autosave.ts` — blob restore via `applyCanvasTemplate`

### 3. Harden autosave restore timing

In `use-canvas-autosave.ts`:

- wait for flow storage readiness before calling `applyCanvasTemplate`
- keep the existing rule: skip restore when the Liveblocks room already has nodes or edges
- do not write canvas JSON directly to Liveblocks Storage; restore only through `onNodesChange` / `onEdgesChange`

### 4. Handle corrupted `"flow"` storage (dev / legacy rooms)

For rooms where `"flow"` is plain JSON and blocks re-initialization:

- add a one-time client repair mutation that detects invalid `"flow"` data and replaces it with a fresh `LiveObject` + empty `LiveMap`s, **or**
- document that affected dev rooms must be reset in the Liveblocks dashboard

Only repair when the stored value is clearly not a LiveObject. Do not wipe valid collaborative state.

### 5. Keep a single flow owner

Ensure **one** component owns `useLiveblocksFlow` per room:

- `EditorFlowCanvasInner` remains the only caller
- do not add a second `useLiveblocksFlow` in the AI sidebar, autosave hook, or spec-generation helpers
- read-only canvas snapshots for spec generation should consume nodes/edges from props/context, not a second hook instance

### 6. Verify shape drop path unchanged

After the guard is in place, keep the existing drop logic:

1. read drag payload from `CANVAS_SHAPE_DRAG_TYPE`
2. `parseShapeDragPayload`
3. `reactFlow.screenToFlowPosition`
4. `createCanvasNode`
5. `onNodesChange([{ type: "add", item: node }])`

Do not bypass Liveblocks with local React Flow state.

---

## Scope Limits

- do not rewrite shape, edge, or node rendering (features 12–16)
- do not change canvas autosave API routes or Blob storage (feature 21)
- do not change design agent or spec generation behavior (features 22–29)
- do not add a parallel non-Liveblocks canvas state
- do not expose Vercel Blob URLs to the client

---

## Manual Verification

In `/editor/[roomId]`:

- drag each shape from the bottom panel onto the canvas — node appears, no console error
- import a starter template — nodes and edges appear
- reload an empty room with saved Blob canvas — restore works
- select a node — color toolbar and resize handles work
- double-click label — edit saves
- connect two nodes — edge appears
- open the same room in a second browser — changes sync

If a specific room still fails after the fix, reset that room's Storage in the Liveblocks dashboard and retry.

---

## Check When Done

- Shape drop no longer throws `flow.get is not a function`
- Template import and autosave restore wait for flow storage readiness
- All `@liveblocks/*` packages share the same version
- Only one `useLiveblocksFlow` instance per room
- Node/edge edits and connections work without console errors
- `npm run build` passes
