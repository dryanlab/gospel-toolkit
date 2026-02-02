'use client';
import { useState, use } from 'react';
import Link from 'next/link';
import { getQAById, qaQuestions, categoryLabels } from '@/lib/data';
import LanguageToggle from '@/components/LanguageToggle';
import FavoriteButton from '@/components/FavoriteButton';
import BibleVerse from '@/components/BibleVerse';
import { useMarkAsRead } from '@/hooks/useReadStatus';
import type { Language } from '@/lib/types';

export default function QADetailClient({ paramsPromise }: { paramsPromise: Promise<{ id: string }> }) {
  const { id } = use(paramsPromise);
  const [lang, setLang] = useState<Language>('both');
  const q = getQAById(id);
  useMarkAsRead(id);

  if (!q) return <div className="p-8 text-center">Question not found</div>;

  const idx = qaQuestions.findIndex(item => item.id === q.id);
  const prev = idx > 0 ? qaQuestions[idx - 1] : null;
  const next = idx < qaQuestions.length - 1 ? qaQuestions[idx + 1] : null;

  const showZh = lang === 'zh' || lang === 'both';
  const showEn = lang === 'en' || lang === 'both';

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <Link href="/qa" className="text-sm text-[var(--color-accent)] hover:underline">← 返回列表</Link>
        <div className="flex items-center gap-3">
          <FavoriteButton id={q.id} />
          <LanguageToggle value={lang} onChange={setLang} />
        </div>
      </div>

      {/* Top Prev / Next */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--color-border)]">
        {prev ? (
          <Link href={`/qa/${prev.id}`} className="flex-1 group">
            <span className="text-xs text-[var(--color-text-secondary)]">← 上一题</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{prev.question_zh}</p>
          </Link>
        ) : <div className="flex-1" />}
        <span className="text-sm font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] shrink-0 mx-2">{idx + 1} / {qaQuestions.length}</span>
        {next ? (
          <Link href={`/qa/${next.id}`} className="flex-1 text-right group">
            <span className="text-xs text-[var(--color-text-secondary)]">下一题 →</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{next.question_zh}</p>
          </Link>
        ) : <div className="flex-1" />}
      </div>

      <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] mb-3 inline-block">
        {categoryLabels[q.category]?.zh || q.category}
      </span>

      <div className="mb-8">
        {showZh && <h1 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">{q.question_zh}</h1>}
        {showEn && <h2 className="text-xl text-[var(--color-text-secondary)] italic">{q.question_en}</h2>}
      </div>

      <div className="rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 p-5 mb-6">
        <h3 className="font-semibold text-[var(--color-accent)] mb-2 text-sm uppercase tracking-wide">简答 Short Answer</h3>
        {showZh && <p className="text-[var(--color-text)] mb-2">{q.short_answer_zh}</p>}
        {showEn && <p className="text-[var(--color-text-secondary)] italic">{q.short_answer_en}</p>}
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3 text-lg">详细解答 Detailed Answer</h3>
        {showZh && (
          <div className="mb-4">
            {q.detailed_answer_zh.split('\n\n').map((p, i) => (
              <p key={i} className="text-[var(--color-text)] mb-3 leading-relaxed">{p}</p>
            ))}
          </div>
        )}
        {showEn && (
          <div>
            {q.detailed_answer_en.split('\n\n').map((p, i) => (
              <p key={i} className="text-[var(--color-text-secondary)] italic mb-3 leading-relaxed">{p}</p>
            ))}
          </div>
        )}
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3">📖 经文引用 Bible Verses</h3>
        <div className="flex flex-wrap gap-2">
          {q.bible_verses.map((v, i) => <BibleVerse key={i} verse={v} />)}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3">📚 推荐阅读 Related Readings</h3>
        <ul className="space-y-1">
          {q.related_readings.map((r, i) => (
            <li key={i} className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2">
              <span className="text-[var(--color-accent)]">•</span>{r}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Prev / Next */}
      <div className="flex items-center justify-between mt-8 pt-4 border-t border-[var(--color-border)]">
        {prev ? (
          <Link href={`/qa/${prev.id}`} className="flex-1 group">
            <span className="text-xs text-[var(--color-text-secondary)]">← 上一题</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{prev.question_zh}</p>
          </Link>
        ) : <div className="flex-1" />}
        <span className="text-sm font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] shrink-0 mx-2">{idx + 1} / {qaQuestions.length}</span>
        {next ? (
          <Link href={`/qa/${next.id}`} className="flex-1 text-right group">
            <span className="text-xs text-[var(--color-text-secondary)]">下一题 →</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{next.question_zh}</p>
          </Link>
        ) : <div className="flex-1" />}
      </div>
    </div>
  );
}
