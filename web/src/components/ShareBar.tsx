'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

interface ShareBarProps {
  url: string;
  title: string;
  summary: string;
  scripture?: string;
  emoji?: string;
  cardStyle?: 'letter' | 'reading' | 'altar' | 'default';
  author?: string;
}

export default function ShareBar({ url, title, summary, scripture, emoji = '📜', cardStyle = 'default', author }: ShareBarProps) {
  const [copied, setCopied] = useState(false);
  const [showWechat, setShowWechat] = useState(false);
  const [showWechatGuide, setShowWechatGuide] = useState(false);
  const [wechatMode, setWechatMode] = useState<'friend' | 'moments' | null>(null);
  const [cardReady, setCardReady] = useState(false);
  const [cardUrl, setCardUrl] = useState('');
  const [cardTheme, setCardTheme] = useState<'parchment' | 'burgundy' | 'forest'>('parchment');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fullUrl = typeof window !== 'undefined'
    ? url.startsWith('http') ? url : window.location.origin + url
    : url;

  const prodUrl = fullUrl.replace(/localhost:\d+/, 'rockoftruth.net');

    // Rich share texts for different platforms
  const siteTag = '真理磐石 Rock of Truth';
  const scriptureLine = scripture ? `\n📖 ${scripture}` : '';
  const authorLine = author ? `✍️ ${author}` : '';

  const shareText = `${emoji} ${title}\n\n${summary}${scriptureLine}\n\n${authorLine ? authorLine + '\n' : ''}🔗 ${prodUrl}`;
  const shortShareText = `${emoji} ${title}${scriptureLine}\n${prodUrl}`;

  // Detect environment
  const isWechatBrowser = typeof navigator !== 'undefined' && /MicroMessenger/i.test(navigator.userAgent);
  const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const canNativeShare = typeof navigator !== 'undefined' && !!navigator.share;

  // Native share (mobile) — rich content
  const nativeShare = async () => {
    try {
      await navigator.share({
        title: `${emoji} ${title}`,
        text: `${summary}${scriptureLine}${authorLine ? '\n' + authorLine : ''}\n\n— ${siteTag}`,
        url: prodUrl,
      });
    } catch {
      // user cancelled or not supported, fallback
    }
  };

  // WeChat button handler - context-aware
  const handleWechatClick = () => {
    if (isWechatBrowser) {
      // Inside WeChat: guide user to use the built-in share button
      setShowWechatGuide(true);
    } else {
      setShowWechat(true);
      setWechatMode(null);
      setCardReady(false);
    }
  };

  const platforms = [
    // Show native share button on mobile as first option
    ...(canNativeShare ? [{
      name: '分享',
      icon: '📤',
      onClick: nativeShare,
    }] : []),
    ...(!isWechatBrowser ? [{
      name: 'Telegram',
      icon: '✈️',
      onClick: () => window.open(`https://t.me/share/url?url=${encodeURIComponent(prodUrl)}&text=${encodeURIComponent(`${emoji} ${title}\n\n${summary}${scriptureLine}${authorLine ? '\n' + authorLine : ''}\n\n— ${siteTag}`)}`, '_blank'),
    }] : []),
    {
      name: '微信',
      icon: '💬',
      onClick: handleWechatClick,
    },
    ...(!isWechatBrowser ? [{
      name: 'WhatsApp',
      icon: '📱',
      onClick: () => window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank'),
    },
    {
      name: 'X',
      icon: '🐦',
      onClick: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(prodUrl)}&text=${encodeURIComponent(`${emoji} ${title}${scripture ? '\n📖 ' + scripture : ''}\n\n— ${siteTag}`)}`, '_blank'),
    },
    {
      name: 'Email',
      icon: '📧',
      onClick: () => window.open(`mailto:?subject=${encodeURIComponent(`${emoji} ${title} — ${siteTag}`)}&body=${encodeURIComponent(`${summary}\n\n${scripture ? '📖 ' + scripture + '\n\n' : ''}${authorLine ? authorLine + '\n\n' : ''}阅读全文 Read more:\n${prodUrl}\n\n— ${siteTag}\nrockoftruth.net`)}`, '_self'),
    }] : []),
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(prodUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = prodUrl;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const copyForFriend = async () => {
    const text = `${emoji} ${title}\n\n${summary}${scripture ? '\n\n📖 ' + scripture : ''}${authorLine ? '\n\n' + authorLine : ''}\n\n🔗 ${prodUrl}\n\n— ${siteTag}`;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    // Try to open WeChat
    window.location.href = 'weixin://';
    setShowWechat(false);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Generate share card image for Moments
  const generateCard = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = 2;
    const w = 640;
    const mx = 48;

    // Three card themes
    const allThemes = {
      parchment: {
        letter:  { bg1: '#d4b896', bg2: '#c4a478', accent: '#5a2d0c', accent2: '#6b3510', text: '#1a0e06', sub: '#2e1a0c', label: '圣徒来信', glow: '#b89060', border: '#8a6840', light: true },
        reading: { bg1: '#d4c8a8', bg2: '#c0b090', accent: '#3a2810', accent2: '#4a3418', text: '#1a0e06', sub: '#2e1a0c', label: '圣徒伴读', glow: '#b89060', border: '#8a7850', light: true },
        altar:   { bg1: '#ccb8cc', bg2: '#b8a0b8', accent: '#3e1a3e', accent2: '#502650', text: '#1a0e1a', sub: '#2e142e', label: '家庭祭坛', glow: '#9a6a9a', border: '#8a688a', light: true },
        default: { bg1: '#d4b896', bg2: '#c4a478', accent: '#5a2d0c', accent2: '#6b3510', text: '#1a0e06', sub: '#2e1a0c', label: '真理磐石', glow: '#b89060', border: '#8a6840', light: true },
      },
      burgundy: {
        letter:  { bg1: '#1e0610', bg2: '#3a1020', accent: '#e0b048', accent2: '#f0d070', text: '#ffffff', sub: '#e0d8cc', label: '圣徒来信', glow: '#d4a050', border: '#5a1828', light: false },
        reading: { bg1: '#1e0610', bg2: '#3a1020', accent: '#e0b048', accent2: '#f0d070', text: '#ffffff', sub: '#e0d8cc', label: '圣徒伴读', glow: '#d4a050', border: '#5a1828', light: false },
        altar:   { bg1: '#1e0610', bg2: '#3a1020', accent: '#e0b048', accent2: '#f0d070', text: '#ffffff', sub: '#e0d8cc', label: '家庭祭坛', glow: '#d4a050', border: '#5a1828', light: false },
        default: { bg1: '#1e0610', bg2: '#3a1020', accent: '#e0b048', accent2: '#f0d070', text: '#ffffff', sub: '#e0d8cc', label: '真理磐石', glow: '#d4a050', border: '#5a1828', light: false },
      },
      forest: {
        letter:  { bg1: '#06120e', bg2: '#102820', accent: '#d4c898', accent2: '#e8dcc0', text: '#ffffff', sub: '#d8d0c0', label: '圣徒来信', glow: '#4a7a5a', border: '#1e3a2e', light: false },
        reading: { bg1: '#06120e', bg2: '#102820', accent: '#d4c898', accent2: '#e8dcc0', text: '#ffffff', sub: '#d8d0c0', label: '圣徒伴读', glow: '#4a7a5a', border: '#1e3a2e', light: false },
        altar:   { bg1: '#06120e', bg2: '#102820', accent: '#d4c898', accent2: '#e8dcc0', text: '#ffffff', sub: '#d8d0c0', label: '家庭祭坛', glow: '#4a7a5a', border: '#1e3a2e', light: false },
        default: { bg1: '#06120e', bg2: '#102820', accent: '#d4c898', accent2: '#e8dcc0', text: '#ffffff', sub: '#d8d0c0', label: '真理磐石', glow: '#4a7a5a', border: '#1e3a2e', light: false },
      },
    };
    const themes = allThemes[cardTheme];
    const t = themes[cardStyle] || themes.default;

    // === First pass: measure content height ===
    const measureCanvas = document.createElement('canvas');
    const mCtx = measureCanvas.getContext('2d')!;

    mCtx.font = 'bold 34px "PingFang SC", "Microsoft YaHei", sans-serif';
    const titleLines = wrapText(mCtx, title, w - mx * 2);
    const titleCount = Math.min(titleLines.length, 3);

    mCtx.font = '22px "PingFang SC", "Microsoft YaHei", sans-serif';
    const summaryLines = wrapText(mCtx, summary, w - mx * 2 - 20);
    const maxSummaryLines = Math.min(summaryLines.length, 7);

    let contentH = 44;                         // top padding
    contentH += 24;                            // label
    contentH += 62;                            // emoji
    contentH += titleCount * 46;               // title lines
    if (author) contentH += 38;                // author
    contentH += 32;                            // divider
    contentH += 24;                            // quote mark offset
    contentH += maxSummaryLines * 34;          // summary lines
    if (scripture) contentH += 40;             // scripture
    contentH += 80;                            // bottom branding
    contentH += 28;                            // bottom padding

    const h = Math.max(contentH, 480);         // minimum height

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    // === Background: warm parchment gradient ===
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, t.bg1);
    grad.addColorStop(0.3, t.bg2);
    grad.addColorStop(0.7, t.bg2);
    grad.addColorStop(1, t.bg1);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Paper texture effect — subtle noise via radial spots
    ctx.save();
    ctx.globalAlpha = 0.03;
    for (let i = 0; i < 8; i++) {
      const rx = Math.random() * w, ry = Math.random() * h;
      const rg = ctx.createRadialGradient(rx, ry, 0, rx, ry, 100 + Math.random() * 100);
      rg.addColorStop(0, t.glow);
      rg.addColorStop(1, 'transparent');
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, w, h);
    }
    ctx.restore();

    // Elegant double-line border frame
    const bm = 16;
    ctx.strokeStyle = t.border;
    ctx.lineWidth = 2;
    ctx.strokeRect(bm, bm, w - bm * 2, h - bm * 2);
    ctx.strokeStyle = t.border;
    ctx.lineWidth = 0.5;
    ctx.strokeRect(bm + 6, bm + 6, w - bm * 2 - 12, h - bm * 2 - 12);

    // Cross watermark
    ctx.save();
    ctx.globalAlpha = t.light ? 0.06 : 0.04;
    ctx.strokeStyle = t.light ? t.accent : '#ffffff';
    ctx.lineWidth = 32;
    ctx.lineCap = 'round';
    const crossCY = h * 0.4;
    ctx.beginPath();
    ctx.moveTo(w / 2, crossCY - 110); ctx.lineTo(w / 2, crossCY + 110);
    ctx.moveTo(w / 2 - 75, crossCY - 25); ctx.lineTo(w / 2 + 75, crossCY - 25);
    ctx.stroke();
    ctx.restore();

    // === Label ===
    let y = 44;
    ctx.fillStyle = t.accent;
    ctx.font = 'bold 17px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✟  ' + t.label, w / 2, y);
    y += 10;
    ctx.fillRect(w / 2 - 28, y, 56, 2);

    // === Emoji ===
    y += 50;
    ctx.font = '48px serif';
    ctx.fillText(emoji, w / 2, y);

    // === Title ===
    y += 40;
    ctx.fillStyle = t.text;
    ctx.font = 'bold 36px "PingFang SC", "Microsoft YaHei", sans-serif';
    for (const line of titleLines.slice(0, 3)) {
      ctx.fillText(line, w / 2, y);
      y += 46;
    }

    // === Author ===
    if (author) {
      ctx.fillStyle = t.accent2;
      ctx.font = '20px "PingFang SC", "Microsoft YaHei", sans-serif';
      ctx.fillText('— ' + author + ' —', w / 2, y);
      y += 38;
    }

    // === Divider with diamond ===
    ctx.fillStyle = t.accent;
    ctx.globalAlpha = 0.4;
    ctx.fillRect(mx + 40, y, w / 2 - mx - 48, 1);
    ctx.fillRect(w / 2 + 8, y, w / 2 - mx - 48, 1);
    ctx.globalAlpha = 1;
    ctx.save();
    ctx.translate(w / 2, y);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = t.accent;
    ctx.fillRect(-5, -5, 10, 10);
    ctx.restore();

    // === Summary ===
    y += 28;

    // Opening quote mark
    ctx.fillStyle = t.accent;
    ctx.globalAlpha = 0.15;
    ctx.font = '72px Georgia, serif';
    ctx.textAlign = 'left';
    ctx.fillText('\u201c', mx - 4, y + 16);
    ctx.globalAlpha = 1;

    ctx.fillStyle = t.sub;
    ctx.font = '22px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.textAlign = 'left';
    for (let i = 0; i < maxSummaryLines; i++) {
      let line = summaryLines[i];
      if (i === maxSummaryLines - 1 && summaryLines.length > maxSummaryLines) line += '……';
      ctx.fillText(line, mx + 16, y);
      y += 34;
    }

    // Scripture
    if (scripture) {
      y += 12;
      ctx.fillStyle = t.accent2;
      ctx.font = 'italic 19px "PingFang SC", "Microsoft YaHei", serif';
      ctx.textAlign = 'center';
      ctx.fillText('— ' + scripture + ' —', w / 2, y);
      y += 30;
    }

    // === Bottom branding ===
    y += 16;
    ctx.fillStyle = t.accent;
    ctx.globalAlpha = 0.3;
    ctx.fillRect(mx + 30, y, w - mx * 2 - 60, 1);
    ctx.globalAlpha = 1;

    y += 24;
    ctx.fillStyle = t.text;
    ctx.font = 'bold 18px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('真理磐石  Rock of Truth', w / 2, y);

    y += 24;
    ctx.fillStyle = t.accent;
    ctx.font = '15px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText('rockoftruth.net', w / 2, y);

    const dataUrl = canvas.toDataURL('image/jpeg', 0.93);
    setCardUrl(dataUrl);
    setCardReady(true);
  }, [title, summary, scripture, emoji, cardStyle, author, cardTheme]);

  // Auto-regenerate card when theme changes (only if in moments mode)
  useEffect(() => {
    if (wechatMode === 'moments') {
      setCardReady(false);
      setCardUrl('');
      const timer = setTimeout(() => {
        generateCard();
      }, 50);
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardTheme]);

  const saveCard = async () => {
    if (!cardUrl) return;

    // Convert data URL to blob
    const res = await fetch(cardUrl);
    const blob = await res.blob();

    // Try native share with file (requires HTTPS)
    if (navigator.share && isMobile) {
      try {
        const file = new File([blob], 'share.jpg', { type: 'image/jpeg' });
        await navigator.share({
          title: title,
          text: `${emoji} ${title}${scripture ? '\n📖 ' + scripture : ''}\n🔗 ${prodUrl}`,
          files: [file],
        });
        return;
      } catch {
        // Not supported or cancelled, fall through
      }
    }

    // Fallback: open image in new tab (long-press to save on mobile)
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank');
  };

  return (
    <>
      <div className="flex items-center gap-2 flex-wrap">
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

      {/* WeChat share modal */}
      {showWechat && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowWechat(false)}>
          <div className="bg-[var(--color-bg)] rounded-2xl p-6 max-w-sm w-full text-center" onClick={e => e.stopPropagation()}>
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold text-lg text-[var(--color-text)] mb-4">分享到微信</h3>

            {!wechatMode && (
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setWechatMode('friend')}
                  className="w-full py-3 rounded-lg bg-[#07c160] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#06ae56] transition-colors"
                >
                  <span className="text-lg">👤</span> 分享给微信好友
                </button>
                <button
                  onClick={async () => {
                    setWechatMode('moments');
                    // Auto-copy share text with link
                    const momentsText = `${emoji} ${title}\n\n${summary}${scripture ? '\n\n📖 ' + scripture : ''}${authorLine ? '\n\n' + authorLine : ''}\n\n🔗 rockoftruth.net${url}`;
                    try { await navigator.clipboard.writeText(momentsText); } catch {}
                    setTimeout(generateCard, 100);
                  }}
                  className="w-full py-3 rounded-lg bg-[var(--color-accent)] text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <span className="text-lg">🌐</span> 分享到朋友圈
                </button>
                <button
                  onClick={() => setShowWechat(false)}
                  className="w-full py-2 rounded-lg border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)]"
                >
                  取消
                </button>
              </div>
            )}

            {/* Share to friend: copy text */}
            {wechatMode === 'friend' && (
              <>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">点击下方按钮复制内容并跳转微信，粘贴发送给好友：</p>
                <div className="bg-[var(--color-bg-secondary)] rounded-lg p-4 text-left text-sm text-[var(--color-text)] mb-4 leading-relaxed">
                  <p className="font-bold">{emoji} {title}</p>
                  <p className="mt-2 text-[var(--color-text-secondary)]">{summary}</p>
                  {scripture && <p className="mt-2 italic text-[var(--color-accent)]">📖 {scripture}</p>}
                  {author && <p className="mt-1 text-[var(--color-text-secondary)] text-xs">✍️ {author}</p>}
                  <p className="mt-2 text-[var(--color-accent)]">🔗 {prodUrl}</p>
                  <p className="mt-1 text-[var(--color-text-secondary)] text-xs">— {siteTag}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={copyForFriend}
                    className="flex-1 py-2.5 rounded-lg bg-[#07c160] text-white font-bold text-sm"
                  >
                    📋 复制并打开微信
                  </button>
                  <button
                    onClick={() => setWechatMode(null)}
                    className="px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)]"
                  >
                    返回
                  </button>
                </div>
              </>
            )}

            {/* Share to Moments: generate card image */}
            {wechatMode === 'moments' && (
              <>
                {/* Theme switcher */}
                <div className="flex justify-center gap-2 mb-3">
                  {([
                    { key: 'parchment' as const, label: '📜 羊皮卷', color: '#d4b896' },
                    { key: 'burgundy' as const, label: '🍷 酒红金', color: '#4a1528' },
                    { key: 'forest' as const, label: '🌲 墨绿', color: '#14322a' },
                  ]).map(th => (
                    <button
                      key={th.key}
                      onClick={() => { setCardTheme(th.key); setCardReady(false); }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${cardTheme === th.key ? 'border-[var(--color-accent)] ring-2 ring-[var(--color-accent)]/30 scale-105' : 'border-[var(--color-border)] opacity-70 hover:opacity-100'}`}
                      style={{ backgroundColor: th.color, color: th.key === 'parchment' ? '#4a3728' : '#f0ece4' }}
                    >
                      {th.label}
                    </button>
                  ))}
                </div>
                {/* Hidden canvas for generation */}
                <canvas ref={canvasRef} style={{ display: 'none' }} />
                {!cardReady && (
                  <p className="text-sm text-[var(--color-text-secondary)] mb-3">正在生成...</p>
                )}
                {cardReady && cardUrl && (
                  <>
                    <img
                      src={cardUrl}
                      alt="分享卡片"
                      className="mx-auto rounded-lg shadow-lg mb-3 w-full max-w-[240px]"
                    />
                    <div className="bg-[var(--color-bg-secondary)] rounded-lg p-3 mb-3 text-left text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      <p className="font-bold text-[var(--color-text)] text-sm mb-1">📋 文字已复制到剪贴板</p>
                      <p>① 点击「保存图片」→ 长按图片存到相册</p>
                      <p>② 打开微信朋友圈，选择图片</p>
                      <p>③ 粘贴文字即可发布</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={saveCard}
                        className="flex-1 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-bold text-sm"
                      >
                        💾 保存/分享图片
                      </button>
                      <button
                        onClick={() => { window.location.href = 'weixin://'; }}
                        className="flex-1 py-2.5 rounded-lg bg-[#07c160] text-white font-bold text-sm"
                      >
                        💬 打开微信
                      </button>
                    </div>
                  </>
                )}
                <button
                  onClick={() => setWechatMode(null)}
                  className="w-full mt-2 py-2 rounded-lg border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)]"
                >
                  返回
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* WeChat in-app guide overlay */}
      {showWechatGuide && (
        <div className="fixed inset-0 bg-black/80 z-[9999] flex flex-col items-end pt-4 pr-4" onClick={() => setShowWechatGuide(false)}>
          {/* Arrow pointing to top-right */}
          <div className="text-white text-6xl animate-bounce mr-4">↗</div>
          <div className="bg-white rounded-2xl p-6 mr-4 mt-2 max-w-[280px] text-center">
            <p className="text-lg font-bold text-gray-800 mb-2">点击右上角 ··· </p>
            <p className="text-sm text-gray-600 mb-3">选择「发送给朋友」或「分享到朋友圈」</p>
            <div className="flex justify-center gap-6 mb-3">
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl">👤</span>
                <span className="text-xs text-gray-500">发送给朋友</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl">🌐</span>
                <span className="text-xs text-gray-500">朋友圈</span>
              </div>
            </div>
            <button
              onClick={() => setShowWechatGuide(false)}
              className="text-sm text-blue-500"
            >
              我知道了
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Helper: draw rounded rectangle path
function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// Helper: wrap text into lines that fit within maxWidth
function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  let currentLine = '';

  for (const char of text) {
    const testLine = currentLine + char;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = char;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}
