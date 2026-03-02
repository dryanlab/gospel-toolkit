'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { searchAll } from '@/lib/data';
import { Suspense } from 'react';

type SearchScope = 'all' | 'qa' | 'catechism' | 'apologetics' | 'books' | 'youth' | 'worship';

const scopes: { key: SearchScope; label: string; icon: string }[] = [
  { key: 'all', label: '全站', icon: '🔍' },
  { key: 'qa', label: '福音问答', icon: '💬' },
  { key: 'catechism', label: '要理问答', icon: '📖' },
  { key: 'apologetics', label: '护教学', icon: '🛡️' },
  { key: 'books', label: '圣经·书库', icon: '📚' },
  { key: 'youth', label: '青少年', icon: '🌱' },
  { key: 'worship', label: '诗歌', icon: '🎵' },
];

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [scope, setScope] = useState<SearchScope>('all');
  const results = query ? searchAll(query) : null;

  const counts = results ? {
    all: results.qa.length + results.catechism.length + results.apologetics.length + results.books.length + (results.youth?.length || 0) + (results.worship?.length || 0),
    qa: results.qa.length,
    catechism: results.catechism.length,
    apologetics: results.apologetics.length,
    books: results.books.length,
    youth: results.youth?.length || 0,
    worship: results.worship?.length || 0,
  } : null;

  const showSection = (section: string) => scope === 'all' || scope === section;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">搜索结果</h1>
      {query && counts && (
        <p className="text-sm text-[var(--color-text-secondary)] mb-4">
          搜索 &ldquo;{query}&rdquo; — 找到 {counts[scope]} 个结果
        </p>
      )}

      {/* Scope Filter */}
      {query && results && (
        <div className="flex flex-wrap gap-2 mb-6">
          {scopes.map(s => {
            const count = counts ? (counts[s.key] ?? 0) : 0;
            if (s.key !== 'all' && count === 0) return null;
            return (
              <button
                key={s.key}
                onClick={() => setScope(s.key)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  scope === s.key
                    ? 'bg-[var(--color-primary)] text-white shadow-md'
                    : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
                }`}
              >
                {s.icon} {s.label} ({count})
              </button>
            );
          })}
        </div>
      )}

      {!query && (
        <p className="text-[var(--color-text-secondary)] py-10 text-center">请输入搜索词</p>
      )}

      {results && (
        <div className="space-y-8">
          {/* Q&A Results */}
          {showSection('qa') && results.qa.length > 0 && (
            <section>
              <h2 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3 flex items-center gap-2">
                💬 福音问答 <span className="text-xs bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-2 py-0.5 rounded-full">{results.qa.length}</span>
              </h2>
              <div className="space-y-2">
                {results.qa.map(q => (
                  <Link key={q.id} href={`/qa/${q.id}`} className="block rounded-xl border border-[var(--color-border)] p-3 hover:border-[var(--color-accent)] transition">
                    <h3 className="font-serif-cn font-medium text-[var(--color-text)] break-words">{q.question_zh}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] italic break-words">{q.question_en}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Catechism Results */}
          {showSection('catechism') && results.catechism.length > 0 && (
            <section>
              <h2 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3 flex items-center gap-2">
                📖 要理问答 <span className="text-xs bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-2 py-0.5 rounded-full">{results.catechism.length}</span>
              </h2>
              <div className="space-y-2">
                {results.catechism.map(q => (
                  <Link key={q.id} href={`/catechism/${q.id}`} className="block rounded-xl border border-[var(--color-border)] p-3 hover:border-[var(--color-accent)] transition">
                    <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-[var(--color-primary)] text-white mr-2 shrink-0">Q{q.number}</span>
                    <span className="font-serif-cn text-[var(--color-text)] break-words">{q.question_zh}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Apologetics Results */}
          {showSection('apologetics') && results.apologetics.length > 0 && (
            <section>
              <h2 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3 flex items-center gap-2">
                🛡️ 护教学 <span className="text-xs bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-2 py-0.5 rounded-full">{results.apologetics.length}</span>
              </h2>
              <div className="space-y-2">
                {results.apologetics.map(t => (
                  <Link key={t.id} href={`/apologetics/${t.id}`} className="block rounded-xl border border-[var(--color-border)] p-3 hover:border-[var(--color-accent)] transition">
                    <h3 className="font-serif-cn font-medium text-[var(--color-text)] break-words">{t.topic_zh}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] italic break-words">{t.topic_en}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Books Results */}
          {showSection('books') && results.books.length > 0 && (
            <section>
              <h2 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3 flex items-center gap-2">
                📚 圣经·书库 <span className="text-xs bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-2 py-0.5 rounded-full">{results.books.length}</span>
              </h2>
              <div className="space-y-2">
                {results.books.map(b => (
                  <Link key={b.id} href={`/library/${b.id}`} className="block rounded-xl border border-[var(--color-border)] p-3 hover:border-[var(--color-accent)] transition">
                    <h3 className="font-serif-cn font-medium text-[var(--color-text)] break-words">{b.title_zh}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] break-words">{b.author_zh} — {b.title_en}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Youth Results */}
          {showSection('youth') && results.youth && results.youth.length > 0 && (
            <section>
              <h2 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3 flex items-center gap-2">
                🌱 青少年 <span className="text-xs bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-2 py-0.5 rounded-full">{results.youth.length}</span>
              </h2>
              <div className="space-y-2">
                {results.youth.map((y: any) => (
                  <Link key={y.id} href={`/youth/article/${y.id}`} className="block rounded-xl border border-[var(--color-border)] p-3 hover:border-[var(--color-accent)] transition">
                    <h3 className="font-serif-cn font-medium text-[var(--color-text)] break-words">{y.title_zh}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] italic break-words">{y.title_en}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Worship Results */}
          {showSection('worship') && results.worship && results.worship.length > 0 && (
            <section>
              <h2 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3 flex items-center gap-2">
                🎵 敬拜诗歌 <span className="text-xs bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-2 py-0.5 rounded-full">{results.worship.length}</span>
              </h2>
              <div className="space-y-2">
                {results.worship.map((s: any) => (
                  <Link key={s.id} href={`/worship?song=${encodeURIComponent(s.id)}`} className="block rounded-xl border border-[var(--color-border)] p-3 hover:border-[var(--color-accent)] transition">
                    <h3 className="font-serif-cn font-medium text-[var(--color-text)] break-words">{s.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] break-words">🎤 {s.artist}{s.subtitle ? ` — ${s.subtitle}` : ''}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {counts && counts[scope] === 0 && query && (
            <p className="text-center text-[var(--color-text-secondary)] py-10">没有找到相关结果</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
