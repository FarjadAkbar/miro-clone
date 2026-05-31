We need the base chrome component that frame every editor screen - the top navbar and left sidebar shell.

These will be reused and extended in every chapter follows.

# Editor Navbar
Create `components/editor/editor-navbar.tsx`

Requirements:
- fixed-height top navbar
- left, center and right sections
- left section contains sidebar toggle button
- use `PanelLeftOpen`/`PanelLeftClose` icon based on sidebar state
- right section stays empty for rows
- dark background with subtle border bottom


# Project Sidebar
Create `components/editor/project-sidebar.tsx`

Requirements:
- sidebar should float above the editor canvas
- opening it should not push page content
- slides in from left. use shadecn `sheet` component.
- collapsible sidebar
- header with Projects title + close button
- shadcn Tabs:
  - My Projects
  - Shared
- both tabs show empty placeholder state
- full-width New Project button at the bottom with Plus icon

# Dialog Pattern
Use the existing color tokens from globals.css for dialog styling.
Support:
-title
-description
-close button
-footer action

Do not build actual dialog yet.

# Check when ready
- [ ] new components compile without TypeScript errors
- [ ] no lint errors
- [ ] dialog pattern is ready for future use