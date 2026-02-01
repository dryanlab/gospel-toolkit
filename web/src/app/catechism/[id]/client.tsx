'use client';
import { useState, use } from 'react';
import Link from 'next/link';
import { getCatechismById } from '@/lib/data';
import LanguageToggle from '@/components/LanguageToggle';
import FavoriteButton from '@/components/FavoriteButton';
import BibleVerse from '@/components/BibleVerse';
import type { Language } from '@/lib/types';

export default function CatechismDetailClient({ paramsPromise }: { paramsPromise: Promise<{ id: string }> }) {
  const { id } = use(paramsPromise);
  const [lang, setLang] = useState<Language>('both');
  const q = getCatechismById(id);

  if (!q) return <div className="p-8 text-center">Question not found</div>;

  const showZh = lang === 'zh' || lang === 'both';
  const showEn = lang === 'en' || lang === 'both';

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <Link href="/catechism" className="text-sm text-[var(--color-accent)] hover:underline">← 返回列表</Link>
        <div className="flex items-center gap-3">
          <FavoriteButton id={q.id} />
          <LanguageToggle value={lang} onChange={setLang} />
        </div>
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
    </div>
  );
}
