'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { getLocalePath } from '@/lib/i18n';

export default function Navbar({ locale, messages }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = messages.nav;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-prime-bg/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={getLocalePath(locale)} className="flex items-center gap-3 group">
            <Image src="/logo.png" alt="Prime Coach" width={36} height={36} className="rounded-lg" />
            <span className="text-lg font-bold text-white group-hover:text-prime-accent transition-colors">
              Prime Coach
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href={getLocalePath(locale)} className="text-prime-text-muted hover:text-white transition-colors text-sm font-medium">
              {t.home}
            </Link>
            <Link href={getLocalePath(locale, 'contact')} className="text-prime-text-muted hover:text-white transition-colors text-sm font-medium">
              {t.contact}
            </Link>
            <LanguageSwitcher locale={locale} />
            <a
              href="#download"
              className="bg-prime-accent hover:bg-prime-accent-dark text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-prime-accent/25"
            >
              {t.download}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-prime-text-muted hover:text-white p-2"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-prime-surface/95 backdrop-blur-md border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            <Link href={getLocalePath(locale)} onClick={() => setIsOpen(false)} className="block text-prime-text hover:text-prime-accent transition-colors py-2">
              {t.home}
            </Link>
            <Link href={getLocalePath(locale, 'contact')} onClick={() => setIsOpen(false)} className="block text-prime-text hover:text-prime-accent transition-colors py-2">
              {t.contact}
            </Link>
            <div className="pt-2">
              <LanguageSwitcher locale={locale} />
            </div>
            <a
              href="#download"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-prime-accent hover:bg-prime-accent-dark text-white px-5 py-3 rounded-lg font-semibold transition-colors mt-2"
            >
              {t.download}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
