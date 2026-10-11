/** Portals need the same tokens and CSS scope as the React island. */
export function getWorkspacePortalContainer(): HTMLElement | undefined {
  if (typeof document === 'undefined') return undefined;

  const existing = document.getElementById('cats-course-workspace-portals');
  if (existing) return existing;

  const container = document.createElement('div');
  container.id = 'cats-course-workspace-portals';
  container.className = 'cats-course-workspace';
  container.dataset.courseWorkspacePortal = '';
  document.body.append(container);
  return container;
}
