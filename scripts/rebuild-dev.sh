#!/bin/bash
# rebuild-dev.sh — 安全重建 dev 站 (localhost:3001)
# 部署链路第 5 步 (2026-06-10 颜弟兄定: 每次修改 prod 后必须同步重建 dev)
#
# 安全顺序 (2026-06-10 404 事故教训):
#   旧 out/ 先备份, build 失败自动回滚 → dev 永远有内容, 绝不 404
#
# 用法: ./scripts/rebuild-dev.sh
# 退出码: 0 = build 成功 dev 已更新; 1 = build 失败但已回滚旧内容

WEB_DIR="/Users/suyan/agents/shared/projects/gospel-app/web"
LOG="/tmp/rebuild-dev-last.log"
cd "$WEB_DIR" || exit 2

# 1. 备份现有 out (失败时回滚用; 绝不 rm-before-build)
if [ -d out ]; then
  rm -rf out_backup
  mv out out_backup
fi

# 2. 清缓存 + build
rm -rf .next node_modules/.cache
RESTORED=0
if NODE_OPTIONS="--max_old_space_size=4096" npx next build > "$LOG" 2>&1 && [ -f out/index.html ]; then
  echo "✅ build 成功 ($(ls out | wc -l | tr -d ' ') entries)"
  rm -rf out_backup
else
  echo "❌ build 失败, 回滚旧 out (log: $LOG)"
  tail -5 "$LOG"
  if [ -d out_backup ]; then
    rm -rf out && mv out_backup out
    echo "↩️  已回滚到旧版 out (dev 内容旧但可用, 非 404)"
  fi
  RESTORED=1
fi

# 3. 重启 serve (无论新旧内容, 保证 3001 活着且指向当前 out)
pkill -f "serve.*-l 3001" 2>/dev/null
pkill -f "serve out" 2>/dev/null
sleep 1
(cd "$WEB_DIR" && nohup npx serve out -l 3001 >/dev/null 2>&1 &)
sleep 3
CODE=$(curl -s -m 5 -o /dev/null -w "%{http_code}" "http://localhost:3001/")
echo "serve 3001: HTTP $CODE"

exit $RESTORED
