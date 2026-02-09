'use client';
import { useState, use, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getYouthById, getYouthBySection, youthSectionLabels, youthSections } from '@/lib/data';
import LanguageToggle from '@/components/LanguageToggle';
import FavoriteButton from '@/components/FavoriteButton';
import BibleVerse from '@/components/BibleVerse';
import { useMarkAsRead } from '@/hooks/useReadStatus';
import type { Language } from '@/lib/types';

const sectionGradients: Record<string, string> = {
  'faith-basics': 'from-blue-500 to-indigo-600',
  'bible-guide': 'from-emerald-500 to-cyan-600', 
  'campus': 'from-green-500 to-teal-600',
  'growth': 'from-orange-500 to-red-600',
  'faith-science': 'from-violet-500 to-purple-600',
  'devotion': 'from-rose-500 to-pink-600',
  'discipleship': 'from-amber-500 to-yellow-600',
  'heroes': 'from-indigo-500 to-blue-600',
};

function YouthDetailContent({ id }: { id: string }) {
  const [lang, setLang] = useState<Language>('both');
  const searchParams = useSearchParams();
  const fromSection = searchParams.get('from'); // Optional: which section we came from
  
  const item = getYouthById(id);
  useMarkAsRead(id);

  if (!item) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h1 className="text-xl text-[var(--color-text-secondary)] mb-4">内容未找到</h1>
        <div className="flex items-center justify-center gap-4">
          {fromSection && (
            <Link href={`/youth/section/${fromSection}`} className="text-[var(--color-accent)] hover:underline">
              ← 返回分区
            </Link>
          )}
          <Link href="/youth" className="text-[var(--color-accent)] hover:underline">
            返回专区首页
          </Link>
        </div>
      </div>
    );
  }

  const sectionInfo = youthSectionLabels[item.section];
  const sectionItems = getYouthBySection(item.section);
  const yIdx = sectionItems.findIndex(x => x.id === item.id);
  const prevY = yIdx > 0 ? sectionItems[yIdx - 1] : null;
  const nextY = yIdx < sectionItems.length - 1 ? sectionItems[yIdx + 1] : null;

  // Get prev/next section for navigation between topics
  const currentSectionIdx = youthSections.indexOf(item.section);
  const prevSection = currentSectionIdx > 0 ? youthSections[currentSectionIdx - 1] : null;
  const nextSection = currentSectionIdx < youthSections.length - 1 ? youthSections[currentSectionIdx + 1] : null;

  const showZh = lang === 'zh' || lang === 'both';
  const showEn = lang === 'en' || lang === 'both';

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 overflow-hidden">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/youth" className="text-sm text-[var(--color-accent)] hover:underline">
            ← 专区首页
          </Link>
          {sectionInfo && (
            <>
              <span className="text-[var(--color-text-secondary)]">/</span>
              <Link href={`/youth/section/${item.section}`} className="text-sm text-[var(--color-accent)] hover:underline">
                {sectionInfo.zh}
              </Link>
            </>
          )}
        </div>
        <div className="flex items-center gap-3">
          <FavoriteButton id={item.id} />
          <LanguageToggle value={lang} onChange={setLang} />
        </div>
      </div>

      {/* Top Prev / Next */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--color-border)]">
        {prevY ? (
          <Link href={`/youth/article/${prevY.id}?from=${item.section}`} className="flex-1 group">
            <span className="text-xs text-[var(--color-text-secondary)]">← 上一篇</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{prevY.title_zh}</p>
          </Link>
        ) : prevSection ? (
          <Link href={`/youth/section/${prevSection}`} className="flex-1 group">
            <span className="text-xs text-[var(--color-text-secondary)]">← 上一主题</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{youthSectionLabels[prevSection]?.zh || prevSection}</p>
          </Link>
        ) : <div className="flex-1" />}
        <span className="text-sm font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] shrink-0 mx-2">{yIdx + 1} / {sectionItems.length}</span>
        {nextY ? (
          <Link href={`/youth/article/${nextY.id}?from=${item.section}`} className="flex-1 text-right group">
            <span className="text-xs text-[var(--color-text-secondary)]">下一篇 →</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{nextY.title_zh}</p>
          </Link>
        ) : nextSection ? (
          <Link href={`/youth/section/${nextSection}`} className="flex-1 text-right group">
            <span className="text-xs text-[var(--color-text-secondary)]">下一主题 →</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{youthSectionLabels[nextSection]?.zh || nextSection}</p>
          </Link>
        ) : <div className="flex-1" />}
      </div>

      {/* Section Badge */}
      {sectionInfo && (
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${sectionGradients[item.section]} text-white text-sm font-medium mb-6`}>
          <span>{sectionInfo.icon}</span>
          <span>{sectionInfo.zh} / {sectionInfo.en}</span>
        </div>
      )}

      {/* Title */}
      <div className="mb-8">
        {showZh && (
          <h1 className="font-serif-cn text-3xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3">
            {item.title_zh}
          </h1>
        )}
        {showEn && (
          <h2 className="text-xl text-[var(--color-text-secondary)] italic">
            {item.title_en}
          </h2>
        )}
      </div>

      {/* Content */}
      <div className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-6 mb-8">
        {showZh && (
          <div className="mb-6">
            <p className="text-[var(--color-text)] leading-relaxed whitespace-pre-line">
              {item.content_zh}
            </p>
          </div>
        )}
        {showEn && (
          <div className={showZh ? 'pt-6 border-t border-[var(--color-border)]' : ''}>
            <p className="text-[var(--color-text-secondary)] italic leading-relaxed whitespace-pre-line">
              {item.content_en}
            </p>
          </div>
        )}
      </div>

      {/* Bible Verses */}
      {item.bible_verses.length > 0 && (
        <div className="mb-8">
          <h3 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-4 flex items-center gap-2">
            📖 <span>经文引用 / Bible Verses</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {item.bible_verses.map((verse, i) => (
              <BibleVerse key={i} verse={verse} />
            ))}
          </div>
        </div>
      )}

      {/* Discussion Questions */}
      {item.discussion_questions.length > 0 && (
        <div className="rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 p-6 mb-8">
          <h3 className="font-semibold text-[var(--color-accent)] mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
            💬 <span>讨论问题 / Discussion Questions</span>
          </h3>
          <ol className="space-y-4">
            {item.discussion_questions.map((question, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[var(--color-accent)] font-bold text-lg shrink-0 mt-0.5">
                  {i + 1}.
                </span>
                <p className="text-[var(--color-text)] leading-relaxed">
                  {question}
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Tags */}
      <div className="mb-8">
        <h3 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3 text-sm">
          🏷️ 标签 / Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span 
              key={tag} 
              className="text-sm px-3 py-1 rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Prev / Next */}
      <div className="flex items-center justify-between mt-8 pt-4 border-t border-[var(--color-border)]">
        {prevY ? (
          <Link href={`/youth/article/${prevY.id}?from=${item.section}`} className="flex-1 group">
            <span className="text-xs text-[var(--color-text-secondary)]">← 上一篇</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{prevY.title_zh}</p>
          </Link>
        ) : prevSection ? (
          <Link href={`/youth/section/${prevSection}`} className="flex-1 group">
            <span className="text-xs text-[var(--color-text-secondary)]">← 上一主题</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{youthSectionLabels[prevSection]?.zh || prevSection}</p>
          </Link>
        ) : <div className="flex-1" />}
        <span className="text-sm font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] shrink-0 mx-2">{yIdx + 1} / {sectionItems.length}</span>
        {nextY ? (
          <Link href={`/youth/article/${nextY.id}?from=${item.section}`} className="flex-1 text-right group">
            <span className="text-xs text-[var(--color-text-secondary)]">下一篇 →</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{nextY.title_zh}</p>
          </Link>
        ) : nextSection ? (
          <Link href={`/youth/section/${nextSection}`} className="flex-1 text-right group">
            <span className="text-xs text-[var(--color-text-secondary)]">下一主题 →</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{youthSectionLabels[nextSection]?.zh || nextSection}</p>
          </Link>
        ) : <div className="flex-1" />}
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-center gap-6 pt-4">
        {sectionInfo && (
          <Link 
            href={`/youth/section/${item.section}`}
            className="px-4 py-2 rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90 transition-colors"
          >
            ← 返回 {sectionInfo.zh}
          </Link>
        )}
        <Link 
          href="/youth"
          className="px-4 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] transition-colors"
        >
          专区首页
        </Link>
      </div>
    </div>
  );
}

export default function YouthDetailClient({ paramsPromise }: { paramsPromise: Promise<{ id: string }> }) {
  const { id } = use(paramsPromise);
  
  return (
    <Suspense fallback={
      <div className="max-w-4xl mx-auto px-4 py-6 overflow-hidden">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    }>
      <YouthDetailContent id={id} />
    </Suspense>
  );
}