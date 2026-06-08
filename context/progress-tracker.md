# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Foundation

## Current Goal

- Custom canvas nodes, edges, and presence cursors

## Completed

- Design system and UI components (shadcn/ui)
  - Installed shadcn/ui with dark theme configuration
  - Added 14 UI components: button, input, select, dialog, tooltip, badge, card, avatar, dropdown-menu, separator, sheet, tabs, alert, alert-dialog
  - Created lib/utils.ts with cn() helper function
  - Fixed globals.css semantic tokens (`text-copy-*`, `text-brand`, `bg-bg-*`) so icons and headings are readable on dark backgrounds
  - Resolved mistaken use of `text-primary` / `text-secondary` (shadcn surface colors) for UI copy
  - Installed lucide-react for icons
- Editor chrome (02-editor)
  - `editor-navbar.tsx`: fixed top bar, sidebar toggle with readable icons, three sections
  - `project-sidebar.tsx`: overlay Sheet from left, tabs (My Projects / Shared), empty states, New Project button, backdrop closes on outside tap
  - `dialog-pattern.tsx`: title, description, close, footer using design tokens and `rounded-3xl`
  - `editor-shell.tsx` + `/editor` route wiring home + sidebar + navbar without pushing canvas content
- Clerk authentication
  - ClerkProvider, sign-in/sign-up pages, proxy protection, UserButton in navbar, post-auth redirect to `/editor`
- Project dialogs (04-project-dialogs)
  - Create / rename / delete dialogs with slug preview and owned-only sidebar actions
- Prisma data layer (05-prisma)
  - `prisma/models/project.prisma`: `Project`, `ProjectCollaborator`, `ProjectStatus` enum
  - `prisma.config.ts` with multi-file schema (`schema: "prisma"`)
  - `lib/prisma.ts`: cached singleton; Accelerate when `DATABASE_URL` starts with `prisma+postgres://`, else `@prisma/adapter-pg`
  - Initial migration `20260531141632_init_projects` applied
  - Added `pg` dependency and `postinstall` / `db:migrate` scripts
- Project APIs (06-project-apis)
  - `GET /api/projects` — list projects for authenticated owner
  - `POST /api/projects` — create project (`Untitled Project` default name, optional custom `id` for room alignment)
  - `PATCH /api/projects/[roomId]` — rename (owner only)
  - `DELETE /api/projects/[roomId]` — delete (owner only)
  - `401` / `403` / `404` / `400` responses via `lib/api/auth.ts` and `lib/api/responses.ts`
- Wire editor to APIs (07-wire-editor)
  - `lib/projects.ts` — server-side `getProjectsForUser()` (owned + shared via collaborator email)
  - `/editor` and `/editor/[roomId]` server pages fetch projects and pass to client shells
  - `useProjectActions` hook: create (slug + suffix room ID, POST, navigate), rename (PATCH + refresh), delete (DELETE + redirect or refresh)
  - Sidebar, dialogs, and list navigation wired to real API data
  - Project ID doubles as Liveblocks room ID
- Editor workspace shell (08-editor-workspace-shell)
  - `lib/project-access.ts` — Clerk identity, owner/collaborator access checks, `getAccessibleProject()`
  - `/editor/[roomId]` server page: redirect to sign-in, `AccessDenied` for missing/forbidden, workspace shell on success
  - `components/editor/access-denied.tsx` — lock icon, message, link to `/editor`
  - `EditorWorkspaceShell` — full-viewport layout with project navbar, canvas placeholder, AI sidebar placeholder
  - Workspace navbar: project name, Share button, AI toggle, sidebar toggle
  - Active room highlighted in `ProjectSidebar`
- Share dialog (09-share-dialog)
  - `GET/POST /api/projects/[roomId]/collaborators` — list and invite (owner-only for invite)
  - `DELETE /api/projects/[roomId]/collaborators/[collaboratorId]` — remove (owner-only)
  - `lib/clerk-users.ts` — Clerk Backend API enrichment for display name and avatar by email
  - `ShareDialog` — invite by email, collaborator list, remove (owners), read-only list (collaborators), copy link with `Copied!` feedback
  - Share button wired in workspace navbar
- Liveblocks setup (10-liveblock-setup)
  - `liveblocks.config.ts` — `Presence` (cursor, `isThinking`), `UserMeta` (id, name, avatar, color)
  - `lib/liveblocks.ts` — cached `@liveblocks/node` client (`LIVEBLOCKS_SECRET_KEY`)
  - `lib/liveblocks-user-color.ts` — deterministic cursor color from user ID palette
  - `lib/liveblocks-room.ts` — `getOrCreateRoom` for project room IDs (private rooms)
  - `POST /api/liveblocks-auth` — Clerk auth, project access check, room ensure, session token with user metadata; `403` when access denied
  - Installed `@liveblocks/node`, `@liveblocks/client`, `@liveblocks/react`
- Base canvas (11-base-canvas)
  - `types/canvas.ts` — `CanvasNodeData` (label, color, shape), `canvasNode` / `canvasEdge` types, `NODE_COLORS`, `NODE_SHAPES`
  - `EditorCanvas` — `LiveblocksProvider` (`/api/liveblocks-auth`), `RoomProvider`, initial presence (`cursor: null`), `ClientSideSuspense`, connection error guard
  - `EditorFlowCanvas` — `useLiveblocksFlow` (suspense, empty nodes/edges), React Flow with loose connections, `fitView`, `MiniMap`, dot `Background`
  - Workspace shell wired to live canvas; `/editor/[roomId]` page remains server-rendered
  - Installed `@xyflow/react`, `@liveblocks/react-flow`

## In Progress

- None.

## Next Up

- Custom canvas node and edge rendering
- Presence cursors on canvas

## Open Questions

- None yet.

## Architecture Decisions

- Prisma client uses Accelerate URL when configured; otherwise direct PostgreSQL via `PrismaPg` adapter.
- Project `id` is the Liveblocks room ID (`{slugified-name}-{suffix}` on create).
- `/editor` is the project home; `/editor/[roomId]` is the workspace shell.
- Collaborators stored by email in `ProjectCollaborator`; profile enrichment via Clerk Backend API only (no local user table).
- Liveblocks uses access-token auth via `prepareSession` + per-request `session.allow(room)` after Prisma access checks; rooms created with `defaultAccesses: []`.
- Canvas state synced via `useLiveblocksFlow` in Liveblocks Storage; custom node/edge components deferred.

## Session Notes

- Fixed `/editor/[roomId]` 404: Next.js requires the same dynamic segment name app-wide (`roomId`); API routes renamed from `[projectId]`; clear `.next` after such changes.
