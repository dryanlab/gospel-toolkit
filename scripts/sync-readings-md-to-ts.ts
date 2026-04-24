/**
 * sync-readings-md-to-ts.ts
 *
 * 把 content/readings/<book>/NNN.md 反向 merge 进 web/src/data/readings.ts
 *
 * 工作机制：
 *   - 解析 .md frontmatter + sections → ChapterReading 对象
 *   - 用 regex 定位 readings.ts 中对应 (bookEn, chapter) 的 `  {` ~ `  },` 块
 *   - 整块替换为新生成的 ts 块（其他章节字节不动）
 *
 * Usage (从 web/ 目录跑):
 *   cd web && npx tsx ../scripts/sync-readings-md-to-ts.ts --dry-run psalms:16
 *   cd web && npx tsx ../scripts/sync-readings-md-to-ts.ts --apply psalms:16
 *   cd web && npx tsx ../scripts/sync-readings-md-to-ts.ts --apply-list <file>
 */

import * as fs from 'fs';
import * as path from 'path';

const REPO_ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(REPO_ROOT, 'content', 'readings');
const TS_FILE = path.join(REPO_ROOT, 'web', 'src', 'data', 'readings.ts');
const DRY_RUN_DIR = path.join(REPO_ROOT, '.dry-run');

interface ChapterReading {
  book: string;
  bookEn: string;
  chapter: number;
  title: string;
  titleEn: string;
  author: string;
  authorEn: string;
  scripture: string;
  content_zh: string;
  content_en: string;
  historyContext_zh: string;
  historyContext_en: string;
  structure_zh: string;
  structure_en: string;
  theology_zh: string;
  theology_en: string;
  christShadow_zh: string;
  christShadow_en: string;
  publishDate: string;
}

// === Markdown 解析 ===

function chapterPad(n: number): string {
  return String(n).padStart(3, '0');
}

function parseMd(filePath: string): ChapterReading {
  const raw = fs.readFileSync(filePath, 'utf8');

  // 切 frontmatter
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(`No frontmatter in ${filePath}`);
  const fmText = m[1];
  const body = m[2];

  // 解析 frontmatter (简单 YAML：key: "value" 或 key: 数字)
  const fm: Record<string, string | number> = {};
  for (const line of fmText.split('\n')) {
    const lm = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!lm) continue;
    const key = lm[1];
    let val: string | number = lm[2].trim();
    // 双引号字符串：剥引号 + unescape \" \\
    if (typeof val === 'string' && val.startsWith('"') && val.endsWith('"')) {
      val = val.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    } else if (typeof val === 'string' && /^-?\d+$/.test(val)) {
      val = parseInt(val, 10);
    }
    fm[key] = val;
  }

  // 解析 sections (## 标题 → 内容)
  const sections: Record<string, string> = {};
  // 用 (?=^## ) 前瞻切，section 内容保留原样（但去掉前后空行）
  const parts = body.split(/\n## /);
  // 第一段开头若没有 ##，丢弃；否则首段也是一个 section（但开头 ## 已被切去）
  for (let i = 0; i < parts.length; i++) {
    let chunk = parts[i];
    if (i === 0) {
      // 看首段是否以 "## " 开头
      const lead = chunk.match(/^## (.+?)\n([\s\S]*)$/);
      if (!lead) continue;
      sections[lead[1].trim()] = lead[2].trim();
    } else {
      const idx = chunk.indexOf('\n');
      if (idx < 0) continue;
      const title = chunk.slice(0, idx).trim();
      const content = chunk.slice(idx + 1).trim();
      sections[title] = content;
    }
  }

  // section 标题 → field 映射
  const sectionMap: Record<string, keyof ChapterReading> = {
    '正文（中文）': 'content_zh',
    '正文（英文）': 'content_en',
    '历史背景（中文）': 'historyContext_zh',
    'Historical Context (English)': 'historyContext_en',
    '结构（中文）': 'structure_zh',
    'Structure (English)': 'structure_en',
    '神学（中文）': 'theology_zh',
    'Theology (English)': 'theology_en',
    '基督预表（中文）': 'christShadow_zh',
    'Christ Shadow (English)': 'christShadow_en',
  };

  const out: Partial<ChapterReading> = {
    book: String(fm.book ?? ''),
    bookEn: String(fm.bookEn ?? ''),
    chapter: typeof fm.chapter === 'number' ? fm.chapter : parseInt(String(fm.chapter), 10),
    title: String(fm.title ?? ''),
    titleEn: String(fm.titleEn ?? ''),
    author: String(fm.author ?? ''),
    authorEn: String(fm.authorEn ?? ''),
    scripture: String(fm.scripture ?? ''),
    publishDate: String(fm.publishDate ?? ''),
  };

  for (const [secTitle, field] of Object.entries(sectionMap)) {
    if (!(secTitle in sections)) {
      throw new Error(`${filePath}: missing section "## ${secTitle}"`);
    }
    (out as Record<string, unknown>)[field] = sections[secTitle];
  }

  return out as ChapterReading;
}

// === ts 块生成 ===

function escSingle(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function escBacktick(s: string): string {
  // backtick 内：` 和 ${ 需 escape
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function generateTsBlock(r: ChapterReading): string {
  // 必须 byte-for-byte 跟现有 readings.ts 格式一致
  const lines = [
    '  {',
    `  book: '${escSingle(r.book)}', bookEn: '${escSingle(r.bookEn)}', chapter: ${r.chapter},`,
    `  publishDate: '${escSingle(r.publishDate)}',`,
    `  title: '${escSingle(r.title)}', titleEn: '${escSingle(r.titleEn)}',`,
    `  author: '${escSingle(r.author)}', authorEn: '${escSingle(r.authorEn)}',`,
    `  scripture: '${escSingle(r.scripture)}',`,
    `  content_zh: \`${escBacktick(r.content_zh)}\`,`,
    `  content_en: \`${escBacktick(r.content_en)}\`,`,
    `  historyContext_zh: \`${escBacktick(r.historyContext_zh)}\`,`,
    `  historyContext_en: \`${escBacktick(r.historyContext_en)}\`,`,
    `  structure_zh: \`${escBacktick(r.structure_zh)}\`,`,
    `  structure_en: \`${escBacktick(r.structure_en)}\`,`,
    `  theology_zh: \`${escBacktick(r.theology_zh)}\`,`,
    `  theology_en: \`${escBacktick(r.theology_en)}\`,`,
    `  christShadow_zh: \`${escBacktick(r.christShadow_zh)}\`,`,
    `  christShadow_en: \`${escBacktick(r.christShadow_en)}\`,`,
    '  },',
  ];
  return lines.join('\n');
}

// === ts 源文件定位 + 替换 ===

function locateChapterBlock(
  src: string,
  bookEn: string,
  chapter: number,
): { startIdx: number; endIdx: number } {
  // 用 regex 找 "  {\n  book: 'X', bookEn: 'Y', chapter: N,"
  // 注意 book(中文) 我们用 bookEn 来定位（英文唯一）
  const escapedBookEn = bookEn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(
    `^( {2}\\{\\n {2}book: '[^']+', bookEn: '${escapedBookEn}', chapter: ${chapter},)`,
    'm',
  );
  const m = src.match(re);
  if (!m || m.index === undefined) {
    throw new Error(`Cannot locate chapter block: bookEn=${bookEn}, chapter=${chapter}`);
  }
  const startIdx = m.index;
  // 从 startIdx 往后找最近的 "\n  },\n"
  const tail = src.slice(startIdx);
  const endRel = tail.indexOf('\n  },\n');
  if (endRel < 0) {
    throw new Error(`Cannot locate chapter end for bookEn=${bookEn}, chapter=${chapter}`);
  }
  const endIdx = startIdx + endRel + '\n  },\n'.length - 1; // +1 包含到 ',' 后的 newline 之前
  // 实际我们把整块替换成新块（不含末尾 newline），所以 endIdx 应该指到 `,` 后那个换行符之前
  return { startIdx, endIdx };
}

function patchTs(srcTs: string, r: ChapterReading): string {
  const { startIdx, endIdx } = locateChapterBlock(srcTs, r.bookEn, r.chapter);
  const newBlock = generateTsBlock(r);
  // newBlock 不含末尾换行；endIdx 指向旧块末尾换行；所以拼接时补回 '\n'
  return srcTs.slice(0, startIdx) + newBlock + '\n' + srcTs.slice(endIdx + 1);
}

// === CLI ===

function bookSlug(bookEn: string): string {
  return bookEn.toLowerCase();
}

function mdPathFromSpec(spec: string): { book: string; chapter: number; mdPath: string } {
  const m = spec.match(/^([a-z]+):(\d+)$/);
  if (!m) throw new Error(`Bad spec ${spec}, expect e.g. psalms:16`);
  const book = m[1];
  const chapter = parseInt(m[2], 10);
  const mdPath = path.join(CONTENT_DIR, book, `${chapterPad(chapter)}.md`);
  return { book, chapter, mdPath };
}

const args = process.argv.slice(2);
const mode = args[0];

if (mode === '--dry-run' || mode === '--apply') {
  const spec = args[1];
  if (!spec) {
    console.error('Usage: --dry-run <book>:<chapter>  e.g. psalms:16');
    process.exit(1);
  }
  const { mdPath } = mdPathFromSpec(spec);
  if (!fs.existsSync(mdPath)) {
    console.error(`md not found: ${mdPath}`);
    process.exit(1);
  }
  const reading = parseMd(mdPath);
  const srcTs = fs.readFileSync(TS_FILE, 'utf8');
  const newTs = patchTs(srcTs, reading);

  if (mode === 'dry-run' || mode === '--dry-run') {
    const dryFile = path.join(DRY_RUN_DIR, 'merge', 'readings.ts');
    fs.mkdirSync(path.dirname(dryFile), { recursive: true });
    fs.writeFileSync(dryFile, newTs, 'utf8');
    const changed = newTs !== srcTs;
    const sizeDelta = newTs.length - srcTs.length;
    console.log(`[DRY-RUN] wrote: ${dryFile}`);
    console.log(`[DRY-RUN] changed: ${changed}, size delta: ${sizeDelta} bytes`);
  } else {
    fs.writeFileSync(TS_FILE, newTs, 'utf8');
    console.log(`[APPLY] patched ${TS_FILE} for ${spec}`);
  }
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
  let srcTs = fs.readFileSync(TS_FILE, 'utf8');
  let count = 0;
  let missing = 0;
  for (const spec of specs) {
    try {
      const { mdPath } = mdPathFromSpec(spec);
      if (!fs.existsSync(mdPath)) {
        console.warn(`SKIP no md: ${spec}`);
        missing++;
        continue;
      }
      const reading = parseMd(mdPath);
      srcTs = patchTs(srcTs, reading);
      count++;
    } catch (e) {
      console.warn(`ERROR ${spec}: ${(e as Error).message}`);
    }
  }
  fs.writeFileSync(TS_FILE, srcTs, 'utf8');
  console.log(`Patched ${count} chapters; ${missing} missing.`);
} else {
  console.error('Unknown mode. Use --dry-run | --apply | --apply-list');
  process.exit(1);
}
