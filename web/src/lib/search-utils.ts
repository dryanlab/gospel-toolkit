import * as OpenCC from 'opencc-js';

// 繁→简 转换器
const t2sConverter = OpenCC.Converter({ from: 'tw', to: 'cn' });
// 简→繁 转换器  
const s2tConverter = OpenCC.Converter({ from: 'cn', to: 'tw' });

/**
 * 将文本统一转换为简体（用于索引和搜索匹配）
 */
export function toSimplified(text: string): string {
  if (!text) return '';
  return t2sConverter(text);
}

/**
 * 将文本转换为繁体
 */
export function toTraditional(text: string): string {
  if (!text) return '';
  return s2tConverter(text);
}

/**
 * 标准化搜索文本：转为简体 + 小写
 */
export function normalizeSearch(text: string): string {
  if (!text) return '';
  return toSimplified(text).toLowerCase();
}

/**
 * 检查文本是否匹配搜索词（自动处理简繁转换）
 */
export function matchesQuery(text: string, query: string): boolean {
  if (!text || !query) return false;
  const normalizedText = normalizeSearch(text);
  const normalizedQuery = normalizeSearch(query);
  return normalizedText.includes(normalizedQuery);
}
