Replace the canvas placeholder with the liveblock React flow canvas

### Implementation
1- Keep the page server side
2- make the editor/canvas client side wrapper that sets up in the LiveBlock rooms
   it includes:
    - `LiveBlockProvider` using `/api/liveblocks-auth`
    - `RoomProvider` using the current room ID
    - initial presence with `cursor: null`
    - `ClientSideSuspense` with a simple loading state
    - an error fallback for Liveblocks connections issues

3- Write React Flow to Liveblocks state.
    - use `useLiveblocksFlow`
    - enable suspense
    - start with empty node and edges
    - pass the synced nodes, edges and change the handler for `ReactFlow`

4- Add shared canvas types `types/canvas.ts`
   Node data should support:
   - label
   - color
   - shape

   Also define the custom node and edge types:
   - `canvasNode`
   - `canvasEdge`

5- Render this basic canvas.
   include:
   - loose connection behavious
   - `fitView`
   - `MinMap`
   - dot-pattren background


### Scope Limit
- don't add control yet.
- don't add custom node or edge rendering yet.
- don't add presistance logic.
- don't add AI behaviour.
- keep this focused on the collabration canvas foundation


### Check when done
- Client canvas wrapper sets up the `Liveblock room`.
- React Flow use Liveblocks-synced nodes and edges.
- Shared canvas types exists in `types/canvas.ts`.
- `npm run build` passes.