import AnimatedSection from './AnimatedSection';

const audienceIcons = [
  // Beginners
  <svg key="beginners" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M12 16v-4" /><path d="M12 8h.01" />
  </svg>,
  // Gym goers
  <svg key="gym" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 6.5L17.5 17.5" /><path d="M7 2l-5 5 1.5 1.5 5-5z" /><path d="M17 22l5-5-1.5-1.5-5 5z" />
    <path d="M22 7l-5-5-1.5 1.5 5 5z" /><path d="M2 17l5 5 1.5-1.5-5-5z" />
  </svg>,
  // Busy people
  <svg key="busy" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>,
];

export default function WhoItsFor({ messages }) {
  const t = messages.whoItsFor;

  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-display)] tracking-tight">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-prime-accent to-prime-green mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center p-8 rounded-2xl bg-prime-surface/40 border border-white/5 hover:border-prime-accent/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-prime-accent/20 to-prime-green/20 flex items-center justify-center text-prime-accent">
                  {audienceIcons[i]}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 font-[family-name:var(--font-display)]">{item.title}</h3>
                <p className="text-prime-text-muted text-sm">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
