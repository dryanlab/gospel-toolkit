#!/bin/bash
# Smart Telegram Channel Push for 真理磐石
# Pure bash+node, no LLM needed. Safe for cron/launchd.
# Usage: ./telegram-smart-push.sh <reading|letter|altar> [args]

SCRIPTS_DIR="$(cd "$(dirname "$0")" && pwd)"

# Load bot token from .env (works in both bash and launchd)
if [ -f "${SCRIPTS_DIR}/.env" ]; then
  export $(grep -v '^#' "${SCRIPTS_DIR}/.env" | xargs)
fi

# Fallback: try zshrc if .env doesn't have it
if [ -z "$TELEGRAM_BOT_TOKEN" ]; then
  eval "$(grep TELEGRAM_BOT_TOKEN ~/.zshrc 2>/dev/null)" || true
fi

BOT_TOKEN="${TELEGRAM_BOT_TOKEN:?请设置 TELEGRAM_BOT_TOKEN}"
CHANNEL="@rock_of_truth"

TYPE="$1"
shift || true

# Generate text AND send via Telegram API — all in one node call
node "${SCRIPTS_DIR}/telegram-push-send.js" "$BOT_TOKEN" "$CHANNEL" "$TYPE" "$@"
