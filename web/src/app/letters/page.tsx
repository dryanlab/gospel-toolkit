'use client';

import { isPublished, useHydrated } from '@/lib/preview';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { letters as staticLetters, categoryLabels } from '@/data/letters';
import type { Letter } from '@/data/letters';
import { fetchLettersList } from '@/lib/api';

const categories = ['all', 'testimony', 'exposition', 'theology', 'fellowship', 'to-you'] as const;

export default function LettersPage() {
  const hydrated = useHydrated();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [letters, setLetters] = useState<Letter[]>(staticLetters);

  useEffect(() => {
    fetchLettersList().then(apiLetters => {
      if (apiLetters && apiLetters.length > 0) {
        // Merge: API letters override static, parse tags
        const merged = apiLetters;
        setLetters(merged as Letter[]);
      }
    });
  }, []);

  const filtered = activeCategory === 'all'
    ? letters
    : letters.filter(l => l.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-4xl">📜</span>
        <h1 className="font-serif-cn text-2xl md:text-3xl font-bold text-[var(--color-text)] mt-3">
          圣徒来信
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mt-1">Letters from the Saints</p>
        <blockquote className="mt-4 text-sm text-[var(--color-text-secondary)] italic max-w-lg mx-auto">
          &ldquo;你们从前远离神的人，如今却在基督耶稣里，靠着他的血，已经得亲近了。&rdquo;
          <span className="text-xs">— 以弗所书 2:13</span>
          <br />
          <span className="text-xs italic">&ldquo;But now in Christ Jesus you who once were far off have been brought near by the blood of Christ.&rdquo;</span>
          <br />
          <span className="text-xs">— Ephesians 2:13</span>
        </blockquote>
        <p className="mt-4 text-sm text-[var(--color-text)] max-w-2xl mx-auto leading-relaxed">
          如果圣经中的人物能给今天的你写一封信，他们会说什么？这些书信以第一人称重述圣经历史，帮助你走进他们的挣扎、悔改与盼望。
          <br />
          <span className="text-[var(--color-text-secondary)]">
            What if the men and women of Scripture could write you a letter today? These first-person narratives retell biblical history, inviting you into their struggles, repentance, and hope.
          </span>
        </p>
        <div className="mt-4 inline-block px-4 py-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">
          <p className="text-sm text-[var(--color-accent)] font-medium">
            📅 每周六 · 早上 8:00 AM (EST) 更新
          </p>
          <p className="text-xs text-[var(--color-accent)]/70 italic">
            Updated every Saturday · 8:00 AM EST
          </p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map(cat => {
          const label = cat === 'all'
            ? { zh: '全部', en: 'All', icon: '📋' }
            : categoryLabels[cat];
          const count = cat === 'all' ? letters.length : letters.filter(l => l.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === cat
                  ? 'bg-[var(--color-accent)] text-white font-bold'
                  : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-accent)]/20'
              }`}
            >
              {label.icon} {label.zh} ({count})
            </button>
          );
        })}
      </div>

      {/* Article cards */}
      <div className="space-y-4">
        {filtered.map(letter => {
          const catLabel = categoryLabels[letter.category];
          const isComingSoon = hydrated && (letter.content_zh === '（即将发布）' || !isPublished(letter.date));
          return (
            <Link
              key={letter.id}
              href={isComingSoon ? '#' : `/letters/${letter.id}`}
              className={`block rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5 transition-all ${
                isComingSoon ? 'opacity-60 cursor-default' : 'hover:border-[var(--color-accent)] hover:shadow-lg'
              }`}
            >
              <div className="flex gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-border)] flex items-center justify-center text-2xl">
                  {letter.authorAvatar}
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                      {catLabel.icon} {catLabel.zh}
                    </span>
                    <span className="text-xs text-[var(--color-text-secondary)]">{letter.date}</span>
                    {isComingSoon && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-600 font-medium">
                        即将发布
                      </span>
                    )}
                  </div>
                  <h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] break-words">
                    {letter.title_zh}
                  </h2>
                  <p className="text-xs text-[var(--color-text-secondary)] italic mb-2">{letter.title_en}</p>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                    ✍️ {letter.author} {letter.authorEn} · 📖 {letter.scripture}
                  </p>
                  <p className="text-sm text-[var(--color-text)] leading-relaxed line-clamp-2">
                    {letter.summary_zh}
                  </p>
                  {/* Tags */}
                  <div className="flex gap-1.5 mt-2 flex-wrap">
                    {letter.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-bg)] text-[var(--color-text-secondary)]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-[var(--color-text-secondary)]">
          <p className="text-4xl mb-3">📭</p>
          <p>该栏目暂无文章 No articles in this category yet</p>
        </div>
      )}
    </div>
  );
}
