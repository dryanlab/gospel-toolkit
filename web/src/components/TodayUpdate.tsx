'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface TodayContent {
  type: 'reading' | 'letter';
  title: string;
  titleEn: string;
  author: string;
  authorEn: string;
  href: string;
  icon: string;
  book?: string;
  bookEn?: string;
  chapter?: number;
}

function getEstDateStr(): string {
  const now = new Date();
  const est = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const y = est.getFullYear();
  const m = String(est.getMonth() + 1).padStart(2, '0');
  const d = String(est.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getEstDayOfWeek(): number {
  const now = new Date();
  const est = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  return est.getDay(); // 0=Sun, 6=Sat
}

function formatDateZh(dateStr: string): string {
  const days = ['日', '一', '二', '三', '四', '五', '六'];
  const d = new Date(dateStr + 'T12:00:00');
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const dow = d.getDay();
  return `${month}月${day}日 周${days[dow]}`;
}

export default function TodayUpdate() {
  const [content, setContent] = useState<TodayContent | null>(null);
  const [dateStr, setDateStr] = useState('');
  const [dateZh, setDateZh] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = getEstDateStr();
    const dow = getEstDayOfWeek();
    setDateStr(today);
    setDateZh(formatDateZh(today));

    if (dow === 6) {
      // Saturday: fetch letter
      fetchLetter(today);
    } else {
      // Mon-Fri + Sunday: fetch reading
      fetchReading(today);
    }
  }, []);

  async function fetchReading(today: string) {
    try {
      const res = await fetch(`https://rockoftruth-api.suyanuiuc.workers.dev/readings`);
      const data = await res.json();
      const readings = data.readings || [];
      
      // Find today's reading by publish_date
      const todayReading = readings.find((r: any) => r.publish_date === today);
      
      if (todayReading) {
        const bookSlug = getBookSlug(todayReading.book);
        setContent({
          type: 'reading',
          title: `${todayReading.book} 第${todayReading.chapter}章 · ${todayReading.title || ''}`,
          titleEn: `${todayReading.book_en || ''} Chapter ${todayReading.chapter} · ${todayReading.title_en || ''}`,
          author: todayReading.author || '',
          authorEn: todayReading.author_en || '',
          href: `/readings/${bookSlug}?ch=${todayReading.chapter}`,
          icon: '📖',
          book: todayReading.book,
          bookEn: todayReading.book_en,
          chapter: todayReading.chapter,
        });
      }
    } catch (e) {
      // Fallback: try static data
    }
    setLoading(false);
  }

  async function fetchLetter(today: string) {
    try {
      const res = await fetch(`https://rockoftruth-api.suyanuiuc.workers.dev/letters`);
      const data = await res.json();
      const letters = data.letters || [];
      
      const todayLetter = letters.find((l: any) => l.date === today);
      
      if (todayLetter) {
        setContent({
          type: 'letter',
          title: todayLetter.title_zh,
          titleEn: todayLetter.title_en,
          author: todayLetter.author,
          authorEn: todayLetter.author_en,
          href: `/letters/${todayLetter.id}`,
          icon: '📜',
        });
      }
    } catch (e) {
      // silent
    }
    setLoading(false);
  }

  function getBookSlug(book: string): string {
    const map: Record<string, string> = {
      '创世记': 'genesis', '出埃及记': 'exodus', '利未记': 'leviticus',
      '民数记': 'numbers', '申命记': 'deuteronomy',
      '诗篇': 'psalms', '箴言': 'proverbs',
      '约翰福音': 'john', '使徒行传': 'acts', '罗马书': 'romans',
    };
    return map[book] || book.toLowerCase();
  }

  if (loading) {
    return (
      <div className="mb-6 rounded-2xl bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-600 p-5 animate-pulse shadow-md">
        <div className="h-5 bg-white/20 rounded w-2/3 mx-auto"></div>
      </div>
    );
  }

  if (!content) return null;

  return (
    <Link href={content.href} className="block group mb-6">
      <div className="rounded-2xl bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-600 dark:from-emerald-800 dark:via-teal-700 dark:to-emerald-700 px-6 min-h-[88px] py-4 flex items-center gap-4 transition-all hover:shadow-lg hover:-translate-y-0.5 shadow-md">
        <span className="text-4xl shrink-0">{content.icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif-cn text-xl font-bold text-white">🔔 今日更新 · {content.type === 'reading' ? '圣徒伴读' : '圣徒来信'}</h3>
          <p className="text-white/80 text-sm">{content.title}{content.author ? ` — ✍️ ${content.author}` : ''}</p>
        </div>
        <span className="text-white/90 text-2xl shrink-0 group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}
