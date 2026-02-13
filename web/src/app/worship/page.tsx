'use client';

import { useState, useCallback, useEffect, useRef, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { songs, categories, type Category } from './data';
import { normalizeSearch } from '@/lib/search-utils';

// Use OpenCC for complete traditional ↔ simplified Chinese conversion
const normalize = normalizeSearch;

type PlayMode = 'sequential' | 'loop-all' | 'loop-one' | 'shuffle';

const playModeIcons: Record<PlayMode, { icon: string; label: string }> = {
  sequential: { icon: '▶', label: '顺序播放' },
  'loop-all': { icon: '🔁', label: '顺序循环' },
  'loop-one': { icon: '🔂', label: '单曲循环' },
  shuffle: { icon: '🔀', label: '随机播放' },
};

// Declare YouTube IFrame API types
declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: (event: { target: YTPlayer }) => void;
            onStateChange?: (event: { data: number; target: YTPlayer }) => void;
          };
        }
      ) => YTPlayer;
      PlayerState: {
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YTPlayer {
  loadVideoById: (videoId: string) => void;
  playVideo: () => void;
  pauseVideo: () => void;
  destroy: () => void;
}

export default function WorshipPageWrapper() {
  return (
    <Suspense fallback={<div className="max-w-5xl mx-auto px-4 py-6 text-center">加载中...</div>}>
      <WorshipPage />
    </Suspense>
  );
}

function WorshipPage() {
  const searchParams = useSearchParams();
  const songParam = searchParams.get('song');
  const qParam = searchParams.get('q');
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [activeSongId, setActiveSongId] = useState<string | null>(null);
  
  // Handle song param from URL (e.g. from search results)
  useEffect(() => {
    if (songParam && songs.find(s => s.id === songParam)) {
      setActiveSongId(songParam);
    }
  }, [songParam]);
  const [playMode, setPlayMode] = useState<PlayMode>('shuffle');
  const [searchQuery, setSearchQuery] = useState(qParam || '');
  const [ytApiReady, setYtApiReady] = useState(false);
  const playerRef = useRef<YTPlayer | null>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const playNextRef = useRef<() => void>(() => {});

  const filtered = useMemo(() => songs.filter(s => {
    const matchCategory = activeCategory === 'all' || s.category === activeCategory;
    const q = normalize(searchQuery);
    const matchSearch = !q || normalize(s.title).includes(q) || normalize(s.subtitle || '').includes(q) || normalize(s.artist).includes(q);
    return matchCategory && matchSearch;
  }), [activeCategory, searchQuery]);
  const activeSong = activeSongId !== null ? songs.find(s => s.id === activeSongId) : null;

  const currentIndex = filtered.findIndex(s => s.id === activeSongId);

  const cyclePlayMode = () => {
    const modes: PlayMode[] = ['sequential', 'loop-all', 'loop-one', 'shuffle'];
    const idx = modes.indexOf(playMode);
    setPlayMode(modes[(idx + 1) % modes.length]);
  };

  const playNext = useCallback(() => {
    if (filtered.length === 0) return;
    if (playMode === 'loop-one') {
      // Replay current song
      if (activeSong && playerRef.current) {
        playerRef.current.loadVideoById(activeSong.youtubeId);
      }
      return;
    }
    if (playMode === 'shuffle') {
      const randomIdx = Math.floor(Math.random() * filtered.length);
      setActiveSongId(filtered[randomIdx].id);
      return;
    }
    // sequential or loop-all
    if (currentIndex === -1) {
      setActiveSongId(filtered[0].id);
    } else if (currentIndex < filtered.length - 1) {
      setActiveSongId(filtered[currentIndex + 1].id);
    } else if (playMode === 'loop-all') {
      setActiveSongId(filtered[0].id);
    }
    // sequential mode at end: do nothing (stop)
  }, [filtered, currentIndex, playMode, activeSong]);

  // Keep playNextRef updated
  useEffect(() => {
    playNextRef.current = playNext;
  }, [playNext]);

  const playPrev = useCallback(() => {
    if (filtered.length === 0) return;
    if (playMode === 'shuffle') {
      const randomIdx = Math.floor(Math.random() * filtered.length);
      setActiveSongId(filtered[randomIdx].id);
      return;
    }
    if (currentIndex <= 0) {
      if (playMode === 'loop-all') {
        setActiveSongId(filtered[filtered.length - 1].id);
      }
    } else {
      setActiveSongId(filtered[currentIndex - 1].id);
    }
  }, [filtered, currentIndex, playMode]);

  // Load YouTube IFrame API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setYtApiReady(true);
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      setYtApiReady(true);
    };

    return () => {
      window.onYouTubeIframeAPIReady = undefined;
    };
  }, []);

  // Track if this is the first song (user-initiated) vs auto-advancement
  const isFirstPlayRef = useRef(true);
  const lastVideoIdRef = useRef<string | null>(null);

  // Create YouTube player once, then reuse with loadVideoById
  useEffect(() => {
    if (!ytApiReady || !activeSong) return;

    const videoId = activeSong.youtubeId;
    
    // If player exists, just load the new video (preserves autoplay capability)
    if (playerRef.current && lastVideoIdRef.current !== videoId) {
      lastVideoIdRef.current = videoId;
      playerRef.current.loadVideoById(videoId);
      return;
    }

    // First time: create the player
    if (!playerRef.current) {
      lastVideoIdRef.current = videoId;
      playerRef.current = new window.YT.Player('yt-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          playsinline: 1,
        },
        events: {
          onReady: () => {
            isFirstPlayRef.current = false;
          },
          onStateChange: (event) => {
            // state 0 = ENDED
            if (event.data === 0) {
              playNextRef.current();
            }
          },
        },
      });
    }

    return () => {
      // Only destroy on unmount, not on song change
    };
  }, [ytApiReady, activeSong?.youtubeId]);

  // Cleanup player on component unmount
  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  // Media Session API for lock screen / notification controls
  useEffect(() => {
    if (!activeSong || !('mediaSession' in navigator)) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title: activeSong.title,
      artist: activeSong.artist,
      album: activeSong.subtitle || '真理磐石',
      artwork: [
        { src: `https://img.youtube.com/vi/${activeSong.youtubeId}/mqdefault.jpg`, sizes: '320x180', type: 'image/jpeg' },
        { src: `https://img.youtube.com/vi/${activeSong.youtubeId}/maxresdefault.jpg`, sizes: '1280x720', type: 'image/jpeg' },
      ],
    });

    navigator.mediaSession.setActionHandler('play', () => {
      playerRef.current?.playVideo();
    });
    navigator.mediaSession.setActionHandler('pause', () => {
      playerRef.current?.pauseVideo();
    });
    navigator.mediaSession.setActionHandler('previoustrack', () => {
      playPrev();
    });
    navigator.mediaSession.setActionHandler('nexttrack', () => {
      playNextRef.current();
    });

    return () => {
      navigator.mediaSession.setActionHandler('play', null);
      navigator.mediaSession.setActionHandler('pause', null);
      navigator.mediaSession.setActionHandler('previoustrack', null);
      navigator.mediaSession.setActionHandler('nexttrack', null);
    };
  }, [activeSong, playPrev]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 pb-24 lg:pb-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="font-serif-cn text-3xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">
          🎵 敬拜诗歌
        </h1>
        <p className="text-[var(--color-text-secondary)]">Worship Songs</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2 max-w-lg mx-auto">
          当用诗章、颂词、灵歌，彼此对说，口唱心和地赞美主。— 以弗所书 5:19
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-lg mx-auto italic">
          Speaking to one another with psalms, hymns, and songs from the Spirit. Sing and make music from your heart to the Lord. — Ephesians 5:19
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            activeCategory === 'all'
              ? 'bg-[var(--color-primary)] text-white shadow-md'
              : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
          }`}
        >
          全部 ({songs.length})
        </button>
        {categories.map(cat => {
          const count = songs.filter(s => s.category === cat.key).length;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? 'bg-[var(--color-primary)] text-white shadow-md'
                  : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
              }`}
            >
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Main: Player (2/3) + List (1/3) */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Player - left 2/3 */}
        <div className="lg:w-2/3">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden sticky top-4">
            {activeSong ? (
              <>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <div
                    id="yt-player"
                    ref={playerContainerRef}
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                {/* Player Controls */}
                <div className="px-4 pt-3 pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h2 className="font-serif-cn font-bold text-xl text-[var(--color-text)] truncate">
                        {activeSong.title}
                      </h2>
                      {activeSong.subtitle && (
                        <p className="text-sm text-[var(--color-text-secondary)] italic truncate">{activeSong.subtitle}</p>
                      )}
                      <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">🎤 {activeSong.artist}</p>
                    </div>
                  </div>
                  {/* Controls */}
                  <div className="flex items-center justify-center gap-4 mt-3 pb-1">
                    <button
                      onClick={cyclePlayMode}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors"
                      title={playModeIcons[playMode].label}
                    >
                      <span>{playModeIcons[playMode].icon}</span>
                      <span className="text-xs text-[var(--color-text-secondary)]">{playModeIcons[playMode].label}</span>
                    </button>
                    <button
                      onClick={playPrev}
                      className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[var(--color-border)] transition-colors text-lg"
                      title="上一首"
                    >
                      ⏮
                    </button>
                    <button
                      onClick={playNext}
                      className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[var(--color-border)] transition-colors text-lg"
                      title="下一首"
                    >
                      ⏭
                    </button>
                    <span className="text-xs text-[var(--color-text-secondary)]">
                      {currentIndex + 1} / {filtered.length}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center py-24 text-[var(--color-text-secondary)]">
                <div className="text-center">
                  <span className="text-5xl mb-4 block">🎶</span>
                  <p className="font-serif-cn text-lg">选择一首诗歌开始播放</p>
                  <p className="text-sm mt-1">Select a song to play</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Song List - right 1/3 */}
        <div className="lg:w-1/3">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden">
            {/* Search */}
            <div className="p-2 border-b border-[var(--color-border)]">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="🔍 搜索诗歌..."
                className="w-full px-3 py-1.5 text-sm rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)]"
              />
            </div>
            <div className="max-h-[70vh] lg:max-h-[466px] overflow-y-auto divide-y divide-[var(--color-border)]">
              {filtered.map((song, idx) => (
                <button
                  key={song.id}
                  onClick={() => setActiveSongId(song.id)}
                  className={`w-full text-left px-3 py-2.5 flex items-center gap-2 hover:bg-[var(--color-primary)]/5 transition-colors ${
                    activeSongId === song.id ? 'bg-[var(--color-primary)]/10' : ''
                  }`}
                >
                  <span className="text-xs text-[var(--color-text-secondary)] w-8 text-right shrink-0">
                    {activeSongId === song.id ? '▶' : idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${
                      activeSongId === song.id
                        ? 'text-[var(--color-primary)] dark:text-[var(--color-accent)]'
                        : 'text-[var(--color-text)]'
                    }`}>
                      {song.title}
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)] truncate">
                      {song.artist}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
