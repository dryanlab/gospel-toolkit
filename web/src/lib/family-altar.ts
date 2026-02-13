import { themes, mealPrayers, type AltarTheme, type Scripture, type BilingualText } from '@/data/family-altar-data';
import { allCatechismQuestions } from '@/lib/data';

export interface DailyContent {
  date: string;
  theme: AltarTheme;
  dayInTheme: number;
  totalDaysInTheme: number;
  isSeasonal: boolean;
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

// Calculate Easter Sunday using the Anonymous Gregorian algorithm (Computus)
function getEasterDate(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31); // 3=March, 4=April
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

// Calculate days between two dates (date2 - date1 in days)
function daysBetween(date1: Date, date2: Date): number {
  const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  return Math.round((d2.getTime() - d1.getTime()) / 86400000);
}

// Check if date falls in a seasonal period, return { theme, dayInTheme } or null
function getSeasonalOverride(date: Date): { theme: AltarTheme; dayInTheme: number; totalDays: number } | null {
  const year = date.getFullYear();

  // Find seasonal themes by id
  const passionTheme = themes.find(t => t.id === 'passion');
  const easterTheme = themes.find(t => t.id === 'resurrection');
  const adventTheme = themes.find(t => t.id === 'advent');

  // --- Advent: Dec 10-24 (15 days) ---
  if (adventTheme) {
    const adventStart = new Date(year, 11, 10); // Dec 10
    const diff = daysBetween(adventStart, date);
    if (diff >= 0 && diff < 15) {
      return { theme: adventTheme, dayInTheme: diff + 1, totalDays: 15 };
    }
  }

  // --- Passion Week + Easter: 30 consecutive days centered on Easter ---
  const easter = getEasterDate(year);

  // Passion Week: 15 days ending the day before Easter (Easter - 15 to Easter - 1)
  if (passionTheme) {
    const passionStart = new Date(easter);
    passionStart.setDate(passionStart.getDate() - 15);
    const diff = daysBetween(passionStart, date);
    if (diff >= 0 && diff < 15) {
      return { theme: passionTheme, dayInTheme: diff + 1, totalDays: 15 };
    }
  }

  // Easter/Resurrection: 15 days starting Easter Sunday
  if (easterTheme) {
    const diff = daysBetween(easter, date);
    if (diff >= 0 && diff < 15) {
      return { theme: easterTheme, dayInTheme: diff + 1, totalDays: 15 };
    }
  }

  return null;
}

// Get regular (non-seasonal) themes for rotation
function getRegularThemes(): AltarTheme[] {
  const seasonalIds = new Set(['passion', 'resurrection', 'advent']);
  return themes.filter(t => !seasonalIds.has(t.id));
}

export function getDailyContent(date: Date): DailyContent {
  const year = date.getFullYear();
  const doy = dayOfYear(date);
  const absoluteDay = year * 365 + doy;

  const rand = seededRandom(absoluteDay);
  const pickIndex = (poolSize: number) => Math.floor(rand() * poolSize);

  // Check for seasonal override first
  const seasonal = getSeasonalOverride(date);

  let theme: AltarTheme;
  let dayInTheme: number;
  let totalDaysInTheme: number;
  let isSeasonal: boolean;

  if (seasonal) {
    theme = seasonal.theme;
    dayInTheme = seasonal.dayInTheme;
    totalDaysInTheme = seasonal.totalDays;
    isSeasonal = true;
  } else {
    // Regular rotation using only non-seasonal themes
    const regularThemes = getRegularThemes();
    const themeIndex = Math.floor(absoluteDay / 15) % regularThemes.length;
    theme = regularThemes[themeIndex];
    dayInTheme = (absoluteDay % 15) + 1;
    totalDaysInTheme = 15;
    isSeasonal = false;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = theme as any;

  let scripture: Scripture;
  let reflection: BilingualText;
  let question: BilingualText;
  let prayer: BilingualText;

  if (t.devotionals && Array.isArray(t.devotionals)) {
    const idx = (dayInTheme - 1) % t.devotionals.length;
    const devotional = t.devotionals[idx];
    scripture = devotional.scripture;
    reflection = devotional.reflection;
    question = devotional.question;
    prayer = devotional.prayer;
  } else {
    const scriptureIdx = pickIndex(t.scriptures.length);
    scripture = t.scriptures[scriptureIdx];
    reflection = t.reflections[scriptureIdx % t.reflections.length];
    question = t.questions[scriptureIdx % t.questions.length];
    prayer = t.prayers[pickIndex(t.prayers.length)];
  }

  const mealPrayer = mealPrayers[pickIndex(mealPrayers.length)];
  const catQ = allCatechismQuestions[doy % allCatechismQuestions.length];
  const dateStr = `${year}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  return {
    date: dateStr,
    theme,
    dayInTheme,
    totalDaysInTheme,
    isSeasonal,
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

// Export for external use (e.g., guide section)
export { getEasterDate };
