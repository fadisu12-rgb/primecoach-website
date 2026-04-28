
import AnimatedSection from './AnimatedSection';
import SmartDownloadButton from './SmartDownloadButton';

export default function DownloadCTA({ locale, messages }) {
  const t = messages.download;

  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-prime-accent/5 via-prime-accent/10 to-prime-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-prime-accent/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-display)] tracking-tight">
            {t.title}
          </h2>
          <p className="text-lg text-prime-text-muted mb-8 max-w-2xl mx-auto">
            {t.subtitle}
          </p>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 mb-10 flex-wrap">
            <div className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="text-sm text-prime-text-muted">{t.trust?.noCreditCard || '7-day free trial to start'}</span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="text-sm text-prime-text-muted">{t.trust?.quickSetup || 'Personalized in Under 2 Minutes'}</span>
            </div>
            <div className="w-px h-5 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-1.5 hidden sm:flex">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-sm text-prime-text-muted">{t.trust?.dataPrivacy || 'Your Data Stays Private'}</span>
            </div>
          </div>

          <div className="flex justify-center">
            <SmartDownloadButton messages={messages} locale={locale} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
