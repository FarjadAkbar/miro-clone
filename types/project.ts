export interface Project {
  id: string
  name: string
  slug: string
  owned: boolean
}

export type ProjectDialogType = "create" | "rename" | "delete" | null
