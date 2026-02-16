'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { registerAudio, stopCurrent, unregister } from '@/lib/audio-manager';

function getTtsUrl() {
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return 'http://localhost:3000';
  }
  return 'https://tts.sudoem.org';
}

export default function SpeakButton({ text, lang, className }: { text: string; lang: 'zh' | 'en'; className?: string }) {
  const [state, setState] = useState<'idle' | 'loading' | 'playing'>('idle');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();

  // Stop playback on route change
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        unregister(audioRef.current);
        audioRef.current.pause();
        audioRef.current = null;
      }
      setState('idle');
    };
  }, [pathname]);

  const handleSpeak = async () => {
    if (state === 'playing') {
      stopCurrent();
      if (audioRef.current) { audioRef.current.pause(); unregister(audioRef.current); audioRef.current = null; }
      setState('idle');
      return;
    }
    if (state === 'loading') return;

    // Stop any other playing audio first
    stopCurrent();
    setState('loading');

    try {
      const res = await fetch(getTtsUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, lang }),
      });
      if (!res.ok) throw new Error('TTS failed');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;

      const cleanup = () => { setState('idle'); unregister(audio); audioRef.current = null; URL.revokeObjectURL(url); };
      audio.onended = cleanup;
      audio.onerror = cleanup;

      registerAudio(audio, () => setState('idle'));
      await audio.play();
      setState('playing');
    } catch {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang === 'zh' ? 'zh-CN' : 'en-US';
        utterance.rate = lang === 'zh' ? 0.9 : 0.85;
        utterance.onend = () => setState('idle');
        utterance.onerror = () => setState('idle');
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
        setState('playing');
      } else {
        setState('idle');
      }
    }
  };

  const label = lang === 'zh'
    ? (state === 'loading' ? '⏳' : state === 'playing' ? '⏹️ 停止' : '🔊 中文')
    : (state === 'loading' ? '⏳' : state === 'playing' ? '⏹️ Stop' : '🔊 EN');

  return (
    <button
      onClick={handleSpeak}
      disabled={state === 'loading'}
      className={`inline-flex items-center gap-1 text-xs text-[var(--color-accent)] hover:text-[var(--color-accent)]/80 transition-colors disabled:opacity-50 ${className || ''}`}
      title={state === 'playing' ? '停止 Stop' : '朗读 Read aloud'}
    >
      {label}
    </button>
  );
}
