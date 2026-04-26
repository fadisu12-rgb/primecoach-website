import AnimatedSection from './AnimatedSection';

const steps = [
  {
    number: '1',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    color: 'from-prime-accent to-orange-600',
  },
  {
    number: '2',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
    color: 'from-prime-cyan to-blue-600',
  },
  {
    number: '3',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    color: 'from-prime-green to-emerald-600',
  },
];

export default function HowItWorks({ messages }) {
  const t = messages.howItWorks;

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-display)] tracking-tight">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-prime-accent to-prime-green mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-prime-accent/30 via-prime-cyan/30 to-prime-green/30" />

          {t.items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="text-center relative">
                {/* Step number + icon */}
                <div className="relative inline-flex mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${steps[i].color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    {steps[i].icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-prime-bg border-2 border-prime-accent rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-prime-accent">{steps[i].number}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 font-[family-name:var(--font-display)]">
                  {item.title}
                </h3>
                <p className="text-prime-text-muted text-sm leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
