'use client';
import { use } from 'react';
import Link from 'next/link';
import { getCatechismById, allCatechismQuestions } from '@/lib/data';
import FavoriteButton from '@/components/FavoriteButton';
import { useMarkAsRead } from '@/hooks/useReadStatus';

export default function CatechismDetailClient({ paramsPromise }: { paramsPromise: Promise<{ id: string }> }) {
  const { id } = use(paramsPromise);
  const q = getCatechismById(id);
  useMarkAsRead(id);

  if (!q) return <div className="p-8 text-center">Question not found</div>;

  const isWlc = q.catechism === 'westminster_larger';
  const allQ = allCatechismQuestions.filter(x => x.catechism === q.catechism);
  const idx = allQ.findIndex(x => x.id === id);
  const prev = idx > 0 ? allQ[idx - 1] : null;
  const next = idx < allQ.length - 1 ? allQ[idx + 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="mb-6">
        <Link href={`/catechism${isWlc ? '?tab=wlc' : ''}`} className="text-sm text-[var(--color-accent)] hover:underline">
          ← Back to {isWlc ? 'Larger' : 'Shorter'} Catechism
        </Link>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <span className={`text-xs font-bold px-2 py-0.5 rounded text-white ${isWlc ? 'bg-purple-600' : 'bg-[var(--color-primary)]'}`}>
            Q{q.number}
          </span>
          <span className="text-xs ml-2 text-[var(--color-text-secondary)]">
            {isWlc ? 'Westminster Larger Catechism' : 'Westminster Shorter Catechism'}
          </span>
        </div>
        <FavoriteButton id={q.id} />
      </div>

      {/* Question */}
      <div className="mb-6">
        <h1 className="font-serif-cn text-2xl font-bold text-[var(--color-text)] mb-2">
          {q.question_en}
        </h1>
      </div>

      {/* Answer */}
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 mb-6">
        <h2 className="text-sm font-bold text-[var(--color-text-secondary)] mb-3">Answer</h2>
        <p className="text-[var(--color-text)] leading-relaxed">
          {q.answer_en}
        </p>
      </div>

      {/* Proof texts */}
      {q.proof_texts && q.proof_texts.length > 0 && (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 mb-6">
          <h2 className="text-sm font-bold text-[var(--color-text-secondary)] mb-3">📖 Scripture References</h2>
          <div className="flex flex-wrap gap-2">
            {q.proof_texts.map((ref: string, i: number) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                {ref}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Notes */}
      {q.notes_en && (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 mb-6">
          <h2 className="text-sm font-bold text-[var(--color-text-secondary)] mb-3">📝 Notes</h2>
          <p className="text-sm text-[var(--color-text)] leading-relaxed">{q.notes_en}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-6 border-t border-[var(--color-border)]">
        {prev ? (
          <Link href={`/catechism/${prev.id}`} className="text-sm text-[var(--color-accent)] hover:underline">
            ← Q{prev.number}
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/catechism/${next.id}`} className="text-sm text-[var(--color-accent)] hover:underline">
            Q{next.number} →
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
