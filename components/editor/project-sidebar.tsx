import { Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectSidebar({ open, onOpenChange }: ProjectSidebarProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-80 p-0 bg-surface border-r border-default">
        <SheetHeader className="p-4 border-b border-default">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-primary">Projects</SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="text-secondary hover:text-primary"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>

        <Tabs defaultValue="my-projects" className="flex-1 flex flex-col h-full">
          <TabsList className="w-full justify-start rounded-none border-b border-default bg-transparent p-0">
            <TabsTrigger
              value="my-projects"
              className="data-[state=active]:bg-subtle data-[state=active]:text-primary text-secondary px-4 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-accent-primary"
            >
              My Projects
            </TabsTrigger>
            <TabsTrigger
              value="shared"
              className="data-[state=active]:bg-subtle data-[state=active]:text-primary text-secondary px-4 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-accent-primary"
            >
              Shared
            </TabsTrigger>
          </TabsList>

          <TabsContent value="my-projects" className="flex-1 p-4">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-muted text-sm">No projects yet</p>
              <p className="text-faint text-xs mt-1">Create your first project to get started</p>
            </div>
          </TabsContent>

          <TabsContent value="shared" className="flex-1 p-4">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-muted text-sm">No shared projects</p>
              <p className="text-faint text-xs mt-1">Projects shared with you will appear here</p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="p-4 border-t border-default">
          <Button className="w-full bg-accent-primary hover:bg-accent-primary/90 text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
