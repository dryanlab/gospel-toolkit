export function isPreview(): boolean {
  return process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true';
}

export function isPublished(dateStr: string): boolean {
  if (isPreview()) return true;
  return new Date(dateStr) <= new Date();
}
