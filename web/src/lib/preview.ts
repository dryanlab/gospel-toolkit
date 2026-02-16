export function isPreview(): boolean {
  if (typeof window === 'undefined') return false;
  return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
}

// For initial SSR/hydration: always return true to avoid mismatch
// Components should use useIsPublished() hook for date-gated rendering
export function isPublished(dateStr: string): boolean {
  if (typeof window === 'undefined') return false;
  if (isPreview()) return true;
  return new Date(dateStr) <= new Date();
}

// React hook version — safe for hydration
import { useState, useEffect } from 'react';
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { setHydrated(true); }, []);
  return hydrated;
}
