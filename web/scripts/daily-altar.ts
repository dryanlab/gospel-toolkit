#!/usr/bin/env tsx
// Runner for family altar daily content
// Usage: tsx daily-altar.ts [YYYY-MM-DD]
// Outputs compact JSON with only the fields needed for Telegram push.
// Keeps output small (a few KB) and matches what the website shows,
// including seasonal overrides (Passion Week / Easter / Advent).

import { getDailyContent } from '@/lib/family-altar';

const arg = process.argv[2];
let date: Date;
if (arg) {
  // Parse YYYY-MM-DD as local date (noon to avoid DST edges).
  const [y, m, d] = arg.split('-').map(Number);
  date = new Date(y, m - 1, d, 12, 0, 0);
} else {
  date = new Date();
}

const full = getDailyContent(date);

// Slim payload: only what the Telegram push needs.
const slim = {
  date: full.date,
  theme: {
    id: full.theme.id,
    name_zh: full.theme.name_zh,
    name_en: full.theme.name_en,
    icon: full.theme.icon,
  },
  dayInTheme: full.dayInTheme,
  totalDaysInTheme: full.totalDaysInTheme,
  isSeasonal: full.isSeasonal,
  scripture: full.scripture,
  reflection: full.reflection,
  question: full.question,
  prayer: full.prayer,
  catechism: full.catechism,
};

process.stdout.write(JSON.stringify(slim));
