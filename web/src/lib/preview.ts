export function isPreview(): boolean {
  if (typeof window === 'undefined') return false;
  const h = window.location.hostname;
  return h === 'localhost' || h === '127.0.0.1' || h.startsWith('192.168.') || h.startsWith('10.') || h === 'dev.sudoem.org';
}

// For initial SSR/hydration: always return true to avoid mismatch
// Components should use useIsPublished() hook for date-gated rendering
export function isPublished(dateStr: string): boolean {
  if (!dateStr) return false;
  if (typeof window === 'undefined') return false;
  if (isPreview()) return true;
  // Publish at 6:00 AM Eastern Time on the date
  // Use midnight UTC of the publish date as a safe universal threshold
  // This means content appears by midnight UTC = 7PM EST / 8PM EDT the day before
  const publishTime = new Date(dateStr + 'T00:00:00Z');
  return publishTime <= new Date();
}

// React hook version — safe for hydration
import { useState, useEffect } from 'react';
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { setHydrated(true); }, []);
  return hydrated;
}
