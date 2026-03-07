#!/bin/bash
# Auto-update REVIEW-CHECKLIST.md stats
FILE="/Users/suyan/agents/shared/projects/gospel-app/REVIEW-CHECKLIST.md"
TOTAL=$(grep -c '^\- \[' "$FILE")
DONE=$(grep -c '^\- \[x\]' "$FILE")
TODO=$((TOTAL - DONE))

# Replace stats section
sed -i '' "s/- 总计: .*/- 总计: $TOTAL 篇/" "$FILE"
sed -i '' "s/- ✅ 已审阅: .*/- ✅ 已审阅: $DONE 篇/" "$FILE"
sed -i '' "s/- ⬜ 待审阅: .*/- ⬜ 待审阅: $TODO 篇/" "$FILE"

echo "✅ 已审阅: $DONE / $TOTAL （待审阅: $TODO）"
