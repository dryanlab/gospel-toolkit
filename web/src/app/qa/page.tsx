'use client';
import Link from 'next/link';
import { qaQuestions, categoryLabels } from '@/lib/data';

const categoryGradients: Record<string, string> = {
  sin_and_salvation: 'from-red-600 to-rose-700',
  existence_of_god: 'from-indigo-600 to-blue-700',
  holy_spirit: 'from-cyan-600 to-teal-700',
  uniqueness_of_jesus: 'from-amber-600 to-yellow-700',
  eschatology: 'from-purple-600 to-violet-700',
  predestination: 'from-slate-600 to-gray-700',
  two_natures_of_christ: 'from-orange-600 to-red-700',
  problem_of_evil: 'from-teal-600 to-cyan-700',
  trinity: 'from-blue-600 to-indigo-700',
  authority_of_scripture: 'from-emerald-600 to-green-700',
  original_sin: 'from-rose-600 to-pink-700',
  sacraments: 'from-violet-600 to-purple-700',
  bible_reliability: 'from-yellow-600 to-amber-700',
  life_after_death: 'from-sky-600 to-blue-700',
  faith_and_works: 'from-lime-600 to-green-700',
  heaven_and_hell: 'from-fuchsia-600 to-pink-700',
  science_and_faith: 'from-teal-600 to-emerald-700',
  moral_foundation: 'from-orange-600 to-amber-700',
  prayer: 'from-pink-600 to-rose-700',
  common_objections: 'from-amber-600 to-orange-700',
  christian_life: 'from-emerald-600 to-teal-700',
};

const categoryIcons: Record<string, string> = {
  sin_and_salvation: '✝️',
  existence_of_god: '🌌',
  holy_spirit: '🕊️',
  uniqueness_of_jesus: '👑',
  eschatology: '⏳',
  predestination: '📜',
  two_natures_of_christ: '🔄',
  problem_of_evil: '💔',
  trinity: '🔺',
  authority_of_scripture: '📖',
  original_sin: '🍎',
  sacraments: '🍷',
  bible_reliability: '🔍',
  life_after_death: '🌅',
  faith_and_works: '🤝',
  heaven_and_hell: '⚖️',
  science_and_faith: '🔬',
  moral_foundation: '🧭',
  prayer: '🙏',
  common_objections: '🤔',
  christian_life: '🌿',
};

export default function QAPage() {
  // Build categories with counts
  // Logical order: from foundational to applied
  const categoryOrder = [
    'existence_of_god',        // 上帝存在, 最根本的问题
    'trinity',                 // 三位一体
    'authority_of_scripture',  // 圣经权威
    'bible_reliability',       // 圣经可靠
    'uniqueness_of_jesus',     // 耶稣独特性
    'two_natures_of_christ',   // 基督二性
    'original_sin',            // 原罪
    'sin_and_salvation',       // 罪与救恩
    'predestination',          // 预定论
    'faith_and_works',         // 信心与行为
    'holy_spirit',             // 圣灵
    'sacraments',              // 圣礼
    'prayer',                  // 祷告
    'christian_life',          // 基督徒生活与教会
    'problem_of_evil',         // 苦难问题
    'moral_foundation',        // 道德基础
    'science_and_faith',       // 科学与信仰
    'heaven_and_hell',         // 天堂与地狱
    'life_after_death',        // 死后生命
    'eschatology',             // 末世与永恒
    'common_objections',       // 常见疑虑
  ];
  const catCounts: Record<string, number> = {};
  qaQuestions.forEach(q => {
    catCounts[q.category] = (catCounts[q.category] || 0) + 1;
  });
  const categories = categoryOrder
    .filter(c => catCounts[c])
    .map(c => [c, catCounts[c]] as [string, number]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <h1 className="font-serif-cn text-3xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">💬 福音问答</h1>
        <p className="text-[var(--color-text-secondary)]">Gospel Q&A</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2 max-w-lg mx-auto">你们祈求，就给你们；寻找，就寻见；叩门，就给你们开门。, 马太福音 7:7</p>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-lg mx-auto italic">Ask and it will be given to you; seek and you will find; knock and the door will be opened to you., Matthew 7:7</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map(([cat, count], i) => {
          const label = categoryLabels[cat] || { zh: cat, en: cat };
          const icon = categoryIcons[cat] || '❓';
          const gradient = categoryGradients[cat] || 'from-gray-600 to-slate-700';

          return (
            <Link key={cat} href={`/qa/category/${cat}`} className="block group">
              <div className={`rounded-2xl bg-gradient-to-br ${gradient} p-6 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{icon}</div>
                  <div className="text-xs bg-white/25 px-2 py-1 rounded-full">
                    {count}
                  </div>
                </div>

                <h3 className="font-serif-cn font-bold text-xl mb-2">{label.zh}</h3>
                <p className="text-white/80 text-sm italic mb-3">{label.en}</p>

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
