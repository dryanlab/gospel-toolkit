'use client';
import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { getBookById, books } from '@/lib/data';
import LanguageToggle from '@/components/LanguageToggle';
import FavoriteButton from '@/components/FavoriteButton';
import { useMarkAsRead } from '@/hooks/useReadStatus';
import type { Language } from '@/lib/types';

const EpubReader = dynamic(() => import('@/components/EpubReader'), { ssr: false });

export default function BookDetailClient({ paramsPromise }: { paramsPromise: Promise<{ id: string }> }) {
  const { id } = use(paramsPromise);
  const [lang, setLang] = useState<Language>('both');
  const [showReader, setShowReader] = useState(false);
  const [savedProgress, setSavedProgress] = useState<number | null>(null);
  const book = getBookById(id);
  useMarkAsRead(id);
  const bIdx = books.findIndex(b => b.id === id);
  const prevBook = bIdx > 0 ? books[bIdx - 1] : null;
  const nextBook = bIdx < books.length - 1 ? books[bIdx + 1] : null;

  useEffect(() => {
    if (book?.epub_filename) {
      const saved = localStorage.getItem(`epub-progress-${book.id}`);
      if (saved) {
        // We stored a CFI, but also check if there's a percentage we can show
        setSavedProgress(-1); // indicates "has progress"
      }
    }
  }, [book]);

  if (!book) return <div className="p-8 text-center">Book not found</div>;

  if (showReader && book.epub_filename) {
    return <EpubReader url={`/epubs/${book.epub_filename}`} bookId={book.id} onClose={() => setShowReader(false)} />;
  }

  const showZh = lang === 'zh' || lang === 'both';
  const showEn = lang === 'en' || lang === 'both';

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <Link href="/library" className="text-sm text-[var(--color-accent)] hover:underline">← 返回书库</Link>
        <div className="flex items-center gap-3">
          <FavoriteButton id={book.id} />
          <LanguageToggle value={lang} onChange={setLang} />
        </div>
      </div>

      {/* Top Prev / Next */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--color-border)]">
        {prevBook ? (
          <Link href={`/library/${prevBook.id}`} className="flex-1 group">
            <span className="text-xs text-[var(--color-text-secondary)]">← 上一本</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{prevBook.title_zh}</p>
          </Link>
        ) : <div className="flex-1" />}
        <span className="text-sm font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] shrink-0 mx-2">{bIdx + 1} / {books.length}</span>
        {nextBook ? (
          <Link href={`/library/${nextBook.id}`} className="flex-1 text-right group">
            <span className="text-xs text-[var(--color-text-secondary)]">下一本 →</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{nextBook.title_zh}</p>
          </Link>
        ) : <div className="flex-1" />}
      </div>

      <div className="mb-8">
        {showZh && <h1 className="font-serif-cn text-3xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-1">{book.title_zh}</h1>}
        {showEn && <h2 className="text-xl text-[var(--color-text-secondary)] italic mb-2">{book.title_en}</h2>}
        <p className="text-[var(--color-text-secondary)]">
          {showZh && book.author_zh}{showZh && showEn && ' / '}{showEn && book.author_en}
        </p>
      </div>

      <div className="rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 p-5 mb-8">
        <h3 className="font-semibold text-[var(--color-accent)] mb-2 text-sm uppercase tracking-wide">简介 Summary</h3>
        {showZh && <p className="text-[var(--color-text)] mb-2 leading-relaxed">{book.summary_zh}</p>}
        {showEn && <p className="text-[var(--color-text-secondary)] italic leading-relaxed">{book.summary_en}</p>}
      </div>

      {book.epub_filename && (
        <div className="mb-8">
          <button
            onClick={() => setShowReader(true)}
            className="w-full py-3 px-6 rounded-xl bg-[var(--color-accent)] text-white font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            📖 {savedProgress !== null ? '继续阅读 Continue Reading' : '开始阅读 Start Reading'}
          </button>
        </div>
      )}

      <div className="mb-6 flex gap-2 flex-wrap">
        <span className="text-sm text-[var(--color-text-secondary)]">推荐给：</span>
        {book.recommend_for.map(r => (
          <span key={r} className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] dark:text-[var(--color-accent)]">{r}</span>
        ))}
      </div>

      {book.chapters && book.chapters.length > 0 && (
        <div className="mb-8">
          <h3 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-4 text-lg">📑 章节 Chapters</h3>
          <div className="space-y-4">
            {book.chapters.map(ch => (
              <div key={ch.number} className="rounded-xl border border-[var(--color-border)] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-[var(--color-primary)] text-white">Ch.{ch.number}</span>
                  {showZh && <span className="font-medium font-serif-cn text-[var(--color-text)]">{ch.title_zh}</span>}
                </div>
                {showEn && <p className="text-sm text-[var(--color-text-secondary)] italic mb-2">{ch.title_en}</p>}
                {showZh && <p className="text-sm text-[var(--color-text)] mb-2">{ch.summary_zh}</p>}
                {showEn && <p className="text-sm text-[var(--color-text-secondary)] italic mb-2">{ch.summary_en}</p>}
                {ch.key_quotes.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {ch.key_quotes.map((quote, qi) => (
                      <blockquote key={qi} className="border-l-4 border-[var(--color-accent)] pl-3 text-sm text-[var(--color-accent)] italic font-serif-cn">
                        &ldquo;{typeof quote === 'string' ? quote : `${quote.zh}\n${quote.en}`}&rdquo;
                      </blockquote>
                    ))}
                  </div>
                )}
                {ch.content_en && showEn && (
                  <details className="mt-3">
                    <summary className="text-sm text-[var(--color-accent)] cursor-pointer hover:underline font-medium">📖 阅读全文 Read Full Text</summary>
                    <div className="mt-2 p-4 rounded-lg bg-[var(--color-bg-secondary)] text-sm text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line max-h-96 overflow-y-auto">
                      {ch.content_en}
                    </div>
                  </details>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Prev / Next */}
      <div className="flex items-center justify-between mt-8 pt-4 border-t border-[var(--color-border)]">
        {prevBook ? (
          <Link href={`/library/${prevBook.id}`} className="flex-1 group">
            <span className="text-xs text-[var(--color-text-secondary)]">← 上一本</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{prevBook.title_zh}</p>
          </Link>
        ) : <div className="flex-1" />}
        <span className="text-sm font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] shrink-0 mx-2">{bIdx + 1} / {books.length}</span>
        {nextBook ? (
          <Link href={`/library/${nextBook.id}`} className="flex-1 text-right group">
            <span className="text-xs text-[var(--color-text-secondary)]">下一本 →</span>
            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">{nextBook.title_zh}</p>
          </Link>
        ) : <div className="flex-1" />}
      </div>
    </div>
  );
}
