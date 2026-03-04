#!/bin/bash
# Smart Telegram Channel Push for 真理磐石
# Extracts content from website data to generate personalized messages
# Usage: ./telegram-smart-push.sh <reading|letter|altar> [args]

set -e
source ~/.zshrc 2>/dev/null || true

BOT_TOKEN="${TELEGRAM_BOT_TOKEN:?请设置 TELEGRAM_BOT_TOKEN}"
CHANNEL="@rock_of_truth"
API="https://api.telegram.org/bot${BOT_TOKEN}"
SCRIPTS_DIR="$(cd "$(dirname "$0")" && pwd)"

TYPE="$1"
shift || true

# Generate text using Node script
RESULT=$(node "${SCRIPTS_DIR}/generate-push-text.js" "$TYPE" "$@" 2>/dev/null)
if [ $? -ne 0 ] || [ -z "$RESULT" ]; then
  echo "❌ Failed to generate $TYPE push text"
  exit 1
fi

TEXT=$(echo "$RESULT" | python3 -c "import json,sys; print(json.load(sys.stdin)['text'])")
URL=$(echo "$RESULT" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('url',''))" 2>/dev/null || echo "")

if [ -n "$URL" ]; then
  BUTTONS='{"inline_keyboard":[[{"text":"📖 阅读 Read","url":"'"${URL}"'"}]]}'
  curl -s "${API}/sendMessage" \
    -d chat_id="${CHANNEL}" \
    -d text="${TEXT}" \
    -d parse_mode="HTML" \
    -d reply_markup="${BUTTONS}" > /dev/null
else
  curl -s "${API}/sendMessage" \
    -d chat_id="${CHANNEL}" \
    -d text="${TEXT}" \
    -d parse_mode="HTML" > /dev/null
fi

echo "✅ ${TYPE} sent to ${CHANNEL}"
