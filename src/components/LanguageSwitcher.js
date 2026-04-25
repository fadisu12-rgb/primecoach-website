'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
  { code: 'he', label: 'HE' },
];

export default function LanguageSwitcher({ locale }) {
  const pathname = usePathname();

  function getLocalizedPath(targetLocale) {
    // Remove current locale prefix if any
    let cleanPath = pathname;
    if (pathname.startsWith('/ar')) cleanPath = pathname.replace(/^\/ar/, '') || '/';
    if (pathname.startsWith('/he')) cleanPath = pathname.replace(/^\/he/, '') || '/';

    if (targetLocale === 'en') return cleanPath || '/';
    return `/${targetLocale}${cleanPath === '/' ? '' : cleanPath}`;
  }

  return (
    <div className="flex items-center gap-1 bg-prime-surface rounded-lg p-1">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={getLocalizedPath(lang.code)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
            locale === lang.code
              ? 'bg-prime-accent text-white shadow-sm'
              : 'text-prime-text-muted hover:text-white hover:bg-prime-surface-muted'
          }`}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
}
