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
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < 5 ? '#F97316' : '#334155'} stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
              <span className="text-sm text-prime-text-muted ml-1">4.6/5</span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <span className="text-sm text-prime-text-muted">Health & Fitness</span>
            <div className="w-px h-5 bg-white/10 hidden sm:block" />
            <span className="text-sm text-prime-text-muted hidden sm:block">Free to Start</span>
          </div>

          <div className="flex justify-center">
            <SmartDownloadButton messages={messages} locale={locale} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
