#!/bin/bash
# 真理磐石 发布管理脚本
# Usage: ./publish.sh <command> [options]
#
# Commands:
#   readings push <chapter>      推送伴读到D1 (e.g. push 16)
#   readings push <from>-<to>    批量推送 (e.g. push 11-15)
#   readings list                列出D1中所有伴读
#   readings verify <chapter>    验证本地vs D1内容
#
#   letters push <id>            推送来信到D1 (e.g. push david-psalm51)
#   letters list                 列出D1中所有来信
#   letters delete <id>          删除D1中的来信
#   letters verify <id>          验证本地vs D1内容
#
#   build                        构建静态站并启动localhost:3001
#   status                       显示当前发布状态

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WEB_DIR="${SCRIPT_DIR}/../web"
API_BASE="https://rockoftruth-api.suyanuiuc.workers.dev"
ADMIN_TOKEN="rot_admin_2026_s3cure_t0ken"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log()  { echo -e "${GREEN}✅ $1${NC}"; }
warn() { echo -e "${YELLOW}⚠️  $1${NC}"; }
err()  { echo -e "${RED}❌ $1${NC}"; exit 1; }
info() { echo -e "${BLUE}ℹ️  $1${NC}"; }

auth_header="Authorization: Bearer ${ADMIN_TOKEN}"

# ===== READINGS =====

readings_extract() {
  local ch="$1"
  cd "$WEB_DIR"
  npx tsx -e "
    import { readings } from './src/data/readings';
    const r = readings.find(r => r.book === '创世记' && r.chapter === ${ch});
    if (!r) { console.error('Chapter ${ch} not found'); process.exit(1); }
    const payload = {
      book: r.book,
      book_en: (r as any).bookEn || 'Genesis',
      chapter: r.chapter,
      title: r.title,
      title_en: (r as any).titleEn || r.title_en || '',
      author: r.author || '摩西',
      author_en: (r as any).authorEn || r.author_en || 'Moses',
      scripture: r.scripture || '',
      content_zh: r.content_zh || '',
      content_en: r.content_en || '',
      history_context_zh: r.historyContext_zh || '',
      history_context_en: r.historyContext_en || '',
      structure_zh: (r as any).structure_zh || '',
      structure_en: (r as any).structure_en || '',
      theology_zh: (r as any).theology_zh || '',
      theology_en: (r as any).theology_en || '',
      christ_shadow_zh: r.christShadow_zh || '',
      christ_shadow_en: r.christShadow_en || '',
      publish_date: r.publishDate || '',
      status: 'published'
    };
    // Validate no undefined
    for (const [k,v] of Object.entries(payload)) {
      if (v === undefined || v === null) {
        console.error('ERROR: field ' + k + ' is undefined/null');
        process.exit(1);
      }
    }
    console.log(JSON.stringify(payload));
  " 2>/dev/null
}

readings_push() {
  local ch="$1"
  info "提取 Ch${ch} 数据..."
  local data
  data=$(readings_extract "$ch")
  if [ $? -ne 0 ] || [ -z "$data" ]; then
    err "Ch${ch} 提取失败，请检查 readings.ts"
  fi

  # Show summary
  local zh_len en_len title pub_date
  zh_len=$(echo "$data" | python3 -c "import sys,json; print(len(json.load(sys.stdin)['content_zh']))")
  en_len=$(echo "$data" | python3 -c "import sys,json; print(len(json.load(sys.stdin)['content_en']))")
  title=$(echo "$data" | python3 -c "import sys,json; print(json.load(sys.stdin)['title'])")
  pub_date=$(echo "$data" | python3 -c "import sys,json; print(json.load(sys.stdin)['publish_date'])")

  if [ "$zh_len" -lt 100 ]; then
    err "Ch${ch}《${title}》中文内容太短(${zh_len}字)，可能是空壳"
  fi

  info "Ch${ch}《${title}》| 中文${zh_len}字 | 英文${en_len}字 | 发布日期${pub_date}"

  # Push to D1
  local resp
  resp=$(curl -s -X POST "${API_BASE}/readings" \
    -H "Content-Type: application/json" \
    -H "$auth_header" \
    -d "$data")

  if echo "$resp" | python3 -c "import sys,json; assert json.load(sys.stdin).get('ok')" 2>/dev/null; then
    log "Ch${ch}《${title}》推送成功"
  else
    err "Ch${ch} 推送失败: $resp"
  fi
}

readings_push_range() {
  local from="$1" to="$2"
  info "批量推送 Ch${from}-${to}..."
  local failed=0
  for ch in $(seq "$from" "$to"); do
    readings_push "$ch" || ((failed++))
  done
  if [ $failed -eq 0 ]; then
    log "全部完成！Ch${from}-${to} 已推送到D1"
  else
    warn "${failed}章推送失败"
  fi
}

readings_list() {
  info "D1中的伴读列表:"
  curl -s "${API_BASE}/readings?book=genesis" \
    -H "$auth_header" | python3 -c "
import sys, json
data = json.load(sys.stdin)
readings = data.get('readings', [])
if not readings:
    print('  (空)')
else:
    for r in sorted(readings, key=lambda x: x.get('chapter', 0)):
        ch = r.get('chapter', '?')
        title = r.get('title', '')
        pub = r.get('publish_date', '')
        print(f'  Ch{ch} | {title} | {pub}')
    print(f'  共 {len(readings)} 章')
"
}

readings_verify() {
  local ch="$1"
  info "验证 Ch${ch}..."
  local local_data api_data
  local_data=$(readings_extract "$ch")
  api_data=$(curl -s "${API_BASE}/readings/Genesis/${ch}" -H "$auth_header")

  local tmp_local=$(mktemp)
  local tmp_api=$(mktemp)
  echo "$local_data" > "$tmp_local"
  echo "$api_data" > "$tmp_api"

  python3 -c "
import json, sys
with open('${tmp_local}') as f: local = json.load(f)
with open('${tmp_api}') as f: api_resp = json.load(f)
api = api_resp.get('reading', {})
if not api:
    print('❌ D1中不存在 Ch${ch}')
    sys.exit(0)
fields = ['title', 'content_zh', 'content_en', 'publish_date']
ok = True
for f in fields:
    lv = str(local.get(f, ''))
    av = str(api.get(f, ''))
    if lv != av:
        print(f'⚠️  {f}: 本地({len(lv)}字) vs D1({len(av)}字) 不一致')
        ok = False
if ok:
    print('✅ Ch${ch} 本地与D1一致')
"
  rm -f "$tmp_local" "$tmp_api"
}

# ===== LETTERS =====

letters_extract() {
  local id="$1"
  cd "$WEB_DIR"
  npx tsx -e "
    import { letters } from './src/data/letters';
    const l = letters.find(l => l.id === '${id}');
    if (!l) { console.error('Letter ${id} not found'); process.exit(1); }
    const payload = {
      id: l.id,
      author: l.author,
      author_en: (l as any).authorEn || '',
      author_avatar: (l as any).authorAvatar || '📜',
      author_bio: (l as any).authorBio || '',
      author_bio_en: (l as any).authorBioEn || '',
      title_zh: l.title_zh,
      title_en: l.title_en,
      date: l.date,
      category: l.category,
      scripture: l.scripture,
      scripture_text_zh: l.scriptureText_zh || '',
      scripture_text_en: l.scriptureText_en || '',
      summary_zh: l.summary_zh || '',
      summary_en: l.summary_en || '',
      content_zh: l.content_zh || '',
      content_en: l.content_en || '',
      tags: l.tags || [],  // MUST be array, Worker does JSON.stringify
      status: 'published'
    };
    for (const [k,v] of Object.entries(payload)) {
      if (v === undefined || v === null) {
        console.error('ERROR: field ' + k + ' is undefined/null');
        process.exit(1);
      }
    }
    console.log(JSON.stringify(payload));
  " 2>/dev/null
}

letters_push() {
  local id="$1"
  info "提取来信 ${id}..."
  local data
  data=$(letters_extract "$id")
  if [ $? -ne 0 ] || [ -z "$data" ]; then
    err "来信 ${id} 提取失败，请检查 letters.ts"
  fi

  local zh_len title pub_date
  zh_len=$(echo "$data" | python3 -c "import sys,json; print(len(json.load(sys.stdin)['content_zh']))")
  title=$(echo "$data" | python3 -c "import sys,json; print(json.load(sys.stdin)['title_zh'])")
  pub_date=$(echo "$data" | python3 -c "import sys,json; print(json.load(sys.stdin)['date'])")

  if [ "$zh_len" -lt 100 ]; then
    err "《${title}》中文内容太短(${zh_len}字)，可能是空壳"
  fi

  info "《${title}》| ${zh_len}字 | 发布日期${pub_date}"

  local resp
  resp=$(curl -s -X POST "${API_BASE}/letters" \
    -H "Content-Type: application/json" \
    -H "$auth_header" \
    -d "$data")

  if echo "$resp" | python3 -c "import sys,json; assert json.load(sys.stdin).get('ok')" 2>/dev/null; then
    log "《${title}》推送成功"
  else
    err "推送失败: $resp"
  fi
}

letters_list() {
  info "D1中的来信列表:"
  curl -s "${API_BASE}/admin/letters" \
    -H "$auth_header" | python3 -c "
import sys, json
data = json.load(sys.stdin)
letters = data.get('letters', [])
if not letters:
    print('  (空)')
else:
    for l in letters:
        lid = l.get('id', '?')
        title = l.get('title_zh', '')
        date = l.get('date', '')
        status = l.get('status', '')
        zh_len = len(l.get('content_zh', '') or '')
        print(f'  {lid:25s} | {title:20s} | {date} | {status} | {zh_len}字')
    print(f'  共 {len(letters)} 篇')
"
}

letters_delete() {
  local id="$1"
  warn "即将删除来信 ${id}"
  local resp
  resp=$(curl -s -X DELETE "${API_BASE}/admin/letters/${id}" \
    -H "$auth_header")
  if echo "$resp" | python3 -c "import sys,json; assert json.load(sys.stdin).get('ok')" 2>/dev/null; then
    log "来信 ${id} 已删除"
  else
    err "删除失败: $resp"
  fi
}

letters_verify() {
  local id="$1"
  info "验证来信 ${id}..."
  local local_data
  local_data=$(letters_extract "$id")
  local api_data
  api_data=$(curl -s "${API_BASE}/letters/${id}")

  local tmp_local=$(mktemp)
  local tmp_api=$(mktemp)
  echo "$local_data" > "$tmp_local"
  echo "$api_data" > "$tmp_api"

  python3 -c "
import json, sys
with open('${tmp_local}') as f: local = json.load(f)
with open('${tmp_api}') as f: api_resp = json.load(f)
api = api_resp.get('letter', {})
if not api:
    print('❌ D1中不存在 ${id}')
    sys.exit(0)
fields = ['title_zh', 'content_zh', 'content_en', 'date', 'scripture']
ok = True
for f in fields:
    lv = str(local.get(f, ''))
    av = str(api.get(f, ''))
    if lv != av:
        print(f'⚠️  {f}: 本地({len(lv)}字) vs D1({len(av)}字) 不一致')
        ok = False
if ok:
    print('✅ ${id} 本地与D1一致')
"
  rm -f "$tmp_local" "$tmp_api"
}

# ===== BUILD =====

do_build() {
  info "构建静态站..."
  cd "$WEB_DIR"
  pkill -f "serve out" 2>/dev/null || true
  rm -rf .next out
  NEXT_TURBOPACK=0 NODE_OPTIONS="--max-old-space-size=4096" npx next build
  log "构建完成，启动 localhost:3001..."
  npx serve out -l 3001 &
  sleep 2
  log "localhost:3001 已启动"
}

# ===== STATUS =====

do_status() {
  echo ""
  echo "===== 真理磐石 发布状态 ====="
  echo ""
  readings_list
  echo ""
  letters_list
  echo ""

  # Local content summary
  info "本地内容概览:"
  cd "$WEB_DIR"
  npx tsx -e "
    import { readings } from './src/data/readings';
    import { letters } from './src/data/letters';
    const filled = readings.filter(r => (r.content_zh||'').length > 100);
    const empty = readings.filter(r => (r.content_zh||'').length <= 100);
    console.log('  伴读: ' + filled.length + ' 章有内容, ' + empty.length + ' 章空壳');
    const lFilled = letters.filter(l => l.content_zh && l.content_zh !== '（即将发布）' && l.content_zh.length > 100);
    const lEmpty = letters.filter(l => !l.content_zh || l.content_zh === '（即将发布）' || l.content_zh.length <= 100);
    console.log('  来信: ' + lFilled.length + ' 篇有内容, ' + lEmpty.length + ' 篇空壳');
  " 2>/dev/null
  echo ""
}

# ===== MAIN =====

CMD="${1:-help}"
SUB="${2:-}"
ARG="${3:-}"

case "$CMD" in
  readings)
    case "$SUB" in
      push)
        if [[ "$ARG" == *-* ]]; then
          IFS='-' read -r from to <<< "$ARG"
          readings_push_range "$from" "$to"
        else
          readings_push "$ARG"
        fi
        ;;
      list) readings_list ;;
      verify) readings_verify "$ARG" ;;
      *) err "Usage: $0 readings <push|list|verify> [args]" ;;
    esac
    ;;
  letters)
    case "$SUB" in
      push) letters_push "$ARG" ;;
      list) letters_list ;;
      delete) letters_delete "$ARG" ;;
      verify) letters_verify "$ARG" ;;
      *) err "Usage: $0 letters <push|list|delete|verify> [args]" ;;
    esac
    ;;
  build) do_build ;;
  status) do_status ;;
  help|--help|-h)
    echo "真理磐石 发布管理脚本"
    echo ""
    echo "Usage: $0 <command> [subcommand] [args]"
    echo ""
    echo "Commands:"
    echo "  readings push <ch>         推送单章伴读到D1"
    echo "  readings push <from>-<to>  批量推送伴读"
    echo "  readings list              列出D1中伴读"
    echo "  readings verify <ch>       验证本地vs D1"
    echo ""
    echo "  letters push <id>          推送来信到D1"
    echo "  letters list               列出D1中来信"
    echo "  letters delete <id>        删除D1中来信"
    echo "  letters verify <id>        验证本地vs D1"
    echo ""
    echo "  build                      构建+启动localhost:3001"
    echo "  status                     显示发布状态"
    echo ""
    echo "Examples:"
    echo "  $0 readings push 16"
    echo "  $0 readings push 16-20"
    echo "  $0 letters push david-psalm51"
    echo "  $0 status"
    ;;
  *) err "未知命令: $CMD. 运行 $0 help 查看帮助" ;;
esac
