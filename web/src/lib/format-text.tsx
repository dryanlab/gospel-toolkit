import React from 'react';

/**
 * 将简单的markdown斜体格式 (*text*) 转换为 <em> 标签
 * 用于推荐阅读等包含书名的文本
 */
export function formatWithItalics(text: string): React.ReactNode {
  if (!text) return text;
  
  // 匹配 *...* 模式（非贪婪）
  const parts = text.split(/(\*[^*]+\*)/g);
  
  return parts.map((part, i) => {
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      // 去掉星号，包装成斜体
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}
