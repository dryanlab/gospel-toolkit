'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { readings as staticReadings } from '@/data/readings';
import type { ReadingChapter } from '@/data/readings';
import { isPublished } from '@/lib/preview';
import { fetchReadingsList } from '@/lib/api';

const books = [
  { id: 'genesis', name: '创世记', nameEn: 'Genesis', author: '摩西', authorEn: 'Moses', icon: '🌍', total: 50 },
  { id: 'exodus', name: '出埃及记', nameEn: 'Exodus', author: '摩西', authorEn: 'Moses', icon: '🔥', total: 40},
  { id: 'matthew', name: '马太福音', nameEn: 'Matthew', author: '马太', authorEn: 'Matthew', icon: '📜', total: 28},
  { id: 'psalms', name: '诗篇', nameEn: 'Psalms', author: '大卫', authorEn: 'David', icon: '🎵', total: 150},
  { id: 'romans', name: '罗马书', nameEn: 'Romans', author: '保罗', authorEn: 'Paul', icon: '⚡', total: 16},
  { id: 'john', name: '约翰福音', nameEn: 'John', author: '约翰', authorEn: 'John', icon: '🕊️', total: 21},
];

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
          圣经作者以第一人称带你逐章读经——了解历史背景、经文结构、神学意涵与救恩脉络，让圣经活起来。
          <br />
          <span className="text-[var(--color-text-secondary)]">
            Biblical authors guide you chapter by chapter in first person — historical context, structure, theological significance, and the thread of redemption. Bringing Scripture to life.
          </span>
        </p>
      </div>

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
          66卷 · 1189章 · 14位作者 · 持续更新中
          <br />
          <span className="italic">66 books · 1,189 chapters · 14 authors · Ongoing</span>
        </p>
      </div>

      {/* Latest readings */}
      <div className="mb-8">
        <h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-4">🔥 最新伴读 Latest</h2>
        <div className="space-y-3">
          {/* Published chapters */}
          {[...readings].filter(r => isPublished(r.publishDate)).reverse().slice(0, 5).map((item, i) => (
            <Link
              key={item.chapter}
              href={`/readings/${item.bookEn.toLowerCase()}?ch=${item.chapter}`}
              className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] transition-all hover:border-[var(--color-accent)]"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                <span className="text-[var(--color-accent)] font-bold">{item.chapter}</span>
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
              <span className="text-[var(--color-text-secondary)] text-sm">{item.author}伴读 Read with {item.authorEn}</span>
            </Link>
          ))}
          {/* Next upcoming chapter */}
          {(() => {
            const upcoming = [...readings].filter(r => !isPublished(r.publishDate)).sort((a, b) => a.publishDate.localeCompare(b.publishDate))[0];
            if (!upcoming) return null;
            return (
              <div className="flex items-center gap-4 p-4 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-bg-secondary)] opacity-50">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-bg)] flex items-center justify-center">
                  <span className="text-[var(--color-text-secondary)]">🔒</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[var(--color-text-secondary)]">{upcoming.book} 第{upcoming.chapter}章 · {upcoming.title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] italic">{upcoming.bookEn} {upcoming.chapter} · {upcoming.titleEn}</p>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">🔒 {upcoming.publishDate} 发布</p>
                </div>
                <span className="text-[var(--color-text-secondary)] text-sm">即将发布</span>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Book cards */}
      <div>
        <h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-4">📚 选择书卷 Choose a Book</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {books.map(book => {
            const now = new Date();
            const published = readings.filter(r => r.bookEn.toLowerCase() === book.id && new Date(r.publishDate) <= now).length;
            const total_written = readings.filter(r => r.bookEn.toLowerCase() === book.id).length;
            const hasContent = total_written > 0;
            const pct = book.total > 0 ? Math.round((published / book.total) * 100) : 0;
            const cls = `relative rounded-xl border p-4 text-center transition-all block ${
              hasContent
                ? 'border-[var(--color-accent)] bg-[var(--color-bg-secondary)] hover:shadow-lg cursor-pointer'
                : 'border-[var(--color-border)] bg-[var(--color-bg-secondary)] opacity-60'
            }`;
            const inner = (
              <>
                <div className="text-3xl mb-2">{book.icon}</div>
                <h3 className="font-serif-cn font-bold text-[var(--color-text)]">{book.name}</h3>
                <p className="text-xs text-[var(--color-text-secondary)] italic">{book.nameEn}</p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">✍️ {book.author}伴读 Read with {book.authorEn}</p>
                <div className="mt-2">
                  {hasContent ? (
                    <>
                      {published > 0 ? (
                        <>
                          <div className="w-full h-1.5 bg-[var(--color-bg)] rounded-full overflow-hidden">
                            <div className="h-full bg-[var(--color-accent)] rounded-full" style={{ width: `${Math.max(pct, 1)}%` }} />
                          </div>
                          <p className="text-xs text-[var(--color-accent)] font-bold mt-1">{published}/{book.total}章</p>
                        </>
                      ) : (
                        <p className="text-xs text-[var(--color-accent)] font-medium mt-1">即将开始 Coming Soon</p>
                      )}
                    </>
                  ) : (
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">即将开始 Coming Soon</p>
                  )}
                </div>
              </>
            );
            return hasContent ? (
              <Link key={book.id} href={`/readings/${book.id}`} className={cls}>{inner}</Link>
            ) : (
              <div key={book.id} className={cls}>{inner}</div>
            );
          })}
        </div>
      </div>

      {/* Update schedule */}
      <div className="mt-10 text-center p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
        <p className="text-sm font-bold text-[var(--color-text)] mb-2">
          📅 更新时间 Update Schedule
        </p>
        <p className="text-sm text-[var(--color-text)]">
          每周一至周五 · 早上 6:00 AM (EST) · 每天更新一章
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] italic mt-1">
          Monday through Friday · 6:00 AM EST · One chapter per day
        </p>
        <div className="mt-3 pt-3 border-t border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-text-secondary)]">
            66卷 · 1189章 · 14位作者 · 从创世记到启示录 · 持续连载
          </p>
          <p className="text-xs text-[var(--color-text-secondary)] italic mt-1">
            66 books · 1,189 chapters · 14 authors · Genesis to Revelation
          </p>
        </div>
      </div>
    </div>
  );
}
