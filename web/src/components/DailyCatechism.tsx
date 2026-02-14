'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { allCatechismQuestions } from '@/lib/data';

export default function DailyCatechism() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 从固定起点开始的连续天数，避免跨年归零（使用本地日期，与family-altar一致）
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const CATECHISM_EPOCH = new Date(2025, 0, 1, 0, 0, 0);
  const catDay = Math.floor((today.getTime() - CATECHISM_EPOCH.getTime()) / 86400000);
  const catIndex = ((catDay % allCatechismQuestions.length) + allCatechismQuestions.length) % allCatechismQuestions.length;
  const q = allCatechismQuestions[catIndex];
  const isWsc = catIndex < 107;
  const label = isWsc ? '小要理 WSC' : '大要理 WLC';

  if (!mounted) {
    return (
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-medium text-[var(--color-accent)]">📅 Daily Catechism</span>
          <span className="text-xs text-[var(--color-text-secondary)]">今日要理 · 加载中...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-medium text-[var(--color-accent)]">📅 Daily Catechism</span>
        <span className="text-xs text-[var(--color-text-secondary)]">今日要理 · {label} Q{q.number}</span>
      </div>
      <h3 className="font-serif-cn font-semibold text-lg mb-2 text-[var(--color-text)]">{q.question_en}</h3>
      <p className="text-sm text-[var(--color-text)] leading-relaxed">{q.answer_en}</p>
      <Link href={`/catechism/${q.id}`} className="inline-block mt-3 text-sm text-[var(--color-accent)] hover:underline font-medium">
        View Details →
      </Link>
    </div>
  );
}
