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
  // Publish at midnight Eastern Time (ET) on the date
  // Compare current ET date with publish date — handles DST automatically
  const now = new Date();
  const todayET = now.toLocaleDateString('en-CA', { timeZone: 'America/New_York' }); // YYYY-MM-DD format
  return dateStr <= todayET;
}

// React hook version — safe for hydration
import { useState, useEffect } from 'react';
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { setHydrated(true); }, []);
  return hydrated;
}
