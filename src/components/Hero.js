import AnimatedSection from './AnimatedSection';
import SmartDownloadButton from './SmartDownloadButton';

export default function Hero({ locale, messages }) {
  const t = messages.hero;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-prime-accent/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-prime-green/6 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-prime-cyan/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <AnimatedSection>
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-prime-accent/10 border border-prime-accent/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-prime-green rounded-full animate-pulse" />
                <span className="text-sm font-medium text-prime-accent">AI-Powered Fitness</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 font-[family-name:var(--font-display)] tracking-tight">
                <span className="text-white">{t.title.split(' ').slice(0, 2).join(' ')} </span>
                <span className="bg-gradient-to-r from-prime-accent via-prime-accent to-prime-green bg-clip-text text-transparent">
                  {t.title.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-prime-text-muted leading-relaxed mb-8">
                {t.subtitle}
              </p>
              <SmartDownloadButton messages={messages} locale={locale} />

              {/* Stats row */}
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/5">
                <div>
                  <p className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">{t.stats?.free || 'Free'}</p>
                  <p className="text-sm text-prime-text-muted">{t.stats?.freeLabel || 'No Credit Card'}</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="flex items-center gap-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <p className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">2 {t.stats?.minutes || 'min'}</p>
                  </div>
                  <p className="text-sm text-prime-text-muted">{t.stats?.setupLabel || 'To Get Your Plan'}</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <p className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">3</p>
                  <p className="text-sm text-prime-text-muted">{t.stats?.languagesLabel || 'Languages'}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Phone mockup */}
          <AnimatedSection delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone frame */}
                <div className="w-[280px] h-[560px] bg-gradient-to-b from-prime-surface to-prime-bg rounded-[3rem] border border-white/10 p-3 shadow-2xl shadow-prime-accent/10">
                  {/* Screen */}
                  <div className="w-full h-full bg-prime-bg rounded-[2.5rem] flex flex-col items-center justify-center overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
                    {/* Screen content mock */}
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-prime-accent to-prime-green rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-prime-accent/20">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                      <p className="text-white text-sm font-semibold mb-1">Prime Coach</p>
                      <p className="text-prime-text-subtle text-xs">Your AI Fitness Partner</p>
                      {/* Mock UI elements */}
                      <div className="mt-6 space-y-3 w-full">
                        <div className="h-3 bg-prime-surface rounded-full w-full" />
                        <div className="h-3 bg-prime-surface rounded-full w-3/4 mx-auto" />
                        <div className="h-10 bg-gradient-to-r from-prime-accent to-prime-accent-dark rounded-xl w-full mt-4" />
                        <div className="grid grid-cols-3 gap-2 mt-4">
                          <div className="h-16 bg-prime-surface rounded-lg" />
                          <div className="h-16 bg-prime-surface rounded-lg" />
                          <div className="h-16 bg-prime-surface rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Glow behind phone */}
                <div className="absolute -inset-8 bg-gradient-to-b from-prime-accent/15 via-prime-accent/5 to-prime-green/10 rounded-[4rem] blur-3xl -z-10" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
