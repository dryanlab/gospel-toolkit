'use client';
import { useState, useEffect } from 'react';

const verseCache: Record<string, { zh: string; en: string } | null> = {};

const BOOK_NUM: Record<string, number> = {
  "genesis": 1, "gen": 1, "exodus": 2, "ex": 2, "leviticus": 3, "lev": 3,
  "numbers": 4, "num": 4, "deuteronomy": 5, "deut": 5,
  "joshua": 6, "josh": 6, "judges": 7, "judg": 7, "ruth": 8,
  "1 samuel": 9, "1 sam": 9, "2 samuel": 10, "2 sam": 10,
  "1 kings": 11, "1 kgs": 11, "2 kings": 12, "2 kgs": 12,
  "1 chronicles": 13, "1 chr": 13, "2 chronicles": 14, "2 chr": 14,
  "ezra": 15, "nehemiah": 16, "neh": 16, "esther": 17, "est": 17,
  "job": 18, "psalms": 19, "psalm": 19, "ps": 19,
  "proverbs": 20, "prov": 20, "ecclesiastes": 21, "eccl": 21,
  "song of solomon": 22, "song": 22,
  "isaiah": 23, "isa": 23, "jeremiah": 24, "jer": 24,
  "lamentations": 25, "lam": 25, "ezekiel": 26, "ezek": 26,
  "daniel": 27, "dan": 27, "hosea": 28, "hos": 28,
  "joel": 29, "amos": 30, "obadiah": 31, "obad": 31,
  "jonah": 32, "micah": 33, "mic": 33, "nahum": 34, "nah": 34,
  "habakkuk": 35, "hab": 35, "zephaniah": 36, "zeph": 36,
  "haggai": 37, "hag": 37, "zechariah": 38, "zech": 38, "malachi": 39, "mal": 39,
  "matthew": 40, "matt": 40, "mark": 41, "mk": 41,
  "luke": 42, "lk": 42, "john": 43, "jn": 43,
  "acts": 44, "romans": 45, "rom": 45,
  "1 corinthians": 46, "1 cor": 46, "2 corinthians": 47, "2 cor": 47,
  "galatians": 48, "gal": 48, "ephesians": 49, "eph": 49,
  "philippians": 50, "phil": 50, "colossians": 51, "col": 51,
  "1 thessalonians": 52, "1 thess": 52, "2 thessalonians": 53, "2 thess": 53,
  "1 timothy": 54, "1 tim": 54, "2 timothy": 55, "2 tim": 55,
  "titus": 56, "tit": 56, "philemon": 57, "phlm": 57,
  "hebrews": 58, "heb": 58, "james": 59, "jas": 59,
  "1 peter": 60, "1 pet": 60, "2 peter": 61, "2 pet": 61,
  "1 john": 62, "1 jn": 62, "2 john": 63, "2 jn": 63,
  "3 john": 64, "3 jn": 64, "jude": 65, "revelation": 66, "rev": 66,
};

const BOOK_ZH: Record<string, string> = {
  "genesis": "创世记", "gen": "创世记", "exodus": "出埃及记", "ex": "出埃及记",
  "leviticus": "利未记", "lev": "利未记", "numbers": "民数记", "num": "民数记",
  "deuteronomy": "申命记", "deut": "申命记", "joshua": "约书亚记", "josh": "约书亚记",
  "judges": "士师记", "judg": "士师记", "ruth": "路得记",
  "1 samuel": "撒母耳记上", "1 sam": "撒母耳记上", "2 samuel": "撒母耳记下", "2 sam": "撒母耳记下",
  "1 kings": "列王纪上", "1 kgs": "列王纪上", "2 kings": "列王纪下", "2 kgs": "列王纪下",
  "1 chronicles": "历代志上", "1 chr": "历代志上", "2 chronicles": "历代志下", "2 chr": "历代志下",
  "ezra": "以斯拉记", "nehemiah": "尼希米记", "neh": "尼希米记",
  "esther": "以斯帖记", "est": "以斯帖记", "job": "约伯记",
  "psalms": "诗篇", "psalm": "诗篇", "ps": "诗篇",
  "proverbs": "箴言", "prov": "箴言", "ecclesiastes": "传道书", "eccl": "传道书",
  "song of solomon": "雅歌", "song": "雅歌",
  "isaiah": "以赛亚书", "isa": "以赛亚书", "jeremiah": "耶利米书", "jer": "耶利米书",
  "lamentations": "耶利米哀歌", "lam": "耶利米哀歌",
  "ezekiel": "以西结书", "ezek": "以西结书", "daniel": "但以理书", "dan": "但以理书",
  "hosea": "何西阿书", "hos": "何西阿书", "joel": "约珥书",
  "amos": "阿摩司书", "obadiah": "俄巴底亚书", "obad": "俄巴底亚书",
  "jonah": "约拿书", "micah": "弥迦书", "mic": "弥迦书",
  "nahum": "那鸿书", "nah": "那鸿书", "habakkuk": "哈巴谷书", "hab": "哈巴谷书",
  "zephaniah": "西番雅书", "zeph": "西番雅书",
  "haggai": "哈该书", "hag": "哈该书", "zechariah": "撒迦利亚书", "zech": "撒迦利亚书",
  "malachi": "玛拉基书", "mal": "玛拉基书",
  "matthew": "马太福音", "matt": "马太福音", "mark": "马可福音", "mk": "马可福音",
  "luke": "路加福音", "lk": "路加福音", "john": "约翰福音", "jn": "约翰福音",
  "acts": "使徒行传", "romans": "罗马书", "rom": "罗马书",
  "1 corinthians": "哥林多前书", "1 cor": "哥林多前书",
  "2 corinthians": "哥林多后书", "2 cor": "哥林多后书",
  "galatians": "加拉太书", "gal": "加拉太书",
  "ephesians": "以弗所书", "eph": "以弗所书",
  "philippians": "腓立比书", "phil": "腓立比书",
  "colossians": "歌罗西书", "col": "歌罗西书",
  "1 thessalonians": "帖撒罗尼迦前书", "1 thess": "帖撒罗尼迦前书",
  "2 thessalonians": "帖撒罗尼迦后书", "2 thess": "帖撒罗尼迦后书",
  "1 timothy": "提摩太前书", "1 tim": "提摩太前书",
  "2 timothy": "提摩太后书", "2 tim": "提摩太后书",
  "titus": "提多书", "tit": "提多书", "philemon": "腓利门书", "phlm": "腓利门书",
  "hebrews": "希伯来书", "heb": "希伯来书", "james": "雅各书", "jas": "雅各书",
  "1 peter": "彼得前书", "1 pet": "彼得前书", "2 peter": "彼得后书", "2 pet": "彼得后书",
  "1 john": "约翰一书", "1 jn": "约翰一书", "2 john": "约翰二书", "2 jn": "约翰二书",
  "3 john": "约翰三书", "3 jn": "约翰三书",
  "jude": "犹大书", "revelation": "启示录", "rev": "启示录",
};

// Reverse mapping: Chinese book name → English key
const ZH_TO_EN: Record<string, string> = {};
for (const [en, zh] of Object.entries(BOOK_ZH)) {
  if (!ZH_TO_EN[zh]) ZH_TO_EN[zh] = en;
}
// Also handle common variants
const ZH_VARIANTS: Record<string, string> = {
  "约翰壹书": "1 john", "约翰贰书": "2 john", "约翰叁书": "3 john",
  "约翰一书": "1 john", "约翰二书": "2 john", "约翰三书": "3 john",
  "撒母耳记上": "1 samuel", "撒母耳记下": "2 samuel",
  "列王纪上": "1 kings", "列王纪下": "2 kings",
  "历代志上": "1 chronicles", "历代志下": "2 chronicles",
  "哥林多前书": "1 corinthians", "哥林多后书": "2 corinthians",
  "帖撒罗尼迦前书": "1 thessalonians", "帖撒罗尼迦后书": "2 thessalonians",
  "提摩太前书": "1 timothy", "提摩太后书": "2 timothy",
  "彼得前书": "1 peter", "彼得后书": "2 peter",
};
for (const [zh, en] of Object.entries(ZH_VARIANTS)) {
  ZH_TO_EN[zh] = en;
}

function normalizeToEnglish(verse: string): string | null {
  // Already English?
  if (/^[\d\s]*[A-Za-z]/.test(verse)) return verse;
  // Chinese: match "书名 章:节-节"
  const m = verse.match(/^(.+?)\s+(\d+):(\d+)(?:-(\d+))?$/);
  if (!m) return null;
  const zhBook = m[1].trim();
  const enKey = ZH_TO_EN[zhBook];
  if (!enKey) return null;
  // Capitalize for display
  const enBook = enKey.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return `${enBook} ${m[2]}:${m[3]}${m[4] ? '-' + m[4] : ''}`;
}

function isChineseRef(verse: string): boolean {
  return /^[^\x00-\x7F]/.test(verse);
}

function parseRef(verse: string): { bookNum: number; chapter: number; verseStart: number; verseEnd: number; bookKey: string } | null {
  // Try English first
  let match = verse.match(/^(\d?\s*[A-Za-z\s]+?)\s+(\d+):(\d+)(?:-(\d+))?$/);
  if (!match) {
    // Try converting from Chinese
    const en = normalizeToEnglish(verse);
    if (en) match = en.match(/^(\d?\s*[A-Za-z\s]+?)\s+(\d+):(\d+)(?:-(\d+))?$/);
  }
  if (!match) return null;
  const bookKey = match[1].trim().toLowerCase();
  const chapter = parseInt(match[2]);
  const verseStart = parseInt(match[3]);
  const verseEnd = match[4] ? parseInt(match[4]) : verseStart;
  const bookNum = BOOK_NUM[bookKey];
  if (!bookNum) return null;
  return { bookNum, chapter, verseStart, verseEnd, bookKey };
}

function getZhLabel(verse: string): string {
  if (isChineseRef(verse)) {
    const m = verse.match(/^(.+?)\s+(\d+.*)$/);
    return m ? `${m[1]} ${m[2]}` : verse;
  }
  const match = verse.match(/^(\d?\s*[A-Za-z\s]+?)\s+(\d+.*)$/);
  if (!match) return verse;
  const bookKey = match[1].trim().toLowerCase();
  const ref = match[2];
  const zhName = BOOK_ZH[bookKey];
  return zhName ? `${zhName} ${ref}` : verse;
}

function getEnLabel(verse: string): string {
  if (!isChineseRef(verse)) return verse;
  return normalizeToEnglish(verse) || verse;
}

async function fetchVerse(verse: string): Promise<{ zh: string; en: string } | null> {
  // Normalize key: if Chinese, convert to English for cache consistency
  const enVerse = isChineseRef(verse) ? normalizeToEnglish(verse) : verse;
  const key = (enVerse || verse).toLowerCase();
  if (verseCache[key] !== undefined) return verseCache[key];

  const parsed = parseRef(verse);
  if (!parsed) { verseCache[key] = null; return null; }

  try {
    const { bookNum, chapter, verseStart, verseEnd } = parsed;
    const verses = [];
    for (let v = verseStart; v <= verseEnd; v++) verses.push(v);

    const [zhResults, enResults] = await Promise.all([
      Promise.all(verses.map(v =>
        fetch(`https://bolls.life/get-verse/CUNPS/${bookNum}/${chapter}/${v}/`)
          .then(r => r.ok ? r.json() : null).catch(() => null)
      )),
      Promise.all(verses.map(v =>
        fetch(`https://bolls.life/get-verse/WEB/${bookNum}/${chapter}/${v}/`)
          .then(r => r.ok ? r.json() : null).catch(() => null)
      )),
    ]);

    const stripHtml = (s: string) => s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    const zhText = zhResults.filter(Boolean).map((r: { text: string }) => stripHtml(r.text)).join('');
    const enText = enResults.filter(Boolean).map((r: { text: string }) => stripHtml(r.text)).join(' ');

    if (zhText || enText) {
      const result = { zh: zhText || '(经文未找到)', en: enText || '(Verse not found)' };
      verseCache[key] = result;
      return result;
    }
    verseCache[key] = null;
    return null;
  } catch {
    verseCache[key] = null;
    return null;
  }
}

interface Props {
  verse: string;
}

function normalizeVerseInput(raw: string): string {
  // Handle "中文 / English" or "English / 中文" combo format
  if (raw.includes('/')) {
    const parts = raw.split('/').map(s => s.trim());
    // Return the English part (the one starting with ASCII)
    const enPart = parts.find(p => /^[\d\s]*[A-Za-z]/.test(p));
    if (enPart) return enPart;
    // Otherwise return the Chinese part
    return parts[0];
  }
  return raw;
}

export default function BibleVerse({ verse: rawVerse }: Props) {
  const verse = normalizeVerseInput(rawVerse);
  const [open, setOpen] = useState(false);
  const [verseData, setVerseData] = useState<{ zh: string; en: string } | null | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const zhLabel = getZhLabel(verse);
  const enLabel = getEnLabel(verse);

  useEffect(() => {
    if (!open) return;
    const key = verse.toLowerCase();
    if (verseCache[key] !== undefined) {
      setVerseData(verseCache[key]);
      return;
    }
    setLoading(true);
    fetchVerse(verse).then(data => {
      setVerseData(data);
      setLoading(false);
    });
  }, [open, verse]);

  return (
    <span className="inline-block mb-1">
      <button
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium transition-all cursor-pointer
          ${open
            ? 'bg-[var(--color-accent)]/30 text-[var(--color-primary)] dark:text-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/50'
            : 'bg-[var(--color-accent)]/15 text-[var(--color-primary)] dark:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/25'
          }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
          <path d="M10.75 16.82A7.462 7.462 0 0 1 15 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0 0 18 15.06V3.44a.75.75 0 0 0-.546-.718A9.006 9.006 0 0 0 15 2.5a9.006 9.006 0 0 0-4.25 1.062v13.258ZM9.25 4.562A9.006 9.006 0 0 0 5 3.5a9.006 9.006 0 0 0-2.454.218.75.75 0 0 0-.546.718v11.62a.75.75 0 0 0 .954.718A7.462 7.462 0 0 1 5 16.5a7.462 7.462 0 0 1 4.25 1.32V4.562Z" />
        </svg>
        <span className="font-serif-cn">{zhLabel}</span>
        {enLabel !== zhLabel && <span className="text-[var(--color-text-secondary)] text-xs">{enLabel}</span>}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3 h-3 transition-transform shrink-0 ${open ? 'rotate-180' : ''}`}>
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <span className="block mt-1.5 mb-2 p-3 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-sm leading-relaxed">
          {loading ? (
            <span className="text-[var(--color-text-secondary)] italic text-xs flex items-center gap-2">
              <span className="inline-block w-3 h-3 border-2 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin"></span>
              加载经文中...
            </span>
          ) : verseData ? (
            <>
              <span className="block text-[var(--color-text)] font-serif-cn mb-2 leading-relaxed">{verseData.zh}</span>
              <span className="block text-[var(--color-text-secondary)] italic text-xs leading-relaxed">{verseData.en}</span>
              <span className="block text-[var(--color-text-secondary)]/50 text-[10px] mt-2">— {zhLabel} {enLabel !== zhLabel ? enLabel : ''}（新标点和合本 / WEB）</span>
            </>
          ) : (
            <span className="text-[var(--color-text-secondary)] italic text-xs">📖 {zhLabel} {enLabel !== zhLabel ? enLabel : ''}</span>
          )}
        </span>
      )}
    </span>
  );
}
