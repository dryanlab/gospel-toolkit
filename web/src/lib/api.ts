const API_BASE = 'https://rockoftruth-api.suyanuiuc.workers.dev';

export async function fetchLettersList(): Promise<any[]> {
  const res = await fetch(`${API_BASE}/letters`);
  if (!res.ok) return [];
  const data = await res.json();
  return data.letters || [];
}

export async function fetchLetter(id: string): Promise<any | null> {
  const res = await fetch(`${API_BASE}/letters/${id}`);
  if (!res.ok) return null;
  const data = await res.json();
  return data.letter || null;
}

export async function fetchReadingsList(book?: string): Promise<any[]> {
  const url = book ? `${API_BASE}/readings?book=${book}` : `${API_BASE}/readings`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();
  return data.readings || [];
}

export async function fetchReading(book: string, chapter: number): Promise<any | null> {
  const res = await fetch(`${API_BASE}/readings/${book}/${chapter}`);
  if (!res.ok) return null;
  const data = await res.json();
  return data.reading || null;
}
