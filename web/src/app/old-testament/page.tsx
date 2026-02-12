import Link from 'next/link';

export const metadata = {
  title: '旧约导读 - 真理磐石',
  description: '旧约圣经39卷书卷导读，了解每卷书的背景、主题和核心教导。',
};

const categories = [
  {
    href: '/old-testament/pentateuch',
    title_zh: '摩西五经',
    title_en: 'Pentateuch',
    icon: '📜',
    count: 5,
    desc_zh: '从创世到以色列人进入应许之地前，神的创造、拣选与立约',
    desc_en: 'From creation to the edge of the Promised Land — God\'s creation, election, and covenant',
    gradient: 'from-amber-600 to-yellow-800',
  },
  {
    href: '/old-testament/historical',
    title_zh: '历史书',
    title_en: 'Historical Books',
    icon: '⚔️',
    count: 12,
    desc_zh: '从征服迦南到被掳归回，以色列的兴衰与神信实的带领',
    desc_en: 'From the conquest of Canaan to the return from exile — Israel\'s rise and fall under God\'s faithful guidance',
    gradient: 'from-emerald-600 to-teal-800',
  },
  {
    href: '/old-testament/poetry',
    title_zh: '诗歌智慧书',
    title_en: 'Poetry & Wisdom',
    icon: '🎵',
    count: 5,
    desc_zh: '敬拜的诗歌、生活的智慧、苦难中的信心与爱情的颂歌',
    desc_en: 'Songs of worship, wisdom for living, faith in suffering, and a song of love',
    gradient: 'from-purple-600 to-violet-800',
  },
  {
    href: '/old-testament/major-prophets',
    title_zh: '大先知书',
    title_en: 'Major Prophets',
    icon: '🔥',
    count: 5,
    desc_zh: '神藉先知宣告审判与救恩，预言弥赛亚的来临',
    desc_en: 'God declares judgment and salvation through the prophets, foretelling the Messiah\'s coming',
    gradient: 'from-red-600 to-rose-800',
  },
  {
    href: '/old-testament/minor-prophets',
    title_zh: '小先知书',
    title_en: 'Minor Prophets',
    icon: '📣',
    count: 12,
    desc_zh: '十二位先知的信息：悔改、公义、怜悯与盼望',
    desc_en: 'Messages from twelve prophets: repentance, justice, mercy, and hope',
    gradient: 'from-sky-600 to-blue-800',
  },
];

export default function OldTestamentPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-5xl mb-4 block">📜</span>
        <h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">
          旧约导读
        </h1>
        <p className="text-base text-[var(--color-text-secondary)] mb-3 italic">
          Guide to the Old Testament
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed max-w-xl mx-auto mb-2">
          旧约圣经39卷书卷记载了神创造天地、拣选以色列、颁布律法、差遣先知的历史，一步步指向那将要来的弥赛亚——耶稣基督。
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] max-w-xl mx-auto italic">
          The 39 books of the Old Testament record God&apos;s creation, His election of Israel, the giving of the Law, and the sending of prophets — all pointing step by step to the coming Messiah, Jesus Christ.
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
              <p className="text-white/60 text-xs mt-1">{cat.count} 卷 · {cat.count} Books</p>
              <p className="text-white/80 text-sm mt-3 leading-relaxed">{cat.desc_zh}</p>
              <p className="text-white/60 text-xs mt-1 italic leading-relaxed">{cat.desc_en}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center">
        <p className="text-sm text-[var(--color-text-secondary)] mb-4">
          继续探索新约27卷书卷的导读
        </p>
        <Link
          href="/new-testament"
          className="inline-block rounded-lg bg-[var(--color-accent)] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          ✉️ 新约导读 New Testament Guide →
        </Link>
      </div>
    </div>
  );
}
