'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getDailyContent, type DailyContent } from '@/lib/family-altar';

function GuideSection() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-3 text-left hover:bg-[var(--color-bg-secondary)]/80 transition-colors"
      >
        <span className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)]">
          📘 关于家庭祭坛 · About Family Altar
        </span>
        <span className="text-[var(--color-text-secondary)] text-xs">{open ? '收起 ▲' : '展开 ▼'}</span>
      </button>
      {open && (
        <div className="mt-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5 space-y-4 text-sm text-[var(--color-text)]">
          <div>
            <p className="font-medium mb-1">🎯 什么是家庭祭坛？</p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              家庭祭坛是基督徒家庭的每日敬拜时间。全家人一起读经、默想、讨论、祷告和唱诗，在神的话语中建立属灵的根基。
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed italic mt-1">
              Family Altar is a daily worship time for Christian families — reading Scripture, reflecting, discussing, praying, and singing together to build a spiritual foundation in God&apos;s Word.
            </p>
          </div>

          <div>
            <p className="font-medium mb-2">📋 每日内容包括：</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[var(--color-text-secondary)]">
              <div className="flex items-start gap-2"><span>📖</span><span><strong>今日经文</strong> — 一段中英双语经文</span></div>
              <div className="flex items-start gap-2"><span>💭</span><span><strong>默想</strong> — 针对该经文的简短默想</span></div>
              <div className="flex items-start gap-2"><span>💬</span><span><strong>家庭讨论</strong> — 围绕经文的讨论问题</span></div>
              <div className="flex items-start gap-2"><span>🙏</span><span><strong>祷告引导</strong> — 基于经文的祷告方向</span></div>
              <div className="flex items-start gap-2"><span>🎵</span><span><strong>诗歌推荐</strong> — 与主题相关的赞美诗</span></div>
              <div className="flex items-start gap-2"><span>📚</span><span><strong>今日要理</strong> — 韦敏斯德小要理问答</span></div>
              <div className="flex items-start gap-2"><span>🍞</span><span><strong>谢饭祷告</strong> — 每日不同的饭前祷词</span></div>
            </div>
          </div>

          <div>
            <p className="font-medium mb-1">⏱️ 如何使用？</p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              每次 <strong>5-10 分钟</strong>即可。建议选一个固定时间（如晚餐前后），由一位家庭成员带领朗读经文，全家一起默想、讨论、祷告。不需要完成所有区块——选择适合你家庭的部分开始就好。
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed italic mt-1">
              Just 5–10 minutes each time. Pick a regular time (e.g. before or after dinner), have one family member read the Scripture aloud, then reflect, discuss, and pray together. You don&apos;t have to cover every section — start with what works for your family.
            </p>
          </div>

          <div>
            <p className="font-medium mb-1">🔄 内容如何更新？</p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              每天自动更新。每 2-3 周围绕一个主题（信心、祷告、感恩、神的爱、圣洁、盼望、家庭、服事），主题内经文按顺序递进，帮助你深入理解该主题。
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed italic mt-1">
              Content updates daily. Every 2–3 weeks focuses on one theme (Faith, Prayer, Gratitude, God&apos;s Love, Holiness, Hope, Family, Service), with scriptures progressing sequentially within each theme.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

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
      <div className="text-center mb-8">
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

      {/* Guide */}
      <GuideSection />

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
