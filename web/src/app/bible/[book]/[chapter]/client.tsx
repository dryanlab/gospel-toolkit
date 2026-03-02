'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import bibleIndex from '@/data/bible/index.json';
import allHeadings from '@/data/bible/headings.json';

type HeadingEntry = { before_verse: number; zh: string; en: string };
const headingsMap: Record<string, Record<number, HeadingEntry[]>> = {};
for (const [bookId, chapters] of Object.entries(allHeadings as Record<string, { chapter: number; headings: HeadingEntry[] }[]>)) {
  headingsMap[bookId] = {};
  for (const ch of chapters) {
    headingsMap[bookId][ch.chapter] = ch.headings;
  }
}

interface Book { id: string; name_en: string; name_zh: string; chapters: number; testament: string; }

type Mode = 'cuv' | 'kjv' | 'parallel';

// Song of Solomon speaker labels — extract from verse text and render as styled tags
const SPEAKER_RE = /（(新郎|新娘|书拉密女|书拉密|耶路撒冷的众女子|新娘的兄弟|众女子)）/g;

function extractSpeaker(text: string): { speaker: string | null; cleaned: string } {
  const matches = [...text.matchAll(SPEAKER_RE)];
  if (matches.length === 0) return { speaker: null, cleaned: text };
  const speaker = matches[0][1];
  const cleaned = text.replace(SPEAKER_RE, '').replace(/\s{2,}/g, ' ').trim();
  return { speaker, cleaned };
}

const SPEAKER_COLORS: Record<string, string> = {
  '新郎': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  '新娘': 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  '书拉密女': 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  '书拉密': 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  '耶路撒冷的众女子': 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  '众女子': 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  '新娘的兄弟': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
};

const SPEAKER_EN: Record<string, string> = {
  '新郎': 'Bridegroom',
  '新娘': 'Bride',
  '书拉密女': 'The Shulammite',
  '书拉密': 'The Shulammite',
  '耶路撒冷的众女子': 'Daughters of Jerusalem',
  '众女子': 'Daughters of Jerusalem',
  '新娘的兄弟': "Bride's Brothers",
};

function SpeakerTag({ speaker, lang = 'zh' }: { speaker: string; lang?: 'zh' | 'en' }) {
  const color = SPEAKER_COLORS[speaker] || 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
  return (
    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-1 ${color}`}>
      {lang === 'en' ? (SPEAKER_EN[speaker] || speaker) : speaker}
    </span>
  );
}

const allBooks = bibleIndex as Book[];
const bookIdx = new Map(allBooks.map((b, i) => [b.id, i]));

function getAdjacentChapter(bookId: string, chapter: number, dir: -1 | 1): { book: string; chapter: number } | null {
  const book = allBooks.find(b => b.id === bookId);
  const chapterHeadings: HeadingEntry[] = headingsMap[bookId]?.[chapter] || [];
  if (!book) return null;
  const newCh = chapter + dir;
  if (newCh >= 1 && newCh <= book.chapters) return { book: bookId, chapter: newCh };
  const idx = bookIdx.get(bookId)!;
  const newIdx = idx + dir;
  if (newIdx < 0 || newIdx >= allBooks.length) return null;
  const nb = allBooks[newIdx];
  return { book: nb.id, chapter: dir === 1 ? 1 : nb.chapters };
}

export default function ChapterClient({ bookId, chapter }: { bookId: string; chapter: number }) {
  const [mode, setMode] = useState<Mode>('cuv');
  const [cuvData, setCuvData] = useState<string[] | null>(null);
  const [kjvData, setKjvData] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(true);

  const book = allBooks.find(b => b.id === bookId);
  const chapterHeadings: HeadingEntry[] = headingsMap[bookId]?.[chapter] || [];
  const prev = getAdjacentChapter(bookId, chapter, -1);
  const next = getAdjacentChapter(bookId, chapter, 1);

  useEffect(() => {
    setLoading(true);
    setCuvData(null);
    setKjvData(null);
    Promise.all([
      import(`@/data/bible/cuv/${bookId}.json`).then(m => m.default),
      import(`@/data/bible/kjv/${bookId}.json`).then(m => m.default),
    ]).then(([cuv, kjv]) => {
      setCuvData((cuv as string[][])[chapter - 1] || []);
      setKjvData((kjv as string[][])[chapter - 1] || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [bookId, chapter]);

  if (!book) return <div className="p-8 text-center">书卷未找到</div>;

  const tabs: { key: Mode; label: string }[] = [
    { key: 'cuv', label: '和合本' },
    { key: 'kjv', label: 'KJV' },
    { key: 'parallel', label: '对照' },
  ];

  const verseCount = Math.max(cuvData?.length || 0, kjvData?.length || 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2 text-sm">
        <Link href="/bible" className="text-[var(--color-accent)] hover:underline">圣经</Link>
        <span className="text-[var(--color-text-secondary)]">/</span>
        <Link href={`/bible/${bookId}`} className="text-[var(--color-accent)] hover:underline">{book.name_zh}</Link>
        <span className="text-[var(--color-text-secondary)]">/</span>
        <span className="text-[var(--color-text)]">第 {chapter} 章</span>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
          {book.name_zh} 第 {chapter} 章
        </h1>
        <p className="text-[var(--color-text-secondary)] font-serif mt-1">{book.name_en} {chapter}</p>
      </div>

      {/* Mode tabs */}
      <div className="flex justify-center gap-1 mb-8">
        {tabs.map(t => (
          <button key={t.key} onClick={() => setMode(t.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === t.key
                ? 'bg-[var(--color-accent)] text-white'
                : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] border border-[var(--color-border)]'
            }`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {loading ? (
        <div className="text-center py-20 text-[var(--color-text-secondary)]">加载中...</div>
      ) : mode === 'parallel' ? (
        <div className="space-y-4">
          {Array.from({ length: verseCount }, (_, i) => (
            <div key={i}>
              {chapterHeadings.filter(h => h.before_verse === i + 1).map((h, hi) => (
                <div key={hi} className="flex flex-col md:flex-row gap-3 md:gap-6 py-1 mt-4 mb-1">
                  <h3 className="flex-1 text-base font-bold text-[var(--color-text)] pb-1 border-b border-[var(--color-border)]/50">{h.zh}</h3>
                  <h3 className="flex-1 text-base font-bold text-[var(--color-text-secondary)] pb-1 border-b border-[var(--color-border)]/50 italic">{h.en}</h3>
                </div>
              ))}
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 py-3 border-b border-[var(--color-border)]/30">
              <div className="flex-1">
                {(() => {
                  const raw = cuvData?.[i] || '';
                  const { speaker, cleaned } = bookId === 'SNG' ? extractSpeaker(raw) : { speaker: null, cleaned: raw };
                  return (
                    <>
                      {speaker && <div className="mb-0.5"><SpeakerTag speaker={speaker} /></div>}
                      <span className="text-[var(--color-accent)] text-xs font-bold mr-1.5 select-none align-super">{i + 1}</span>
                      <span className="text-[var(--color-text)] text-base leading-relaxed" style={{ fontFamily: '"Noto Serif SC", "Source Han Serif CN", "STSong", serif' }}>
                        {cleaned}
                      </span>
                    </>
                  );
                })()}
              </div>
              <div className="flex-1">
                {(() => {
                  const sp = bookId === 'SNG' && cuvData?.[i] ? extractSpeaker(cuvData[i]).speaker : null;
                  return (
                    <>
                      {sp && <div className="mb-0.5"><SpeakerTag speaker={sp} lang="en" /></div>}
                      <span className="text-[var(--color-accent)] text-xs font-bold mr-1.5 select-none align-super">{i + 1}</span>
                      <span className="text-[var(--color-text-secondary)] text-base leading-relaxed italic" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                        {kjvData?.[i] || ''}
                      </span>
                    </>
                  );
                })()}
              </div>
            </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {(mode === 'cuv' ? cuvData : kjvData)?.map((verse, i) => (
            <div key={i}>
              {chapterHeadings.filter(h => h.before_verse === i + 1).map((h, hi) => (
                <h3 key={hi} className="text-base font-bold text-[var(--color-text)] mt-6 mb-2 pb-1 border-b border-[var(--color-border)]/50">
                  {mode === 'cuv' ? h.zh : h.en}
                </h3>
              ))}
              {(() => {
                const isSNG = bookId === 'SNG';
                const cuvSpeaker = (isSNG && mode === 'kjv' && cuvData?.[i]) ? extractSpeaker(cuvData[i]).speaker : null;
                const { speaker, cleaned } = (isSNG && mode === 'cuv') ? extractSpeaker(verse) : { speaker: cuvSpeaker, cleaned: verse };
                const speakerLang = mode === 'kjv' ? 'en' : 'zh';
                return (
                  <div>
                    {speaker && <div className="mt-3 mb-0.5"><SpeakerTag speaker={speaker} lang={speakerLang} /></div>}
                    <p className="text-base md:text-lg leading-loose"
                      style={{ fontFamily: mode === 'cuv' ? '"Noto Serif SC", "Source Han Serif CN", "STSong", serif' : 'Georgia, "Times New Roman", serif' }}>
                      <span className="text-[var(--color-accent)] text-xs font-bold mr-1.5 select-none align-super">{i + 1}</span>
                      <span className="text-[var(--color-text)]">{cleaned}</span>
                    </p>
                  </div>
                );
              })()}
            </div>
          ))}
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center mt-10 pt-6 border-t border-[var(--color-border)]">
        {prev ? (
          <Link href={`/bible/${prev.book}/${prev.chapter}`}
            className="px-4 py-2 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text)] text-sm transition-colors">
            ← 上一章
          </Link>
        ) : <div />}
        <Link href={`/bible/${bookId}`} className="text-[var(--color-accent)] text-sm hover:underline">
          返回目录
        </Link>
        {next ? (
          <Link href={`/bible/${next.book}/${next.chapter}`}
            className="px-4 py-2 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text)] text-sm transition-colors">
            下一章 →
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
