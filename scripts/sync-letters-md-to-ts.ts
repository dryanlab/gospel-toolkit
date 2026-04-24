/**
 * sync-letters-md-to-ts.ts
 *
 * 把 content/letters/<id>.md 反向 merge 进 web/src/data/letters.ts
 *
 * Letter ts 块格式（与 readings 不同）：
 *   - 每封信 4 空格缩进
 *   - 短字段每行一个（不紧凑同行）
 *   - subtitle / fellowshipAuthors 是可选字段
 *
 * Usage (从 web/ 目录跑):
 *   cd web && npx tsx ../scripts/sync-letters-md-to-ts.ts --dry-run moses-names-remembered
 *   cd web && npx tsx ../scripts/sync-letters-md-to-ts.ts --apply moses-names-remembered
 *   cd web && npx tsx ../scripts/sync-letters-md-to-ts.ts --apply-list <file>
 */

import * as fs from 'fs';
import * as path from 'path';

const REPO_ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(REPO_ROOT, 'content', 'letters');
const TS_FILE = path.join(REPO_ROOT, 'web', 'src', 'data', 'letters.ts');
const DRY_RUN_DIR = path.join(REPO_ROOT, '.dry-run');

interface LetterData {
  id: string;
  author: string;
  authorEn: string;
  authorAvatar: string;
  authorBio: string;
  authorBioEn: string;
  title_zh: string;
  title_en: string;
  subtitle_zh?: string;
  subtitle_en?: string;
  date: string;
  category: string;
  scripture: string;
  scriptureText_zh: string;
  scriptureText_en: string;
  summary_zh: string;
  summary_en: string;
  content_zh: string;
  content_en: string;
  tags: string[];
  fellowshipAuthors?: string[];
}

// === Markdown 解析 ===

function parseYamlValue(raw: string): string | number | string[] {
  const v = raw.trim();
  if (v.startsWith('[') && v.endsWith(']')) {
    // ["a", "b"]
    const inner = v.slice(1, -1).trim();
    if (!inner) return [];
    // Split on `,` outside of quotes (simple: assume "...","..." with optional spaces)
    const items: string[] = [];
    const re = /"((?:\\.|[^"\\])*)"/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(inner)) !== null) {
      items.push(m[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\'));
    }
    return items;
  }
  if (v.startsWith('"') && v.endsWith('"')) {
    return v.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }
  if (/^-?\d+$/.test(v)) return parseInt(v, 10);
  return v;
}

function parseMd(filePath: string): LetterData {
  const raw = fs.readFileSync(filePath, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(`No frontmatter in ${filePath}`);
  const fmText = m[1];
  const body = m[2];

  const fm: Record<string, string | number | string[]> = {};
  for (const line of fmText.split('\n')) {
    const lm = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!lm) continue;
    fm[lm[1]] = parseYamlValue(lm[2]);
  }

  // sections
  const sections: Record<string, string> = {};
  const parts = body.split(/\n## /);
  for (let i = 0; i < parts.length; i++) {
    let chunk = parts[i];
    if (i === 0) {
      const lead = chunk.match(/^## (.+?)\n([\s\S]*)$/);
      if (!lead) continue;
      sections[lead[1].trim()] = lead[2].trim();
    } else {
      const idx = chunk.indexOf('\n');
      if (idx < 0) continue;
      sections[chunk.slice(0, idx).trim()] = chunk.slice(idx + 1).trim();
    }
  }

  const sectionMap: Record<string, keyof LetterData> = {
    '经文（中文）': 'scriptureText_zh',
    'Scripture (English)': 'scriptureText_en',
    '正文（中文）': 'content_zh',
    '正文（英文）': 'content_en',
  };

  const out: Partial<LetterData> = {
    id: String(fm.id ?? ''),
    author: String(fm.author ?? ''),
    authorEn: String(fm.authorEn ?? ''),
    authorAvatar: String(fm.authorAvatar ?? ''),
    authorBio: String(fm.authorBio ?? ''),
    authorBioEn: String(fm.authorBioEn ?? ''),
    title_zh: String(fm.title_zh ?? ''),
    title_en: String(fm.title_en ?? ''),
    date: String(fm.date ?? ''),
    category: String(fm.category ?? ''),
    scripture: String(fm.scripture ?? ''),
    summary_zh: String(fm.summary_zh ?? ''),
    summary_en: String(fm.summary_en ?? ''),
    tags: Array.isArray(fm.tags) ? fm.tags : [],
  };
  if (fm.subtitle_zh !== undefined) out.subtitle_zh = String(fm.subtitle_zh);
  if (fm.subtitle_en !== undefined) out.subtitle_en = String(fm.subtitle_en);
  if (fm.fellowshipAuthors !== undefined && Array.isArray(fm.fellowshipAuthors)) {
    out.fellowshipAuthors = fm.fellowshipAuthors;
  }

  for (const [secTitle, field] of Object.entries(sectionMap)) {
    if (!(secTitle in sections)) {
      throw new Error(`${filePath}: missing section "## ${secTitle}"`);
    }
    (out as Record<string, unknown>)[field] = sections[secTitle];
  }

  return out as LetterData;
}

// === ts 块生成 ===

function escSingle(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function escBacktick(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function tsArray(items: string[]): string {
  return '[' + items.map((it) => `'${escSingle(it)}'`).join(', ') + ']';
}

function generateTsBlock(L: LetterData): string {
  const lines: string[] = [
    '  {',
    `    id: '${escSingle(L.id)}',`,
    `    author: '${escSingle(L.author)}',`,
    `    authorEn: '${escSingle(L.authorEn)}',`,
    `    authorAvatar: '${escSingle(L.authorAvatar)}',`,
    `    authorBio: '${escSingle(L.authorBio)}',`,
    `    authorBioEn: '${escSingle(L.authorBioEn)}',`,
    `    title_zh: '${escSingle(L.title_zh)}',`,
    `    title_en: '${escSingle(L.title_en)}',`,
  ];
  if (L.subtitle_zh !== undefined) {
    lines.push(`    subtitle_zh: '${escSingle(L.subtitle_zh)}',`);
  }
  if (L.subtitle_en !== undefined) {
    lines.push(`    subtitle_en: '${escSingle(L.subtitle_en)}',`);
  }
  lines.push(
    `    date: '${escSingle(L.date)}',`,
    `    category: '${escSingle(L.category)}' as Letter['category'],`,
    `    scripture: '${escSingle(L.scripture)}',`,
    `    scriptureText_zh: \`${escBacktick(L.scriptureText_zh)}\`,`,
    `    scriptureText_en: \`${escBacktick(L.scriptureText_en)}\`,`,
    `    summary_zh: '${escSingle(L.summary_zh)}',`,
    `    summary_en: '${escSingle(L.summary_en)}',`,
    `    content_zh: \`${escBacktick(L.content_zh)}\`,`,
    `    content_en: \`${escBacktick(L.content_en)}\`,`,
    `    tags: ${tsArray(L.tags)},`,
  );
  if (L.fellowshipAuthors !== undefined) {
    lines.push(`    fellowshipAuthors: ${tsArray(L.fellowshipAuthors)},`);
  }
  lines.push('  },');
  return lines.join('\n');
}

// === ts 源文件定位 + 替换 ===

function locateLetterBlock(
  src: string,
  id: string,
): { startIdx: number; endIdx: number } {
  const escId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // 起点：`  {\n    id: '<id>',`
  const re = new RegExp(`^( {2}\\{\\n {4}id: '${escId}',)`, 'm');
  const m = src.match(re);
  if (!m || m.index === undefined) {
    throw new Error(`Cannot locate letter block: id=${id}`);
  }
  const startIdx = m.index;
  const tail = src.slice(startIdx);
  const endRel = tail.indexOf('\n  },\n');
  if (endRel < 0) {
    throw new Error(`Cannot locate letter end for id=${id}`);
  }
  const endIdx = startIdx + endRel + '\n  },\n'.length - 1;
  return { startIdx, endIdx };
}

function patchTs(srcTs: string, L: LetterData): string {
  const { startIdx, endIdx } = locateLetterBlock(srcTs, L.id);
  const newBlock = generateTsBlock(L);
  return srcTs.slice(0, startIdx) + newBlock + '\n' + srcTs.slice(endIdx + 1);
}

// === CLI ===

const args = process.argv.slice(2);
const mode = args[0];

if (mode === '--dry-run' || mode === '--apply') {
  const id = args[1];
  if (!id) {
    console.error('Usage: --dry-run <letter-id>');
    process.exit(1);
  }
  const mdPath = path.join(CONTENT_DIR, `${id}.md`);
  if (!fs.existsSync(mdPath)) {
    console.error(`md not found: ${mdPath}`);
    process.exit(1);
  }
  const L = parseMd(mdPath);
  const srcTs = fs.readFileSync(TS_FILE, 'utf8');
  const newTs = patchTs(srcTs, L);

  if (mode === '--dry-run') {
    const dryFile = path.join(DRY_RUN_DIR, 'merge', 'letters.ts');
    fs.mkdirSync(path.dirname(dryFile), { recursive: true });
    fs.writeFileSync(dryFile, newTs, 'utf8');
    console.log(`[DRY-RUN] wrote: ${dryFile}`);
    console.log(`[DRY-RUN] changed: ${newTs !== srcTs}, size delta: ${newTs.length - srcTs.length} bytes`);
  } else {
    fs.writeFileSync(TS_FILE, newTs, 'utf8');
    console.log(`[APPLY] patched ${TS_FILE} for ${id}`);
  }
} else if (mode === '--apply-list') {
  const listFile = args[1];
  if (!listFile) {
    console.error('Usage: --apply-list <file>');
    process.exit(1);
  }
  const ids = fs
    .readFileSync(listFile, 'utf8')
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter((s) => s && !s.startsWith('#'));
  let srcTs = fs.readFileSync(TS_FILE, 'utf8');
  let count = 0;
  let missing = 0;
  for (const id of ids) {
    try {
      const mdPath = path.join(CONTENT_DIR, `${id}.md`);
      if (!fs.existsSync(mdPath)) {
        console.warn(`SKIP no md: ${id}`);
        missing++;
        continue;
      }
      const L = parseMd(mdPath);
      srcTs = patchTs(srcTs, L);
      count++;
    } catch (e) {
      console.warn(`ERROR ${id}: ${(e as Error).message}`);
    }
  }
  fs.writeFileSync(TS_FILE, srcTs, 'utf8');
  console.log(`Patched ${count} letters; ${missing} missing.`);
} else {
  console.error('Unknown mode. Use --dry-run | --apply | --apply-list');
  process.exit(1);
}
