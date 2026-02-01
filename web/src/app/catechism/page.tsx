'use client';
import { useState } from 'react';
import Link from 'next/link';
import { catechismQuestions } from '@/lib/data';
import FavoriteButton from '@/components/FavoriteButton';

export default function CatechismPage() {
  const [search, setSearch] = useState('');

  const filtered = catechismQuestions.filter(q => {
    if (!search) return true;
    const s = search.toLowerCase();
    return q.question_zh.toLowerCase().includes(s) ||
      q.question_en.toLowerCase().includes(s) ||
      q.answer_zh.toLowerCase().includes(s) ||
      q.answer_en.toLowerCase().includes(s) ||
      String(q.number).includes(s);
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-1">
        <h1 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)]">要理问答</h1>
        <Link
          href="/catechism/flashcards"
          className="px-4 py-2 rounded-xl bg-[var(--color-accent)] text-white text-sm font-medium hover:opacity-90 transition"
        >
          🃏 闪卡模式
        </Link>
      </div>
      <p className="text-sm text-[var(--color-text-secondary)] mb-4">Westminster Shorter Catechism — {catechismQuestions.length} questions</p>

      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="搜索问答..."
        className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
      />

      <div className="space-y-2">
        {filtered.map(q => (
          <Link key={q.id} href={`/catechism/${q.id}`} className="block">
            <div className="rounded-xl border border-[var(--color-border)] p-4 hover:border-[var(--color-accent)] hover:shadow-md transition-all bg-[var(--color-bg)]">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-[var(--color-primary)] text-white">Q{q.number}</span>
                  </div>
                  <h3 className="font-serif-cn font-medium text-[var(--color-text)]">{q.question_zh}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] italic mt-0.5">{q.question_en}</p>
                </div>
                <FavoriteButton id={q.id} />
              </div>
            </div>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-[var(--color-text-secondary)] py-10">没有找到相关问答</p>
      )}
    </div>
  );
}
