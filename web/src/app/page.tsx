import Link from 'next/link';
import { catechismQuestions } from '@/lib/data';

const modules = [
  {
    href: '/qa',
    title: '福音问答',
    subtitle: 'Gospel Q&A',
    desc: '20个关键问题，中英双语解答',
    color: 'from-blue-600 to-indigo-700',
    icon: '💬',
  },
  {
    href: '/catechism',
    title: '要理问答',
    subtitle: 'Catechism',
    desc: '威斯敏斯特小要理问答107题',
    color: 'from-emerald-600 to-teal-700',
    icon: '📖',
  },
  {
    href: '/apologetics',
    title: '护教学',
    subtitle: 'Apologetics',
    desc: '回应各类世界观的挑战',
    color: 'from-amber-600 to-orange-700',
    icon: '🛡️',
  },
  {
    href: '/library',
    title: '书库',
    subtitle: 'Library',
    desc: '精选经典护教与灵修书籍',
    color: 'from-purple-600 to-violet-700',
    icon: '📚',
  },
];

function DailyCatechism() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const q = catechismQuestions[dayOfYear % catechismQuestions.length];

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-medium text-[var(--color-accent)]">📅 今日要理问答</span>
        <span className="text-xs text-[var(--color-text-secondary)]">Daily Catechism · Q{q.number}</span>
      </div>
      <h3 className="font-serif-cn font-semibold text-lg mb-2 text-[var(--color-text)]">{q.question_zh}</h3>
      <p className="text-sm text-[var(--color-text-secondary)] italic mb-3">{q.question_en}</p>
      <p className="text-sm text-[var(--color-text)] leading-relaxed">{q.answer_zh}</p>
      <Link href={`/catechism/${q.id}`} className="inline-block mt-3 text-sm text-[var(--color-accent)] hover:underline font-medium">
        查看详情 →
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2a4f7f] mb-4 shadow-lg">
          <span className="text-4xl">✝</span>
        </div>
        <h1 className="font-serif-cn text-4xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">
          福音工具箱
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">Gospel Toolkit</p>
        <p className="mt-3 text-sm text-[var(--color-text-secondary)] max-w-md mx-auto">
          装备自己，传扬福音。涵盖福音问答、要理问答、护教学与精选书库。
        </p>
      </div>

      {/* Module Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {modules.map(mod => (
          <Link key={mod.href} href={mod.href} className="group">
            <div className={`rounded-2xl bg-gradient-to-br ${mod.color} p-6 text-white shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5`}>
              <span className="text-3xl mb-3 block">{mod.icon}</span>
              <h2 className="font-serif-cn text-xl font-bold">{mod.title}</h2>
              <p className="text-white/70 text-sm">{mod.subtitle}</p>
              <p className="text-white/80 text-sm mt-2">{mod.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Daily Catechism */}
      <DailyCatechism />
    </div>
  );
}
