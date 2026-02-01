'use client';
import { Language } from '@/lib/types';

interface Props {
  value: Language;
  onChange: (lang: Language) => void;
}

export default function LanguageToggle({ value, onChange }: Props) {
  const options: { value: Language; label: string }[] = [
    { value: 'zh', label: '中文' },
    { value: 'en', label: 'EN' },
    { value: 'both', label: '双语' },
  ];

  return (
    <div className="flex rounded-lg overflow-hidden border border-[var(--color-border)]">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-3 py-1 text-sm font-medium transition-colors ${
            value === opt.value
              ? 'bg-[var(--color-primary)] text-white'
              : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
