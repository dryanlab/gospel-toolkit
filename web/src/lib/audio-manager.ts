// Global audio manager — ensures only one TTS plays at a time
let currentAudio: HTMLAudioElement | null = null;
let currentStop: (() => void) | null = null;

export function registerAudio(audio: HTMLAudioElement, onStop: () => void) {
  // Stop any existing playback
  stopCurrent();
  currentAudio = audio;
  currentStop = onStop;
}

// Replace current registration without stopping — for sequential chunk playback
export function replaceAudio(audio: HTMLAudioElement, onStop: () => void) {
  currentAudio = audio;
  currentStop = onStop;
}

export function stopCurrent() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  if (currentStop) {
    currentStop();
    currentStop = null;
  }
  // Also stop Web Speech API
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

export function unregister(audio: HTMLAudioElement) {
  if (currentAudio === audio) {
    currentAudio = null;
    currentStop = null;
  }
}
