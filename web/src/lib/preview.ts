export function isPreview(): boolean {
  if (typeof window === 'undefined') return false;
  const h = window.location.hostname;
  return h === 'localhost' || h === '127.0.0.1' || h.startsWith('192.168.') || h.startsWith('10.');
}

// For initial SSR/hydration: always return true to avoid mismatch
// Components should use useIsPublished() hook for date-gated rendering
export function isPublished(dateStr: string): boolean {
  if (typeof window === 'undefined') return false;
  if (isPreview()) return true;
  // Compare in EST (UTC-5) to avoid timezone issues
  // Publish at 6:00 AM EST on the date
  const publishTime = new Date(dateStr + 'T06:00:00-05:00');
  return publishTime <= new Date();
}

// React hook version — safe for hydration
import { useState, useEffect } from 'react';
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { setHydrated(true); }, []);
  return hydrated;
}
