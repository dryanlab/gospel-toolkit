'use client';

import { useState } from 'react';

interface ShareBarProps {
  url: string;
  title: string;
  summary: string;
  scripture?: string;
}

export default function ShareBar({ url, title, summary, scripture }: ShareBarProps) {
  const [copied, setCopied] = useState(false);
  const [showWechat, setShowWechat] = useState(false);

  const fullUrl = typeof window !== 'undefined'
    ? url.startsWith('http') ? url : window.location.origin + url
    : url;

  const shareText = `${title}\n${summary}${scripture ? '\n— ' + scripture : ''}\n${fullUrl}`;

  const platforms = [
    {
      name: 'Telegram',
      icon: '✈️',
      onClick: () => window.open(`https://t.me/share/url?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title + '\n' + summary)}`, '_blank'),
    },
    {
      name: '微信',
      icon: '💬',
      onClick: () => setShowWechat(true),
    },
    {
      name: 'WhatsApp',
      icon: '📱',
      onClick: () => window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank'),
    },
    {
      name: 'X',
      icon: '🐦',
      onClick: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title + (scripture ? ' — ' + scripture : ''))}`, '_blank'),
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = fullUrl;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm text-[var(--color-text-secondary)] mr-1">📤 分享 Share</span>
        {platforms.map(p => (
          <button
            key={p.name}
            onClick={p.onClick}
            className="px-3 py-1.5 rounded-full text-sm border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] transition-all"
            title={p.name}
          >
            {p.icon} {p.name}
          </button>
        ))}
        <button
          onClick={copyLink}
          className="px-3 py-1.5 rounded-full text-sm border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] transition-all"
        >
          {copied ? '✅ 已复制 Copied' : '🔗 复制链接 Copy Link'}
        </button>
      </div>

      {/* WeChat modal */}
      {showWechat && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowWechat(false)}>
          <div className="bg-[var(--color-bg)] rounded-2xl p-6 max-w-sm w-full text-center" onClick={e => e.stopPropagation()}>
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold text-lg text-[var(--color-text)] mb-2">分享到微信</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">复制以下内容，发送给微信好友：</p>
            <div className="bg-[var(--color-bg-secondary)] rounded-lg p-4 text-left text-sm text-[var(--color-text)] mb-4 leading-relaxed">
              <p className="font-bold">📜 {title}</p>
              <p className="mt-1 text-[var(--color-text-secondary)]">{summary}</p>
              {scripture && <p className="mt-1 italic text-[var(--color-accent)]">— {scripture}</p>}
              <p className="mt-2 text-[var(--color-accent)]">{fullUrl}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={async () => {
                  await navigator.clipboard.writeText(`📜 ${title}\n${summary}${scripture ? '\n— ' + scripture : ''}\n${fullUrl}`);
                  setShowWechat(false);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="flex-1 py-2 rounded-lg bg-[var(--color-accent)] text-white font-bold text-sm"
              >
                复制全部内容
              </button>
              <button
                onClick={() => setShowWechat(false)}
                className="px-4 py-2 rounded-lg border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)]"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
