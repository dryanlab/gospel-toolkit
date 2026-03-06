#!/bin/bash
# Smart Telegram Channel Push for 真理磐石
# Pure bash+node, no LLM needed. Safe for cron/launchd.
# Usage: ./telegram-smart-push.sh <reading|letter|altar> [args]

set -e
source ~/.zshrc 2>/dev/null || true

BOT_TOKEN="${TELEGRAM_BOT_TOKEN:?请设置 TELEGRAM_BOT_TOKEN}"
CHANNEL="@rock_of_truth"
SCRIPTS_DIR="$(cd "$(dirname "$0")" && pwd)"

TYPE="$1"
shift || true

# Generate text AND send via Telegram API — all in one node call
node "${SCRIPTS_DIR}/telegram-push-send.js" "$BOT_TOKEN" "$CHANNEL" "$TYPE" "$@"
