'use client';
import { use } from 'react';
import Link from 'next/link';
import { getCatechismById } from '@/lib/data';

export default function CatechismDetailClient({ paramsPromise }: { paramsPromise: Promise<{ id: string }> }) {
  const { id } = use(paramsPromise);
  const q = getCatechismById(id);

  if (!q) return <div className="p-8 text-center">Question not found</div>;

  const isWlc = q.catechism === 'westminster_larger';

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 overflow-hidden">
      <div className="mb-6">
        <Link href={`/catechism${isWlc ? '?tab=wlc' : ''}`} className="text-sm text-[var(--color-accent)] hover:underline">← 返回{isWlc ? '大要理' : '小要理'}列表</Link>
      </div>

      {/* 版权声明 */}
      <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-6 text-center">
        <span className="text-4xl mb-4 block">⚠️</span>
        <h2 className="font-serif-cn text-xl font-bold text-amber-800 dark:text-amber-200 mb-3">内容暂不可用</h2>
        <p className="text-amber-700 dark:text-amber-300 mb-4">
          要理问答内容正在获取版权授权中，暂时无法查看。
        </p>
        <p className="text-sm text-amber-600 dark:text-amber-400">
          我们正在联系林格尼尔福音事工获取使用许可，感谢您的理解与耐心等待！
        </p>
      </div>

      {/* 仅显示问题编号和标题（模糊） */}
      <div className="mt-6 opacity-30 pointer-events-none select-none">
        <span className="text-xs font-bold px-2 py-0.5 rounded bg-gray-400 text-white mb-4 inline-block">Q{q.number}</span>
        <h1 className="font-serif-cn text-2xl font-bold text-gray-400 mb-2 blur-sm">{q.question_zh}</h1>
      </div>
    </div>
  );
}

// 原始代码已移至 client.tsx.bak
