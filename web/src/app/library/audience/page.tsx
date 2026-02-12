import { books } from '@/lib/data';
import Link from 'next/link';

const audienceGroups = [
  {
    key: 'seeker',
    title: '慕道友',
    subtitle: 'Seekers',
    icon: '🔍',
    desc: '对信仰有兴趣、正在探索的朋友',
    desc_en: 'For those exploring the Christian faith',
    gradient: 'from-blue-600 to-indigo-700',
    match: ['慕道友', '怀疑者', '知识分子', '思考者', '大学生', '都市白领', '渴慕认识上帝的人', '灵性追求者'],
  },
  {
    key: 'new-believer',
    title: '初信者',
    subtitle: 'New Believers',
    icon: '🌱',
    desc: '刚信主或信主不久的弟兄姐妹',
    desc_en: 'For those who recently came to faith',
    gradient: 'from-emerald-600 to-teal-700',
    match: ['初信者', '新信徒', '基督徒生活'],
  },
  {
    key: 'growing',
    title: '成长中的基督徒',
    subtitle: 'Growing Christians',
    icon: '🌿',
    desc: '渴望灵命成长、扎根信仰的信徒',
    desc_en: 'For believers seeking spiritual growth',
    gradient: 'from-amber-600 to-orange-700',
    match: ['基督徒', '成熟基督徒', '所有基督徒', '追求灵命成长者', '属灵成长', '青年基督徒'],
  },
  {
    key: 'leader',
    title: '教会领袖与牧者',
    subtitle: 'Church Leaders & Pastors',
    icon: '🐑',
    desc: '牧师、传道人、小组长和教会同工',
    desc_en: 'For pastors, ministers, and church leaders',
    gradient: 'from-purple-600 to-violet-700',
    match: ['牧师', '传道人', '教会领袖', '牧者', '教会牧者', '小组长', '门徒训练者', '属灵导师', '事工人员', '事奉者'],
  },
  {
    key: 'scholar',
    title: '神学研究者',
    subtitle: 'Theology Students',
    icon: '📚',
    desc: '神学生及深入研究信仰的学习者',
    desc_en: 'For seminary students and serious learners',
    gradient: 'from-rose-600 to-red-700',
    match: ['神学生', '神学学习者', '神学院学生', '深度学习者', '圣经研究者', '圣经学者', '护教学者', '护教学习者', '哲学学者'],
  },
  {
    key: 'suffering',
    title: '在试炼中的信徒',
    subtitle: 'Those in Trials',
    icon: '🕊️',
    desc: '正在经历苦难、困惑或挣扎的弟兄姐妹',
    desc_en: 'For those going through suffering or doubt',
    gradient: 'from-sky-600 to-cyan-700',
    match: ['受苦中的信徒', '受苦中的人', '经历苦难试炼者', '苦难中的信徒', '困惑中的信徒', '丧亲的信徒'],
  },
];

export const metadata = {
  title: '按适合人群浏览 - 书库 - 真理磐石',
};

export default function AudiencePage() {
  // Pre-compute counts
  const groupedBooks = audienceGroups.map(group => {
    const matchSet = new Set(group.match);
    const matched = books.filter(b =>
      (b.recommend_for || []).some((r: string) => matchSet.has(r))
    );
    return { ...group, count: matched.length };
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <h1 className="font-serif-cn text-3xl font-bold text-[var(--color-text)] mb-1">
          👥 按适合人群浏览
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] italic mb-2">Browse by Audience</p>
        <p className="text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto">
          不同阶段的读者，我们为你推荐不同的书籍
        </p>
      </div>

      <div className="mb-6">
        <Link href="/library" className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:underline">
          ← 返回书库 Back to Library
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groupedBooks.map(group => (
          <Link key={group.key} href={`/library/audience/${group.key}`} className="block group">
            <div className={`rounded-2xl bg-gradient-to-br ${group.gradient} p-6 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full`}>
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{group.icon}</div>
                <div className="text-xs bg-white/25 px-2 py-1 rounded-full">
                  {group.count} 本
                </div>
              </div>
              <h3 className="font-serif-cn font-bold text-xl mb-1">{group.title}</h3>
              <p className="text-white/80 text-sm italic mb-3">{group.subtitle}</p>
              <p className="text-white/90 text-sm leading-relaxed mb-1">{group.desc}</p>
              <p className="text-white/70 text-xs italic">{group.desc_en}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
