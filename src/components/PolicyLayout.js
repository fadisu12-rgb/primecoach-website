import Link from 'next/link';
import { getLocalePath } from '@/lib/i18n';

export default function PolicyLayout({ locale, messages, children }) {
  const isEnglish = locale === 'en';

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-prime-surface/95 rounded-2xl p-6 sm:p-10 border border-prime-border shadow-xl">
          {/* Show notice for non-English locales */}
          {!isEnglish && (
            <div className="mb-6 p-4 bg-prime-accent/10 border border-prime-accent/20 rounded-xl">
              <p className="text-prime-accent text-sm">
                {messages.policy.onlyEnglish}{' '}
                <Link href={getLocalePath('en', getCurrentPath(locale))} className="underline font-medium">
                  {messages.policy.viewInEnglish}
                </Link>
              </p>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

function getCurrentPath(locale) {
  // This is used server-side, path is derived from the page itself
  return '';
}
