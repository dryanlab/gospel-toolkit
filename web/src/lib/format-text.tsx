import React from 'react';

/**
 * 将简单的markdown格式转换为HTML
 * - **text** → <strong>
 * - *text* → <em>
 */
export function formatMarkdown(text: string): React.ReactNode {
  if (!text) return text;
  
  // 先处理 **bold**，再处理 *italic*
  // 使用正则分割，保留分隔符
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      // 粗体
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      // 斜体
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

// 别名，保持向后兼容
export const formatWithItalics = formatMarkdown;
