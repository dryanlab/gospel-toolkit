'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { catechismQuestions, catechismWlcQuestions } from '@/lib/data';
import FavoriteButton from '@/components/FavoriteButton';
import { useReadStatus } from '@/hooks/useReadStatus';

const wscRanges = [
  { label: '全部', min: 0, max: Infinity },
  { label: '1-20', min: 1, max: 20 },
  { label: '21-40', min: 21, max: 40 },
  { label: '41-60', min: 41, max: 60 },
  { label: '61-80', min: 61, max: 80 },
  { label: '81-107', min: 81, max: 107 },
];

const wlcRanges = [
  { label: '全部', min: 0, max: Infinity },
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
    <Suspense fallback={<div className="max-w-5xl mx-auto px-4 py-6 text-center">加载中...</div>}>
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
      q.question_zh.toLowerCase().includes(s) ||
      q.question_en.toLowerCase().includes(s) ||
      q.answer_zh.toLowerCase().includes(s) ||
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
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <h1 className="font-serif-cn text-3xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">📖 要理问答</h1>
        <p className="text-[var(--color-text-secondary)]">Catechism</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2 max-w-lg mx-auto">
          你要尽心、尽性、尽意爱主你的神。— 马太福音 22:37
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-lg mx-auto italic">
          Love the Lord your God with all your heart and with all your soul and with all your mind. — Matthew 22:37
        </p>
      </div>
      <div className="flex items-center justify-between mb-1">
        <div></div>
        <Link
          href="/catechism/flashcards"
          className="px-4 py-2 rounded-xl bg-[var(--color-accent)] text-white text-sm font-medium hover:opacity-90 transition"
        >
          🃏 闪卡模式
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
          <span className="block font-bold">小要理问答</span>
          <span className="block text-xs opacity-80">Shorter · {catechismQuestions.length}题</span>
        </button>
        <button
          onClick={() => handleTabChange('wlc')}
          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            tab === 'wlc'
              ? 'bg-[var(--color-primary)] text-white shadow-sm'
              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
          }`}
        >
          <span className="block font-bold">大要理问答</span>
          <span className="block text-xs opacity-80">Larger · {catechismWlcQuestions.length}题</span>
        </button>
      </div>

      <p className="text-sm text-[var(--color-text-secondary)] mb-4">
        {tab === 'wsc' 
          ? 'Westminster Shorter Catechism — 基础信仰问答，适合初学者' 
          : 'Westminster Larger Catechism — 深入系统神学，适合进阶学习'}
      </p>

      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="搜索问答 / Search catechism..."
        className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] mb-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
      />

      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-[var(--color-text-secondary)]">找到 {filtered.length} 条结果</span>
        <button
          onClick={() => setShowUnreadOnly(!showUnreadOnly)}
          className={`text-xs px-3 py-1 rounded-full transition-colors ${
            showUnreadOnly
              ? 'bg-[var(--color-accent)] text-white'
              : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]'
          }`}
        >
          {showUnreadOnly ? '仅未读' : '显示全部'}
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

      {questions.length === 0 ? (
        <div className="text-center py-16">
          <span className="text-4xl mb-4 block">🚧</span>
          <h3 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-2">即将推出</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">大要理问答196题正在整理中，敬请期待！</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map(q => (
            <Link key={q.id} href={`/catechism/${q.id}`} className="block">
              <div className="rounded-xl border border-[var(--color-border)] p-4 hover:border-[var(--color-accent)] hover:shadow-md transition-all bg-[var(--color-bg)]">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded text-white ${
                        tab === 'wsc' ? 'bg-[var(--color-primary)]' : 'bg-purple-600'
                      }`}>Q{q.number}</span>
                      {isRead(q.id) && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 whitespace-nowrap">✓ 已读</span>
                      )}
                    </div>
                    <h3 className="font-serif-cn font-medium text-[var(--color-text)]">{q.question_zh}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] italic mt-0.5">{q.question_en}</p>
                  </div>
                  <FavoriteButton id={q.id} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      {questions.length > 0 && filtered.length === 0 && (
        <p className="text-center text-[var(--color-text-secondary)] py-10">没有找到相关问答</p>
      )}

      {/* Attribution */}
      <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
        <p className="text-xs text-[var(--color-text-secondary)] text-center leading-relaxed">
          中文译文参考{' '}
          <a 
            href="https://zh.ligonier.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline"
          >
            林格尼尔福音事工
          </a>
          {' '}及《历代教会信条精选》（改革宗出版社）
          <br />
          <span className="italic">
            Chinese translation referenced from{' '}
            <a 
              href="https://www.ligonier.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              Ligonier Ministries
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
