'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getDailyContent, type DailyContent } from '@/lib/family-altar';

export default function FamilyAltarPage() {
  const [content, setContent] = useState<DailyContent | null>(null);

  useEffect(() => {
    setContent(getDailyContent(new Date()));
  }, []);

  if (!content) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <p className="text-[var(--color-text-secondary)]">加载中...</p>
      </div>
    );
  }

  const { theme, scripture, reflection, question, prayer, catechism, mealPrayer, hymnKeywords } = content;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-5xl mb-4 block">🏠</span>
        <h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">
          家庭祭坛
        </h1>
        <p className="text-base text-[var(--color-text-secondary)] mb-3">Family Altar</p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {content.date} · 本期主题：
          <span className="text-[var(--color-accent)] font-medium">
            {theme.icon} {theme.name_zh} {theme.name_en}
          </span>
        </p>
      </div>

      <div className="space-y-6">
        {/* 1. 今日经文 */}
        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📖</span>
            <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)]">今日经文</h2>
            <span className="text-xs text-[var(--color-text-secondary)]">Daily Scripture</span>
          </div>
          <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] p-4">
            <p className="text-[var(--color-text)] leading-relaxed mb-2">
              &ldquo;{scripture.text_zh}&rdquo;
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic mb-3">
              &ldquo;{scripture.text_en}&rdquo;
            </p>
            <p className="text-xs text-[var(--color-accent)] font-medium">
              — {scripture.ref_zh} / {scripture.ref_en}
            </p>
          </div>
        </section>

        {/* 2. 默想 */}
        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">💭</span>
            <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)]">默想</h2>
            <span className="text-xs text-[var(--color-text-secondary)]">Reflection</span>
          </div>
          <p className="text-[var(--color-text)] leading-relaxed mb-2">{reflection.zh}</p>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic">{reflection.en}</p>
        </section>

        {/* 3. 讨论 */}
        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">💬</span>
            <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)]">家庭讨论</h2>
            <span className="text-xs text-[var(--color-text-secondary)]">Discussion</span>
          </div>
          <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] p-4">
            <p className="text-[var(--color-text)] leading-relaxed mb-1">{question.zh}</p>
            <p className="text-sm text-[var(--color-text-secondary)] italic">{question.en}</p>
          </div>
        </section>

        {/* 4. 祷告 */}
        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🙏</span>
            <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)]">祷告引导</h2>
            <span className="text-xs text-[var(--color-text-secondary)]">Prayer Guide</span>
          </div>
          <p className="text-[var(--color-text)] leading-relaxed mb-2">{prayer.zh}</p>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic">{prayer.en}</p>
        </section>

        {/* 5. 诗歌推荐 */}
        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🎵</span>
            <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)]">诗歌推荐</h2>
            <span className="text-xs text-[var(--color-text-secondary)]">Hymn Suggestion</span>
          </div>
          <p className="text-sm text-[var(--color-text)] mb-3">
            今天的主题是<strong>{theme.name_zh}</strong>，推荐唱一首与此相关的诗歌：
          </p>
          <Link
            href={`/worship?q=${encodeURIComponent(hymnKeywords[0])}`}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-2 text-sm font-medium hover:bg-[var(--color-accent)]/20 transition-colors"
          >
            🎶 浏览「{hymnKeywords[0]}」相关诗歌 →
          </Link>
        </section>

        {/* 6. 今日要理 */}
        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📚</span>
            <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)]">今日要理</h2>
            <span className="text-xs text-[var(--color-text-secondary)]">Daily Catechism</span>
          </div>
          <p className="text-[var(--color-text)] mb-1 font-medium">Q{catechism.number}: {catechism.question_zh}</p>
          <p className="text-sm text-[var(--color-text-secondary)] italic mb-3">{catechism.question_en}</p>
          <Link
            href={`/catechism/${catechism.id}`}
            className="text-sm text-[var(--color-accent)] hover:underline font-medium"
          >
            查看答案 View Answer →
          </Link>
        </section>

        {/* 7. 谢饭祷告 */}
        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🍞</span>
            <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)]">谢饭祷告</h2>
            <span className="text-xs text-[var(--color-text-secondary)]">Meal Prayer</span>
          </div>
          <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] p-4">
            <p className="text-[var(--color-text)] leading-relaxed mb-2">{mealPrayer.zh}</p>
            <p className="text-sm text-[var(--color-text-secondary)] italic">{mealPrayer.en}</p>
          </div>
        </section>
      </div>

      {/* Footer tip */}
      <div className="mt-8 text-center text-xs text-[var(--color-text-secondary)]">
        <p>💡 建议每次家庭敬拜控制在 5-10 分钟，简短、实用、易坚持</p>
        <p className="italic">Tip: Keep each family worship session to 5–10 minutes — short, practical, and sustainable</p>
      </div>
    </div>
  );
}
