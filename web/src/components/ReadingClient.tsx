'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { ReadingChapter } from '@/data/readings';
import SpeakButton from '@/components/SpeakButton';
import LikeButton from '@/components/LikeButton';
import ShareBar from '@/components/ShareBar';
import { isPublished, isPreview, useHydrated } from '@/lib/preview';
import { fetchReading, fetchReadingsList } from '@/lib/api';

// --- Book config ---
export interface BookConfig {
  bookId: string;       // "genesis" | "psalms" | "proverbs"
  bookZh: string;       // "创世记" | "诗篇" | "箴言"
  bookEn: string;       // "Genesis" | "Psalms" | "Proverbs"
  bibleId: string;      // "GEN" | "PSA" | "PRO"
  totalChapters: number; // 50 | 150 | 31
  unitZh: string;       // "章" | "篇"
  emoji: string;        // "🌍" | "🎵" | "💡"
  authorZh: string;     // "摩西" | "大卫" | "所罗门"
  authorEn: string;     // "Moses" | "David" | "Solomon"
  introZh: string;      // 中文介绍
  introEn: string;      // 英文介绍
  isTopicBased?: boolean; // true for psalms/proverbs (not sequential)
  guideHref?: string;    // link to detailed book guide page
}

// --- Read mark helpers ---
function getReadKey(book: string, chapter: number) {
  return `reading_done_${book}_${chapter}`;
}
function isRead(book: string, chapter: number): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(getReadKey(book, chapter)) === '1';
}
function markRead(book: string, chapter: number) {
  localStorage.setItem(getReadKey(book, chapter), '1');
}
function getReadCount(book: string, total: number): number {
  if (typeof window === 'undefined') return 0;
  let count = 0;
  for (let i = 1; i <= total; i++) {
    if (localStorage.getItem(getReadKey(book, i)) === '1') count++;
  }
  return count;
}

function inlineMd(text: string) {
  let html = text;
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  return html;
}

function renderMd(md: string) {
  return md.split('\n').map((line, i) => {
    if (!line.trim()) return null;
    let html = line;
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em class="text-[var(--color-accent)]">$1</em>');
    const trimmed = line.trim();
    // Headings
    if (trimmed.startsWith('### ')) {
      return <h3 key={i} className="font-serif-cn text-base font-bold text-[var(--color-text)] mt-6 mb-3" dangerouslySetInnerHTML={{ __html: html.replace(/^###\s+/, '') }} />;
    }
    if (trimmed.startsWith('## ')) {
      return <h2 key={i} className="font-serif-cn text-lg font-bold text-[var(--color-text)] mt-8 mb-4" dangerouslySetInnerHTML={{ __html: html.replace(/^##\s+/, '') }} />;
    }
    if (trimmed.startsWith('# ')) {
      return <h1 key={i} className="font-serif-cn text-xl font-bold text-[var(--color-text)] mt-8 mb-4" dangerouslySetInnerHTML={{ __html: html.replace(/^#\s+/, '') }} />;
    }
    // Blockquote
    if (trimmed.startsWith('> ')) {
      return <blockquote key={i} className="border-l-4 border-[var(--color-accent)] bg-[var(--color-bg-secondary)] pl-4 pr-3 py-2 my-3 text-[15px] text-[var(--color-text)] italic font-bold leading-[1.8] rounded-r-lg" dangerouslySetInnerHTML={{ __html: html.replace(/^>\s+/, '') }} />;
    }
    // Ordered list
    const olMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
    if (olMatch) {
      return <li key={i} className="text-[15px] text-[var(--color-text)] leading-[1.8] ml-4 list-decimal" dangerouslySetInnerHTML={{ __html: html.replace(/^\d+\.\s+/, '') }} />;
    }
    // Unordered list
    if (trimmed.startsWith('- ')) {
      return <li key={i} className="text-[15px] text-[var(--color-text)] leading-[1.8] ml-4 list-disc" dangerouslySetInnerHTML={{ __html: html.replace(/^-\s+/, '') }} />;
    }
    // Horizontal rule
    if (trimmed === '---' || trimmed === '***') {
      return <hr key={i} className="my-6 border-[var(--color-border)]" />;
    }
    return <p key={i} className="text-[15px] text-[var(--color-text)] leading-[1.8] mb-4" dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

export default function ReadingClient({ config, chapters: staticChapters }: { config: BookConfig; chapters: ReadingChapter[] }) {
  const { bookId, bookZh, bookEn, bibleId, totalChapters, unitZh, emoji, authorZh, authorEn, introZh, introEn, isTopicBased } = config;
  const searchParams = useSearchParams();
  const router = useRouter();
  const [chapters, setChapters] = useState<ReadingChapter[]>(staticChapters);
  const selected = searchParams.get('ch') ? Number(searchParams.get('ch')) : null;
  const setSelected = (ch: number | null) => {
    if (ch === null) {
      router.push(`/readings/${bookId}`);
    } else {
      router.push(`/readings/${bookId}?ch=${ch}`);
    }
  };
  const staticCh = selected !== null ? chapters.find(c => c.chapter === selected) : null;
  const isChPublished = staticCh ? isPublished(staticCh.publishDate) : false;
  const [ch, setCh] = useState<ReadingChapter | null>(null);
  const [chRead, setChRead] = useState(false);
  const [readCountState, setReadCountState] = useState(0);

  useEffect(() => {
    fetchReadingsList(bookEn).then(apiChapters => {
      if (apiChapters && apiChapters.length > 0) {
        const apiMap = new Map(apiChapters.map((c: any) => [c.chapter, c]));
        const merged = staticChapters.map(sc => {
          const apiC = apiMap.get(sc.chapter) as ReadingChapter | undefined;
          return apiC && apiC.content_zh ? apiC : sc;
        });
        apiChapters.forEach((ac: any) => {
          if (!staticChapters.find(sc => sc.chapter === ac.chapter)) {
            merged.push(ac as ReadingChapter);
          }
        });
        merged.sort((a, b) => a.chapter - b.chapter);
        setChapters(merged);
      }
    }).catch(() => {/* API unavailable, use static data */});
  }, []);

  useEffect(() => {
    setReadCountState(getReadCount(bookId, totalChapters));
  }, []);

  useEffect(() => {
    if (selected !== null) setChRead(isRead(bookId, selected));
  }, [selected]);

  useEffect(() => {
    if (staticCh && isChPublished) {
      setCh(staticCh);
      fetchReading(bookEn, staticCh.chapter).then(apiCh => {
        if (apiCh && apiCh.content_zh && apiCh.content_en) {
          // Merge: use API data but fall back to static for any null fields
          setCh({
            book: apiCh.book || staticCh.book, bookEn: apiCh.book_en || staticCh.bookEn, chapter: apiCh.chapter,
            title: apiCh.title || staticCh.title, titleEn: apiCh.title_en || staticCh.titleEn,
            author: apiCh.author || staticCh.author, authorEn: apiCh.author_en || staticCh.authorEn,
            scripture: apiCh.scripture || staticCh.scripture, publishDate: apiCh.publish_date || staticCh.publishDate,
            content_zh: apiCh.content_zh || staticCh.content_zh, content_en: apiCh.content_en || staticCh.content_en,
            historyContext_zh: apiCh.history_context_zh || staticCh.historyContext_zh, historyContext_en: apiCh.history_context_en || staticCh.historyContext_en,
            structure_zh: apiCh.structure_zh || staticCh.structure_zh, structure_en: apiCh.structure_en || staticCh.structure_en,
            theology_zh: apiCh.theology_zh || staticCh.theology_zh, theology_en: apiCh.theology_en || staticCh.theology_en,
            christShadow_zh: apiCh.christ_shadow_zh || staticCh.christShadow_zh, christShadow_en: apiCh.christ_shadow_en || staticCh.christShadow_en,
          });
        }
      }).catch(() => {/* API unavailable, keep static data */});
    } else {
      setCh(null);
    }
  }, [selected]);

  // --- Detail view ---
  if (ch && isChPublished) {
    const zhText = (ch.content_zh || '').replace(/[#*]/g, '');
    const enText = (ch.content_en || '').replace(/[#*]/g, '');

    // Compute prev/next once for reuse at top and bottom
    const sortedPublished = chapters.filter(c => isPublished(c.publishDate)).sort((a,b) => a.chapter - b.chapter);
    const currentIdx = sortedPublished.findIndex(c => c.chapter === ch.chapter);
    const prev = currentIdx > 0 ? sortedPublished[currentIdx - 1] : null;
    const next = currentIdx < sortedPublished.length - 1 ? sortedPublished[currentIdx + 1] : null;

    const NavButtons = () => (
      <div className="flex justify-between gap-4">
        {prev ? (
          <button onClick={() => setSelected(prev.chapter)} className="flex-1 p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all text-left">
            <p className="text-xs text-[var(--color-text-secondary)]">← 上一{unitZh}</p>
            <p className="text-sm font-bold text-[var(--color-text)] mt-1">第{prev.chapter}{unitZh} · {prev.title}</p>
          </button>
        ) : <div className="flex-1" />}
        {next ? (
          <button onClick={() => setSelected(next.chapter)} className="flex-1 p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all text-right">
            <p className="text-xs text-[var(--color-text-secondary)]">下一{unitZh} →</p>
            <p className="text-sm font-bold text-[var(--color-text)] mt-1">第{next.chapter}{unitZh} · {next.title}</p>
          </button>
        ) : <div className="flex-1" />}
      </div>
    );

    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button onClick={() => setSelected(null)} className="text-sm text-[var(--color-accent)] hover:underline mb-6 inline-block">
          ← {bookZh} {bookEn}
        </button>

        <div className="mb-6">
          <h1 className="font-serif-cn text-2xl md:text-3xl font-bold text-[var(--color-text)]">
            {bookZh} 第{ch.chapter}{unitZh} · {ch.title}
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] italic mt-1">{bookEn} {ch.chapter} · {ch.titleEn}</p>
          <p className="text-sm text-[var(--color-text-secondary)] mt-2">✍️ {ch.author}伴读 · Read with {ch.authorEn}</p>
        </div>

        {/* Top navigation */}
        <div className="mb-6">
          <NavButtons />
        </div>

        <div className="rounded-xl border-l-4 border-[var(--color-accent)] bg-[var(--color-bg-secondary)] p-4 mb-8">
          <span className="text-sm font-bold text-[var(--color-text)]">📖 {ch.scripture}</span>
          <Link href={`/bible/${bibleId}/${ch.chapter}`} className="ml-3 text-xs text-[var(--color-accent)] hover:underline">
            📖 阅读{bookZh}第{ch.chapter}{unitZh}全文 →
          </Link>
        </div>

        {/* Chinese content + Chinese key points */}
        <div className="mb-8">
          <div className="flex items-center justify-end mb-4">
            <SpeakButton text={zhText} lang="zh" />
          </div>
          <div>{renderMd(ch.content_zh)}</div>
        </div>

        <div className="space-y-4 mt-6 pt-8 border-t border-[var(--color-border)]">
          <div className="flex items-center justify-between">
            <h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)]">🔍 导读要点</h2>
            <SpeakButton text={`导读要点。历史背景：${ch.historyContext_zh}。经文结构：${ch.structure_zh}。神学意涵：${ch.theology_zh}。基督的影子：${ch.christShadow_zh}`} lang="zh" />
          </div>
          <div className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-4">
            <h3 className="font-bold text-sm text-[var(--color-text)] mb-2">📍 历史背景</h3>
            <p className="text-sm text-[var(--color-text)] leading-relaxed" dangerouslySetInnerHTML={{ __html: inlineMd(ch.historyContext_zh) }}></p>
          </div>
          <div className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-4">
            <h3 className="font-bold text-sm text-[var(--color-text)] mb-2">🔍 经文结构</h3>
            <p className="text-sm text-[var(--color-text)] leading-relaxed" dangerouslySetInnerHTML={{ __html: inlineMd(ch.structure_zh) }}></p>
          </div>
          <div className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-4">
            <h3 className="font-bold text-sm text-[var(--color-text)] mb-2">⛪ 神学意涵</h3>
            <p className="text-sm text-[var(--color-text)] leading-relaxed" dangerouslySetInnerHTML={{ __html: inlineMd(ch.theology_zh) }}></p>
          </div>
          <div className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-4">
            <h3 className="font-bold text-sm text-[var(--color-text)] mb-2">✝️ 基督的影子</h3>
            <p className="text-sm text-[var(--color-text)] leading-relaxed" dangerouslySetInnerHTML={{ __html: inlineMd(ch.christShadow_zh) }}></p>
          </div>
        </div>

        {/* English content + English key points */}
        <div className="mb-8 mt-6 pt-8 border-t border-[var(--color-border)]">
          <h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-4">📖 English Reading</h2>
          <div className="flex items-center justify-end mb-4">
            <SpeakButton text={enText} lang="en" />
          </div>
          <div>{renderMd(ch.content_en)}</div>
        </div>

        <div className="space-y-4 mt-6 pt-8 border-t border-[var(--color-border)]">
          <div className="flex items-center justify-between">
            <h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)]">🔍 Key Points</h2>
            <SpeakButton text={`Key Points. Historical Context: ${ch.historyContext_en}. Structure: ${ch.structure_en}. Theological Significance: ${ch.theology_en}. Shadow of Christ: ${ch.christShadow_en}`} lang="en" />
          </div>
          <div className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-4">
            <h3 className="font-bold text-sm text-[var(--color-text)] mb-2">📍 Historical Context</h3>
            <p className="text-sm text-[var(--color-text)] leading-relaxed" dangerouslySetInnerHTML={{ __html: inlineMd(ch.historyContext_en) }}></p>
          </div>
          <div className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-4">
            <h3 className="font-bold text-sm text-[var(--color-text)] mb-2">🔍 Structure</h3>
            <p className="text-sm text-[var(--color-text)] leading-relaxed" dangerouslySetInnerHTML={{ __html: inlineMd(ch.structure_en) }}></p>
          </div>
          <div className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-4">
            <h3 className="font-bold text-sm text-[var(--color-text)] mb-2">⛪ Theological Significance</h3>
            <p className="text-sm text-[var(--color-text)] leading-relaxed" dangerouslySetInnerHTML={{ __html: inlineMd(ch.theology_en) }}></p>
          </div>
          <div className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-4">
            <h3 className="font-bold text-sm text-[var(--color-text)] mb-2">✝️ Shadow of Christ</h3>
            <p className="text-sm text-[var(--color-text)] leading-relaxed" dangerouslySetInnerHTML={{ __html: inlineMd(ch.christShadow_en) }}></p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          {chRead ? (
            <div className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-bold">
              <span className="text-2xl">✅</span><span>已读完 · Read</span>
            </div>
          ) : (
            <button onClick={() => { markRead(bookId, ch.chapter); setChRead(true); setReadCountState(getReadCount(bookId, totalChapters)); }}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] text-white px-8 py-3 text-base font-bold hover:opacity-90 transition-opacity">
              ✅ 标记已读 · Mark as Read
            </button>
          )}
          <LikeButton articleId={`${bookId}-${ch.chapter}`} />
        </div>

        <div className="mt-8">
          <ShareBar url={`https://rockoftruth.net/readings/${bookId}?ch=${ch.chapter}`}
            title={`${bookZh}第${ch.chapter}${unitZh}：${ch.title}`}
            summary={(ch.content_zh || '').replace(/[#*]/g, '').substring(0, 120) + '...'}
            scripture={ch.scripture} emoji="📖" cardStyle="reading" author={ch.author} />
        </div>

        {/* Bottom navigation */}
        <div className="mt-8">
          <NavButtons />
        </div>
      </div>
    );
  }

  // --- Book overview ---
  const isPreviewMode = isPreview();
  const published = chapters.filter(c => isPublished(c.publishDate)).length;
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/readings" className="text-sm text-[var(--color-accent)] hover:underline mb-6 inline-block">
        ← 圣徒伴读 Read with the Saints
      </Link>

      <div className="text-center mb-8">
        <span className="text-4xl">{emoji}</span>
        <h1 className="font-serif-cn text-2xl md:text-3xl font-bold text-[var(--color-text)] mt-3">{bookZh}</h1>
        <p className="text-sm text-[var(--color-text-secondary)] mt-1">{bookEn} · {isTopicBased ? '主题伴读' : `${totalChapters}${unitZh}`}</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">✍️ {authorZh}伴读 · Read with {authorEn}</p>
      </div>

      <div className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-5 mb-8 italic text-sm text-[var(--color-text)]">
        <p>&ldquo;{introZh}&rdquo;</p>
        <p className="text-[var(--color-text-secondary)] mt-2">&ldquo;{introEn}&rdquo;</p>
      </div>

      {config.guideHref && (
        <Link href={config.guideHref}
          className="block mb-8 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📚</span>
            <div className="flex-1">
              <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">{bookZh}导读 · {bookEn} Guide</p>
              <p className="text-xs text-emerald-700/70 dark:text-emerald-400/70 mt-0.5">了解本书的结构、主题与神学脉络，再开始逐章伴读</p>
            </div>
            <span className="text-emerald-600 dark:text-emerald-400">→</span>
          </div>
        </Link>
      )}

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[var(--color-text-secondary)]">进度 Progress</span>
          <div className="flex items-center gap-3">
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">✅ 已读 {readCountState}</span>
            <span className="text-sm text-[var(--color-accent)] font-bold">{published}/{totalChapters}{unitZh}</span>
          </div>
        </div>
        <div className="w-full h-2 bg-[var(--color-bg)] rounded-full overflow-hidden relative">
          <div className="absolute h-full bg-[var(--color-accent)]/30 rounded-full" style={{ width: `${(published / (totalChapters)) * 100}%` }} />
          <div className="absolute h-full bg-green-500 rounded-full" style={{ width: `${(readCountState / (totalChapters)) * 100}%` }} />
        </div>
      </div>

      <div className="space-y-3">
        {chapters.map((ch, i) => {
          const chPublished = isPublished(ch.publishDate);
          const chIsRead = isRead(bookId, ch.chapter);
          return chPublished ? (
            <button key={ch.chapter} onClick={() => setSelected(ch.chapter)}
              className="w-full flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-accent)] transition-all text-left">
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${chIsRead ? 'bg-green-100 dark:bg-green-900/30' : 'bg-[var(--color-accent)]/10'}`}>
                {chIsRead ? <span className="text-green-600 dark:text-green-400 text-sm">✅</span> : <span className="text-[var(--color-accent)] font-bold text-sm">{ch.chapter}</span>}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-[var(--color-text)]">第{ch.chapter}{unitZh} · {ch.title}</h3>
                  {i === chapters.filter(c => isPublished(c.publishDate)).length - 1 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)] text-white font-bold">NEW</span>
                  )}
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] italic">{bookEn} {ch.chapter} · {ch.titleEn}</p>
              </div>
            </button>
          ) : isPreviewMode ? (
            <div key={ch.chapter} className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] opacity-50">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-bg)] flex items-center justify-center">
                <span className="text-[var(--color-text-secondary)] text-sm">🔒</span>
              </div>
              <div>
                <h3 className="text-sm text-[var(--color-text-secondary)]">第{ch.chapter}{unitZh} · {ch.title}</h3>
                <p className="text-xs text-[var(--color-text-secondary)] italic">{ch.publishDate} 发布 · Coming {ch.publishDate}</p>
              </div>
            </div>
          ) : null;
        })}

        {isPreviewMode && !isTopicBased && Array.from({ length: 3 }, (_, i) => chapters.length + i + 1).filter(n => n <= totalChapters).map(n => (
          <div key={n} className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] opacity-50">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-bg)] flex items-center justify-center">
              <span className="text-[var(--color-text-secondary)] text-sm">🔒</span>
            </div>
            <div><h3 className="text-sm text-[var(--color-text-secondary)]">第{n}{unitZh} · 即将发布 Coming Soon</h3></div>
          </div>
        ))}
      </div>
    </div>
  );
}
