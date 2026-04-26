import AnimatedSection from './AnimatedSection';

const featureVisuals = [
  {
    color: 'from-prime-accent to-orange-600',
    bgGlow: 'bg-prime-accent/5',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
        <path d="M8 14h8" /><path d="M9 18h6" />
      </svg>
    ),
    mockup: (
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <div className="bg-prime-accent/20 rounded-xl px-3 py-2 text-xs text-prime-accent max-w-[70%]">Swap my lunch chicken for fish today</div>
        </div>
        <div className="flex items-start gap-2 justify-end">
          <div className="bg-prime-surface rounded-xl px-3 py-2 text-xs text-prime-text-muted max-w-[70%]">Done! Swapped to grilled salmon — same macros, +3g omega-3s.</div>
        </div>
        <div className="flex items-start gap-2">
          <div className="bg-prime-accent/20 rounded-xl px-3 py-2 text-xs text-prime-accent max-w-[70%]">Also skip cardio tomorrow</div>
        </div>
        <div className="flex items-start gap-2 justify-end">
          <div className="bg-prime-surface rounded-xl px-3 py-2 text-xs text-prime-text-muted max-w-[70%]">Removed Thursday cardio. Rest day added.</div>
        </div>
      </div>
    ),
  },
  {
    color: 'from-green-500 to-emerald-600',
    bgGlow: 'bg-prime-green/5',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    mockup: (
      <div className="space-y-2">
        <div className="flex items-center justify-between bg-prime-surface rounded-lg px-3 py-2">
          <span className="text-xs text-white">Breakfast</span>
          <span className="text-xs text-prime-green">520 cal</span>
        </div>
        <div className="flex items-center justify-between bg-prime-surface rounded-lg px-3 py-2">
          <span className="text-xs text-white">Lunch</span>
          <span className="text-xs text-prime-green">680 cal</span>
        </div>
        <div className="flex items-center justify-between bg-prime-surface rounded-lg px-3 py-2">
          <span className="text-xs text-white">Dinner</span>
          <span className="text-xs text-prime-green">590 cal</span>
        </div>
        <div className="mt-2 flex gap-3">
          <div className="flex-1 bg-prime-accent/10 rounded-lg px-2 py-1.5 text-center">
            <p className="text-xs text-prime-accent font-bold">145g</p>
            <p className="text-[10px] text-prime-text-subtle">Protein</p>
          </div>
          <div className="flex-1 bg-prime-green/10 rounded-lg px-2 py-1.5 text-center">
            <p className="text-xs text-prime-green font-bold">210g</p>
            <p className="text-[10px] text-prime-text-subtle">Carbs</p>
          </div>
          <div className="flex-1 bg-prime-cyan/10 rounded-lg px-2 py-1.5 text-center">
            <p className="text-xs text-prime-cyan font-bold">65g</p>
            <p className="text-[10px] text-prime-text-subtle">Fat</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    color: 'from-prime-cyan to-blue-600',
    bgGlow: 'bg-prime-cyan/5',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5L17.5 17.5" /><path d="M7 2l-5 5 1.5 1.5 5-5z" /><path d="M17 22l5-5-1.5-1.5-5 5z" />
        <path d="M22 7l-5-5-1.5 1.5 5 5z" /><path d="M2 17l5 5 1.5-1.5-5-5z" />
      </svg>
    ),
    mockup: (
      <div className="space-y-2">
        <div className="bg-prime-surface rounded-lg px-3 py-2 flex items-center justify-between">
          <div>
            <p className="text-xs text-white font-medium">Push Day</p>
            <p className="text-[10px] text-prime-text-subtle">Chest, Shoulders, Triceps</p>
          </div>
          <span className="text-[10px] text-prime-cyan bg-prime-cyan/10 px-2 py-0.5 rounded-full">Today</span>
        </div>
        <div className="bg-prime-surface rounded-lg px-3 py-2 flex items-center justify-between">
          <div>
            <p className="text-xs text-white font-medium">Pull Day</p>
            <p className="text-[10px] text-prime-text-subtle">Back, Biceps, Rear Delts</p>
          </div>
          <span className="text-[10px] text-prime-text-subtle">Tomorrow</span>
        </div>
        <div className="bg-prime-surface rounded-lg px-3 py-2 flex items-center justify-between">
          <div>
            <p className="text-xs text-white font-medium">Leg Day</p>
            <p className="text-[10px] text-prime-text-subtle">Quads, Hamstrings, Calves</p>
          </div>
          <span className="text-[10px] text-prime-text-subtle">Wednesday</span>
        </div>
      </div>
    ),
  },
];

export default function FeatureDeepDives({ messages }) {
  const t = messages.featureDeepDives;

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

        <div className="space-y-20">
          {t.items.map((item, i) => (
            <AnimatedSection key={i} delay={0.1}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                {/* Text side */}
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${featureVisuals[i].color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-5`}>
                    {featureVisuals[i].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                  <p className="text-prime-text-muted leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-prime-text-muted">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual side */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <div className={`absolute -inset-4 ${featureVisuals[i].bgGlow} rounded-3xl blur-2xl`} />
                    <div className="relative bg-prime-bg border border-white/10 rounded-2xl p-5">
                      {featureVisuals[i].mockup}
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
