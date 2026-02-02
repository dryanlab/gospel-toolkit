'use client';
import Link from 'next/link';
import { books } from '@/lib/data';
import FavoriteButton from '@/components/FavoriteButton';

const bookColors = [
  'from-indigo-600 to-blue-800',
  'from-emerald-600 to-teal-800',
  'from-purple-600 to-violet-800',
];

export default function LibraryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <h1 className="font-serif-cn text-3xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">📚 书库</h1>
        <p className="text-[var(--color-text-secondary)]">Library</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2 max-w-lg mx-auto">你的话是我脚前的灯，是我路上的光。— 诗篇 119:105</p>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-lg mx-auto italic">Your word is a lamp for my feet, a light on my path. — Psalm 119:105</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book, i) => (
          <Link key={book.id} href={`/library/${book.id}`} className="block group">
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5">
              {/* Book cover placeholder */}
              <div className={`bg-gradient-to-br ${bookColors[i % bookColors.length]} p-6 aspect-[3/4] flex flex-col justify-between text-white relative`}>
                <div>
                  <span className="text-xs opacity-60 uppercase tracking-wider">{book.author_en}</span>
                </div>
                <div>
                  <h3 className="font-serif-cn text-2xl font-bold mb-1">{book.title_zh}</h3>
                  <p className="text-white/70 text-sm italic">{book.title_en}</p>
                  <p className="text-white/60 text-xs mt-2">{book.author_zh}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <FavoriteButton id={book.id} className="text-white" />
                </div>
              </div>
              {/* Info */}
              <div className="p-4 bg-[var(--color-bg)]">
                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">{book.summary_zh}</p>
                <div className="flex gap-1 mt-2 flex-wrap">
                  {book.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
