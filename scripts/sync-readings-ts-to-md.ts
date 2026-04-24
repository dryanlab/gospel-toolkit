/**
 * sync-readings-ts-to-md.ts
 *
 * 把 web/src/data/readings.ts 里的章节，反向同步成 content/readings/<book>/NNN.md
 *
 * Usage (从 web/ 目录跑，因为要 tsx 解析 ts import):
 *   cd web && npx tsx ../scripts/sync-readings-ts-to-md.ts --dry-run psalms:16
 *   cd web && npx tsx ../scripts/sync-readings-ts-to-md.ts --apply psalms:16
 *   cd web && npx tsx ../scripts/sync-readings-ts-to-md.ts --apply-list <file>
 *   cd web && npx tsx ../scripts/sync-readings-ts-to-md.ts --apply-all-reviewed   (按 REVIEW-CHECKLIST 全部已审)
 */

import { readings, ReadingChapter } from '../web/src/data/readings';
import * as fs from 'fs';
import * as path from 'path';

const REPO_ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(REPO_ROOT, 'content', 'readings');
const DRY_RUN_DIR = path.join(REPO_ROOT, '.dry-run');

function bookSlug(bookEn: string): string {
  // 'Genesis' → 'genesis', 'Psalms' → 'psalms', 'Acts' (or 'acts') → 'acts'
  return bookEn.toLowerCase();
}

function chapterPad(n: number): string {
  return String(n).padStart(3, '0');
}

function escapeYaml(s: string): string {
  // YAML double-quoted string escape: backslash + double-quote
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function generateMd(r: ReadingChapter): string {
  const lines: string[] = [
    '---',
    `book: "${escapeYaml(r.book)}"`,
    `bookEn: "${escapeYaml(r.bookEn)}"`,
    `chapter: ${r.chapter}`,
    `title: "${escapeYaml(r.title)}"`,
    `titleEn: "${escapeYaml(r.titleEn)}"`,
    `author: "${escapeYaml(r.author)}"`,
    `authorEn: "${escapeYaml(r.authorEn)}"`,
    `scripture: "${escapeYaml(r.scripture)}"`,
    `publishDate: "${r.publishDate}"`,
    '---',
    '',
    '## 正文（中文）',
    '',
    r.content_zh,
    '',
    '## 正文（英文）',
    '',
    r.content_en,
    '',
    '## 历史背景（中文）',
    '',
    r.historyContext_zh,
    '',
    '## Historical Context (English)',
    '',
    r.historyContext_en,
    '',
    '## 结构（中文）',
    '',
    r.structure_zh,
    '',
    '## Structure (English)',
    '',
    r.structure_en,
    '',
    '## 神学（中文）',
    '',
    r.theology_zh,
    '',
    '## Theology (English)',
    '',
    r.theology_en,
    '',
    '## 基督预表（中文）',
    '',
    r.christShadow_zh,
    '',
    '## Christ Shadow (English)',
    '',
    r.christShadow_en,
    '',
  ];
  return lines.join('\n');
}

function findChapter(bookSlugWanted: string, chapter: number): ReadingChapter | undefined {
  return readings.find(
    (r) => bookSlug(r.bookEn) === bookSlugWanted && r.chapter === chapter,
  );
}

function targetMdPath(bookEn: string, chapter: number): string {
  return path.join(CONTENT_DIR, bookSlug(bookEn), `${chapterPad(chapter)}.md`);
}

function dryRunPath(bookEn: string, chapter: number): string {
  return path.join(DRY_RUN_DIR, 'readings', bookSlug(bookEn), `${chapterPad(chapter)}.md`);
}

function writeOne(r: ReadingChapter, mode: 'dry-run' | 'apply'): string {
  const md = generateMd(r);
  const target = mode === 'apply' ? targetMdPath(r.bookEn, r.chapter) : dryRunPath(r.bookEn, r.chapter);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, md, 'utf8');
  return target;
}

// === CLI ===

const args = process.argv.slice(2);
const mode = args[0]; // --dry-run | --apply | --apply-list | --apply-all-reviewed

function parseSpec(spec: string): { book: string; chapter: number } | null {
  // 'psalms:16' → { book: 'psalms', chapter: 16 }
  const m = spec.match(/^([a-z]+):(\d+)$/);
  if (!m) return null;
  return { book: m[1], chapter: parseInt(m[2], 10) };
}

if (mode === '--dry-run' || mode === '--apply') {
  const spec = parseSpec(args[1] || '');
  if (!spec) {
    console.error('Usage: --dry-run <book>:<chapter>  e.g. psalms:16');
    process.exit(1);
  }
  const r = findChapter(spec.book, spec.chapter);
  if (!r) {
    console.error(`Chapter not found: ${spec.book}:${spec.chapter}`);
    process.exit(1);
  }
  const wrote = writeOne(r, mode === 'apply' ? 'apply' : 'dry-run');
  console.log(`[${mode === 'apply' ? 'APPLY' : 'DRY-RUN'}] wrote: ${wrote}`);
  console.log(`[${mode === 'apply' ? 'APPLY' : 'DRY-RUN'}] size: ${fs.statSync(wrote).size} bytes`);
} else if (mode === '--apply-list') {
  const listFile = args[1];
  if (!listFile) {
    console.error('Usage: --apply-list <file>  (one spec per line)');
    process.exit(1);
  }
  const specs = fs
    .readFileSync(listFile, 'utf8')
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter((s) => s && !s.startsWith('#'));
  let count = 0;
  let missing = 0;
  for (const s of specs) {
    const spec = parseSpec(s);
    if (!spec) {
      console.warn(`SKIP malformed: ${s}`);
      continue;
    }
    const r = findChapter(spec.book, spec.chapter);
    if (!r) {
      console.warn(`SKIP not in readings.ts: ${s}`);
      missing++;
      continue;
    }
    writeOne(r, 'apply');
    count++;
  }
  console.log(`Applied ${count} files; ${missing} not found.`);
} else {
  console.error('Unknown mode. Use --dry-run | --apply | --apply-list');
  process.exit(1);
}
