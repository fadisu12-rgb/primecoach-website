import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function Screenshots({ messages }) {
  const t = messages.screenshots;
  const screens = [
    { src: '/screenshots/screenshot-1.webp', label: 'Workout Plan', alt: 'Prime Coach workout planning screen showing lifting exercises and weekly schedule' },
    { src: '/screenshots/screenshot-2.webp', label: 'Nutrition Tracking', alt: 'Prime Coach nutrition screen showing meal plan with calorie and macro tracking' },
    { src: '/screenshots/screenshot-3.webp', label: 'AI Coach', alt: 'Prime Coach AI chat interface for adjusting meals and training plans' },
    { src: '/screenshots/screenshot-5.webp', label: 'Exercise Library', alt: 'Prime Coach exercise details with instructions and muscle diagram' },
    { src: '/screenshots/screenshot-7.webp', label: 'Food Scanner', alt: 'Prime Coach food scanner showing scan results with nutritional breakdown' },
    { src: '/screenshots/screenshot-8.webp', label: 'Nutrition Details', alt: 'Prime Coach nutrition details showing calories, protein, carbs, and fats' },
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

        {/* Promo video */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-prime-accent/10 aspect-video">
              <iframe
                src="https://www.youtube.com/embed/lQ2qjkj1-ok"
                title="Prime Coach App Promo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
            {t.videoCaption && (
              <p className="text-center text-sm text-prime-text-muted mt-4">{t.videoCaption}</p>
            )}
          </div>
        </AnimatedSection>

        {/* Screenshots gallery */}
        <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory lg:justify-center lg:flex-wrap scrollbar-hide px-2">
          {screens.map((screen, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="snap-center shrink-0">
              <div className="group cursor-pointer">
                {/* Phone frame */}
                <div className="w-[200px] h-[420px] bg-gradient-to-b from-prime-surface to-prime-bg rounded-[2.5rem] border border-white/10 p-2 shadow-xl hover:shadow-2xl hover:shadow-prime-accent/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20" />
                  {/* Screenshot image */}
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      fill
                      className="object-cover object-top"
                      sizes="200px"
                    />
                  </div>
                </div>
                {/* Label */}
                <p className="text-center text-sm text-prime-text-muted mt-3 font-medium font-[family-name:var(--font-display)] group-hover:text-white transition-colors">
                  {screen.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
