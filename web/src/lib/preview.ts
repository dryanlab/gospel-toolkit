export function isPreview(): boolean {
  if (typeof window === 'undefined') return false;
  return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
}

export function isPublished(dateStr: string): boolean {
  if (isPreview()) return true;
  return new Date(dateStr) <= new Date();
}
