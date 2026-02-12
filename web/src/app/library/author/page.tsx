'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { books } from '@/lib/data';

type AuthorEntry = {
  name_zh: string;
  name_en: string;
  count: number;
  categories: string[];
};

function buildAuthorIndex(): AuthorEntry[] {
  const map = new Map<string, { en: string; count: number; cats: Set<string> }>();
  books.forEach((b) => {
    const zh = b.author_zh || '未知作者';
    const en = b.author_en || '';
    const existing = map.get(zh);
    if (existing) {
      existing.count++;
      if ((b as any).category) existing.cats.add((b as any).category);
    } else {
      const cats = new Set<string>();
      if ((b as any).category) cats.add((b as any).category);
      map.set(zh, { en, count: 1, cats });
    }
  });
  return Array.from(map.entries())
    .map(([zh, v]) => ({
      name_zh: zh,
      name_en: v.en,
      count: v.count,
      categories: Array.from(v.cats),
    }))
    .sort((a, b) => b.count - a.count);
}

function normalize(s: string) {
  return s.toLowerCase().replace(/[\s·．・.]/g, '');
}

export default function AuthorIndexPage() {
  const allAuthors = useMemo(() => buildAuthorIndex(), []);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search.trim()) return allAuthors;
    const q = normalize(search);
    return allAuthors.filter(
      (a) => normalize(a.name_zh).includes(q) || normalize(a.name_en).includes(q)
    );
  }, [search, allAuthors]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <h1 className="font-serif-cn text-3xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">
          ✍️ 按作者浏览
        </h1>
        <p className="text-[var(--color-text-secondary)]">Browse by Author</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          共 {allAuthors.length} 位作者，{books.length} 本书
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="搜索作者 Search author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40"
        />
      </div>

      {/* Back to library */}
      <div className="mb-6">
        <Link
          href="/library"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:underline"
        >
          ← 返回书库 Back to Library
        </Link>
      </div>

      {/* Author grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((author) => (
          <Link
            key={author.name_zh}
            href={`/library/author/${encodeURIComponent(author.name_zh)}`}
            className="block group"
          >
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4 hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif-cn font-bold text-[var(--color-text)] truncate">
                    {author.name_zh}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] italic truncate">
                    {author.name_en}
                  </p>
                </div>
                <span className="text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-1 rounded-full ml-2 whitespace-nowrap">
                  {author.count} 本
                </span>
              </div>
              {author.categories.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {author.categories.slice(0, 3).map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] bg-[var(--color-bg)] border border-[var(--color-border)] px-1.5 py-0.5 rounded-full text-[var(--color-text-secondary)]"
                    >
                      {cat}
                    </span>
                  ))}
                  {author.categories.length > 3 && (
                    <span className="text-[10px] text-[var(--color-text-secondary)]">
                      +{author.categories.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[var(--color-text-secondary)] mt-8">
          没有找到匹配的作者 No matching authors found
        </p>
      )}
    </div>
  );
}
