'use client';

import { useState, useCallback, useEffect, useRef, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { songs, categories, type Category } from './data';

// Simple traditional ↔ simplified Chinese mapping for search
const t2s: Record<string, string> = {'為':'为','們':'们','從':'从','來':'来','個':'个','這':'这','過':'过','對':'对','說':'说','後':'后','會':'会','進':'进','裡':'里','開':'开','關':'关','點':'点','樣':'样','問':'问','時':'时','間':'间','長':'长','實':'实','動':'动','應':'应','發':'发','經':'经','書':'书','學':'学','電':'电','與':'与','給':'给','現':'现','將':'将','號':'号','機':'机','無':'无','愛':'爱','讓':'让','請':'请','見':'见','親':'亲','門':'门','車':'车','東':'东','馬':'马','頭':'头','風':'风','輕':'轻','聽':'听','聖':'圣','響':'响','寶':'宝','貴':'贵','獻':'献','歡':'欢','歌':'歌','稱':'称','禱':'祷','靈':'灵','華':'华','萬':'万','國':'国','義':'义','還':'还','連':'连','軟':'软','遠':'远','選':'选','邊':'边','離':'离','雖':'虽','難':'难','題':'题','願':'愿','類':'类','飛':'飞','體':'体','齊':'齐','榮':'荣','歲':'岁','歷':'历','歎':'叹','歸':'归','殺':'杀','溫':'温','滿':'满','漸':'渐','潔':'洁','當':'当','穩':'稳','築':'筑','範':'范','約':'约','純':'纯','終':'终','統':'统','編':'编','練':'练','總':'总','繫':'系','習':'习','處':'处','記':'记','認':'认','該':'该','誰':'谁','論':'论','講':'讲','識':'识','護':'护','變':'变','讚':'赞','賜':'赐','轉':'转','農':'农','鄰':'邻','釋':'释','鋼':'钢','隨':'随','際':'际','雲':'云','頂':'顶','預':'预','領':'领','飄':'飘','養':'养','駐':'驻','驗':'验','髮':'发','鬥':'斗','魚':'鱼','鳥':'鸟','齡':'龄','復':'复','禰':'祢','裏':'里','麼':'么','佈':'布','傳':'传','僅':'仅','億':'亿','優':'优','內':'内','創':'创','劃':'划','勞':'劳','勝':'胜','區':'区','衛':'卫','壓':'压','備':'备','奮':'奋','嬰':'婴','寧':'宁','尋':'寻','導':'导','層':'层','師':'师','幣':'币','幫':'帮','廣':'广','廳':'厅','張':'张','強':'强','價':'价','傑':'杰','衝':'冲','補':'补','製':'制','複':'复','觀':'观','計':'计','設':'设','証':'证','評':'评','調':'调','諸':'诸','豐':'丰','質':'质','趨':'趋','輝':'辉','輪':'轮','達':'达','運':'运','適':'适','遲':'迟','錯':'错','鍵':'键','閃':'闪','閉':'闭','階':'阶','雙':'双','項':'项','順':'顺','額':'额','顯':'显','飾':'饰'};
function normalize(str: string): string {
  return str.toLowerCase().split('').map(c => t2s[c] || c).join('');
}

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
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [activeSongId, setActiveSongId] = useState<string | null>(null);
  
  // Handle song param from URL (e.g. from search results)
  useEffect(() => {
    if (songParam && songs.find(s => s.id === songParam)) {
      setActiveSongId(songParam);
    }
  }, [songParam]);
  const [playMode, setPlayMode] = useState<PlayMode>('sequential');
  const [searchQuery, setSearchQuery] = useState('');
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

  // Create/update YouTube player when song changes
  useEffect(() => {
    if (!ytApiReady || !activeSong) return;

    // Destroy existing player
    if (playerRef.current) {
      playerRef.current.destroy();
      playerRef.current = null;
    }

    // Create new player
    playerRef.current = new window.YT.Player('yt-player', {
      videoId: activeSong.youtubeId,
      playerVars: {
        autoplay: 1,
        playsinline: 1,
      },
      events: {
        onStateChange: (event) => {
          // state 0 = ENDED
          if (event.data === 0) {
            playNextRef.current();
          }
        },
      },
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [ytApiReady, activeSong?.youtubeId]);

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
                  <span className="text-xs text-[var(--color-text-secondary)] w-5 text-right shrink-0">
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
