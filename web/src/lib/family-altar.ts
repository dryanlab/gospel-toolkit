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

  // Theme changes every 2-3 weeks (17 days cycle for variety)
  const themeIndex = Math.floor(absoluteDay / 17) % themes.length;
  const theme = themes[themeIndex];

  // Seeded random for this specific day
  const rand = seededRandom(absoluteDay);

  // Pick items from pools using seeded random
  const pickIndex = (poolSize: number) => Math.floor(rand() * poolSize);

  // Pick one devotional unit for today — scripture, reflection, question, prayer all come from the same unit
  const devotionalIdx = pickIndex(theme.devotionals.length);
  const devotional = theme.devotionals[devotionalIdx];

  const scripture = devotional.scripture;
  const reflection = devotional.reflection;
  const question = devotional.question;
  const prayer = devotional.prayer;

  const mealPrayer = mealPrayers[pickIndex(mealPrayers.length)];

  // Catechism: cycle through all questions by day
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
