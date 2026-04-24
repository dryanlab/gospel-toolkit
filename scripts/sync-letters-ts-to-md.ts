/**
 * sync-letters-ts-to-md.ts
 *
 * 把 web/src/data/letters.ts 里的来信，反向同步成 content/letters/<id>.md
 *
 * Letter schema 跟 reading 不同：
 *   - 元数据放 frontmatter（id, author/En, authorAvatar, authorBio/En, title_zh/en,
 *     subtitle_zh/en?, date, category, scripture, summary_zh/en, tags, fellowshipAuthors?)
 *   - 经文文本 (scriptureText_zh/en) 和正文 (content_zh/en) 放 sections
 *
 * Usage:
 *   cd web && npx tsx ../scripts/sync-letters-ts-to-md.ts --dry-run moses-names-remembered
 *   cd web && npx tsx ../scripts/sync-letters-ts-to-md.ts --apply moses-names-remembered
 *   cd web && npx tsx ../scripts/sync-letters-ts-to-md.ts --apply-list <file>
 */

import { letters, Letter } from '../web/src/data/letters';
import * as fs from 'fs';
import * as path from 'path';

const REPO_ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(REPO_ROOT, 'content', 'letters');
const DRY_RUN_DIR = path.join(REPO_ROOT, '.dry-run');

function escapeYaml(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function yamlStringList(items: string[]): string {
  // ['a', 'b'] → ["a", "b"]
  return '[' + items.map((it) => `"${escapeYaml(it)}"`).join(', ') + ']';
}

function generateMd(L: Letter): string {
  const lines: string[] = [
    '---',
    `id: "${escapeYaml(L.id)}"`,
    `author: "${escapeYaml(L.author)}"`,
    `authorEn: "${escapeYaml(L.authorEn)}"`,
    `authorAvatar: "${escapeYaml(L.authorAvatar)}"`,
    `authorBio: "${escapeYaml(L.authorBio)}"`,
    `authorBioEn: "${escapeYaml(L.authorBioEn)}"`,
    `title_zh: "${escapeYaml(L.title_zh)}"`,
    `title_en: "${escapeYaml(L.title_en)}"`,
  ];
  if (L.subtitle_zh) {
    lines.push(`subtitle_zh: "${escapeYaml(L.subtitle_zh)}"`);
  }
  if (L.subtitle_en) {
    lines.push(`subtitle_en: "${escapeYaml(L.subtitle_en)}"`);
  }
  lines.push(
    `date: "${L.date}"`,
    `category: "${L.category}"`,
    `scripture: "${escapeYaml(L.scripture)}"`,
    `summary_zh: "${escapeYaml(L.summary_zh)}"`,
    `summary_en: "${escapeYaml(L.summary_en)}"`,
    `tags: ${yamlStringList(L.tags)}`,
  );
  if (L.fellowshipAuthors && L.fellowshipAuthors.length) {
    lines.push(`fellowshipAuthors: ${yamlStringList(L.fellowshipAuthors)}`);
  }
  lines.push(
    '---',
    '',
    '## 经文（中文）',
    '',
    L.scriptureText_zh,
    '',
    '## Scripture (English)',
    '',
    L.scriptureText_en,
    '',
    '## 正文（中文）',
    '',
    L.content_zh,
    '',
    '## 正文（英文）',
    '',
    L.content_en,
    '',
  );
  return lines.join('\n');
}

function targetMdPath(id: string): string {
  return path.join(CONTENT_DIR, `${id}.md`);
}

function dryRunPath(id: string): string {
  return path.join(DRY_RUN_DIR, 'letters', `${id}.md`);
}

function writeOne(L: Letter, mode: 'dry-run' | 'apply'): string {
  const md = generateMd(L);
  const target = mode === 'apply' ? targetMdPath(L.id) : dryRunPath(L.id);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, md, 'utf8');
  return target;
}

// === CLI ===

const args = process.argv.slice(2);
const mode = args[0];

if (mode === '--dry-run' || mode === '--apply') {
  const id = args[1];
  if (!id) {
    console.error('Usage: --dry-run <letter-id>  e.g. moses-names-remembered');
    process.exit(1);
  }
  const L = letters.find((x) => x.id === id);
  if (!L) {
    console.error(`Letter not found: ${id}`);
    process.exit(1);
  }
  const wrote = writeOne(L, mode === 'apply' ? 'apply' : 'dry-run');
  console.log(`[${mode === 'apply' ? 'APPLY' : 'DRY-RUN'}] wrote: ${wrote}`);
  console.log(`[${mode === 'apply' ? 'APPLY' : 'DRY-RUN'}] size: ${fs.statSync(wrote).size} bytes`);
} else if (mode === '--apply-list') {
  const listFile = args[1];
  if (!listFile) {
    console.error('Usage: --apply-list <file>  (one letter id per line)');
    process.exit(1);
  }
  const ids = fs
    .readFileSync(listFile, 'utf8')
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter((s) => s && !s.startsWith('#'));
  let count = 0;
  let missing = 0;
  for (const id of ids) {
    const L = letters.find((x) => x.id === id);
    if (!L) {
      console.warn(`SKIP not in letters.ts: ${id}`);
      missing++;
      continue;
    }
    writeOne(L, 'apply');
    count++;
  }
  console.log(`Applied ${count} files; ${missing} not found.`);
} else {
  console.error('Unknown mode. Use --dry-run | --apply | --apply-list');
  process.exit(1);
}
