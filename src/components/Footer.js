import Link from 'next/link';
import Image from 'next/image';
import { CONTACT_EMAIL } from '@/lib/constants';
import { getLocalePath } from '@/lib/i18n';

export default function Footer({ locale, messages }) {
  const t = messages;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-prime-footer relative">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-prime-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Prime Coach" width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-bold text-white font-[family-name:var(--font-display)]">Prime Coach</span>
            </div>
            <p className="text-prime-text-muted text-sm leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href={getLocalePath(locale)} className="text-prime-text-muted hover:text-prime-accent transition-colors text-sm cursor-pointer">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath(locale, 'contact')} className="text-prime-text-muted hover:text-prime-accent transition-colors text-sm cursor-pointer">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath(locale, 'privacy-policy')} className="text-prime-text-muted hover:text-prime-accent transition-colors text-sm cursor-pointer">
                  {t.nav.privacy}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath(locale, 'terms-of-service')} className="text-prime-text-muted hover:text-prime-accent transition-colors text-sm cursor-pointer">
                  {t.nav.terms}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath(locale, 'delete-account')} className="text-prime-text-muted hover:text-prime-accent transition-colors text-sm cursor-pointer">
                  {t.nav.deleteAccount}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.nav.contact}</h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-prime-accent hover:text-prime-accent-dark transition-colors text-sm cursor-pointer"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 text-center">
          <p className="text-prime-text-subtle text-sm">
            &copy; {currentYear} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
