'use client';

import { useState } from 'react';

const API_BASE = 'https://rockoftruth-api.suyanuiuc.workers.dev';

export default function SubscribeBar() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch(`${API_BASE}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus('success');
        setMsg('✅ 订阅成功！/ Subscribed successfully!');
        setEmail('');
        setName('');
      } else {
        setStatus('error');
        setMsg(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setMsg('Network error');
    }
  };

  return (
    <div className="w-full bg-stone-900/80 border border-amber-900/30 rounded-xl p-6 my-8">
      <h3 className="text-center text-lg font-semibold text-amber-200 mb-1">
        📧 订阅更新 / Subscribe for Updates
      </h3>
      <p className="text-center text-stone-400 text-sm mb-4">
        每日灵修 · 圣徒伴读 · 圣徒来信，新内容第一时间送到您的邮箱
      </p>
      <p className="text-center text-stone-500 text-xs mb-4">
        Daily devotions · Bible readings · Saints&apos; letters — delivered to your inbox
      </p>

      {status === 'success' ? (
        <p className="text-center text-green-400 font-medium py-2">{msg}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 items-center justify-center max-w-lg mx-auto">
          <input
            type="text"
            placeholder="名字 / Name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full sm:w-32 px-3 py-2 bg-stone-800 border border-stone-700 rounded-lg text-stone-200 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-600"
          />
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-48 px-3 py-2 bg-stone-800 border border-stone-700 rounded-lg text-stone-200 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-600"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-5 py-2 bg-amber-700 hover:bg-amber-600 disabled:opacity-50 text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
          >
            {status === 'loading' ? '...' : '订阅 Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && <p className="text-center text-red-400 text-sm mt-2">{msg}</p>}
    </div>
  );
}
