'use client';
import { useState, use } from 'react';
import Link from 'next/link';
import { getApologeticsById, getApologeticsBySection, apologeticsSectionLabels, apologeticsSections, worldviewLabels } from '@/lib/data';
import LanguageToggle from '@/components/LanguageToggle';
import FavoriteButton from '@/components/FavoriteButton';
import BibleVerse from '@/components/BibleVerse';
import { useMarkAsRead } from '@/hooks/useReadStatus';
import type { Language } from '@/lib/types';
import { formatWithItalics } from '@/lib/format-text';
import SpeakButton from '@/components/SpeakButton';

const sectionGradients: Record<string, string> = {
  'foundations': 'from-indigo-600 to-blue-700',
  'scripture': 'from-amber-600 to-yellow-700',
  'gospel-evidence': 'from-red-600 to-rose-700',
  'presuppositional': 'from-purple-600 to-violet-700',
  'objections': 'from-teal-600 to-cyan-700',
  'faith-culture': 'from-green-600 to-emerald-700',
  'comparative': 'from-orange-600 to-red-700',
  'discernment': 'from-pink-600 to-fuchsia-700',
};

export default function ApologeticsDetailClient({ paramsPromise }: { paramsPromise: Promise<{ id: string }> }) {
  const { id } = use(paramsPromise);
  const [lang, setLang] = useState<Language>('both');
  const [openObj, setOpenObj] = useState<number | null>(null);
  const t = getApologeticsById(id);
  useMarkAsRead(id);

  if (!t) return <div className="p-8 text-center">Topic not found</div>;

  const sectionInfo = apologeticsSectionLabels[t.section];
  const sectionItems = getApologeticsBySection(t.section);
  const idx = sectionItems.findIndex(item => item.id === t.id);
  const prev = idx > 0 ? sectionItems[idx - 1] : null;
  const next = idx < sectionItems.length - 1 ? sectionItems[idx + 1] : null;

  // Get prev/next section for navigation between topics
  const currentSectionIdx = apologeticsSections.indexOf(t.section);
  const prevSection = currentSectionIdx > 0 ? apologeticsSections[currentSectionIdx - 1] : null;
  const nextSection = currentSectionIdx < apologeticsSections.length - 1 ? apologeticsSections[currentSectionIdx + 1] : null;

  const showZh = lang === 'zh' || lang === 'both';
  const showEn = lang === 'en' || lang === 'both';

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] mb-4 flex-wrap">
        <Link href="/apologetics" className="text-[var(--color-accent)] hover:underline">护教学</Link>
        <span>›</span>
        <Link href={`/apologetics/section/${t.section}`} className="text-[var(--color-accent)] hover:underline">{sectionInfo?.icon} {sectionInfo?.zh}</Link>
        <span>›</span>
        <span className="truncate max-w-[200px]">{t.topic_zh}</span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <Link href={`/apologetics/section/${t.section}`} className="text-sm text-[var(--color-accent)] hover:underline">← 返回{sectionInfo?.zh}列表</Link>
        <div className="flex items-center gap-3">
          <FavoriteButton id={t.id} />
          <LanguageToggle value={lang} onChange={setLang} />
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div className="flex items-start justify-between mb-6 pb-4 border-b border-[var(--color-border)] gap-2">
        {prev ? (
          <Link href={`/apologetics/${prev.id}`} className="flex-1 min-w-0 group">
            <span className="text-xs text-[var(--color-text-secondary)]">← 上一篇</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">{prev.topic_zh}</p>
          </Link>
        ) : prevSection ? (
          <Link href={`/apologetics/section/${prevSection}`} className="flex-1 min-w-0 group">
            <span className="text-xs text-[var(--color-text-secondary)]">← 上一主题</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">{apologeticsSectionLabels[prevSection]?.zh || prevSection}</p>
          </Link>
        ) : <div className="flex-1 min-w-0" />}
        <span className="text-sm font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] shrink-0 mx-2 pt-4">{idx + 1} / {sectionItems.length}</span>
        {next ? (
          <Link href={`/apologetics/${next.id}`} className="flex-1 min-w-0 text-right group">
            <span className="text-xs text-[var(--color-text-secondary)]">下一篇 →</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">{next.topic_zh}</p>
          </Link>
        ) : nextSection ? (
          <Link href={`/apologetics/section/${nextSection}`} className="flex-1 min-w-0 text-right group">
            <span className="text-xs text-[var(--color-text-secondary)]">下一主题 →</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">{apologeticsSectionLabels[nextSection]?.zh || nextSection}</p>
          </Link>
        ) : <div className="flex-1 min-w-0" />}
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-gradient-to-r ${sectionGradients[t.section]} text-white font-medium`}>
          {sectionInfo?.icon} {sectionInfo?.zh}
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
          {worldviewLabels[t.target_worldview]?.zh} / {worldviewLabels[t.target_worldview]?.en}
        </span>
      </div>

      <div className="mb-8">
        {showZh && <h1 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2 break-words">{t.topic_zh}</h1>}
        {showEn && <h2 className="text-xl text-[var(--color-text-secondary)] italic break-words">{t.topic_en}</h2>}
      </div>

      <div className="rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 p-5 mb-8">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-[var(--color-accent)] text-sm uppercase tracking-wide">核心论证 Core Argument</h3>
          <div className="flex gap-2">
            {showZh && <SpeakButton text={t.core_argument_zh} lang="zh" />}
            {showEn && <SpeakButton text={t.core_argument_en} lang="en" />}
          </div>
        </div>
        {showZh && <p className="text-[var(--color-text)] mb-3 leading-relaxed">{formatWithItalics(t.core_argument_zh)}</p>}
        {showEn && <p className="text-[var(--color-text-secondary)] italic leading-relaxed">{formatWithItalics(t.core_argument_en)}</p>}
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
                <div className="p-5 border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                  {showZh && <p className="text-[var(--color-text)] mb-2 leading-relaxed">✅ {formatWithItalics(obj.response_zh)}</p>}
                  {showEn && <p className="text-[var(--color-text-secondary)] italic leading-relaxed">{formatWithItalics(obj.response_en)}</p>}
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
          {t.recommended_resources.map((r, i) => {
            const text = typeof r === 'string' ? r : r.text;
            const bookId = typeof r === 'string' ? null : r.book_id;
            return (
              <li key={i} className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2">
                <span className="text-[var(--color-accent)]">•</span>
                <span className="flex-1">{formatWithItalics(text)}</span>
                {bookId && (
                  <Link href={`/library/${bookId}`} className="text-[var(--color-accent)] hover:underline shrink-0" title="查看书籍">
                    📖
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom Prev / Next navigation */}
      <div className="flex items-start justify-between mt-8 pt-4 border-t border-[var(--color-border)] gap-2">
        {prev ? (
          <Link href={`/apologetics/${prev.id}`} className="flex-1 min-w-0 group">
            <span className="text-xs text-[var(--color-text-secondary)]">← 上一篇</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">{prev.topic_zh}</p>
          </Link>
        ) : prevSection ? (
          <Link href={`/apologetics/section/${prevSection}`} className="flex-1 min-w-0 group">
            <span className="text-xs text-[var(--color-text-secondary)]">← 上一主题</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">{apologeticsSectionLabels[prevSection]?.zh || prevSection}</p>
          </Link>
        ) : <div className="flex-1 min-w-0" />}
        <span className="text-sm font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] shrink-0 mx-2 pt-4">{idx + 1} / {sectionItems.length}</span>
        {next ? (
          <Link href={`/apologetics/${next.id}`} className="flex-1 min-w-0 text-right group">
            <span className="text-xs text-[var(--color-text-secondary)]">下一篇 →</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">{next.topic_zh}</p>
          </Link>
        ) : nextSection ? (
          <Link href={`/apologetics/section/${nextSection}`} className="flex-1 min-w-0 text-right group">
            <span className="text-xs text-[var(--color-text-secondary)]">下一主题 →</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">{apologeticsSectionLabels[nextSection]?.zh || nextSection}</p>
          </Link>
        ) : <div className="flex-1 min-w-0" />}
      </div>
    </div>
  );
}
