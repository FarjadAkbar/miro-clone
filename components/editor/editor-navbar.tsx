import { PanelLeftOpen, PanelLeftClose } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"

interface EditorNavbarProps {
  sidebarOpen: boolean
  onSidebarToggle: () => void
}

export function EditorNavbar({ sidebarOpen, onSidebarToggle }: EditorNavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-surface border-b border-default flex items-center px-4 z-50">
      {/* Left section - sidebar toggle */}
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onSidebarToggle}
          className="text-secondary hover:text-primary"
        >
          {sidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Center section - empty for now */}
      <div className="flex-1 flex items-center justify-center">
        {/* Future: board title, breadcrumbs, etc. */}
      </div>

      {/* Right section - user menu */}
      <div className="flex items-center">
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-8 w-8",
            },
          }}
        />
      </div>
    </header>
  )
}
