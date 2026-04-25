import { getMessages } from '@/lib/i18n';
import { CONTACT_EMAIL, APP_NAME, SITE_URL } from '@/lib/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Contact Us',
  description: `Get in touch with the ${APP_NAME} team. We'd love to hear your questions and feedback.`,
  alternates: {
    canonical: `${SITE_URL}/contact`,
    languages: {
      en: '/contact',
      ar: '/ar/contact',
      he: '/he/contact',
      'x-default': '/contact',
    },
  },
};

export default function ContactPage() {
  const messages = getMessages('en');
  const t = messages.contact;

  return (
    <>
      <Navbar locale="en" messages={messages} />
      <main className="flex-1 min-h-screen pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="bg-prime-surface/95 rounded-2xl p-8 sm:p-12 border border-prime-border shadow-xl text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-prime-accent/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>

              <h1 className="text-3xl font-bold text-white mb-3">{t.title}</h1>
              <p className="text-prime-text-muted text-lg mb-8">{t.subtitle}</p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-3 bg-prime-accent hover:bg-prime-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-prime-accent/25"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {t.emailButton}
              </a>

              <p className="text-prime-text-subtle text-sm mt-6">{CONTACT_EMAIL}</p>
              <p className="text-prime-text-subtle text-sm mt-2">{t.responseTime}</p>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer locale="en" messages={messages} />
    </>
  );
}
