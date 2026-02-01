'use client';
import { useState } from 'react';
import Link from 'next/link';
import { apologeticsTopics, worldviewLabels } from '@/lib/data';
import FavoriteButton from '@/components/FavoriteButton';
import type { WorldviewFilter } from '@/lib/types';

const worldviews: WorldviewFilter[] = ['all', 'atheism', 'islam', 'buddhism', 'cults', 'secularism'];

const worldviewColors: Record<string, string> = {
  atheism: 'from-slate-600 to-slate-800',
  islam: 'from-green-600 to-green-800',
  buddhism: 'from-amber-500 to-amber-700',
  cults: 'from-red-600 to-red-800',
  secularism: 'from-blue-500 to-blue-700',
};

export default function ApologeticsPage() {
  const [worldview, setWorldview] = useState<WorldviewFilter>('all');

  const filtered = apologeticsTopics.filter(t =>
    worldview === 'all' || t.target_worldview === worldview
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-1">护教学</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-4">Apologetics — {apologeticsTopics.length} topics</p>

      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
        {worldviews.map(wv => (
          <button
            key={wv}
            onClick={() => setWorldview(wv)}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap font-medium transition-colors ${
              worldview === wv
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
            }`}
          >
            {worldviewLabels[wv]?.zh || wv}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map(t => (
          <Link key={t.id} href={`/apologetics/${t.id}`} className="block group">
            <div className={`rounded-2xl bg-gradient-to-br ${worldviewColors[t.target_worldview] || 'from-gray-600 to-gray-800'} p-5 text-white shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 h-full`}>
              <div className="flex items-start justify-between">
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 mb-2 inline-block">
                  {worldviewLabels[t.target_worldview]?.zh}
                </span>
                <FavoriteButton id={t.id} className="text-white" />
              </div>
              <h3 className="font-serif-cn font-bold text-lg mb-1">{t.topic_zh}</h3>
              <p className="text-white/70 text-sm italic mb-2">{t.topic_en}</p>
              <p className="text-white/80 text-sm line-clamp-3">{t.core_argument_zh.substring(0, 100)}...</p>
              <div className="flex gap-1 mt-3 flex-wrap">
                {t.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/15">#{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
