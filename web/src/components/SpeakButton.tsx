'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { stopCurrent, registerAudio, replaceAudio, unregister } from '@/lib/audio-manager';

function getTtsUrl() {
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return 'http://localhost:3000';
  }
  return 'https://tts.sudoem.org';
}

// Preprocess text for TTS: expand abbreviations and convert verse refs
const zhBookAbbrevs: Record<string, string> = {
  '创': '创世记', '出': '出埃及记', '利': '利未记', '民': '民数记', '申': '申命记',
  '书': '约书亚记', '士': '士师记', '得': '路得记',
  '撒上': '撒母耳记上', '撒下': '撒母耳记下', '王上': '列王纪上', '王下': '列王纪下',
  '代上': '历代志上', '代下': '历代志下', '拉': '以斯拉记', '尼': '尼希米记',
  '斯': '以斯帖记', '伯': '约伯记', '诗': '诗篇', '箴': '箴言', '传': '传道书',
  '歌': '雅歌', '赛': '以赛亚书', '耶': '耶利米书', '哀': '耶利米哀歌',
  '结': '以西结书', '但': '但以理书', '何': '何西阿书', '珥': '约珥书',
  '摩': '阿摩司书', '俄': '俄巴底亚书', '拿': '约拿书', '弥': '弥迦书',
  '鸿': '那鸿书', '哈': '哈巴谷书', '番': '西番雅书', '该': '哈该书',
  '亚': '撒迦利亚书', '玛': '玛拉基书',
  '太': '马太福音', '可': '马可福音', '路': '路加福音', '约': '约翰福音',
  '徒': '使徒行传', '罗': '罗马书', '林前': '哥林多前书', '林后': '哥林多后书',
  '加': '加拉太书', '弗': '以弗所书', '腓': '腓立比书', '西': '歌罗西书',
  '帖前': '帖撒罗尼迦前书', '帖后': '帖撒罗尼迦后书',
  '提前': '提摩太前书', '提后': '提摩太后书', '多': '提多书', '门': '腓利门书',
  '来': '希伯来书', '雅': '雅各书',
  '彼前': '彼得前书', '彼后': '彼得后书',
  '约壹': '约翰一书', '约贰': '约翰二书', '约叁': '约翰三书',
  '犹': '犹大书', '启': '启示录',
};

function preprocessForTts(text: string, lang: 'zh' | 'en'): string {
  if (lang === 'zh') {
    // Expand abbreviations: "太 5:3" → "马太福音 5:3", "林前 13:4" → "哥林多前书 13:4"
    // Sort by length descending so "林前" matches before "林"
    const sorted = Object.keys(zhBookAbbrevs).sort((a, b) => b.length - a.length);
    let result = text;
    for (const abbr of sorted) {
      // Match abbreviation followed by space and digit (verse ref context)
      const re = new RegExp(`(^|[\\s，。；、（(])${abbr}\\s*(\\d)`, 'g');
      result = result.replace(re, `$1${zhBookAbbrevs[abbr]} $2`);
    }
    // Convert verse numbers: "1:27" → "1章27节"
    return result
      .replace(/(\d+):(\d+)-(\d+)/g, '$1章$2到$3节')
      .replace(/(\d+):(\d+)/g, '$1章$2节');
  } else {
    const enBookAbbrevs: Record<string, string> = {
      'Gen': 'Genesis', 'Ex': 'Exodus', 'Lev': 'Leviticus', 'Num': 'Numbers', 'Deut': 'Deuteronomy',
      'Josh': 'Joshua', 'Judg': 'Judges', 'Ru': 'Ruth',
      '1 Sam': 'First Samuel', '2 Sam': 'Second Samuel', '1 Kgs': 'First Kings', '2 Kgs': 'Second Kings',
      '1 Chr': 'First Chronicles', '2 Chr': 'Second Chronicles', 'Ezra': 'Ezra', 'Neh': 'Nehemiah',
      'Est': 'Esther', 'Ps': 'Psalms', 'Prov': 'Proverbs', 'Eccl': 'Ecclesiastes',
      'Isa': 'Isaiah', 'Jer': 'Jeremiah', 'Lam': 'Lamentations', 'Ezek': 'Ezekiel', 'Dan': 'Daniel',
      'Hos': 'Hosea', 'Obad': 'Obadiah', 'Mic': 'Micah', 'Nah': 'Nahum', 'Hab': 'Habakkuk',
      'Zeph': 'Zephaniah', 'Hag': 'Haggai', 'Zech': 'Zechariah', 'Mal': 'Malachi',
      'Matt': 'Matthew', 'Mk': 'Mark', 'Lk': 'Luke', 'Jn': 'John',
      'Rom': 'Romans', '1 Cor': 'First Corinthians', '2 Cor': 'Second Corinthians',
      'Gal': 'Galatians', 'Eph': 'Ephesians', 'Phil': 'Philippians', 'Col': 'Colossians',
      '1 Thess': 'First Thessalonians', '2 Thess': 'Second Thessalonians',
      '1 Tim': 'First Timothy', '2 Tim': 'Second Timothy', 'Tit': 'Titus', 'Phlm': 'Philemon',
      'Heb': 'Hebrews', 'Jas': 'James',
      '1 Pet': 'First Peter', '2 Pet': 'Second Peter',
      '1 Jn': 'First John', '2 Jn': 'Second John', '3 Jn': 'Third John',
      'Rev': 'Revelation',
    };
    const sorted = Object.keys(enBookAbbrevs).sort((a, b) => b.length - a.length);
    let result = text;
    for (const abbr of sorted) {
      const escaped = abbr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(`(^|[\\s,;.(])${escaped}\\.?\\s*(\\d)`, 'g');
      result = result.replace(re, `$1${enBookAbbrevs[abbr]} $2`);
    }
    return result
      .replace(/(\d+):(\d+)-(\d+)/g, 'chapter $1 verses $2 to $3')
      .replace(/(\d+):(\d+)/g, 'chapter $1 verse $2');
  }
}

// Split text into chunks by paragraphs/sentences, ~500 chars each
function splitText(text: string): string[] {
  // Split by double newline (paragraphs) first
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim());
  const chunks: string[] = [];
  let current = '';

  for (const para of paragraphs) {
    // If adding this paragraph keeps us under 500 chars, accumulate
    if (current && (current.length + para.length) > 500) {
      chunks.push(current.trim());
      current = para;
    } else {
      current = current ? current + '\n\n' + para : para;
    }
  }
  if (current.trim()) chunks.push(current.trim());

  // If no paragraphs found (single block), split by sentences
  if (chunks.length <= 1 && text.length > 500) {
    const sentences = text.split(/(?<=[。！？.!?])\s*/);
    chunks.length = 0;
    current = '';
    for (const s of sentences) {
      if (current && (current.length + s.length) > 500) {
        chunks.push(current.trim());
        current = s;
      } else {
        current = current ? current + ' ' + s : s;
      }
    }
    if (current.trim()) chunks.push(current.trim());
  }

  return chunks.length > 0 ? chunks : [text];
}

export default function SpeakButton({ text, lang, gender, className }: { text: string; lang: 'zh' | 'en'; gender?: 'male' | 'female'; className?: string }) {
  const [state, setState] = useState<'idle' | 'loading' | 'playing' | 'paused'>('idle');
  const cancelledRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();

  // Stop playback on route change
  useEffect(() => {
    return () => {
      cancelledRef.current = true;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setState('idle');
    };
  }, [pathname]);

  const stopPlayback = () => {
    cancelledRef.current = true;
    stopCurrent();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setState('idle');
  };

  const handleSpeak = async () => {
    // Pause
    if (state === 'playing') {
      if (audioRef.current) {
        audioRef.current.pause();
        setState('paused');
      }
      return;
    }
    // Resume
    if (state === 'paused') {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
        setState('playing');
      }
      return;
    }
    if (state === 'loading') {
      stopPlayback();
      return;
    }

    stopCurrent();
    cancelledRef.current = false;
    // Register a dummy audio so other buttons can stop us
    const sentinel = new Audio();
    audioRef.current = sentinel;
    registerAudio(sentinel, () => {
      cancelledRef.current = true;
      setState('idle');
    });
    setState('loading');

    const chunks = splitText(preprocessForTts(text.replace(/[#*]/g, ''), lang));
    const ttsUrl = getTtsUrl();

    // Pre-fetch first chunk
    let nextBlobPromise: Promise<Blob | null> | null = null;

    const fetchChunk = async (chunk: string): Promise<Blob | null> => {
      try {
        const res = await fetch(ttsUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: chunk, lang, ...(gender ? { gender } : {}) }),
        });
        if (!res.ok) return null;
        return await res.blob();
      } catch {
        return null;
      }
    };

    const playBlob = (blob: Blob): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (cancelledRef.current) { reject(); return; }
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        audioRef.current = audio;
        // Replace without stopping — same button's next chunk
        replaceAudio(audio, () => {
          cancelledRef.current = true;
          setState('idle');
        });
        audio.onended = () => { URL.revokeObjectURL(url); resolve(); };
        audio.onerror = () => { URL.revokeObjectURL(url); reject(); };
        audio.play().catch(reject);
      });
    };

    try {
      for (let i = 0; i < chunks.length; i++) {
        if (cancelledRef.current) break;

        // Get current chunk (either pre-fetched or fetch now)
        const blobPromise = nextBlobPromise || fetchChunk(chunks[i]);
        nextBlobPromise = null;

        const blob = await blobPromise;
        if (!blob || cancelledRef.current) break;

        // Pre-fetch next chunk while current plays
        if (i + 1 < chunks.length) {
          nextBlobPromise = fetchChunk(chunks[i + 1]);
        }

        if (i === 0) setState('playing');

        await playBlob(blob);
      }
    } catch {
      // Playback error — silent
    }

    if (!cancelledRef.current) {
      setState('idle');
    }
  };

  const mainLabel = lang === 'zh'
    ? (state === 'loading' ? '⏳' : state === 'playing' ? '⏸️ 暂停' : state === 'paused' ? '▶️ 继续' : '🔊 中文')
    : (state === 'loading' ? '⏳' : state === 'playing' ? '⏸️ Pause' : state === 'paused' ? '▶️ Resume' : '🔊 EN');

  return (
    <span className={`inline-flex items-center gap-1 ${className || ''}`}>
      <button
        onClick={handleSpeak}
        className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)] hover:text-[var(--color-accent)]/80 transition-colors"
        title={state === 'playing' ? '暂停 Pause' : state === 'paused' ? '继续 Resume' : '朗读 Read aloud'}
      >
        {mainLabel}
      </button>
      {(state === 'playing' || state === 'paused') && (
        <button
          onClick={stopPlayback}
          className="inline-flex items-center gap-1 text-xs text-[var(--color-text-secondary)] hover:text-red-500 transition-colors"
          title="停止 Stop"
        >
          ⏹️ {lang === 'zh' ? '停止' : 'Stop'}
        </button>
      )}
    </span>
  );
}
