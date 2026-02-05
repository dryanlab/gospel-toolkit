'use client';
import Link from 'next/link';
import { books } from '@/lib/data';

const readableBooks = books.filter(b => b.full_epub_filename);

const gradients = [
  'from-indigo-600 to-blue-800',
  'from-emerald-600 to-teal-800',
  'from-purple-600 to-violet-800',
  'from-amber-600 to-orange-800',
  'from-rose-600 to-red-800',
];

export default function ReadableBooksPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <Link href="/library" className="text-sm text-[var(--color-accent)] hover:underline">← 返回书库</Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="font-serif-cn text-3xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">📖 可阅读全文</h1>
        <p className="text-[var(--color-text-secondary)]">Public Domain Classics</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 max-w-xl mx-auto">
          以下 {readableBooks.length} 本经典著作已进入公有领域，可免费阅读全文。点击任意书籍即可开始阅读。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {readableBooks.map((book, i) => (
          <Link key={book.id} href={`/library/${book.id}`} className="block group">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className={`bg-gradient-to-br ${gradients[i % gradients.length]} p-6 aspect-[3/4] flex flex-col justify-between text-white relative`}>
                <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                  📖 全文可读
                </div>
                <div>
                  <span className="text-xs opacity-70 uppercase tracking-wider">{book.author_en}</span>
                </div>
                <div>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full mb-3 inline-block">{(book as any).category}</span>
                  <h3 className="font-serif-cn text-2xl font-bold mb-2">{book.title_zh}</h3>
                  <p className="text-white/80 text-sm italic mb-2">{book.title_en}</p>
                  <p className="text-white/70 text-sm">{book.author_zh}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 p-6 rounded-2xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30">
        <h3 className="font-semibold text-[var(--color-accent)] mb-2">💡 关于公有领域</h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          这些书籍的版权保护期已过，属于公有领域（Public Domain），任何人都可以自由阅读、复制和分发。
          我们从 Project Gutenberg 等来源获取这些经典著作的电子版本，并提供在线阅读功能。
        </p>
      </div>
    </div>
  );
}
