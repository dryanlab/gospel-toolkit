'use client';

import { useState, useEffect } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://rockoftruth-api.suyanuiuc.workers.dev';

interface LikeButtonProps {
  articleId: string;
}

export default function LikeButton({ articleId }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // Check if already liked (localStorage for UI state)
    const likedArticles = JSON.parse(localStorage.getItem('liked_articles') || '{}');
    if (likedArticles[articleId]) {
      setLiked(true);
    }

    // Fetch global count from API
    fetch(`${API_URL}/likes/${articleId}`)
      .then(res => res.json())
      .then(data => setCount(data.count || 0))
      .catch(() => {
        // Fallback to localStorage count
        const counts = JSON.parse(localStorage.getItem('like_counts') || '{}');
        setCount(counts[articleId] || 0);
      });
  }, [articleId]);

  const handleLike = async () => {
    if (liked) return;

    setLiked(true);
    setCount(prev => prev + 1);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 600);

    // Save to localStorage (prevent re-liking)
    const likedArticles = JSON.parse(localStorage.getItem('liked_articles') || '{}');
    likedArticles[articleId] = Date.now();
    localStorage.setItem('liked_articles', JSON.stringify(likedArticles));

    // POST to API
    try {
      const res = await fetch(`${API_URL}/likes/${articleId}`, { method: 'POST' });
      const data = await res.json();
      // Sync server count (more accurate)
      if (data.count !== undefined) {
        setCount(data.count);
      }
    } catch {
      // API failed — localStorage already updated, graceful degradation
    }
  };

  return (
    <button
      onClick={handleLike}
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 transition-all duration-300 ${
        liked
          ? 'border-red-400 bg-red-50 dark:bg-red-950/30 text-red-500'
          : 'border-[var(--color-border)] hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-950/20 text-[var(--color-text-secondary)]'
      } ${animating ? 'scale-110' : 'scale-100'}`}
      disabled={liked}
    >
      <span className={`text-xl transition-transform duration-300 ${animating ? 'scale-150' : 'scale-100'}`}>
        {liked ? '❤️' : '🤍'}
      </span>
      <span className="font-bold text-sm">
        {liked ? '已赞' : '赞'}
      </span>
      {count > 0 && (
        <span className="text-sm opacity-70">{count}</span>
      )}
    </button>
  );
}
