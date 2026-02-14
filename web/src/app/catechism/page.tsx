'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { catechismQuestions, catechismWlcQuestions } from '@/lib/data';
import FavoriteButton from '@/components/FavoriteButton';
import { useReadStatus } from '@/hooks/useReadStatus';

const wscRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: '1-20', min: 1, max: 20 },
  { label: '21-40', min: 21, max: 40 },
  { label: '41-60', min: 41, max: 60 },
  { label: '61-80', min: 61, max: 80 },
  { label: '81-107', min: 81, max: 107 },
];

const wlcRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: '1-30', min: 1, max: 30 },
  { label: '31-60', min: 31, max: 60 },
  { label: '61-90', min: 61, max: 90 },
  { label: '91-120', min: 91, max: 120 },
  { label: '121-150', min: 121, max: 150 },
  { label: '151-196', min: 151, max: 196 },
];

type CatechismTab = 'wsc' | 'wlc';

export default function CatechismPageWrapper() {
  return (
    <Suspense fallback={<div className="max-w-5xl mx-auto px-4 py-6 text-center">Loading...</div>}>
      <CatechismPage />
    </Suspense>
  );
}

function CatechismPage() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<CatechismTab>('wsc');
  
  useEffect(() => {
    const t = searchParams.get('tab');
    if (t === 'wlc') setTab('wlc');
  }, [searchParams]);
  const [search, setSearch] = useState('');
  const [range, setRange] = useState(0);
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);
  const { isRead } = useReadStatus();

  const questions = tab === 'wsc' ? catechismQuestions : catechismWlcQuestions;
  const ranges = tab === 'wsc' ? wscRanges : wlcRanges;

  const filtered = questions.filter(q => {
    const r = ranges[range];
    const matchRange = q.number >= r.min && q.number <= r.max;
    const s = search.toLowerCase();
    const matchSearch = !search ||
      q.question_en.toLowerCase().includes(s) ||
      q.answer_en.toLowerCase().includes(s) ||
      String(q.number).includes(s);
    const matchRead = !showUnreadOnly || !isRead(q.id);
    return matchRange && matchSearch && matchRead;
  });

  const handleTabChange = (newTab: CatechismTab) => {
    setTab(newTab);
    setRange(0);
    setSearch('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 overflow-x-hidden">
      <div className="text-center mb-6">
        <h1 className="font-serif-cn text-2xl sm:text-3xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2 break-words">📖 Westminster Catechism</h1>
        <p className="text-[var(--color-text-secondary)]">韦敏斯德要理问答</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2 max-w-sm mx-auto italic break-words">
          Love the Lord your God with all your heart and with all your soul and with all your mind. — Matthew 22:37
        </p>
      </div>

      {/* Chinese version notice */}
      <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4 mb-6 break-words">
        <p className="text-sm text-amber-800 dark:text-amber-200">
          📋 中文版（林格尼尔福音事工授权译本）正在申请版权授权中，目前仅提供英文版本。感谢您的耐心等待！
        </p>
        <p className="text-xs text-amber-600 dark:text-amber-400 mt-1 italic">
          The Chinese translation (licensed from Ligonier Ministries) is pending copyright authorization. Currently only the English version is available.
        </p>
      </div>

      <div className="flex items-center justify-between mb-1">
        <div></div>
        <Link
          href="/catechism/flashcards"
          className="px-4 py-2 rounded-xl bg-[var(--color-accent)] text-white text-sm font-medium hover:opacity-90 transition"
        >
          🃏 Flashcards
        </Link>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-1 p-1 rounded-xl bg-[var(--color-bg-secondary)] mb-4">
        <button
          onClick={() => handleTabChange('wsc')}
          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            tab === 'wsc'
              ? 'bg-[var(--color-primary)] text-white shadow-sm'
              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
          }`}
        >
          <span className="block font-bold text-xs sm:text-sm">Shorter Catechism</span>
          <span className="block text-xs opacity-80">{catechismQuestions.length} Qs</span>
        </button>
        <button
          onClick={() => handleTabChange('wlc')}
          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            tab === 'wlc'
              ? 'bg-[var(--color-primary)] text-white shadow-sm'
              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
          }`}
        >
          <span className="block font-bold text-xs sm:text-sm">Larger Catechism</span>
          <span className="block text-xs opacity-80">{catechismWlcQuestions.length} Qs</span>
        </button>
      </div>

      <p className="text-sm text-[var(--color-text-secondary)] mb-4">
        {tab === 'wsc' 
          ? 'Westminster Shorter Catechism — Foundational Q&A for beginners' 
          : 'Westminster Larger Catechism — In-depth systematic theology for advanced study'}
      </p>

      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search catechism..."
        className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] mb-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
      />

      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-[var(--color-text-secondary)]">{filtered.length} results</span>
        <button
          onClick={() => setShowUnreadOnly(!showUnreadOnly)}
          className={`text-xs px-3 py-1 rounded-full transition-colors ${
            showUnreadOnly
              ? 'bg-[var(--color-accent)] text-white'
              : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]'
          }`}
        >
          {showUnreadOnly ? 'Unread only' : 'Show all'}
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
        {ranges.map((r, i) => (
          <button
            key={r.label}
            onClick={() => setRange(i)}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap font-medium transition-colors ${
              range === i
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map(q => (
          <Link key={q.id} href={`/catechism/${q.id}`} className="block group">
            <div className="rounded-xl border border-[var(--color-border)] p-4 bg-[var(--color-bg)] hover:border-[var(--color-accent)]/40 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded text-white ${
                      tab === 'wsc' ? 'bg-[var(--color-primary)]' : 'bg-purple-600'
                    }`}>Q{q.number}</span>
                    {isRead(q.id) && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 whitespace-nowrap">✓ Read</span>
                    )}
                  </div>
                  <h3 className="font-medium text-[var(--color-text)] break-words">{q.question_en}</h3>
                </div>
                <FavoriteButton id={q.id} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[var(--color-text-secondary)] py-10">No matching questions found</p>
      )}

      {/* Attribution */}
      <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
        <p className="text-xs text-[var(--color-text-secondary)] text-center leading-relaxed">
          English text from{' '}
          <a 
            href="https://www.opc.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline"
          >
            The Orthodox Presbyterian Church (OPC)
          </a>
        </p>
      </div>
    </div>
  );
}
