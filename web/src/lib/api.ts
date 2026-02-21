const API_BASE = 'https://rockoftruth-api.suyanuiuc.workers.dev';

/** Map D1 snake_case fields to frontend camelCase */
function mapLetterFields(l: any): any {
  if (!l) return l;
  return {
    ...l,
    authorEn: l.author_en ?? l.authorEn,
    authorAvatar: l.author_avatar ?? l.authorAvatar,
    authorBio: l.author_bio ?? l.authorBio,
    authorBioEn: l.author_bio_en ?? l.authorBioEn,
    scriptureText_zh: l.scripture_text_zh ?? l.scriptureText_zh,
    scriptureText_en: l.scripture_text_en ?? l.scriptureText_en,
    tags: typeof l.tags === 'string' ? JSON.parse(l.tags) : (l.tags || []),
  };
}

export async function fetchLettersList(): Promise<any[]> {
  const res = await fetch(`${API_BASE}/letters`);
  if (!res.ok) return [];
  const data = await res.json();
  return (data.letters || []).map(mapLetterFields);
}

export async function fetchLetter(id: string): Promise<any | null> {
  const res = await fetch(`${API_BASE}/letters/${id}`);
  if (!res.ok) return null;
  const data = await res.json();
  return mapLetterFields(data.letter || null);
}

/** Map D1 snake_case fields to frontend camelCase for readings */
function mapReadingFields(r: any): any {
  if (!r) return r;
  return {
    ...r,
    bookEn: r.book_en ?? r.bookEn,
    titleEn: r.title_en ?? r.titleEn,
    authorEn: r.author_en ?? r.authorEn,
    publishDate: r.publish_date ?? r.publishDate,
    historyContext_zh: r.history_context_zh ?? r.historyContext_zh,
    historyContext_en: r.history_context_en ?? r.historyContext_en,
    christShadow_zh: r.christ_shadow_zh ?? r.christShadow_zh,
    christShadow_en: r.christ_shadow_en ?? r.christShadow_en,
  };
}

export async function fetchReadingsList(book?: string): Promise<any[]> {
  const url = book ? `${API_BASE}/readings?book=${book}` : `${API_BASE}/readings`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();
  return (data.readings || []).map(mapReadingFields);
}

export async function fetchReading(book: string, chapter: number): Promise<any | null> {
  const res = await fetch(`${API_BASE}/readings/${book}/${chapter}`);
  if (!res.ok) return null;
  const data = await res.json();
  return mapReadingFields(data.reading || null);
}
