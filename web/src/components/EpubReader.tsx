'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import ePub, { Book, Rendition } from 'epubjs';

interface EpubReaderProps {
  url: string;
  bookId: string;
  onClose: () => void;
}

interface TocItem {
  href: string;
  label: string;
  subitems?: TocItem[];
}

type FontSize = 'small' | 'medium' | 'large';
const FONT_SIZES: Record<FontSize, number> = { small: 90, medium: 110, large: 130 };

export default function EpubReader({ url, bookId, onClose }: EpubReaderProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<Book | null>(null);
  const renditionRef = useRef<Rendition | null>(null);
  const [progress, setProgress] = useState(0);
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  const [isLoaded, setIsLoaded] = useState(false);
  const [chapterTitle, setChapterTitle] = useState('');
  const [showToc, setShowToc] = useState(false);
  const [toc, setToc] = useState<TocItem[]>([]);

  const progressKey = `epub-progress-${bookId}`;

  const applyTheme = useCallback((rendition: Rendition) => {
    const isDark = document.documentElement.classList.contains('dark');
    rendition.themes.default({
      body: {
        color: isDark ? '#e0dcd0' : '#2c2c2c',
        background: isDark ? '#1a1a2e' : '#faf8f5',
        'font-family': 'Georgia, "Noto Serif SC", serif',
        'line-height': '1.8',
        padding: '0 12px',
        overflow: 'hidden',
      },
      a: { color: isDark ? '#c9a96e' : '#6b4c2a' },
    });
    rendition.themes.fontSize(`${FONT_SIZES[fontSize]}%`);
  }, [fontSize]);

  useEffect(() => {
    if (!viewerRef.current) return;
    const book = ePub(url);
    bookRef.current = book;

    const el = viewerRef.current;
    const w = el.clientWidth || window.innerWidth;
    const h = window.innerHeight - 110;
    el.style.height = h + 'px';

    const rendition = book.renderTo(el, {
      width: w,
      height: h,
      flow: 'paginated',
      spread: 'none',
    });
    renditionRef.current = rendition;

    applyTheme(rendition);

    // Generate locations for seek
    book.ready.then(() => {
      return book.locations.generate(1600);
    }).then(() => {
      setLocationsReady(true);
    });

    // Load TOC
    book.loaded.navigation.then((nav) => {
      if (nav && nav.toc) {
        setToc(nav.toc as TocItem[]);
      }
    });

    // Restore saved position
    const saved = localStorage.getItem(progressKey);
    if (saved) {
      rendition.display(saved);
    } else {
      rendition.display();
    }

    rendition.on('relocated', (location: any) => {
      setIsLoaded(true);
      if (location.start?.cfi) {
        localStorage.setItem(progressKey, location.start.cfi);
      }
      // Use locations percentage if available, otherwise estimate from spine
      if (book.locations && book.locations.length() > 0 && location.start?.percentage !== undefined && location.start.percentage > 0) {
        setProgress(Math.round(location.start.percentage * 100));
      } else if (location.start?.displayed) {
        // Estimate from spine position
        const spine = (book as any).spine;
        if (spine && spine.items && location.start.index !== undefined) {
          const pct = Math.round((location.start.index / spine.items.length) * 100);
          setProgress(pct);
        }
      }
    });

    // Track chapter title
    rendition.on('rendered', (section: any) => {
      const nav = book.navigation;
      if (nav && section.href) {
        const tocItems = nav.toc || [];
        const found = tocItems.find((item: any) => section.href.includes(item.href));
        if (found) setChapterTitle(found.label?.trim() || '');
      }
    });

    // Keyboard nav
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') rendition.prev();
      if (e.key === 'ArrowRight') rendition.next();
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    rendition.on('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
      book.destroy();
    };
  }, [url, progressKey, onClose, applyTheme]);

  // Update font size / theme when changed
  useEffect(() => {
    if (renditionRef.current) {
      applyTheme(renditionRef.current);
    }
  }, [fontSize, applyTheme]);

  const goPrev = () => renditionRef.current?.prev();
  const goNext = () => renditionRef.current?.next();

  const [locationsReady, setLocationsReady] = useState(false);

  const seekToPercent = useCallback((pct: number) => {
    const book = bookRef.current;
    if (!book) return;
    
    if (locationsReady && book.locations) {
      const cfi = book.locations.cfiFromPercentage(pct / 100);
      if (cfi) {
        renditionRef.current?.display(cfi);
        return;
      }
    }
    
    // Fallback: jump by spine index
    const spine = (book as any).spine;
    if (spine && spine.items) {
      const idx = Math.floor((pct / 100) * spine.items.length);
      const item = spine.items[Math.min(idx, spine.items.length - 1)];
      if (item?.href) {
        renditionRef.current?.display(item.href);
      }
    }
  }, [locationsReady]);

  const goToChapter = (href: string) => {
    renditionRef.current?.display(href);
    setShowToc(false);
  };

  // Swipe support
  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;
    let startX = 0;
    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) {
        dx > 0 ? goPrev() : goNext();
      }
    };
    el.addEventListener('touchstart', onStart, { passive: true });
    el.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onStart);
      el.removeEventListener('touchend', onEnd);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[var(--color-bg)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
        <button onClick={onClose} className="text-sm font-medium text-[var(--color-accent)] hover:underline">
          ✕ 关闭
        </button>
        <button
          onClick={() => setShowToc(!showToc)}
          className="text-xs text-[var(--color-text-secondary)] truncate max-w-[50%] hover:text-[var(--color-accent)] flex items-center gap-1"
        >
          <span>☰</span>
          <span className="truncate">{chapterTitle || '目录'}</span>
        </button>
        <div className="flex items-center gap-1">
          {(['small', 'medium', 'large'] as FontSize[]).map(s => (
            <button
              key={s}
              onClick={() => setFontSize(s)}
              className={`px-2 py-1 text-xs rounded ${fontSize === s ? 'bg-[var(--color-accent)] text-white' : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'}`}
            >
              {s === 'small' ? 'A' : s === 'medium' ? 'A+' : 'A++'}
            </button>
          ))}
        </div>
      </div>

      {/* TOC Panel */}
      {showToc && (
        <div className="absolute top-[45px] left-0 right-0 bottom-0 z-50 flex">
          <div className="w-full max-w-md bg-[var(--color-bg)] border-r border-[var(--color-border)] shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
              <h3 className="font-serif-cn font-bold text-lg text-[var(--color-text)]">📖 章节目录</h3>
              <button onClick={() => setShowToc(false)} className="text-sm text-[var(--color-accent)]">关闭</button>
            </div>
            <div className="py-2">
              {toc.length === 0 ? (
                <p className="px-4 py-8 text-center text-sm text-[var(--color-text-secondary)]">
                  此书籍无目录信息
                </p>
              ) : (
                toc.map((item, i) => (
                  <div key={i}>
                    <button
                      onClick={() => goToChapter(item.href)}
                      className="w-full text-left px-4 py-3 text-sm hover:bg-[var(--color-bg-secondary)] transition-colors border-b border-[var(--color-border)]/30 text-[var(--color-text)]"
                    >
                      {item.label?.trim()}
                    </button>
                    {item.subitems && item.subitems.map((sub, j) => (
                      <button
                        key={j}
                        onClick={() => goToChapter(sub.href)}
                        className="w-full text-left px-8 py-2.5 text-xs hover:bg-[var(--color-bg-secondary)] transition-colors text-[var(--color-text-secondary)]"
                      >
                        {sub.label?.trim()}
                      </button>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="flex-1 bg-black/30" onClick={() => setShowToc(false)} />
        </div>
      )}

      {/* Reader */}
      <div className="flex-1 relative overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-secondary)]">
            加载中 Loading...
          </div>
        )}
        <div ref={viewerRef} style={{ width: '100%', height: '100%' }} />
        {/* Tap zones */}
        <div className="absolute inset-y-0 left-0 w-1/4 cursor-pointer" onClick={goPrev} />
        <div className="absolute inset-y-0 right-0 w-1/4 cursor-pointer" onClick={goNext} />
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
        <div className="flex items-center gap-3">
          <button onClick={goPrev} className="text-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">‹</button>
          <div
            className="flex-1 h-6 flex items-center cursor-pointer group"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
              seekToPercent(Math.max(0, Math.min(100, pct)));
            }}
            onMouseDown={(e) => {
              const bar = e.currentTarget;
              const move = (ev: MouseEvent) => {
                const rect = bar.getBoundingClientRect();
                const pct = Math.round(((ev.clientX - rect.left) / rect.width) * 100);
                setProgress(Math.max(0, Math.min(100, pct)));
              };
              const up = (ev: MouseEvent) => {
                const rect = bar.getBoundingClientRect();
                const pct = Math.round(((ev.clientX - rect.left) / rect.width) * 100);
                seekToPercent(Math.max(0, Math.min(100, pct)));
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', up);
              };
              document.addEventListener('mousemove', move);
              document.addEventListener('mouseup', up);
            }}
            onTouchStart={(e) => {
              const bar = e.currentTarget;
              const onTouchMove = (ev: TouchEvent) => {
                const rect = bar.getBoundingClientRect();
                const pct = Math.round(((ev.touches[0].clientX - rect.left) / rect.width) * 100);
                setProgress(Math.max(0, Math.min(100, pct)));
              };
              const onTouchEnd = (ev: TouchEvent) => {
                const rect = bar.getBoundingClientRect();
                const pct = Math.round(((ev.changedTouches[0].clientX - rect.left) / rect.width) * 100);
                seekToPercent(Math.max(0, Math.min(100, pct)));
                bar.removeEventListener('touchmove', onTouchMove);
                bar.removeEventListener('touchend', onTouchEnd);
              };
              bar.addEventListener('touchmove', onTouchMove, { passive: true });
              bar.addEventListener('touchend', onTouchEnd);
            }}
          >
            <div className="w-full h-1.5 rounded-full bg-[var(--color-border)] relative overflow-visible">
              <div className="h-full bg-[var(--color-accent)] rounded-full transition-[width] duration-100" style={{ width: `${progress}%` }} />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--color-accent)] shadow-md border-2 border-white dark:border-gray-800 group-hover:scale-125 transition-transform"
                style={{ left: `calc(${progress}% - 8px)` }}
              />
            </div>
          </div>
          <button onClick={goNext} className="text-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">›</button>
          <span className="text-xs text-[var(--color-text-secondary)] w-10 text-right">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
