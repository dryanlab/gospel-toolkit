'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { searchAll } from '@/lib/data';
import { Suspense } from 'react';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchAll(query) : null;

  const totalResults = results
    ? results.qa.length + results.catechism.length + results.apologetics.length + results.books.length
    : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">搜索结果</h1>
      {query && (
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          搜索 &ldquo;{query}&rdquo; — 找到 {totalResults} 个结果
        </p>
      )}

      {!query && (
        <p className="text-[var(--color-text-secondary)] py-10 text-center">请输入搜索词</p>
      )}

      {results && (
        <div className="space-y-8">
          {/* Q&A Results */}
          {results.qa.length > 0 && (
            <section>
              <h2 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3 flex items-center gap-2">
                💬 福音问答 <span className="text-xs bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-2 py-0.5 rounded-full">{results.qa.length}</span>
              </h2>
              <div className="space-y-2">
                {results.qa.map(q => (
                  <Link key={q.id} href={`/qa/${q.id}`} className="block rounded-xl border border-[var(--color-border)] p-3 hover:border-[var(--color-accent)] transition">
                    <h3 className="font-serif-cn font-medium text-[var(--color-text)]">{q.question_zh}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] italic">{q.question_en}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Catechism Results */}
          {results.catechism.length > 0 && (
            <section>
              <h2 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3 flex items-center gap-2">
                📖 要理问答 <span className="text-xs bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-2 py-0.5 rounded-full">{results.catechism.length}</span>
              </h2>
              <div className="space-y-2">
                {results.catechism.map(q => (
                  <Link key={q.id} href={`/catechism/${q.id}`} className="block rounded-xl border border-[var(--color-border)] p-3 hover:border-[var(--color-accent)] transition">
                    <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-[var(--color-primary)] text-white mr-2">Q{q.number}</span>
                    <span className="font-serif-cn text-[var(--color-text)]">{q.question_zh}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Apologetics Results */}
          {results.apologetics.length > 0 && (
            <section>
              <h2 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3 flex items-center gap-2">
                🛡️ 护教学 <span className="text-xs bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-2 py-0.5 rounded-full">{results.apologetics.length}</span>
              </h2>
              <div className="space-y-2">
                {results.apologetics.map(t => (
                  <Link key={t.id} href={`/apologetics/${t.id}`} className="block rounded-xl border border-[var(--color-border)] p-3 hover:border-[var(--color-accent)] transition">
                    <h3 className="font-serif-cn font-medium text-[var(--color-text)]">{t.topic_zh}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] italic">{t.topic_en}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Books Results */}
          {results.books.length > 0 && (
            <section>
              <h2 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3 flex items-center gap-2">
                📚 书库 <span className="text-xs bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-2 py-0.5 rounded-full">{results.books.length}</span>
              </h2>
              <div className="space-y-2">
                {results.books.map(b => (
                  <Link key={b.id} href={`/library/${b.id}`} className="block rounded-xl border border-[var(--color-border)] p-3 hover:border-[var(--color-accent)] transition">
                    <h3 className="font-serif-cn font-medium text-[var(--color-text)]">{b.title_zh}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">{b.author_zh} — {b.title_en}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {totalResults === 0 && query && (
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
