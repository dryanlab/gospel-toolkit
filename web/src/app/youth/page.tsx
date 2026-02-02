'use client';
import Link from 'next/link';
import { youthSectionLabels, youthItems } from '@/lib/data';
import type { YouthSection } from '@/lib/types';

const sections: YouthSection[] = [
  'faith-basics', 'bible-guide', 'campus', 'growth', 
  'faith-science', 'devotion', 'discipleship', 'heroes'
];

const sectionGradients: Record<string, string> = {
  'faith-basics': 'from-blue-500 to-indigo-600',
  'bible-guide': 'from-emerald-500 to-cyan-600', 
  'campus': 'from-green-500 to-teal-600',
  'growth': 'from-orange-500 to-red-600',
  'faith-science': 'from-violet-500 to-purple-600',
  'devotion': 'from-rose-500 to-pink-600',
  'discipleship': 'from-amber-500 to-yellow-600',
  'heroes': 'from-indigo-500 to-blue-600',
};

function getSectionCount(section: YouthSection): number {
  return youthItems.filter(item => item.section === section).length;
}

function getPlannedCount(section: YouthSection): number {
  const planned = {
    'faith-basics': 13,
    'bible-guide': 18,
    'campus': 15,
    'growth': 15,
    'faith-science': 12,
    'devotion': 12,
    'discipleship': 15,
    'heroes': 18,
  };
  return planned[section] || 0;
}

export default function YouthPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <h1 className="font-serif-cn text-3xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">
          🌱 青少年专区
        </h1>
        <p className="text-[var(--color-text-secondary)]">Youth Ministry</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2 max-w-lg mx-auto">
          不可叫人小看你年轻，总要在言语、行为、爱心、信心、清洁上，都作信徒的榜样。— 提摩太前书 4:12
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-lg mx-auto italic">
          Don&apos;t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity. — 1 Timothy 4:12
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sections.map(section => {
          const info = youthSectionLabels[section];
          const currentCount = getSectionCount(section);
          const plannedCount = getPlannedCount(section);
          
          return (
            <Link key={section} href={`/youth/section/${section}`} className="block group">
              <div className={`rounded-2xl bg-gradient-to-br ${sectionGradients[section]} p-6 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{info.icon}</div>
                  <div className="text-xs bg-white/25 px-2 py-1 rounded-full">
                    {currentCount}
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
      
      <div className="mt-8 p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
        <h3 className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-3">
          🎯 扩充计划
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          我们正在将青少年专区从4个分类20篇内容扩充为8个专门分区，总计120-160篇精心编写的内容。
          每个分区都针对青少年的实际需要，用生动有趣的语言传达改革宗神学真理。
          所有内容都是中英双语，并包含圣经经文、讨论问题和实用标签。
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] mt-2">
          目标完成时间：2024年2月 | 语言风格：适合13-18岁青少年 | 神学立场：改革宗/归正
        </p>
      </div>
    </div>
  );
}
