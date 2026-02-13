import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';

export interface BibleBook {
  id: string;
  name_zh: string;
  name_en: string;
  author_zh: string;
  author_en: string;
  date: string;
  date_en: string;
  theme_zh: string;
  theme_en: string;
  summary_zh: string;
  summary_en: string;
  keyVerse_zh: string;
  keyVerse_en: string;
  keyRef: string;
}

interface BookListProps {
  icon: string;
  title_zh: string;
  title_en: string;
  desc_zh: string;
  desc_en: string;
  gradient: string;
  books: BibleBook[];
  backHref: string;
  backLabel: string;
}

export default function BookList({ icon, title_zh, title_en, desc_zh, desc_en, gradient, books, backHref, backLabel }: BookListProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-5xl mb-4 block">{icon}</span>
        <h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">
          {title_zh}
        </h1>
        <p className="text-base text-[var(--color-text-secondary)] mb-3 italic">{title_en}</p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed max-w-xl mx-auto mb-2">{desc_zh}</p>
        <p className="text-xs text-[var(--color-text-secondary)] max-w-xl mx-auto italic">{desc_en}</p>
      </div>

      {/* Books */}
      <div className="space-y-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden"
          >
            <div className={`bg-gradient-to-r ${gradient} px-6 py-3 text-white`}>
              <h2 className="font-serif-cn text-lg font-bold">{book.name_zh}</h2>
              <p className="text-white/80 text-sm italic">{book.name_en}</p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5 text-sm">
                <div>
                  <p className="text-[var(--color-text-secondary)] text-xs mb-1">作者 Author</p>
                  <p className="text-[var(--color-text)] font-medium">{book.author_zh}</p>
                  <p className="text-[var(--color-text-secondary)] text-xs italic">{book.author_en}</p>
                </div>
                <div>
                  <p className="text-[var(--color-text-secondary)] text-xs mb-1">写作时间 Date</p>
                  <p className="text-[var(--color-text)] font-medium">{book.date}</p>
                  <p className="text-[var(--color-text-secondary)] text-xs italic">{book.date_en}</p>
                </div>
                <div>
                  <p className="text-[var(--color-text-secondary)] text-xs mb-1">主题 Theme</p>
                  <p className="text-[var(--color-text)] font-medium">{book.theme_zh}</p>
                  <p className="text-[var(--color-text-secondary)] text-xs italic">{book.theme_en}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 mb-2">
                <p className="text-[var(--color-text)] leading-relaxed text-sm flex-1">{book.summary_zh}</p>
                <SpeakButton text={book.summary_zh} lang="zh" className="shrink-0 mt-0.5" />
              </div>
              <div className="flex items-start gap-2 mb-5">
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-xs italic flex-1">{book.summary_en}</p>
                <SpeakButton text={book.summary_en} lang="en" className="shrink-0 mt-0.5" />
              </div>

              <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-[var(--color-text-secondary)] font-medium">📖 核心经文 Key Verse</p>
                  <div className="flex gap-2">
                    <SpeakButton text={book.keyVerse_zh} lang="zh" />
                    <SpeakButton text={book.keyVerse_en} lang="en" />
                  </div>
                </div>
                <p className="text-[var(--color-text)] leading-relaxed text-sm mb-1">&ldquo;{book.keyVerse_zh}&rdquo;</p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-xs italic mb-2">&ldquo;{book.keyVerse_en}&rdquo;</p>
                <p className="text-xs text-[var(--color-accent)] font-medium">— {book.keyRef}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Back */}
      <div className="mt-10 text-center">
        <Link
          href={backHref}
          className="inline-block rounded-lg bg-[var(--color-accent)] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          ← {backLabel}
        </Link>
      </div>
    </div>
  );
}
