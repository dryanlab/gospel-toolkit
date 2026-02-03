'use client';
import Link from 'next/link';

export default function FlashcardsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <Link href="/catechism" className="text-sm text-[var(--color-accent)] hover:underline">← 返回列表</Link>
      </div>

      <h1 className="font-serif-cn text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-6 text-center">🃏 闪卡模式</h1>

      {/* 版权声明 */}
      <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-6 text-center">
        <span className="text-4xl mb-4 block">⚠️</span>
        <h2 className="font-serif-cn text-xl font-bold text-amber-800 dark:text-amber-200 mb-3">内容暂不可用</h2>
        <p className="text-amber-700 dark:text-amber-300 mb-4">
          要理问答内容正在获取版权授权中，暂时无法使用闪卡功能。
        </p>
        <p className="text-sm text-amber-600 dark:text-amber-400">
          我们正在联系林格尼尔福音事工获取使用许可，感谢您的理解与耐心等待！
        </p>
      </div>
    </div>
  );
}
