'use client';
import Link from 'next/link';
import bibleIndex from '@/data/bible/index.json';

interface Book { id: string; name_en: string; name_zh: string; chapters: number; testament: string; }

export default function BookClient({ bookId }: { bookId: string }) {
  const book = (bibleIndex as Book[]).find(b => b.id === bookId);
  if (!book) return <div className="p-8 text-center text-[var(--color-text-secondary)]">书卷未找到</div>;

  const chapters = Array.from({ length: book.chapters }, (_, i) => i + 1);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="mb-6">
        <Link href="/bible" className="text-[var(--color-accent)] hover:underline text-sm">← 返回圣经目录</Link>
      </div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-accent)] mb-1">{book.name_zh}</h1>
        <p className="text-lg text-[var(--color-text-secondary)] font-serif">{book.name_en}</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">共 {book.chapters} 章</p>
      </div>
      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
        {chapters.map(ch => (
          <Link key={ch} href={`/bible/${bookId}/${ch}`}
            className="flex items-center justify-center aspect-square rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-colors text-[var(--color-text)] font-medium">
            {ch}
          </Link>
        ))}
      </div>
    </div>
  );
}
