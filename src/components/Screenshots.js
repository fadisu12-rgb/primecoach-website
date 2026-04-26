'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function Screenshots({ messages }) {
  const t = messages.screenshots;
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

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
              <button
                type="button"
                className="group cursor-pointer text-left border-0 bg-transparent p-0 font-inherit w-full"
                onClick={() => setLightbox({ src: screen.src, alt: screen.alt, label: screen.label })}
              >
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
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.label}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute top-4 end-4 z-[101] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-prime-accent"
            onClick={() => setLightbox(null)}
            aria-label="Close enlarged screenshot"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-h-[min(90vh,920px)] w-full max-w-[min(100%,480px)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={936}
              height={2028}
              className="h-auto max-h-[min(90vh,920px)] w-full rounded-2xl object-contain shadow-2xl"
              sizes="(max-width: 480px) 100vw, 480px"
              priority
            />
            <p className="mt-4 text-center text-sm font-medium text-white/90 font-[family-name:var(--font-display)]">
              {lightbox.label}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
