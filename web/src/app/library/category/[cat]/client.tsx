'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { books, getBooksByCategory } from '@/lib/data';
import FavoriteButton from '@/components/FavoriteButton';

const categoryInfo: Record<string, { icon: string; en: string }> = {
  '系统神学': { icon: '⛪', en: 'Systematic Theology' },
  '圣经研究': { icon: '📖', en: 'Biblical Studies' },
  '护教学': { icon: '🛡️', en: 'Apologetics' },
  '哲学与思想': { icon: '🧠', en: 'Philosophy' },
  '基督徒生活': { icon: '🌿', en: 'Christian Living' },
  '伦理与文化': { icon: '⚖️', en: 'Ethics & Culture' },
  '科学与信仰': { icon: '🔬', en: 'Science & Faith' },
  '灵修与生活': { icon: '🙏', en: 'Devotional' },
  '比较宗教': { icon: '🌍', en: 'Comparative Religion' },
  '异端辨别': { icon: '🚨', en: 'Cult Discernment' },
  '教会历史': { icon: '🏛️', en: 'Church History' },
  '文学': { icon: '✍️', en: 'Literature' },
  '见证': { icon: '💡', en: 'Testimonies' },
  '世界观': { icon: '🌐', en: 'Worldview' },
};

const bookColors = [
  'from-indigo-600 to-blue-800',
  'from-emerald-600 to-teal-800',
  'from-purple-600 to-violet-800',
  'from-amber-600 to-orange-800',
  'from-rose-600 to-pink-800',
  'from-cyan-600 to-teal-800',
];

function normalize(str: string): string {
  return str.toLowerCase().replace(/[\s·．・]/g, '');
}

export default function CategoryClient({ cat }: { cat: string }) {
  const [search, setSearch] = useState('');
  const info = categoryInfo[cat] || { icon: '📘', en: cat };

  const categoryBooks = useMemo(() => getBooksByCategory(cat), [cat]);

  const filtered = useMemo(() => {
    if (!search.trim()) return categoryBooks;
    const q = normalize(search);
    return categoryBooks.filter(b =>
      normalize(b.title_zh).includes(q) ||
      normalize(b.title_en).includes(q) ||
      normalize(b.author_zh).includes(q) ||
      normalize(b.author_en).includes(q)
    );
  }, [search, categoryBooks]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <Link href="/library" className="text-sm text-[var(--color-accent)] hover:underline">← 返回书库</Link>
      </div>

      <div className="text-center mb-6">
        <h1 className="font-serif-cn text-3xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">
          {info.icon} {cat}
        </h1>
        <p className="text-[var(--color-text-secondary)]">{info.en}</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">{categoryBooks.length} 本书</p>
      </div>

      {/* Search within category */}
      {categoryBooks.length > 6 && (
        <div className="mb-5">
          <input
            type="text"
            placeholder="搜索书名或作者..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40"
          />
        </div>
      )}

      {search && (
        <p className="text-sm text-[var(--color-text-secondary)] mb-4">
          {filtered.length === 0 ? '没有找到匹配的书籍' : `找到 ${filtered.length} 本书`}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((book, i) => (
          <Link key={book.id} href={`/library/${book.id}`} className="block group">
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5">
              <div className={`bg-gradient-to-br ${bookColors[i % bookColors.length]} p-5 aspect-[3/4] flex flex-col justify-between text-white relative`}>
                <div className="flex items-start justify-between">
                  <span className="text-xs opacity-60 uppercase tracking-wider line-clamp-1">{book.author_en}</span>
                  <FavoriteButton id={book.id} className="text-white" />
                </div>
                <div>
                  <h3 className="font-serif-cn text-xl font-bold mb-1">{book.title_zh}</h3>
                  <p className="text-white/70 text-sm italic line-clamp-1">{book.title_en}</p>
                  <p className="text-white/60 text-xs mt-1">{book.author_zh}</p>
                </div>
              </div>
              <div className="p-3 bg-[var(--color-bg)]">
                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
                  {book.summary_zh || `${book.author_zh}的著作`}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
