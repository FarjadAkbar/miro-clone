import type { Project } from "@/types/project"

export const INITIAL_MOCK_PROJECTS: Project[] = [
  {
    id: "proj-1",
    name: "Payment Platform",
    slug: "payment-platform",
    owned: true,
  },
  {
    id: "proj-2",
    name: "Event Pipeline",
    slug: "event-pipeline",
    owned: true,
  },
  {
    id: "proj-3",
    name: "Marketing Site",
    slug: "marketing-site",
    owned: false,
  },
]
