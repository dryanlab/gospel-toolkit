#!/bin/bash
# telegram-push.sh — 发送消息到 Telegram 频道
# 用法: ./telegram-push.sh "消息内容"
# 环境变量: TELEGRAM_BOT_TOKEN, TELEGRAM_CHANNEL_ID

set -euo pipefail

BOT_TOKEN="${TELEGRAM_BOT_TOKEN:?请设置 TELEGRAM_BOT_TOKEN 环境变量}"
CHANNEL_ID="${TELEGRAM_CHANNEL_ID:?请设置 TELEGRAM_CHANNEL_ID 环境变量}"
MESSAGE="${1:?请提供消息内容}"

# 发送消息 (MarkdownV2 格式)
RESPONSE=$(curl -s -X POST "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage" \
  -H "Content-Type: application/json" \
  -d "{
    \"chat_id\": \"${CHANNEL_ID}\",
    \"text\": $(echo "$MESSAGE" | jq -Rs .),
    \"parse_mode\": \"MarkdownV2\",
    \"disable_web_page_preview\": false
  }")

# 检查结果
OK=$(echo "$RESPONSE" | jq -r '.ok')
if [ "$OK" = "true" ]; then
  echo "✅ 消息发送成功"
  echo "$RESPONSE" | jq '.result.message_id'
else
  echo "❌ 发送失败"
  echo "$RESPONSE" | jq '.description'
  exit 1
fi
