import Link from 'next/link';

export const metadata = {
  title: '新约导读 - 真理磐石',
  description: '新约圣经27卷书卷导读，了解每卷书的背景、主题和核心教导。',
};

const categories = [
  {
    href: '/new-testament/gospels',
    title_zh: '福音书与使徒行传',
    title_en: 'Gospels & Acts',
    icon: '✝️',
    count: 5,
    desc_zh: '四福音书见证基督的生平与救赎，使徒行传记载教会的诞生与扩展',
    desc_en: 'The four Gospels witness to Christ\'s life and redemption; Acts records the birth and expansion of the Church',
    gradient: 'from-amber-600 to-orange-800',
  },
  {
    href: '/new-testament/pauline',
    title_zh: '保罗书信',
    title_en: 'Pauline Epistles',
    icon: '✉️',
    count: 13,
    desc_zh: '使徒保罗写给各教会和同工的书信，系统阐述福音真理',
    desc_en: 'Paul\'s letters to churches and co-workers, systematically expounding the gospel',
    gradient: 'from-indigo-600 to-blue-800',
  },
  {
    href: '/new-testament/general',
    title_zh: '普通书信',
    title_en: 'General Epistles',
    icon: '📨',
    count: 8,
    desc_zh: '其他使徒写给众教会的书信，教导信仰与生活',
    desc_en: 'Letters from other apostles to the churches on faith and practice',
    gradient: 'from-purple-600 to-violet-800',
  },
  {
    href: '/new-testament/revelation',
    title_zh: '启示录',
    title_en: 'Revelation',
    icon: '🌅',
    count: 1,
    desc_zh: '基督的最终得胜与新天新地的异象',
    desc_en: 'The final victory of Christ and the vision of the new heaven and new earth',
    gradient: 'from-fuchsia-600 to-purple-800',
  },
];

export default function NewTestamentPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-5xl mb-4 block">✉️</span>
        <h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">
          新约导读
        </h1>
        <p className="text-base text-[var(--color-text-secondary)] mb-3 italic">
          Guide to the New Testament
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed max-w-xl mx-auto mb-2">
          新约圣经27卷书卷记载了耶稣基督的生平、教会的建立与使徒的教导，是神在基督里成就救赎的启示。
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] max-w-xl mx-auto italic">
          The 27 books of the New Testament record the life of Jesus Christ, the establishment of the Church, and the apostles&apos; teaching — God&apos;s revelation of redemption accomplished in Christ.
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {categories.map((cat) => (
          <Link key={cat.href} href={cat.href} className="group">
            <div className={`rounded-2xl bg-gradient-to-br ${cat.gradient} p-6 text-white shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 h-full`}>
              <span className="text-3xl mb-3 block">{cat.icon}</span>
              <h2 className="font-serif-cn text-xl font-bold">{cat.title_zh}</h2>
              <p className="text-white/70 text-sm">{cat.title_en}</p>
              <p className="text-white/60 text-xs mt-1">{cat.count} 卷 · {cat.count} {cat.count === 1 ? 'Book' : 'Books'}</p>
              <p className="text-white/80 text-sm mt-3 leading-relaxed">{cat.desc_zh}</p>
              <p className="text-white/60 text-xs mt-1 italic leading-relaxed">{cat.desc_en}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center">
        <p className="text-sm text-[var(--color-text-secondary)] mb-4">
          探索旧约39卷书卷的导读
        </p>
        <Link
          href="/old-testament"
          className="inline-block rounded-lg bg-[var(--color-accent)] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          📜 旧约导读 Old Testament Guide →
        </Link>
      </div>
    </div>
  );
}
