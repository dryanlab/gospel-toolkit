'use client';
import Link from 'next/link';
import { apologeticsSectionLabels, apologeticsSections, apologeticsTopics, getApologeticsSectionCount } from '@/lib/data';

const sectionGradients: Record<string, string> = {
  'foundations': 'from-indigo-600 to-blue-700',
  'scripture': 'from-amber-600 to-yellow-700',
  'gospel-evidence': 'from-red-600 to-rose-700',
  'presuppositional': 'from-purple-600 to-violet-700',
  'objections': 'from-teal-600 to-cyan-700',
  'faith-culture': 'from-green-600 to-emerald-700',
  'comparative': 'from-orange-600 to-red-700',
  'discernment': 'from-pink-600 to-fuchsia-700',
};

export default function ApologeticsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <h1 className="font-serif-cn text-3xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">
          🛡️ 护教学
        </h1>
        <p className="text-[var(--color-text-secondary)]">Apologetics</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2 max-w-lg mx-auto">
          只要心里尊主基督为圣。有人问你们心中盼望的缘由，就要常作准备，以温柔、敬畏的心回答各人。— 彼得前书 3:15
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-lg mx-auto italic">
          But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect. — 1 Peter 3:15
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {apologeticsSections.map(section => {
          const info = apologeticsSectionLabels[section];
          const count = getApologeticsSectionCount(section);

          return (
            <Link key={section} href={`/apologetics/section/${section}`} className="block group">
              <div className={`rounded-2xl bg-gradient-to-br ${sectionGradients[section]} p-6 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{info.icon}</div>
                  <div className="text-xs bg-white/25 px-2 py-1 rounded-full">
                    {count}
                  </div>
                </div>

                <h3 className="font-serif-cn font-bold text-xl mb-2">{info.zh}</h3>
                <p className="text-white/80 text-sm italic mb-3">{info.en}</p>
                <p className="text-white/90 text-sm leading-relaxed mb-4">{info.description_zh}</p>

                <div className="flex items-center justify-between pt-2 border-t border-white/20">
                  <span className="text-xs text-white/70">点击进入</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <span className="text-sm">→</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
