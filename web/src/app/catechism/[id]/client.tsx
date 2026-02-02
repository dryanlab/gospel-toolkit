'use client';
import { useState, use } from 'react';
import Link from 'next/link';
import { getCatechismById, catechismQuestions, catechismWlcQuestions } from '@/lib/data';
import LanguageToggle from '@/components/LanguageToggle';
import FavoriteButton from '@/components/FavoriteButton';
import BibleVerse from '@/components/BibleVerse';
import { useMarkAsRead } from '@/hooks/useReadStatus';
import type { Language } from '@/lib/types';

export default function CatechismDetailClient({ paramsPromise }: { paramsPromise: Promise<{ id: string }> }) {
  const { id } = use(paramsPromise);
  const [lang, setLang] = useState<Language>('both');
  const q = getCatechismById(id);
  useMarkAsRead(id);

  if (!q) return <div className="p-8 text-center">Question not found</div>;

  const isWlc = q.catechism === 'westminster_larger';
  const list = isWlc ? catechismWlcQuestions : catechismQuestions;
  const idx = list.findIndex(item => item.id === q.id);
  const prev = idx > 0 ? list[idx - 1] : null;
  const next = idx < list.length - 1 ? list[idx + 1] : null;

  const showZh = lang === 'zh' || lang === 'both';
  const showEn = lang === 'en' || lang === 'both';

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <Link href={`/catechism${isWlc ? '?tab=wlc' : ''}`} className="text-sm text-[var(--color-accent)] hover:underline">← 返回{isWlc ? '大要理' : '小要理'}列表</Link>
        <div className="flex items-center gap-3">
          <FavoriteButton id={q.id} />
          <LanguageToggle value={lang} onChange={setLang} />
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--color-border)]">
        {prev ? (
          <Link href={`/catechism/${prev.id}`} className="flex-1 group">
            <span className="text-xs text-[var(--color-text-secondary)]">← 上一题</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">Q{prev.number}. {prev.question_zh}</p>
          </Link>
        ) : <div className="flex-1" />}
        <span className="text-sm font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] shrink-0 mx-2">Q{q.number} / {list.length}</span>
        {next ? (
          <Link href={`/catechism/${next.id}`} className="flex-1 text-right group">
            <span className="text-xs text-[var(--color-text-secondary)]">下一题 →</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">Q{next.number}. {next.question_zh}</p>
          </Link>
        ) : <div className="flex-1" />}
      </div>

      <span className="text-xs font-bold px-2 py-0.5 rounded bg-[var(--color-primary)] text-white mb-4 inline-block">Q{q.number}</span>

      <div className="mb-6">
        {showZh && <h1 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">{q.question_zh}</h1>}
        {showEn && <h2 className="text-xl text-[var(--color-text-secondary)] italic">{q.question_en}</h2>}
      </div>

      <div className="rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 p-5 mb-6">
        <h3 className="font-semibold text-[var(--color-accent)] mb-2 text-sm uppercase tracking-wide">答案 Answer</h3>
        {showZh && <p className="text-[var(--color-text)] mb-2 leading-relaxed font-serif-cn">{q.answer_zh}</p>}
        {showEn && <p className="text-[var(--color-text-secondary)] italic leading-relaxed">{q.answer_en}</p>}
      </div>

      {q.proof_texts.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3">📖 相关经文 Related Scriptures</h3>
          <div className="flex flex-wrap gap-2">
            {q.proof_texts.map((v, i) => <BibleVerse key={i} verse={v} />)}
          </div>
        </div>
      )}

      {(q.notes_zh || q.notes_en) && (
        <div>
          <h3 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3">📝 注释 Notes</h3>
          {showZh && q.notes_zh && <p className="text-sm text-[var(--color-text)] mb-2">{q.notes_zh}</p>}
          {showEn && q.notes_en && <p className="text-sm text-[var(--color-text-secondary)] italic">{q.notes_en}</p>}
        </div>
      )}

      {/* Bottom Prev / Next navigation */}
      <div className="flex items-center justify-between mt-8 pt-4 border-t border-[var(--color-border)]">
        {prev ? (
          <Link href={`/catechism/${prev.id}`} className="flex-1 group">
            <span className="text-xs text-[var(--color-text-secondary)]">← 上一题</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">Q{prev.number}. {prev.question_zh}</p>
          </Link>
        ) : <div className="flex-1" />}
        <span className="text-sm font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] shrink-0 mx-2">Q{q.number} / {list.length}</span>
        {next ? (
          <Link href={`/catechism/${next.id}`} className="flex-1 text-right group">
            <span className="text-xs text-[var(--color-text-secondary)]">下一题 →</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">Q{next.number}. {next.question_zh}</p>
          </Link>
        ) : <div className="flex-1" />}
      </div>

    </div>
  );
}
