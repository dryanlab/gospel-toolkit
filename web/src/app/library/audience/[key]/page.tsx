import { books } from '@/lib/data';
import AudienceDetailClient from './client';

const audienceGroups: Record<string, { title: string; subtitle: string; match: string[] }> = {
  seeker: { title: '慕道友', subtitle: 'Seekers', match: ['慕道友', '怀疑者', '知识分子', '思考者', '大学生', '都市白领', '渴慕认识上帝的人', '灵性追求者'] },
  'new-believer': { title: '初信者', subtitle: 'New Believers', match: ['初信者', '新信徒', '基督徒生活'] },
  growing: { title: '成长中的基督徒', subtitle: 'Growing Christians', match: ['基督徒', '成熟基督徒', '所有基督徒', '追求灵命成长者', '属灵成长', '青年基督徒'] },
  leader: { title: '教会领袖与牧者', subtitle: 'Church Leaders & Pastors', match: ['牧师', '传道人', '教会领袖', '牧者', '教会牧者', '小组长', '门徒训练者', '属灵导师', '事工人员', '事奉者'] },
  scholar: { title: '神学研究者', subtitle: 'Theology Students', match: ['神学生', '神学学习者', '神学院学生', '深度学习者', '圣经研究者', '圣经学者', '护教学者', '护教学习者', '哲学学者'] },
  suffering: { title: '在试炼中的信徒', subtitle: 'Those in Trials', match: ['受苦中的信徒', '受苦中的人', '经历苦难试炼者', '苦难中的信徒', '困惑中的信徒', '丧亲的信徒'] },
};

export function generateStaticParams() {
  return Object.keys(audienceGroups).map(key => ({ key }));
}

export default async function AudienceDetailPage({ params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  const group = audienceGroups[key];
  if (!group) {
    return <div className="max-w-3xl mx-auto px-4 py-8 text-center text-[var(--color-text-secondary)]">未找到该分类</div>;
  }
  const matchSet = new Set(group.match);
  const matchedBooks = books.filter(b =>
    (b.recommend_for || []).some((r: string) => matchSet.has(r))
  );
  return <AudienceDetailClient books={matchedBooks} title={group.title} subtitle={group.subtitle} />;
}
