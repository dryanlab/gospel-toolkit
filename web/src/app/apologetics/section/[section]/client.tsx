'use client';
import { use, useState } from 'react';
import Link from 'next/link';
import { getApologeticsBySection, apologeticsSectionLabels, apologeticsSections, worldviewLabels } from '@/lib/data';
import { useReadStatus } from '@/hooks/useReadStatus';
import FavoriteButton from '@/components/FavoriteButton';

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

// Per-worldview card gradients for sections with mixed worldviews
const worldviewGradients: Record<string, string> = {
  'islam': 'from-emerald-600 to-teal-700',
  'buddhism': 'from-amber-500 to-orange-600',
  'atheism': 'from-slate-600 to-gray-700',
  'secularism': 'from-sky-600 to-blue-700',
  'cults': 'from-rose-600 to-pink-700',
  'general': 'from-indigo-500 to-purple-600',
  'hinduism': 'from-orange-500 to-red-600',
  'judaism': 'from-blue-500 to-indigo-600',
};

const worldviewIcons: Record<string, string> = {
  'islam': '☪️',
  'buddhism': '☸️',
  'atheism': '🔬',
  'secularism': '🏛️',
  'cults': '⚠️',
  'general': '✝️',
  'hinduism': '🕉️',
  'judaism': '✡️',
};

export default function ApologeticsSectionClient({ paramsPromise }: { paramsPromise: Promise<{ section: string }> }) {
  const { section } = use(paramsPromise);
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const { isRead } = useReadStatus();
  const info = apologeticsSectionLabels[section];
  const items = getApologeticsBySection(section);
  const sectionIdx = apologeticsSections.indexOf(section);
  const prevSection = sectionIdx > 0 ? apologeticsSections[sectionIdx - 1] : null;
  const nextSection = sectionIdx < apologeticsSections.length - 1 ? apologeticsSections[sectionIdx + 1] : null;

  if (!info) return <div className="p-8 text-center">Section not found</div>;

  // Get unique worldviews in this section for tag filters
  const worldviews = [...new Set(items.map(item => item.target_worldview))];
  const hasMultipleWorldviews = worldviews.length > 1;

  const filtered = items.filter(item => {
    if (activeTag && item.target_worldview !== activeTag) return false;
    if (!search) return true;
    const s = search.toLowerCase();
    return item.topic_zh.toLowerCase().includes(s) ||
      item.topic_en.toLowerCase().includes(s) ||
      item.core_argument_zh.toLowerCase().includes(s);
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] mb-4">
        <Link href="/apologetics" className="text-[var(--color-accent)] hover:underline">护教学</Link>
        <span>›</span>
        <span>{info.icon} {info.zh}</span>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{info.icon}</span>
          <div>
            <h1 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)]">{info.zh}</h1>
            <p className="text-sm text-[var(--color-text-secondary)] italic">{info.en}</p>
          </div>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)]">{info.description_zh} · 共 {items.length} 篇</p>
      </div>

      {/* Worldview tag filters */}
      {hasMultipleWorldviews && (
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setActiveTag(null)}
            className={`text-sm px-3 py-1.5 rounded-full transition-all ${
              !activeTag
                ? 'bg-[var(--color-primary)] text-white dark:bg-[var(--color-accent)]'
                : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
            }`}
          >
            全部 ({items.length})
          </button>
          {worldviews.map(wv => {
            const count = items.filter(i => i.target_worldview === wv).length;
            const label = worldviewLabels[wv];
            return (
              <button
                key={wv}
                onClick={() => setActiveTag(activeTag === wv ? null : wv)}
                className={`text-sm px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  activeTag === wv
                    ? `bg-gradient-to-r ${worldviewGradients[wv] || sectionGradients[section]} text-white`
                    : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
                }`}
              >
                <span>{worldviewIcons[wv] || '📌'}</span>
                {label?.zh || wv} ({count})
              </button>
            );
          })}
        </div>
      )}

      {items.length > 3 && (
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="搜索..."
          className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        />
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <span className="text-4xl mb-4 block">🚧</span>
          <h3 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-2">内容建设中</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">该板块正在编写中，敬请期待！</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map(item => {
            const cardGradient = hasMultipleWorldviews
              ? (worldviewGradients[item.target_worldview] || sectionGradients[section])
              : sectionGradients[section];
            const wvLabel = worldviewLabels[item.target_worldview];
            return (
            <Link key={item.id} href={`/apologetics/${item.id}`} className="block group">
              <div className={`rounded-2xl bg-gradient-to-br ${cardGradient} p-5 text-white shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 h-full`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/20">
                      {worldviewIcons[item.target_worldview] || info.icon} {hasMultipleWorldviews ? (wvLabel?.zh || item.target_worldview) : info.zh}
                    </span>
                    {isRead(item.id) && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/25">✓ 已读</span>
                    )}
                  </div>
                  <FavoriteButton id={item.id} className="text-white" />
                </div>

                <h3 className="font-serif-cn font-bold text-lg mb-1">{item.topic_zh}</h3>
                <p className="text-white/70 text-sm italic mb-2">{item.topic_en}</p>
                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">{item.core_argument_zh}</p>
              </div>
            </Link>
          );
          })}
        </div>
      )}

      {/* Prev / Next section */}
      <div className="flex items-center justify-between mt-8 pt-4 border-t border-[var(--color-border)]">
        {prevSection ? (
          <Link href={`/apologetics/section/${prevSection}`} className="flex-1 group">
            <span className="text-xs text-[var(--color-text-secondary)]">← 上一板块</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
              {apologeticsSectionLabels[prevSection].icon} {apologeticsSectionLabels[prevSection].zh}
            </p>
          </Link>
        ) : <div className="flex-1" />}
        <Link href="/apologetics" className="text-sm text-[var(--color-accent)] hover:underline shrink-0 mx-4">返回总览</Link>
        {nextSection ? (
          <Link href={`/apologetics/section/${nextSection}`} className="flex-1 text-right group">
            <span className="text-xs text-[var(--color-text-secondary)]">下一板块 →</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
              {apologeticsSectionLabels[nextSection].icon} {apologeticsSectionLabels[nextSection].zh}
            </p>
          </Link>
        ) : <div className="flex-1" />}
      </div>
    </div>
  );
}
