import AnimatedSection from './AnimatedSection';

const featureIcons = [
  // AI Coaching
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22" />
      <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
      <path d="M8 14h8" /><path d="M9 18h6" />
    </svg>
  ), color: 'from-prime-accent to-orange-600' },
  // Meals
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ), color: 'from-green-500 to-emerald-600' },
  // Workouts
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 6.5L17.5 17.5" /><path d="M7 2l-5 5 1.5 1.5 5-5z" /><path d="M17 22l5-5-1.5-1.5-5 5z" />
      <path d="M22 7l-5-5-1.5 1.5 5 5z" /><path d="M2 17l5 5 1.5-1.5-5-5z" />
    </svg>
  ), color: 'from-prime-cyan to-blue-600' },
  // Progress
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ), color: 'from-prime-accent to-amber-600' },
  // Multi-language
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ), color: 'from-violet-500 to-purple-600' },
  // Smart Adaptation
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ), color: 'from-prime-green to-emerald-600' },
];

export default function Features({ messages }) {
  const t = messages.features;

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group bg-prime-surface/60 border border-white/5 rounded-2xl p-6 hover:border-prime-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-prime-accent/5 h-full cursor-pointer hover:bg-prime-surface/80 hover:-translate-y-1">
                <div className={`w-12 h-12 bg-gradient-to-br ${featureIcons[i].color} rounded-xl flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {featureIcons[i].icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-[family-name:var(--font-display)]">{item.title}</h3>
                <p className="text-prime-text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
