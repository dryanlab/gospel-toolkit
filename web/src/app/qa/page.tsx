'use client';
import { useState } from 'react';
import Link from 'next/link';
import { qaQuestions, categoryLabels } from '@/lib/data';
import FavoriteButton from '@/components/FavoriteButton';
import type { QACategory } from '@/lib/types';

const categories: QACategory[] = ['all', 'existence_of_god', 'problem_of_evil', 'bible_reliability', 'science_and_faith', 'uniqueness_of_jesus', 'sin_and_salvation', 'life_after_death', 'moral_foundation'];

export default function QAPage() {
  const [category, setCategory] = useState<QACategory>('all');
  const [search, setSearch] = useState('');

  const filtered = qaQuestions.filter(q => {
    const matchCat = category === 'all' || q.category === category;
    const matchSearch = !search ||
      q.question_zh.toLowerCase().includes(search.toLowerCase()) ||
      q.question_en.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-1">福音问答</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-4">Gospel Q&A — {qaQuestions.length} questions</p>

      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="搜索问题..."
        className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
      />

      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap font-medium transition-colors ${
              category === cat
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
            }`}
          >
            {categoryLabels[cat]?.zh || cat}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map(q => (
          <Link key={q.id} href={`/qa/${q.id}`} className="block">
            <div className="rounded-xl border border-[var(--color-border)] p-4 hover:border-[var(--color-accent)] hover:shadow-md transition-all bg-[var(--color-bg)]">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h3 className="font-serif-cn font-semibold text-[var(--color-text)] mb-1">{q.question_zh}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] italic">{q.question_en}</p>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-2 line-clamp-2">{q.short_answer_zh}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                      {categoryLabels[q.category]?.zh || q.category}
                    </span>
                  </div>
                </div>
                <FavoriteButton id={q.id} />
              </div>
            </div>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-[var(--color-text-secondary)] py-10">没有找到相关问题</p>
      )}
    </div>
  );
}
