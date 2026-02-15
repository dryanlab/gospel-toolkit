'use client';

import { useState, useEffect } from 'react';

interface LikeButtonProps {
  articleId: string;
}

export default function LikeButton({ articleId }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // Check localStorage
    const likedArticles = JSON.parse(localStorage.getItem('liked_articles') || '{}');
    if (likedArticles[articleId]) {
      setLiked(true);
    }
    // In future: fetch count from API
    // For now, use localStorage-based count
    const counts = JSON.parse(localStorage.getItem('like_counts') || '{}');
    setCount(counts[articleId] || 0);
  }, [articleId]);

  const handleLike = () => {
    if (liked) return;

    setLiked(true);
    setCount(prev => prev + 1);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 600);

    // Save to localStorage
    const likedArticles = JSON.parse(localStorage.getItem('liked_articles') || '{}');
    likedArticles[articleId] = Date.now();
    localStorage.setItem('liked_articles', JSON.stringify(likedArticles));

    const counts = JSON.parse(localStorage.getItem('like_counts') || '{}');
    counts[articleId] = (counts[articleId] || 0) + 1;
    localStorage.setItem('like_counts', JSON.stringify(counts));

    // In future: POST to API
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
