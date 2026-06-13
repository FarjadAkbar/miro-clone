export interface ProjectSpecListItem {
  id: string
  createdAt: string
  filename: string
}

export interface ProjectSpecListResponse {
  specs: ProjectSpecListItem[]
}
