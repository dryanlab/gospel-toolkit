'use client';
import { useState, useMemo, use } from 'react';
import Link from 'next/link';
import { qaQuestions, categoryLabels } from '@/lib/data';
import FavoriteButton from '@/components/FavoriteButton';

function normalize(str: string): string {
  return str.toLowerCase().replace(/[\s·．・]/g, '');
}

export default function QACategoryClient({ paramsPromise }: { paramsPromise: Promise<{ cat: string }> }) {
  const { cat } = use(paramsPromise);
  const [search, setSearch] = useState('');
  const label = categoryLabels[cat] || { zh: cat, en: cat };

  const questions = useMemo(() => qaQuestions.filter(q => q.category === cat), [cat]);

  const filtered = useMemo(() => {
    if (!search.trim()) return questions;
    const q = normalize(search);
    return questions.filter(item =>
      normalize(item.question_zh).includes(q) ||
      normalize(item.question_en).includes(q) ||
      normalize(item.short_answer_zh).includes(q)
    );
  }, [search, questions]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <Link href="/qa" className="text-sm text-[var(--color-accent)] hover:underline">← 返回福音问答</Link>
      </div>

      <div className="text-center mb-6">
        <h1 className="font-serif-cn text-3xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">
          {label.zh}
        </h1>
        <p className="text-[var(--color-text-secondary)]">{label.en}</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">{questions.length} 个问题</p>
      </div>

      {questions.length > 5 && (
        <div className="mb-5">
          <input
            type="text"
            placeholder="搜索问题..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40"
          />
        </div>
      )}

      <div className="space-y-3">
        {filtered.map(q => (
          <Link key={q.id} href={`/qa/${q.id}`} className="block">
            <div className="rounded-xl border border-[var(--color-border)] p-4 hover:border-[var(--color-accent)] hover:shadow-md transition-all bg-[var(--color-bg)]">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h3 className="font-serif-cn font-medium text-[var(--color-text)] mb-1">{q.question_zh}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] italic mb-2">{q.question_en}</p>
                  <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">{q.short_answer_zh}</p>
                </div>
                <FavoriteButton id={q.id} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[var(--color-text-secondary)] py-8">没有找到匹配的问题</p>
      )}
    </div>
  );
}
