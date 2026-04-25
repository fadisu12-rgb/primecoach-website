import AnimatedSection from './AnimatedSection';

export default function Screenshots({ messages }) {
  const t = messages.screenshots;
  const screens = [
    { label: 'Dashboard', gradient: 'from-prime-accent/30 via-prime-accent/10 to-transparent', icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    )},
    { label: 'Workout Plan', gradient: 'from-prime-cyan/30 via-prime-cyan/10 to-transparent', icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5L17.5 17.5" /><path d="M7 2l-5 5 1.5 1.5 5-5z" /><path d="M17 22l5-5-1.5-1.5-5 5z" />
        <path d="M22 7l-5-5-1.5 1.5 5 5z" /><path d="M2 17l5 5 1.5-1.5-5-5z" />
      </svg>
    )},
    { label: 'Nutrition', gradient: 'from-prime-green/30 via-prime-green/10 to-transparent', icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    )},
    { label: 'AI Coach', gradient: 'from-violet-500/30 via-violet-500/10 to-transparent', icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
        <path d="M8 14h8" /><path d="M9 18h6" />
      </svg>
    )},
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-prime-surface/30 via-transparent to-prime-surface/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-display)] tracking-tight">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-prime-accent to-prime-green mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide justify-center flex-wrap lg:flex-nowrap">
          {screens.map((screen, i) => (
            <AnimatedSection key={i} delay={i * 0.12} className="snap-center shrink-0">
              {/* Phone frame */}
              <div className="w-56 h-[440px] bg-gradient-to-b from-prime-surface to-prime-bg rounded-[2.5rem] border border-white/10 p-2.5 shadow-xl hover:shadow-2xl hover:shadow-prime-accent/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                <div className={`w-full h-full bg-gradient-to-b ${screen.gradient} rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden`}>
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-prime-bg rounded-full" />
                  {/* Content */}
                  <div className="text-center px-4">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      {screen.icon}
                    </div>
                    <p className="text-white/90 text-sm font-semibold font-[family-name:var(--font-display)]">{screen.label}</p>
                    <p className="text-prime-text-subtle text-[10px] mt-1">Screenshot</p>
                    {/* Mock UI lines */}
                    <div className="mt-5 space-y-2 w-full">
                      <div className="h-2 bg-white/8 rounded-full w-full" />
                      <div className="h-2 bg-white/8 rounded-full w-3/4 mx-auto" />
                      <div className="h-2 bg-white/8 rounded-full w-5/6 mx-auto" />
                      <div className="h-8 bg-white/6 rounded-lg w-full mt-3" />
                      <div className="h-8 bg-white/6 rounded-lg w-full" />
                    </div>
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
