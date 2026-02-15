'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import type { ReadingChapter } from '@/data/readings';
import SpeakButton from '@/components/SpeakButton';

function renderMd(md: string) {
  return md.split('\n').map((line, i) => {
    if (!line.trim()) return null;
    let html = line;
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em class="text-[var(--color-accent)]">$1</em>');
    if (line.startsWith('- ')) {
      return <li key={i} className="text-[15px] text-[var(--color-text)] leading-[1.8] ml-4 list-disc" dangerouslySetInnerHTML={{ __html: html.slice(2) }} />;
    }
    return <p key={i} className="text-[15px] text-[var(--color-text)] leading-[1.8] mb-4" dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

export default function GenesisClient({ chapters }: { chapters: ReadingChapter[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selected = searchParams.get('ch') ? Number(searchParams.get('ch')) : null;
  const setSelected = (ch: number | null) => {
    if (ch === null) {
      router.push('/readings/genesis');
    } else {
      router.push(`/readings/genesis?ch=${ch}`);
    }
  };
  const ch = selected !== null ? chapters.find(c => c.chapter === selected) : null;
  const isChPublished = ch ? new Date(ch.publishDate) <= new Date() : false;

  if (ch && isChPublished) {
    const zhText = ch.content_zh.replace(/[#*]/g, '');
    const enText = ch.content_en.replace(/[#*]/g, '');
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button onClick={() => setSelected(null)} className="text-sm text-[var(--color-accent)] hover:underline mb-6 inline-block">
          ← 创世记 Genesis
        </button>

        {/* Title */}
        <div className="mb-6">
          <h1 className="font-serif-cn text-2xl md:text-3xl font-bold text-[var(--color-text)]">
            创世记 第{ch.chapter}章 · {ch.title}
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] italic mt-1">Genesis {ch.chapter} · {ch.titleEn}</p>
          <p className="text-sm text-[var(--color-text-secondary)] mt-2">✍️ {ch.author}伴读 · Read with {ch.authorEn}</p>
        </div>

        {/* Scripture ref */}
        <div className="rounded-xl border-l-4 border-[var(--color-accent)] bg-[var(--color-bg-secondary)] p-4 mb-8">
          <span className="text-sm font-bold text-[var(--color-text)]">📖 {ch.scripture}</span>
        </div>

        {/* Chinese content */}
        <div className="mb-8">
          <div className="flex items-center justify-end mb-4">
            <SpeakButton text={zhText} lang="zh" />
          </div>
          <div>{renderMd(ch.content_zh)}</div>
        </div>

        {/* English content */}
        <div className="mb-8 pt-8 border-t border-[var(--color-border)]">
          <div className="flex items-center justify-end mb-4">
            <SpeakButton text={enText} lang="en" />
          </div>
          <div>{renderMd(ch.content_en)}</div>
        </div>

        {/* Study notes */}
        <div className="space-y-4 pt-8 border-t border-[var(--color-border)]">
          <h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)]">🔍 导读要点 Key Points</h2>

          <div className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-4">
            <h3 className="font-bold text-sm text-[var(--color-text)] mb-2">📍 历史背景 Historical Context</h3>
            <p className="text-sm text-[var(--color-text)] leading-relaxed mb-2">{ch.historyContext_zh}</p>
            <p className="text-sm text-[var(--color-text-secondary)] italic leading-relaxed">{ch.historyContext_en}</p>
          </div>

          <div className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-4">
            <h3 className="font-bold text-sm text-[var(--color-text)] mb-2">🔍 经文结构 Structure</h3>
            <p className="text-sm text-[var(--color-text)] leading-relaxed mb-2">{ch.structure_zh}</p>
            <p className="text-sm text-[var(--color-text-secondary)] italic leading-relaxed">{ch.structure_en}</p>
          </div>

          <div className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-4">
            <h3 className="font-bold text-sm text-[var(--color-text)] mb-2">⛪ 神学意涵 Theological Significance</h3>
            <p className="text-sm text-[var(--color-text)] leading-relaxed mb-2">{ch.theology_zh}</p>
            <p className="text-sm text-[var(--color-text-secondary)] italic leading-relaxed">{ch.theology_en}</p>
          </div>

          <div className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-4">
            <h3 className="font-bold text-sm text-[var(--color-text)] mb-2">✝️ 基督的影子 Shadow of Christ</h3>
            <p className="text-sm text-[var(--color-text)] leading-relaxed mb-2">{ch.christShadow_zh}</p>
            <p className="text-sm text-[var(--color-text-secondary)] italic leading-relaxed">{ch.christShadow_en}</p>
          </div>
        </div>

        {/* Prev/Next */}
        <div className="flex justify-between gap-4 mt-8">
          {ch.chapter > 1 ? (
            <button onClick={() => setSelected(ch.chapter - 1)} className="flex-1 p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all text-left">
              <p className="text-xs text-[var(--color-text-secondary)]">← 上一章</p>
              <p className="text-sm font-bold text-[var(--color-text)] mt-1">第{ch.chapter - 1}章</p>
            </button>
          ) : <div className="flex-1" />}
          {chapters.find(c => c.chapter === ch.chapter + 1) ? (
            <button onClick={() => setSelected(ch.chapter + 1)} className="flex-1 p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all text-right">
              <p className="text-xs text-[var(--color-text-secondary)]">下一章 →</p>
              <p className="text-sm font-bold text-[var(--color-text)] mt-1">第{ch.chapter + 1}章</p>
            </button>
          ) : <div className="flex-1" />}
        </div>
      </div>
    );
  }

  // Book overview
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/readings" className="text-sm text-[var(--color-accent)] hover:underline mb-6 inline-block">
        ← 圣徒伴读 Read with the Saints
      </Link>

      <div className="text-center mb-8">
        <span className="text-4xl">🌍</span>
        <h1 className="font-serif-cn text-2xl md:text-3xl font-bold text-[var(--color-text)] mt-3">创世记</h1>
        <p className="text-sm text-[var(--color-text-secondary)] mt-1">Genesis · 50章</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">✍️ 摩西伴读 · Read with Moses</p>
      </div>

      <div className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-5 mb-8 italic text-sm text-[var(--color-text)]">
        <p>&ldquo;弟兄姐妹，我是摩西，耶和华的仆人。这卷书是我在西奈旷野写下的，要让你们知道——万物从何而来，又是谁的手托住这一切。&rdquo;</p>
        <p className="text-[var(--color-text-secondary)] mt-2">&ldquo;Brothers and sisters, I am Moses, servant of the LORD. I wrote this book in the wilderness of Sinai, so you would know -- where all things come from, and whose hand upholds them all.&rdquo;</p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        {(() => {
          const published = chapters.filter(c => new Date(c.publishDate) <= new Date()).length;
          return (
            <>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[var(--color-text-secondary)]">进度 Progress</span>
                <span className="text-sm text-[var(--color-accent)] font-bold">{published}/50章</span>
              </div>
              <div className="w-full h-2 bg-[var(--color-bg)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--color-accent)] rounded-full" style={{ width: `${(published / 50) * 100}%` }} />
              </div>
            </>
          );
        })()}
      </div>

      {/* Chapter list */}
      <div className="space-y-3">
        {chapters.map((ch, i) => {
          const isPublished = new Date(ch.publishDate) <= new Date();
          return isPublished ? (
          <button
            key={ch.chapter}
            onClick={() => setSelected(ch.chapter)}
            className="w-full flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-accent)] transition-all text-left"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
              <span className="text-[var(--color-accent)] font-bold text-sm">{ch.chapter}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-[var(--color-text)]">第{ch.chapter}章 · {ch.title}</h3>
                {i === chapters.filter(c => new Date(c.publishDate) <= new Date()).length - 1 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)] text-white font-bold">NEW</span>
                )}
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] italic">Chapter {ch.chapter} · {ch.titleEn}</p>
            </div>
          </button>
          ) : (
          <div key={ch.chapter} className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] opacity-50">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-bg)] flex items-center justify-center">
              <span className="text-[var(--color-text-secondary)] text-sm">🔒</span>
            </div>
            <div>
              <h3 className="text-sm text-[var(--color-text-secondary)]">第{ch.chapter}章 · {ch.title}</h3>
              <p className="text-xs text-[var(--color-text-secondary)] italic">{ch.publishDate} 发布 · Coming {ch.publishDate}</p>
            </div>
          </div>
          );
        })}

        {/* Future locked chapters (no data yet) */}
        {Array.from({ length: 3 }, (_, i) => chapters.length + i + 1).filter(n => n <= 50).map(n => (
          <div key={n} className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] opacity-50">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-bg)] flex items-center justify-center">
              <span className="text-[var(--color-text-secondary)] text-sm">🔒</span>
            </div>
            <div>
              <h3 className="text-sm text-[var(--color-text-secondary)]">第{n}章 · 即将发布 Coming Soon</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
