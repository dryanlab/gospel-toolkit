'use client';
import { useState, use } from 'react';
import Link from 'next/link';
import { getYouthBySection, youthSectionLabels } from '@/lib/data';
import FavoriteButton from '@/components/FavoriteButton';
import { useReadStatus } from '@/hooks/useReadStatus';
import type { YouthSection } from '@/lib/types';

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

export default function YouthSectionClient({ paramsPromise }: { paramsPromise: Promise<{ section: string }> }) {
  const { section } = use(paramsPromise);
  const [search, setSearch] = useState('');
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);
  const { isRead } = useReadStatus();

  const sectionInfo = youthSectionLabels[section];
  const items = getYouthBySection(section);

  if (!sectionInfo) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h1 className="text-xl text-[var(--color-text-secondary)] mb-4">分区未找到</h1>
        <Link href="/youth" className="text-[var(--color-accent)] hover:underline">
          ← 返回青少年专区
        </Link>
      </div>
    );
  }

  const filtered = items.filter(item => {
    const s = search.toLowerCase();
    const matchSearch = !search ||
      item.title_zh.toLowerCase().includes(s) ||
      item.title_en.toLowerCase().includes(s) ||
      item.content_zh.toLowerCase().includes(s) ||
      item.content_en.toLowerCase().includes(s) ||
      item.tags.some(tag => tag.toLowerCase().includes(s));
    const matchRead = !showUnreadOnly || !isRead(item.id);
    return matchSearch && matchRead;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/youth" className="text-sm text-[var(--color-accent)] hover:underline">
          ← 返回专区首页
        </Link>
      </div>

      {/* Section Header */}
      <div className={`rounded-2xl bg-gradient-to-br ${sectionGradients[section]} p-6 text-white mb-8`}>
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl">{sectionInfo.icon}</div>
          <div>
            <h1 className="font-serif-cn text-3xl font-bold">{sectionInfo.zh}</h1>
            <p className="text-white/80 text-lg italic">{sectionInfo.en}</p>
          </div>
        </div>
        <p className="text-white/90 leading-relaxed">{sectionInfo.description_zh}</p>
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/20">
          <span className="text-sm">当前内容：{items.length} 篇</span>
          <span className="text-sm">已读：{items.filter(item => isRead(item.id)).length} 篇</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="搜索本分区内容 / Search in this section..."
          className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        />
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-[var(--color-text-secondary)]">
            找到 {filtered.length} 条结果
          </span>
          <button
            onClick={() => setShowUnreadOnly(!showUnreadOnly)}
            className={`text-sm px-4 py-2 rounded-full transition-colors ${
              showUnreadOnly
                ? 'bg-[var(--color-accent)] text-white'
                : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
            }`}
          >
            {showUnreadOnly ? '仅显示未读' : '显示全部'}
          </button>
        </div>
      </div>

      {/* Content List */}
      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-lg font-semibold text-[var(--color-text-secondary)] mb-2">
            {search ? '没有找到匹配的内容' : '内容建设中...'}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {search 
              ? '尝试使用不同的关键词搜索' 
              : '我们正在为这个分区准备更多精彩内容，敬请期待！'
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map(item => (
            <Link key={item.id} href={`/youth/article/${item.id}?from=${section}`} className="block group">
              <div className={`rounded-2xl bg-gradient-to-br ${sectionGradients[section]} p-5 text-white shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 h-full`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/20">
                      {sectionInfo.icon} {sectionInfo.zh}
                    </span>
                    {isRead(item.id) && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/25">
                        ✓ 已读
                      </span>
                    )}
                  </div>
                  <FavoriteButton id={item.id} className="text-white" />
                </div>
                
                <h3 className="font-serif-cn font-bold text-lg mb-1">
                  {item.title_zh}
                </h3>
                <p className="text-white/70 text-sm italic mb-2">
                  {item.title_en}
                </p>
                <p className="text-white/80 text-sm leading-relaxed line-clamp-3 mb-3">
                  {item.content_zh.substring(0, 120)}...
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-0.5 rounded-full bg-white/15"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}