import AnimatedSection from './AnimatedSection';
import SmartDownloadButton from './SmartDownloadButton';

export default function Hero({ locale, messages }) {
  const t = messages.hero;

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-prime-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-prime-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <AnimatedSection>
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-prime-accent to-prime-accent bg-clip-text text-transparent">
                  {t.title}
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-prime-text-muted leading-relaxed mb-8">
                {t.subtitle}
              </p>
              <SmartDownloadButton messages={messages} locale={locale} />
            </div>
          </AnimatedSection>

          {/* Phone mockup placeholder */}
          <AnimatedSection delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone frame */}
                <div className="w-64 h-[520px] bg-prime-surface rounded-[3rem] border-2 border-prime-border p-3 shadow-2xl shadow-prime-accent/10">
                  {/* Screen */}
                  <div className="w-full h-full bg-prime-surface-muted rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-5 bg-prime-bg rounded-full" />
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-prime-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4FC3F7" strokeWidth="2">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                      <p className="text-prime-text-muted text-sm">App Screenshot</p>
                      <p className="text-prime-text-subtle text-xs mt-1">Placeholder</p>
                    </div>
                  </div>
                </div>
                {/* Glow behind phone */}
                <div className="absolute -inset-4 bg-prime-accent/10 rounded-[3.5rem] blur-2xl -z-10" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
