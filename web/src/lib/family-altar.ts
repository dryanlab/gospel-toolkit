import { themes, mealPrayers, type AltarTheme, type Scripture, type BilingualText } from '@/data/family-altar-data';
import { allCatechismQuestions } from '@/lib/data';

export interface DailyContent {
  date: string;
  theme: AltarTheme;
  scripture: Scripture;
  reflection: BilingualText;
  question: BilingualText;
  prayer: BilingualText;
  hymnKeywords: string[];
  catechism: { number: number; id: string; question_zh: string; question_en: string };
  mealPrayer: BilingualText;
}

// Simple seeded pseudo-random number generator
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

function dayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / 86400000);
}

export function getDailyContent(date: Date): DailyContent {
  const year = date.getFullYear();
  const doy = dayOfYear(date);
  const absoluteDay = year * 365 + doy;

  // Theme changes every 15 days, cycling through all themes
  const themeIndex = Math.floor(absoluteDay / 15) % themes.length;
  const theme = themes[themeIndex];

  const rand = seededRandom(absoluteDay);
  const pickIndex = (poolSize: number) => Math.floor(rand() * poolSize);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = theme as any;

  let scripture: Scripture;
  let reflection: BilingualText;
  let question: BilingualText;
  let prayer: BilingualText;

  // Support both new DevotionalUnit structure and old separate arrays
  if (t.devotionals && Array.isArray(t.devotionals)) {
    const dayInTheme = absoluteDay % 15;
    const devotional = t.devotionals[dayInTheme % t.devotionals.length];
    scripture = devotional.scripture;
    reflection = devotional.reflection;
    question = devotional.question;
    prayer = devotional.prayer;
  } else {
    // Old structure: separate arrays, use same scripture index for coherence
    const scriptureIdx = pickIndex(t.scriptures.length);
    scripture = t.scriptures[scriptureIdx];
    reflection = t.reflections[scriptureIdx % t.reflections.length];
    question = t.questions[scriptureIdx % t.questions.length];
    prayer = t.prayers[pickIndex(t.prayers.length)];
  }

  const mealPrayer = mealPrayers[pickIndex(mealPrayers.length)];

  // Catechism: cycle through all questions by day of year
  const catQ = allCatechismQuestions[doy % allCatechismQuestions.length];

  const dateStr = `${year}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  return {
    date: dateStr,
    theme,
    scripture,
    reflection,
    question,
    prayer,
    hymnKeywords: theme.hymnKeywords,
    catechism: {
      number: catQ.number,
      id: catQ.id,
      question_zh: catQ.question_zh || catQ.question_en,
      question_en: catQ.question_en,
    },
    mealPrayer,
  };
}
