'use client';
import { useState } from 'react';
import Link from 'next/link';
import { catechismQuestions } from '@/lib/data';

export default function FlashcardsPage() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const q = catechismQuestions[index];

  const prev = () => { setFlipped(false); setIndex(i => Math.max(0, i - 1)); };
  const next = () => { setFlipped(false); setIndex(i => Math.min(catechismQuestions.length - 1, i + 1)); };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <Link href="/catechism" className="text-sm text-[var(--color-accent)] hover:underline">← 返回列表</Link>
        <span className="text-sm text-[var(--color-text-secondary)]">{index + 1} / {catechismQuestions.length}</span>
      </div>

      <h1 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-6 text-center">🃏 闪卡模式</h1>

      {/* Flashcard */}
      <div className="flip-card w-full" style={{ minHeight: '320px' }} onClick={() => setFlipped(!flipped)}>
        <div className={`flip-card-inner relative w-full cursor-pointer ${flipped ? 'flipped' : ''}`} style={{ minHeight: '320px' }}>
          {/* Front - Question */}
          <div className="flip-card-front absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2a4f7f] text-white p-8 flex flex-col items-center justify-center shadow-xl">
            <span className="text-sm opacity-60 mb-3">Q{q.number} — 点击翻转</span>
            <h2 className="font-serif-cn text-xl font-bold text-center mb-3">{q.question_zh}</h2>
            <p className="text-white/70 italic text-center text-sm">{q.question_en}</p>
          </div>
          {/* Back - Answer */}
          <div className="flip-card-back absolute inset-0 rounded-2xl bg-gradient-to-br from-[#d4a843] to-[#b8902e] text-white p-8 flex flex-col items-center justify-center shadow-xl">
            <span className="text-sm opacity-60 mb-3">A{q.number} — 点击翻回</span>
            <p className="font-serif-cn text-lg font-medium text-center mb-3 leading-relaxed">{q.answer_zh}</p>
            <p className="text-white/80 italic text-center text-sm leading-relaxed">{q.answer_en}</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prev}
          disabled={index === 0}
          className="px-5 py-2.5 rounded-xl bg-[var(--color-bg-secondary)] text-[var(--color-text)] font-medium disabled:opacity-30 hover:bg-[var(--color-border)] transition"
        >
          ← 上一题
        </button>
        <button
          onClick={() => setFlipped(!flipped)}
          className="px-5 py-2.5 rounded-xl bg-[var(--color-primary)] text-white font-medium hover:opacity-90 transition"
        >
          翻转
        </button>
        <button
          onClick={next}
          disabled={index === catechismQuestions.length - 1}
          className="px-5 py-2.5 rounded-xl bg-[var(--color-bg-secondary)] text-[var(--color-text)] font-medium disabled:opacity-30 hover:bg-[var(--color-border)] transition"
        >
          下一题 →
        </button>
      </div>
    </div>
  );
}
