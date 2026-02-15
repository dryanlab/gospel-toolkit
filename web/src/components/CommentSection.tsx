'use client';

import { useState, useEffect } from 'react';

interface Comment {
  name: string;
  city: string;
  content: string;
  date: string;
  featured: boolean;
}

interface CommentSectionProps {
  articleId: string;
}

// Demo featured comments for the first article
const demoFeatured: Record<string, Comment[]> = {};

export default function CommentSection({ articleId }: CommentSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [content, setContent] = useState('');
  const [allowShow, setAllowShow] = useState(true);
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [localComments, setLocalComments] = useState<Comment[]>([]);

  // Load local comments from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('comments_' + articleId) || '[]');
    setLocalComments(stored);
  }, [articleId]);

  const featured = demoFeatured[articleId] || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim() || content.trim().length < 10) return;

    const newComment: Comment = {
      name: anonymous ? '匿名' : name,
      city: city || '',
      content: content.trim(),
      date: new Date().toISOString().split('T')[0],
      featured: false,
    };

    const updated = [...localComments, newComment];
    setLocalComments(updated);
    localStorage.setItem('comments_' + articleId, JSON.stringify(updated));

    setName('');
    setEmail('');
    setCity('');
    setContent('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="mt-8">
      {/* Featured comments */}
      {(featured.length > 0 || localComments.length > 0) && (
        <div className="mb-8">
          <h3 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-4">
            ⭐ 精选回应 · Featured Responses
          </h3>
          <div className="space-y-3">
            {[...featured, ...localComments].map((c, i) => (
              <div
                key={i}
                className="rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-4"
              >
                <p className="text-[15px] text-[var(--color-text)] leading-relaxed italic">
                  &ldquo;{c.content}&rdquo;
                </p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-2 text-right">
                  —— {c.name}{c.city ? '，' + c.city : ''} · {c.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Comment form */}
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5">
        <h3 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-1">
          📝 读者回应 · Reader&apos;s Response
        </h3>
        <p className="text-xs text-[var(--color-text-secondary)] mb-4">
          你的回应可能会被精选展示，鼓励更多读者。
        </p>

        {submitted ? (
          <div className="text-center py-8">
            <p className="text-3xl mb-2">✅</p>
            <p className="text-[var(--color-text)] font-bold">感谢你的回应！Thank you!</p>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              你的留言已提交，审核通过后将展示在页面上。
              <br />
              <span className="italic">Your response has been submitted and will be displayed after review.</span>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">
                  称呼 / Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="你的称呼"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm outline-none focus:border-[var(--color-accent)]"
                />
              </div>
              <div>
                <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">
                  邮箱 / Email（不公开）
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="选填，仅用于回复"
                  className="w-full px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm outline-none focus:border-[var(--color-accent)]"
                />
              </div>
              <div>
                <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">
                  城市 / City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  placeholder="选填"
                  className="w-full px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm outline-none focus:border-[var(--color-accent)]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">
                你的回应 / Your Response <span className="text-red-400">*</span>（10-500字）
              </label>
              <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="这封信给你带来了什么感触？"
                required
                minLength={10}
                maxLength={500}
                rows={4}
                className="w-full px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm outline-none focus:border-[var(--color-accent)] resize-none"
              />
              <p className="text-xs text-[var(--color-text-secondary)] text-right mt-1">
                {content.length}/500
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-[var(--color-text-secondary)]">
                <input
                  type="checkbox"
                  checked={allowShow}
                  onChange={e => setAllowShow(e.target.checked)}
                  className="accent-[var(--color-accent)]"
                />
                我愿意让这条留言被精选展示 Allow featuring
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-[var(--color-text-secondary)]">
                <input
                  type="checkbox"
                  checked={anonymous}
                  onChange={e => setAnonymous(e.target.checked)}
                  className="accent-[var(--color-accent)]"
                />
                匿名展示 Anonymous
              </label>
            </div>

            <button
              type="submit"
              disabled={!name.trim() || content.trim().length < 10}
              className="px-6 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              提交回应 Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
