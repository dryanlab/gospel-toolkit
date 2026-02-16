import Link from 'next/link';
import DailyCatechism from '@/components/DailyCatechism';

const modules = [
  {
    href: '/qa',
    title: '福音问答',
    subtitle: 'Gospel Q&A',
    desc: '142个关键问题，中英双语解答',
    color: 'from-blue-600 to-indigo-700',
    icon: '💬',
  },
  {
    href: '/catechism',
    title: '要理问答',
    subtitle: 'Catechism',
    desc: '韦敏斯德小要理107题 + 大要理196题',
    color: 'from-emerald-600 to-teal-700',
    icon: '📖',
  },
  {
    href: '/old-testament',
    title: '旧约导读',
    subtitle: 'Old Testament Guide',
    desc: '39卷旧约书卷的背景、主题与核心教导',
    color: 'from-amber-600 to-yellow-700',
    icon: '📜',
  },
  {
    href: '/new-testament',
    title: '新约导读',
    subtitle: 'New Testament Guide',
    desc: '27卷新约书卷的背景、主题与核心教导',
    color: 'from-orange-600 to-red-700',
    icon: '✉️',
  },
  {
    href: '/apologetics',
    title: '护教学',
    subtitle: 'Apologetics',
    desc: '75篇护教文章，回应各类世界观的挑战',
    color: 'from-amber-600 to-orange-700',
    icon: '🛡️',
  },
  {
    href: '/youth',
    title: '青少年',
    subtitle: 'Youth',
    desc: '108篇文章，8大分区，专为青少年打造',
    color: 'from-cyan-600 to-teal-700',
    icon: '🌱',
  },
  {
    href: '/worship',
    title: '敬拜诗歌',
    subtitle: 'Worship',
    desc: '416首中英文敬拜诗歌，在歌声中亲近神',
    color: 'from-rose-600 to-pink-700',
    icon: '🎵',
  },
  {
    href: '/library',
    title: '书库',
    subtitle: 'Library',
    desc: '326本精选经典，21本可阅读全文',
    color: 'from-purple-600 to-violet-700',
    icon: '📚',
  },
];

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 shadow-lg overflow-hidden">
          <img src="/logo.png" alt="真理磐石" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-serif-cn text-4xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">
          真理磐石
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">Rock of Truth</p>
        <p className="mt-3 text-sm text-[var(--color-text-secondary)] max-w-md mx-auto">
          你们必晓得真理，真理必叫你们得以自由。— 约翰福音 8:32
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] max-w-md mx-auto italic">
          You will know the truth, and the truth will set you free. — John 8:32
        </p>
      </div>

      {/* Featured CTAs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <Link href="/gospel" className="block group">
          <div className="relative rounded-2xl border-2 border-[var(--color-accent)] bg-gradient-to-r from-[var(--color-accent)]/10 to-transparent p-6 md:p-8 text-center hover:shadow-lg transition-all h-full flex flex-col justify-center">
            <div className="text-4xl mb-3">✝️</div>
            <h2 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">
              认识福音
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm mx-auto mb-3">
              我从哪里来？活着有什么意义？死后会去哪里？
            </p>
            <p className="text-[var(--color-text-secondary)] text-xs italic mx-auto mb-4">
              Where do I come from? What is the meaning of life? Where do I go after death?
            </p>
            <span className="inline-flex items-center gap-1 text-[var(--color-accent)] font-medium text-sm group-hover:underline">
              探索答案 Explore Answers →
            </span>
          </div>
        </Link>
        <Link href="/family-altar" className="block group">
          <div className="relative rounded-2xl border-2 border-[var(--color-accent)] bg-gradient-to-r from-rose-500/10 to-amber-500/10 p-6 md:p-8 text-center hover:shadow-lg transition-all h-full flex flex-col justify-center">
            <div className="text-4xl mb-3">🏠</div>
            <h2 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">
              家庭祭坛
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm mx-auto mb-3">
              每日家庭敬拜指引，全家一起亲近神
            </p>
            <p className="text-[var(--color-text-secondary)] text-xs italic mx-auto mb-4">
              Daily family worship guide — draw near to God together
            </p>
            <span className="inline-flex items-center gap-1 text-[var(--color-accent)] font-medium text-sm group-hover:underline">
              今日内容 Today&apos;s Content →
            </span>
          </div>
        </Link>
        <Link href="/readings" className="block group">
          <div className="relative rounded-2xl border-2 border-[var(--color-accent)] bg-gradient-to-r from-emerald-600/10 to-teal-500/10 p-6 md:p-8 text-center hover:shadow-lg transition-all h-full flex flex-col justify-center">
            <div className="text-4xl mb-3">📖</div>
            <h2 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">
              圣徒伴读
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm mx-auto mb-3">
              圣经作者亲自带你逐章读经
            </p>
            <p className="text-[var(--color-text-secondary)] text-xs italic mx-auto mb-4">
              Read with the Saints — chapter by chapter
            </p>
            <span className="inline-flex items-center gap-1 text-[var(--color-accent)] font-medium text-sm group-hover:underline">
              开始阅读 Start Reading →
            </span>
          </div>
        </Link>
        <Link href="/letters" className="block group">
          <div className="relative rounded-2xl border-2 border-[var(--color-accent)] bg-gradient-to-r from-amber-600/10 to-yellow-500/10 p-6 md:p-8 text-center hover:shadow-lg transition-all h-full flex flex-col justify-center">
            <div className="text-4xl mb-3">📜</div>
            <h2 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">
              圣徒来信
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm mx-auto mb-3">
              圣经人物的亲笔信——最真实的挣扎与得胜
            </p>
            <p className="text-[var(--color-text-secondary)] text-xs italic mx-auto mb-4">
              Letters from biblical figures — their struggles and victories
            </p>
            <span className="inline-flex items-center gap-1 text-[var(--color-accent)] font-medium text-sm group-hover:underline">
              阅读来信 Read Letters →
            </span>
          </div>
        </Link>
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

      {/* About */}
      <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 text-center">
        <h3 className="font-serif-cn text-lg font-semibold text-[var(--color-text)] mb-2">关于真理磐石</h3>
        <p className="text-xs text-[var(--color-text-secondary)] mb-3">About Rock of Truth</p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed max-w-2xl mx-auto">
          <strong>真理磐石致力于传扬福音与建造门徒。</strong>我们持守纯正的改革宗信仰——<strong>唯独圣经</strong>、<strong>唯独恩典</strong>、<strong>唯独信心</strong>、<strong>唯独基督</strong>、<strong>唯独神的荣耀</strong>。盼望借着这个平台，帮助更多人认识真理，扎根信仰，在恩典中成长。
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] mt-3 italic max-w-2xl mx-auto">
          Rock of Truth is dedicated to proclaiming the Gospel and building disciples. We hold to the historic Reformed faith — Sola Scriptura, Sola Gratia, Sola Fide, Solus Christus, Soli Deo Gloria. We hope that through this platform, more people will come to know the truth, be rooted in the faith, and grow in grace.
        </p>
        <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex items-center justify-center gap-4">
          <a href="/about" className="text-sm text-[var(--color-accent)] hover:underline">
            📖 使用指南 / Guide
          </a>
          <span className="text-[var(--color-text-secondary)]">·</span>
          <a href="mailto:rockoftruth@sudoem.org" className="text-sm text-[var(--color-accent)] hover:underline">
            ✉️ rockoftruth@sudoem.org
          </a>
        </div>
      </div>
    </div>
  );
}
