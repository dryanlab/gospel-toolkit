'use client';
import Link from 'next/link';
import bibleIndex from '@/data/bible/index.json';

interface Book {
  id: string;
  name_en: string;
  name_zh: string;
  chapters: number;
  testament: string;
}

const otCategories: { label: string; labelEn: string; icon: string; books: string[] }[] = [
  { label: '摩西五经', labelEn: 'Pentateuch', icon: '📜', books: ['GEN','EXO','LEV','NUM','DEU'] },
  { label: '历史书', labelEn: 'Historical', icon: '⚔️', books: ['JOS','JDG','RUT','1SA','2SA','1KI','2KI','1CH','2CH','EZR','NEH','EST'] },
  { label: '诗歌智慧书', labelEn: 'Poetry & Wisdom', icon: '🎵', books: ['JOB','PSA','PRO','ECC','SNG'] },
  { label: '大先知书', labelEn: 'Major Prophets', icon: '📢', books: ['ISA','JER','LAM','EZK','DAN'] },
  { label: '小先知书', labelEn: 'Minor Prophets', icon: '📣', books: ['HOS','JOL','AMO','OBA','JNA','MIC','NAM','HAB','ZEP','HAG','ZEC','MAL'] },
];

const ntCategories: { label: string; labelEn: string; icon: string; books: string[] }[] = [
  { label: '福音书', labelEn: 'Gospels', icon: '✝️', books: ['MAT','MRK','LUK','JHN'] },
  { label: '使徒行传', labelEn: 'Acts', icon: '🔥', books: ['ACT'] },
  { label: '保罗书信', labelEn: 'Pauline Epistles', icon: '✉️', books: ['ROM','1CO','2CO','GAL','EPH','PHP','COL','1TH','2TH','1TI','2TI','TIT','PHM'] },
  { label: '普通书信', labelEn: 'General Epistles', icon: '📨', books: ['HEB','JAS','1PE','2PE','1JN','2JN','3JN','JDE'] },
  { label: '启示录', labelEn: 'Revelation', icon: '👑', books: ['REV'] },
];

const bookMap = new Map((bibleIndex as Book[]).map(b => [b.id, b]));

function CategorySection({ cat }: { cat: typeof otCategories[0] }) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-[var(--color-accent)] mb-2 flex items-center gap-1.5">
        <span>{cat.icon}</span>
        <span>{cat.label}</span>
        <span className="text-[var(--color-text-secondary)] font-normal text-xs ml-1">{cat.labelEn}</span>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {cat.books.map(id => {
          const b = bookMap.get(id);
          if (!b) return null;
          return (
            <Link key={id} href={`/bible/${id}`}
              className="block p-3 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-accent)]/5 transition-colors">
              <div className="font-semibold text-[var(--color-text)] text-sm">{b.name_zh}</div>
              <div className="text-xs text-[var(--color-text-secondary)]">{b.name_en}</div>
              <div className="text-xs text-[var(--color-accent)] mt-1">{b.chapters} 章</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function BibleHome() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-2">
          📖 圣经 / Holy Bible
        </h1>
        <p className="text-[var(--color-text-secondary)]">和合本 · King James Version</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2 max-w-lg mx-auto">
          你的话是我脚前的灯，是我路上的光。— 诗篇 119:105
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1 italic">
          Your word is a lamp for my feet, a light on my path. — Psalm 119:105
        </p>
      </div>

      {/* Old Testament */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4 pb-2 border-b border-[var(--color-border)]">
          📜 旧约 <span className="text-sm font-normal text-[var(--color-text-secondary)]">Old Testament · 39卷</span>
        </h2>
        {otCategories.map(cat => <CategorySection key={cat.label} cat={cat} />)}
      </div>

      {/* New Testament */}
      <div>
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4 pb-2 border-b border-[var(--color-border)]">
          ✉️ 新约 <span className="text-sm font-normal text-[var(--color-text-secondary)]">New Testament · 27卷</span>
        </h2>
        {ntCategories.map(cat => <CategorySection key={cat.label} cat={cat} />)}
      </div>
    </div>
  );
}
