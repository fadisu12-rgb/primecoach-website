'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { getLocalePath } from '@/lib/i18n';

export default function Navbar({ locale, messages }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = messages.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${
      scrolled
        ? 'bg-prime-surface/90 backdrop-blur-xl shadow-lg shadow-black/20 border border-white/5'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href={getLocalePath(locale)} className="flex items-center gap-3 group cursor-pointer">
            <Image src="/logo.png" alt="Prime Coach" width={34} height={34} className="rounded-lg" />
            <span className="text-lg font-bold text-white group-hover:text-prime-accent transition-colors font-[family-name:var(--font-display)]">
              Prime Coach
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href={getLocalePath(locale)} className="text-prime-text-muted hover:text-white transition-colors text-sm font-medium cursor-pointer">
              {t.home}
            </Link>
            <Link href={getLocalePath(locale, 'contact')} className="text-prime-text-muted hover:text-white transition-colors text-sm font-medium cursor-pointer">
              {t.contact}
            </Link>
            <LanguageSwitcher locale={locale} />
            <a
              href="#download"
              className="bg-prime-accent hover:bg-prime-accent-dark text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-prime-accent/25 cursor-pointer"
            >
              {t.download}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-prime-text-muted hover:text-white p-2 cursor-pointer"
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
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-prime-surface/95 backdrop-blur-xl border-t border-white/5 rounded-b-2xl">
          <div className="px-5 py-4 space-y-3">
            <Link href={getLocalePath(locale)} onClick={() => setIsOpen(false)} className="block text-prime-text hover:text-prime-accent transition-colors py-2 cursor-pointer">
              {t.home}
            </Link>
            <Link href={getLocalePath(locale, 'contact')} onClick={() => setIsOpen(false)} className="block text-prime-text hover:text-prime-accent transition-colors py-2 cursor-pointer">
              {t.contact}
            </Link>
            <div className="pt-2">
              <LanguageSwitcher locale={locale} />
            </div>
            <a
              href="#download"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-prime-accent hover:bg-prime-accent-dark text-white px-5 py-3 rounded-xl font-semibold transition-colors mt-2 cursor-pointer"
            >
              {t.download}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
