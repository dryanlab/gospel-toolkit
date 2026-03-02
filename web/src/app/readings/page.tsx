'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { readings as staticReadings } from '@/data/readings';
import type { ReadingChapter } from '@/data/readings';
import { isPublished, useHydrated } from '@/lib/preview';
import { fetchReadingsList } from '@/lib/api';

function isReadLocal(book: string, chapter: number): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(`reading_done_${book}_${chapter}`) === '1';
}

// 书卷定义：按圣经分类
const OT_CATEGORIES = [
  {
    name: '摩西五经', nameEn: 'Pentateuch',
    books: [
      { id: 'genesis', name: '创世记', nameEn: 'Genesis', icon: '🌍', total: 50 },
      { id: 'exodus', name: '出埃及记', nameEn: 'Exodus', icon: '🔥', total: 40 },
      { id: 'leviticus', name: '利未记', nameEn: 'Leviticus', icon: '⚖️', total: 27 },
      { id: 'numbers', name: '民数记', nameEn: 'Numbers', icon: '🏕️', total: 36 },
      { id: 'deuteronomy', name: '申命记', nameEn: 'Deuteronomy', icon: '📜', total: 34 },
    ],
  },
  {
    name: '历史书', nameEn: 'Historical Books',
    books: [
      { id: 'joshua', name: '约书亚记', nameEn: 'Joshua', icon: '⚔️', total: 24 },
      { id: 'judges', name: '士师记', nameEn: 'Judges', icon: '🏛️', total: 21 },
      { id: 'ruth', name: '路得记', nameEn: 'Ruth', icon: '🌾', total: 4 },
      { id: '1samuel', name: '撒母耳记上', nameEn: '1 Samuel', icon: '👑', total: 31 },
      { id: '2samuel', name: '撒母耳记下', nameEn: '2 Samuel', icon: '👑', total: 24 },
      { id: '1kings', name: '列王纪上', nameEn: '1 Kings', icon: '🏰', total: 22 },
      { id: '2kings', name: '列王纪下', nameEn: '2 Kings', icon: '🏰', total: 25 },
      { id: '1chronicles', name: '历代志上', nameEn: '1 Chronicles', icon: '📋', total: 29 },
      { id: '2chronicles', name: '历代志下', nameEn: '2 Chronicles', icon: '📋', total: 36 },
      { id: 'ezra', name: '以斯拉记', nameEn: 'Ezra', icon: '🔨', total: 10 },
      { id: 'nehemiah', name: '尼希米记', nameEn: 'Nehemiah', icon: '🧱', total: 13 },
      { id: 'esther', name: '以斯帖记', nameEn: 'Esther', icon: '👸', total: 10 },
    ],
  },
  {
    name: '诗歌智慧书', nameEn: 'Poetry & Wisdom',
    books: [
      { id: 'job', name: '约伯记', nameEn: 'Job', icon: '🪨', total: 42 },
      { id: 'psalms', name: '诗篇', nameEn: 'Psalms', icon: '🎵', total: 150 },
      { id: 'proverbs', name: '箴言', nameEn: 'Proverbs', icon: '💎', total: 31 },
      { id: 'ecclesiastes', name: '传道书', nameEn: 'Ecclesiastes', icon: '🌀', total: 12 },
      { id: 'songofsolomon', name: '雅歌', nameEn: 'Song of Solomon', icon: '🌹', total: 8 },
    ],
  },
  {
    name: '大先知书', nameEn: 'Major Prophets',
    books: [
      { id: 'isaiah', name: '以赛亚书', nameEn: 'Isaiah', icon: '🕊️', total: 66 },
      { id: 'jeremiah', name: '耶利米书', nameEn: 'Jeremiah', icon: '😢', total: 52 },
      { id: 'lamentations', name: '耶利米哀歌', nameEn: 'Lamentations', icon: '🖤', total: 5 },
      { id: 'ezekiel', name: '以西结书', nameEn: 'Ezekiel', icon: '👁️', total: 48 },
      { id: 'daniel', name: '但以理书', nameEn: 'Daniel', icon: '🦁', total: 12 },
    ],
  },
  {
    name: '小先知书', nameEn: 'Minor Prophets',
    books: [
      { id: 'hosea', name: '何西阿书', nameEn: 'Hosea', icon: '💔', total: 14 },
      { id: 'joel', name: '约珥书', nameEn: 'Joel', icon: '🦗', total: 3 },
      { id: 'amos', name: '阿摩司书', nameEn: 'Amos', icon: '⚡', total: 9 },
      { id: 'obadiah', name: '俄巴底亚书', nameEn: 'Obadiah', icon: '⛰️', total: 1 },
      { id: 'jonah', name: '约拿书', nameEn: 'Jonah', icon: '🐋', total: 4 },
      { id: 'micah', name: '弥迦书', nameEn: 'Micah', icon: '🏔️', total: 7 },
      { id: 'nahum', name: '那鸿书', nameEn: 'Nahum', icon: '🌊', total: 3 },
      { id: 'habakkuk', name: '哈巴谷书', nameEn: 'Habakkuk', icon: '🗼', total: 3 },
      { id: 'zephaniah', name: '西番雅书', nameEn: 'Zephaniah', icon: '🌑', total: 3 },
      { id: 'haggai', name: '哈该书', nameEn: 'Haggai', icon: '🏗️', total: 2 },
      { id: 'zechariah', name: '撒迦利亚书', nameEn: 'Zechariah', icon: '🐴', total: 14 },
      { id: 'malachi', name: '玛拉基书', nameEn: 'Malachi', icon: '☀️', total: 4 },
    ],
  },
];

const NT_CATEGORIES = [
  {
    name: '福音书', nameEn: 'Gospels',
    books: [
      { id: 'matthew', name: '马太福音', nameEn: 'Matthew', icon: '📜', total: 28 },
      { id: 'mark', name: '马可福音', nameEn: 'Mark', icon: '🦁', total: 16 },
      { id: 'luke', name: '路加福音', nameEn: 'Luke', icon: '🐂', total: 24 },
      { id: 'john', name: '约翰福音', nameEn: 'John', icon: '🦅', total: 21 },
    ],
  },
  {
    name: '历史书', nameEn: 'History',
    books: [
      { id: 'acts', name: '使徒行传', nameEn: 'Acts', icon: '🌍', total: 28 },
    ],
  },
  {
    name: '保罗书信', nameEn: "Paul's Letters",
    books: [
      { id: 'romans', name: '罗马书', nameEn: 'Romans', icon: '⚡', total: 16 },
      { id: '1corinthians', name: '哥林多前书', nameEn: '1 Corinthians', icon: '✉️', total: 16 },
      { id: '2corinthians', name: '哥林多后书', nameEn: '2 Corinthians', icon: '✉️', total: 13 },
      { id: 'galatians', name: '加拉太书', nameEn: 'Galatians', icon: '⛓️', total: 6 },
      { id: 'ephesians', name: '以弗所书', nameEn: 'Ephesians', icon: '🏛️', total: 6 },
      { id: 'philippians', name: '腓立比书', nameEn: 'Philippians', icon: '😊', total: 4 },
      { id: 'colossians', name: '歌罗西书', nameEn: 'Colossians', icon: '👑', total: 4 },
      { id: '1thessalonians', name: '帖撒罗尼迦前书', nameEn: '1 Thessalonians', icon: '⏳', total: 5 },
      { id: '2thessalonians', name: '帖撒罗尼迦后书', nameEn: '2 Thessalonians', icon: '⏳', total: 3 },
      { id: '1timothy', name: '提摩太前书', nameEn: '1 Timothy', icon: '📖', total: 6 },
      { id: '2timothy', name: '提摩太后书', nameEn: '2 Timothy', icon: '📖', total: 4 },
      { id: 'titus', name: '提多书', nameEn: 'Titus', icon: '📖', total: 3 },
      { id: 'philemon', name: '腓利门书', nameEn: 'Philemon', icon: '🤝', total: 1 },
    ],
  },
  {
    name: '一般书信', nameEn: 'General Letters',
    books: [
      { id: 'hebrews', name: '希伯来书', nameEn: 'Hebrews', icon: '✝️', total: 13 },
      { id: 'james', name: '雅各书', nameEn: 'James', icon: '🔨', total: 5 },
      { id: '1peter', name: '彼得前书', nameEn: '1 Peter', icon: '🪨', total: 5 },
      { id: '2peter', name: '彼得后书', nameEn: '2 Peter', icon: '🪨', total: 3 },
      { id: '1john', name: '约翰一书', nameEn: '1 John', icon: '❤️', total: 5 },
      { id: '2john', name: '约翰二书', nameEn: '2 John', icon: '❤️', total: 1 },
      { id: '3john', name: '约翰三书', nameEn: '3 John', icon: '❤️', total: 1 },
      { id: 'jude', name: '犹大书', nameEn: 'Jude', icon: '🔥', total: 1 },
    ],
  },
  {
    name: '启示文学', nameEn: 'Apocalyptic',
    books: [
      { id: 'revelation', name: '启示录', nameEn: 'Revelation', icon: '🌈', total: 22 },
    ],
  },
];

// 已有内容或即将推出的书卷
const ACTIVE_BOOKS = new Set(['genesis']);
const COMING_SOON = new Set(['john', 'exodus', 'acts', 'leviticus', 'romans']);

type BookDef = { id: string; name: string; nameEn: string; icon: string; total: number };

function BookCard({ book, readings }: { book: BookDef; readings: ReadingChapter[] }) {
  const isActive = ACTIVE_BOOKS.has(book.id);
  const isComingSoon = COMING_SOON.has(book.id);
  const published = readings.filter(r => r.bookEn.toLowerCase() === book.id && isPublished(r.publishDate)).length;
  const pct = book.total > 0 ? Math.round((published / book.total) * 100) : 0;

  if (isActive) {
    return (
      <Link
        href={`/readings/${book.id}`}
        className="flex items-center gap-3 p-3 rounded-xl border border-[var(--color-accent)] bg-[var(--color-bg-secondary)] hover:shadow-lg hover:border-[var(--color-accent)] transition-all"
      >
        <span className="text-2xl">{book.icon}</span>
        <div className="flex-1 min-w-0">
          <h4 className="font-serif-cn font-bold text-sm text-[var(--color-text)]">{book.name}</h4>
          <p className="text-xs text-[var(--color-text-secondary)] italic">{book.nameEn}</p>
          {published > 0 && (
            <div className="mt-1 flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-[var(--color-bg)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--color-accent)] rounded-full" style={{ width: `${Math.max(pct, 2)}%` }} />
              </div>
              <span className="text-xs text-[var(--color-accent)] font-bold whitespace-nowrap">{published}/{book.total}</span>
            </div>
          )}
        </div>
      </Link>
    );
  }

  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl border ${isComingSoon ? 'border-dashed border-[var(--color-accent)]/40' : 'border-[var(--color-border)]'} bg-[var(--color-bg-secondary)] ${isComingSoon ? 'opacity-70' : 'opacity-40'}`}>
      <span className="text-2xl grayscale">{book.icon}</span>
      <div className="flex-1 min-w-0">
        <h4 className="font-serif-cn font-bold text-sm text-[var(--color-text-secondary)]">{book.name}</h4>
        <p className="text-xs text-[var(--color-text-secondary)] italic">{book.nameEn}</p>
        {isComingSoon && (
          <p className="text-xs text-[var(--color-accent)] mt-0.5">🔜 即将推出 Coming Soon</p>
        )}
      </div>
    </div>
  );
}

function CategorySection({ cat, readings }: { cat: { name: string; nameEn: string; books: BookDef[] }; readings: ReadingChapter[] }) {
  return (
    <div className="mb-6">
      <h3 className="font-serif-cn text-base font-bold text-[var(--color-text)] mb-3 flex items-center gap-2">
        <span className="w-1 h-5 bg-[var(--color-accent)] rounded-full inline-block" />
        {cat.name}
        <span className="text-xs text-[var(--color-text-secondary)] font-normal italic">{cat.nameEn}</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cat.books.map(book => (
          <BookCard key={book.id} book={book} readings={readings} />
        ))}
      </div>
    </div>
  );
}

const totalChapters = 1189;

export default function ReadingsPage() {
  const [readings, setReadings] = useState<ReadingChapter[]>(staticReadings);

  useEffect(() => {
    fetchReadingsList().then(apiReadings => {
      if (apiReadings && apiReadings.length > 0) {
        const mapped = apiReadings.map((r: any) => ({
          book: r.book, bookEn: r.book_en, chapter: r.chapter,
          title: r.title, titleEn: r.title_en, author: r.author, authorEn: r.author_en,
          scripture: r.scripture, publishDate: r.publish_date,
          content_zh: '', content_en: '', historyContext_zh: '', historyContext_en: '',
          structure_zh: '', structure_en: '', theology_zh: '', theology_en: '',
          christShadow_zh: '', christShadow_en: '',
        }));
        setReadings(mapped);
      }
    });
  }, []);

  const totalDone = readings.filter(r => isPublished(r.publishDate)).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-4xl">📖</span>
        <h1 className="font-serif-cn text-2xl md:text-3xl font-bold text-[var(--color-text)] mt-3">
          圣徒伴读
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mt-1">Read with the Saints</p>
        <blockquote className="mt-4 text-sm text-[var(--color-text-secondary)] italic max-w-lg mx-auto">
          &ldquo;圣经都是神所默示的，于教训、督责、使人归正、教导人学义都是有益的。&rdquo;
          <span className="text-xs">— 提摩太后书 3:16</span>
          <br />
          <span className="text-xs italic">&ldquo;All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.&rdquo;</span>
          <br />
          <span className="text-xs">— 2 Timothy 3:16</span>
        </blockquote>
        <p className="mt-4 text-sm text-[var(--color-text)] max-w-2xl mx-auto leading-relaxed">
          以圣经作者的视角，带你逐章走进经文。这不是原文翻译，而是基于改革宗释经传统的导读——想象摩西坐在你身旁，为你讲解他写下这些话时的心意。
          <br />
          <span className="text-[var(--color-text-secondary)]">
            Walk through Scripture chapter by chapter, as if guided by the biblical author. These are not translations of the original text, but guided readings rooted in the Reformed interpretive tradition.
          </span>
        </p>
      </div>

      {/* Bible Entry */}
      <Link href="/bible" className="block mb-6 p-5 rounded-2xl bg-gradient-to-r from-amber-600 to-yellow-700 text-white hover:from-amber-500 hover:to-yellow-600 transition-all shadow-lg">
        <div className="flex items-center gap-4">
          <span className="text-4xl">📖</span>
          <div>
            <div className="text-xl font-bold">圣经 / Holy Bible</div>
            <div className="text-amber-100 text-sm mt-0.5">和合本 · King James Version — 66卷 1189章</div>
          </div>
          <span className="ml-auto text-2xl">→</span>
        </div>
      </Link>

      {/* Global progress */}
      <div className="mb-8 p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-[var(--color-text)]">📊 全书进度 Overall Progress</span>
          <span className="text-sm text-[var(--color-text-secondary)]">{totalDone} / {totalChapters} 章</span>
        </div>
        <div className="w-full h-3 bg-[var(--color-bg)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--color-accent)] rounded-full transition-all"
            style={{ width: `${Math.max((totalDone / totalChapters) * 100, 0.5)}%` }}
          />
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] mt-2 text-center">
          66卷 · 1189章 · 持续更新中
          <br />
          <span className="italic">66 books · 1,189 chapters · Ongoing</span>
        </p>
      </div>

      {/* Latest readings */}
      <div className="mb-8">
        <h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-4">🔥 最新伴读 Latest</h2>
        <div className="space-y-3">
          {[...readings].filter(r => isPublished(r.publishDate)).reverse().slice(0, 5).map((item, i) => {
            const chRead = isReadLocal(item.bookEn.toLowerCase(), item.chapter);
            return (
            <Link
              key={`${item.bookEn}-${item.chapter}`}
              href={`/readings/${item.bookEn.toLowerCase()}?ch=${item.chapter}`}
              className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] transition-all hover:border-[var(--color-accent)]"
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${chRead ? 'bg-green-100 dark:bg-green-900/30' : 'bg-[var(--color-accent)]/10'}`}>
                {chRead ? <span className="text-green-600 dark:text-green-400 text-lg">✅</span> : <span className="text-[var(--color-accent)] font-bold">{item.chapter}</span>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-[var(--color-text)]">{item.book} 第{item.chapter}章 · {item.title}</h3>
                  {i === 0 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)] text-white font-bold">NEW</span>
                  )}
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] italic">{item.bookEn} {item.chapter} · {item.titleEn}</p>
              </div>
            </Link>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 flex items-center gap-4">
        <div className="flex-1 border-t border-[var(--color-border)]" />
        <span className="text-sm text-[var(--color-text-secondary)] whitespace-nowrap">📖 全部书卷 All Books</span>
        <div className="flex-1 border-t border-[var(--color-border)]" />
      </div>

      {/* 旧约 Old Testament */}
      <div className="mb-10">
        <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-3">
          <span className="text-2xl">📜</span>
          旧约
          <span className="text-sm text-[var(--color-text-secondary)] font-normal italic">Old Testament · 39卷</span>
        </h2>
        {OT_CATEGORIES.map(cat => (
          <CategorySection key={cat.name} cat={cat} readings={readings} />
        ))}
      </div>

      {/* 新约 New Testament */}
      <div className="mb-10">
        <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-3">
          <span className="text-2xl">✝️</span>
          新约
          <span className="text-sm text-[var(--color-text-secondary)] font-normal italic">New Testament · 27卷</span>
        </h2>
        {NT_CATEGORIES.map(cat => (
          <CategorySection key={cat.name} cat={cat} readings={readings} />
        ))}
      </div>

      {/* Update schedule */}
      <div className="text-center p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
        <p className="text-sm font-bold text-[var(--color-text)] mb-2">
          📅 更新时间 Update Schedule
        </p>
        <p className="text-sm text-[var(--color-text)]">
          周一至周五 · 早上 6:00 AM (EST) · 每天更新一章
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] italic mt-1">
          Monday through Friday · 6:00 AM EST · One chapter per day
        </p>
        <div className="mt-3 pt-3 border-t border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-text-secondary)]">
            周日发布诗篇/箴言灵修 · 66卷 · 1189章 · 从创世记到启示录
          </p>
          <p className="text-xs text-[var(--color-text-secondary)] italic mt-1">
            Psalms/Proverbs devotional on Sundays · 66 books · Genesis to Revelation
          </p>
        </div>
      </div>
    </div>
  );
}
