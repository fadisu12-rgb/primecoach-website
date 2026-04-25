import AnimatedSection from './AnimatedSection';

export default function Screenshots({ messages }) {
  const t = messages.screenshots;
  const screens = [
    { label: 'Dashboard', color: 'from-prime-accent/20 to-prime-accent/5' },
    { label: 'Workout Plan', color: 'from-prime-orange/20 to-prime-orange/5' },
    { label: 'Nutrition', color: 'from-prime-success/20 to-prime-success/5' },
    { label: 'AI Coach', color: 'from-prime-accent/20 to-prime-accent/5' },
  ];

  return (
    <section className="py-24 bg-prime-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-prime-accent mx-auto rounded-full mb-16" />
        </AnimatedSection>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide justify-center flex-wrap lg:flex-nowrap">
          {screens.map((screen, i) => (
            <AnimatedSection key={i} delay={i * 0.15} className="snap-center shrink-0">
              {/* Phone frame */}
              <div className="w-52 h-[420px] bg-prime-bg rounded-[2.5rem] border border-prime-border p-2.5 shadow-xl hover:shadow-2xl hover:shadow-prime-accent/10 transition-shadow duration-300">
                <div className={`w-full h-full bg-gradient-to-b ${screen.color} rounded-[2rem] flex items-center justify-center`}>
                  {/* Notch */}
                  <div className="absolute top-5 w-16 h-4 bg-prime-bg rounded-full" />
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-prime-text-muted">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-5-5L5 21" />
                      </svg>
                    </div>
                    <p className="text-prime-text-muted text-xs font-medium">{screen.label}</p>
                    <p className="text-prime-text-subtle text-[10px] mt-0.5">Screenshot</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
