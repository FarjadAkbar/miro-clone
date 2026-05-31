export function getCollaboratorInitials(email: string): string {
  return email.slice(0, 2).toUpperCase()
}
