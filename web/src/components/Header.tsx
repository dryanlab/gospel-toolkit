'use client';
import SearchBar from './SearchBar';
import DarkModeToggle from './DarkModeToggle';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <div className="flex items-center gap-3 px-4 py-3 max-w-5xl mx-auto">
        <Link href="/" className="lg:hidden flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
            <span className="text-white font-bold text-sm">✝</span>
          </div>
        </Link>
        <SearchBar className="flex-1 max-w-md" />
        <DarkModeToggle />
      </div>
    </header>
  );
}
