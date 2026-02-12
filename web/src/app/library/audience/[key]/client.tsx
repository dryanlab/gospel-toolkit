'use client';
import Link from 'next/link';

interface Book {
  id: string;
  title_zh: string;
  title_en: string;
  author_zh: string;
  author_en: string;
  category: string;
  full_epub_filename?: string | null;
}

const gradients = [
  'from-indigo-600 to-blue-800',
  'from-emerald-600 to-teal-800',
  'from-purple-600 to-violet-800',
  'from-amber-600 to-orange-800',
  'from-rose-600 to-red-800',
  'from-cyan-600 to-sky-800',
];

export default function AudienceDetailClient({
  books,
  title,
  subtitle,
}: {
  books: Book[];
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <h1 className="font-serif-cn text-3xl font-bold text-[var(--color-text)] mb-1">{title}</h1>
        <p className="text-sm text-[var(--color-text-secondary)] italic mb-2">{subtitle}</p>
        <p className="text-sm text-[var(--color-text-secondary)]">共 {books.length} 本书</p>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        <Link href="/library/audience" className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:underline">
          ← 返回人群分类 Back to Audience
        </Link>
        <Link href="/library" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:underline">
          📚 返回书库
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book, i) => (
          <Link key={book.id} href={`/library/${book.id}`} className="block group">
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5">
              <div className={`bg-gradient-to-br ${gradients[i % gradients.length]} p-5 aspect-[3/4] flex flex-col justify-between text-white relative`}>
                {book.full_epub_filename && (
                  <div className="absolute top-3 right-3 bg-white/30 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    📖 可阅读
                  </div>
                )}
                <span className="text-xs opacity-60 uppercase tracking-wider line-clamp-1">{book.author_en}</span>
                <div>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full mb-2 inline-block">{book.category}</span>
                  <h3 className="font-serif-cn text-xl font-bold mb-1">{book.title_zh}</h3>
                  <p className="text-white/70 text-sm italic line-clamp-1">{book.title_en}</p>
                  <p className="text-white/60 text-xs mt-1">{book.author_zh}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
