'use client';
import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'gospel-read-items';

function getReadItems(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveReadItems(items: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...items]));
}

export function markAsRead(id: string) {
  const items = getReadItems();
  items.add(id);
  saveReadItems(items);
}

export function useReadStatus() {
  const [readItems, setReadItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    setReadItems(getReadItems());
  }, []);

  const isRead = useCallback((id: string) => readItems.has(id), [readItems]);

  const getReadCount = useCallback(() => readItems.size, [readItems]);

  return { isRead, getReadCount, readItems };
}

export function useMarkAsRead(id: string) {
  useEffect(() => {
    if (id) {
      markAsRead(id);
    }
  }, [id]);
}
