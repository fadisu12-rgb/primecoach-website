import AnimatedSection from './AnimatedSection';

export default function WhyPrimeCoach({ messages }) {
  const t = messages.whyPrimeCoach;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-prime-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-display)] tracking-tight">
              {t.title}
            </h2>
            <p className="text-lg text-prime-text-muted leading-relaxed max-w-2xl mx-auto">
              {t.description}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
