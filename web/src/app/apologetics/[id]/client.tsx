'use client';
import { useState, use } from 'react';
import Link from 'next/link';
import { getApologeticsById, worldviewLabels } from '@/lib/data';
import LanguageToggle from '@/components/LanguageToggle';
import FavoriteButton from '@/components/FavoriteButton';
import BibleVerse from '@/components/BibleVerse';
import type { Language } from '@/lib/types';

export default function ApologeticsDetailClient({ paramsPromise }: { paramsPromise: Promise<{ id: string }> }) {
  const { id } = use(paramsPromise);
  const [lang, setLang] = useState<Language>('both');
  const [openObj, setOpenObj] = useState<number | null>(null);
  const t = getApologeticsById(id);

  if (!t) return <div className="p-8 text-center">Topic not found</div>;

  const showZh = lang === 'zh' || lang === 'both';
  const showEn = lang === 'en' || lang === 'both';

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <Link href="/apologetics" className="text-sm text-[var(--color-accent)] hover:underline">← 返回列表</Link>
        <div className="flex items-center gap-3">
          <FavoriteButton id={t.id} />
          <LanguageToggle value={lang} onChange={setLang} />
        </div>
      </div>

      <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] mb-3 inline-block">
        {worldviewLabels[t.target_worldview]?.zh} / {worldviewLabels[t.target_worldview]?.en}
      </span>

      <div className="mb-8">
        {showZh && <h1 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">{t.topic_zh}</h1>}
        {showEn && <h2 className="text-xl text-[var(--color-text-secondary)] italic">{t.topic_en}</h2>}
      </div>

      <div className="rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 p-5 mb-8">
        <h3 className="font-semibold text-[var(--color-accent)] mb-2 text-sm uppercase tracking-wide">核心论证 Core Argument</h3>
        {showZh && <p className="text-[var(--color-text)] mb-3 leading-relaxed">{t.core_argument_zh}</p>}
        {showEn && <p className="text-[var(--color-text-secondary)] italic leading-relaxed">{t.core_argument_en}</p>}
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-4 text-lg">💬 常见反驳与回应</h3>
        <div className="space-y-3">
          {t.common_objections.map((obj, i) => (
            <div key={i} className="rounded-xl border border-[var(--color-border)] overflow-hidden">
              <button
                onClick={() => setOpenObj(openObj === i ? null : i)}
                className="w-full p-4 text-left flex items-start justify-between gap-2 hover:bg-[var(--color-bg-secondary)] transition"
              >
                <div>
                  {showZh && <p className="font-medium text-[var(--color-text)]">❓ {obj.objection_zh}</p>}
                  {showEn && <p className="text-sm text-[var(--color-text-secondary)] italic mt-0.5">{obj.objection_en}</p>}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                  className={`w-5 h-5 shrink-0 text-[var(--color-text-secondary)] transition-transform ${openObj === i ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openObj === i && (
                <div className="p-4 pt-0 border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                  {showZh && <p className="text-[var(--color-text)] mb-2 leading-relaxed">✅ {obj.response_zh}</p>}
                  {showEn && <p className="text-[var(--color-text-secondary)] italic leading-relaxed">{obj.response_en}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3">📖 经文引用</h3>
        <div className="flex flex-wrap gap-2">
          {t.bible_verses.map((v, i) => <BibleVerse key={i} verse={v} />)}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3">📚 推荐资源</h3>
        <ul className="space-y-1">
          {t.recommended_resources.map((r, i) => (
            <li key={i} className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2">
              <span className="text-[var(--color-accent)]">•</span>{r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
