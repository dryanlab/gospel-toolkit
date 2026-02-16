'use client';

import { useMemo, useState, useEffect } from 'react';
import { isPublished } from '@/lib/preview';
import Link from 'next/link';
import { letters as staticLetters, categoryLabels } from '@/data/letters';
import type { Letter } from '@/data/letters';
import { fetchLetter } from '@/lib/api';
import ShareBar from '@/components/ShareBar';
import LikeButton from '@/components/LikeButton';
import SpeakButton from '@/components/SpeakButton';
import CommentSection from '@/components/CommentSection';

function renderMarkdown(md: string) {
  // Simple markdown renderer for our content
  const lines = md.split('\n');
  const elements: React.ReactElement[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="font-serif-cn text-xl font-bold text-[var(--color-text)] mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('# ')) {
      elements.push(
        <h1 key={key++} className="font-serif-cn text-2xl font-bold text-[var(--color-text)] mt-8 mb-3">
          {line.slice(2)}
        </h1>
      );
    } else if (line.trim() === '') {
      // skip empty lines (spacing handled by margins)
    } else {
      // Process inline formatting
      let html = line;
      // Bold
      html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      // Italic
      html = html.replace(/\*(.+?)\*/g, '<em class="text-[var(--color-accent)]">$1</em>');
      elements.push(
        <p key={key++} className="text-[15px] text-[var(--color-text)] leading-[1.8] mb-4" dangerouslySetInnerHTML={{ __html: html }} />
      );
    }
  }

  return elements;
}

export default function LetterClient({ id }: { id: string }) {
  const staticLetter = useMemo(() => staticLetters.find(l => l.id === id), [id]);
  const [letter, setLetter] = useState<Letter | undefined>(staticLetter);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLetter(id).then(apiLetter => {
      if (apiLetter) {
        setLetter({
          ...apiLetter,
          tags: typeof apiLetter.tags === 'string' ? JSON.parse(apiLetter.tags) : (apiLetter.tags || []),
        } as Letter);
      }
      setLoading(false);
    });
  }, [id]);

  const isUnavailable = !letter || letter.content_zh === '（即将发布）' || !isPublished(letter.date);
  if (isUnavailable) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-4xl mb-4">📭</p>
        <p className="text-[var(--color-text-secondary)]">{letter ? '这封信尚未发布，敬请期待！' : '文章不存在'}</p>
        <p className="text-xs text-[var(--color-text-secondary)] italic mt-1">{letter ? 'This letter has not been published yet. Stay tuned!' : 'Article not found'}</p>
        <Link href="/letters" className="text-[var(--color-accent)] mt-4 inline-block">← 返回圣徒来信 Back to Letters</Link>
      </div>
    );
  }

  const catLabel = categoryLabels[letter.category];

  // Find prev/next
  const idx = staticLetters.findIndex(l => l.id === id);
  const now = new Date();
  const isAvailable = (l: typeof staticLetters[0]) => l.content_zh !== '（即将发布）' && isPublished(l.date);
  const prev = idx > 0 && isAvailable(staticLetters[idx - 1]) ? staticLetters[idx - 1] : null;
  const next = idx < staticLetters.length - 1 && isAvailable(staticLetters[idx + 1]) ? staticLetters[idx + 1] : null;

  // Plain text for TTS
  const zhText = letter.content_zh.replace(/[#*]/g, '').replace(/\n{2,}/g, '\n');
  const enText = letter.content_en.replace(/[#*]/g, '').replace(/\n{2,}/g, '\n');

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Back link */}
      <Link href="/letters" className="text-sm text-[var(--color-accent)] hover:underline mb-6 inline-block">
        ← 圣徒来信 Letters
      </Link>

      {/* Author card */}
      <div className="flex items-center gap-4 mb-6 p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
        <div className="w-16 h-16 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-accent)] flex items-center justify-center text-3xl flex-shrink-0">
          {letter.authorAvatar}
        </div>
        <div>
          <div className="font-bold text-lg text-[var(--color-text)]">{letter.author} <span className="font-normal text-sm text-[var(--color-text-secondary)]">{letter.authorEn}</span></div>
          <p className="text-sm text-[var(--color-text-secondary)]">{letter.authorBio}</p>
          <p className="text-xs text-[var(--color-text-secondary)] italic mt-0.5">{letter.authorBioEn}</p>
        </div>
      </div>

      {/* Title */}
      <div className="mb-6">
        <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
          {catLabel.icon} {catLabel.zh} · {catLabel.en}
        </span>
        <h1 className="font-serif-cn text-2xl md:text-3xl font-bold text-[var(--color-text)] mt-3">
          {letter.title_zh}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] italic mt-1">{letter.title_en}</p>
        <p className="text-xs text-[var(--color-text-secondary)] mt-2">{letter.date}</p>
      </div>

      {/* Share bar top */}
      <div className="mb-6">
        <ShareBar
          url={`/letters/${letter.id}`}
          title={letter.title_zh}
          summary={letter.summary_zh}
          scripture={letter.scripture}
        />
      </div>

      {/* Scripture box */}
      <div className="rounded-xl border-l-4 border-[var(--color-accent)] bg-[var(--color-bg-secondary)] p-5 mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-[var(--color-text)]">📖 {letter.scripture}</span>
          <div className="flex gap-1">
            <SpeakButton text={letter.scriptureText_zh} lang="zh" />
            <SpeakButton text={letter.scriptureText_en} lang="en" />
          </div>
        </div>
        <p className="text-[15px] text-[var(--color-text)] leading-relaxed mb-2">
          &ldquo;{letter.scriptureText_zh}&rdquo;
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] italic leading-relaxed">
          &ldquo;{letter.scriptureText_en}&rdquo;
        </p>
      </div>

      {/* Content */}
      {letter.content_zh !== '（即将发布）' ? (
        <>
          {/* Chinese content */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-[var(--color-text)]">中文</h2>
              <SpeakButton text={zhText} lang="zh" />
            </div>
            <div>{renderMarkdown(letter.content_zh)}</div>
          </div>

          {/* English content */}
          <div className="mb-8 pt-8 border-t border-[var(--color-border)]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-[var(--color-text)]">English</h2>
              <SpeakButton text={enText} lang="en" />
            </div>
            <div>{renderMarkdown(letter.content_en)}</div>
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <p className="text-4xl mb-4">✍️</p>
          <p className="text-[var(--color-text-secondary)]">这封信正在书写中，敬请期待……</p>
          <p className="text-sm text-[var(--color-text-secondary)] italic mt-1">This letter is being written. Stay tuned...</p>
        </div>
      )}

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mb-6">
        {letter.tags.map(tag => (
          <span key={tag} className="text-xs px-3 py-1 rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]">
            #{tag}
          </span>
        ))}
      </div>

      {/* Like + Share bottom */}
      <div className="flex flex-col items-center gap-4 py-8 border-t border-b border-[var(--color-border)] mb-8">
        <LikeButton articleId={letter.id} />
        <ShareBar
          url={`/letters/${letter.id}`}
          title={letter.title_zh}
          summary={letter.summary_zh}
          scripture={letter.scripture}
        />
      </div>

      {/* Comments */}
      <CommentSection articleId={letter.id} />

      {/* Prev/Next navigation */}
      <div className="flex justify-between gap-4">
        {prev ? (
          <Link href={`/letters/${prev.id}`} className="flex-1 p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all">
            <p className="text-xs text-[var(--color-text-secondary)]">← 上一封</p>
            <p className="text-sm font-bold text-[var(--color-text)] mt-1">{prev.authorAvatar} {prev.title_zh}</p>
          </Link>
        ) : <div className="flex-1" />}
        {next ? (
          <Link href={`/letters/${next.id}`} className="flex-1 p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all text-right">
            <p className="text-xs text-[var(--color-text-secondary)]">下一封 →</p>
            <p className="text-sm font-bold text-[var(--color-text)] mt-1">{next.title_zh} {next.authorAvatar}</p>
          </Link>
        ) : <div className="flex-1" />}
      </div>
    </div>
  );
}
