'use client';

import { motion, useReducedMotion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

function StepItem({ text, stepNumber, delay, isLast, prefersReducedMotion }) {
  const content = (
    <div className="flex items-center gap-3">
      <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
        <span className="text-xs text-prime-text-subtle font-medium">{stepNumber}</span>
      </div>
      <p className="text-sm text-prime-text-muted">{text}</p>
    </div>
  );

  if (prefersReducedMotion) return <div>{content}{!isLast && <div className="ml-3.5 w-px h-3 bg-white/5" />}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      {content}
      {!isLast && <div className="ml-3.5 w-px h-3 bg-white/5" />}
    </motion.div>
  );
}

function MessageBubble({ text, delay, prefersReducedMotion }) {
  const content = (
    <div className="flex justify-end">
      <div className="bg-gradient-to-r from-prime-accent to-orange-600 rounded-2xl rounded-br-md px-4 py-3 max-w-[85%]">
        <p className="text-sm text-white">{text}</p>
      </div>
    </div>
  );

  if (prefersReducedMotion) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      {content}
    </motion.div>
  );
}

function ResponseBubble({ text, delay, prefersReducedMotion }) {
  const content = (
    <div className="flex justify-start">
      <div className="bg-prime-surface border border-white/5 rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%]">
        <p className="text-sm text-prime-text-muted">{text}</p>
      </div>
    </div>
  );

  if (prefersReducedMotion) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      {content}
    </motion.div>
  );
}

export default function AppComparison({ messages }) {
  const t = messages.appComparison;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-prime-accent/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] bg-prime-green/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-display)] tracking-tight">
              {t.title}
            </h2>
            <p className="text-lg text-prime-text-muted max-w-2xl mx-auto">
              {t.subtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-prime-accent to-prime-green mx-auto rounded-full mt-4" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Other apps — the painful way */}
          <AnimatedSection delay={0.1}>
            <div className="bg-prime-surface/40 border border-white/5 rounded-2xl p-6 h-full relative">
              {/* Faded / dull header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-prime-text-subtle">{t.otherApps.label}</p>
                  <p className="text-xs text-prime-text-subtle/60">{t.otherApps.task}</p>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-0">
                {t.otherApps.steps.map((step, i) => (
                  <StepItem
                    key={i}
                    text={step}
                    stepNumber={i + 1}
                    delay={0.3 + i * 0.15}
                    isLast={i === t.otherApps.steps.length - 1}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                ))}
              </div>

              {/* Time indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-xs text-red-400">{t.otherApps.time}</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Prime Coach — the easy way */}
          <AnimatedSection delay={0.2}>
            <div className="bg-prime-bg border border-prime-accent/20 rounded-2xl p-6 h-full relative shadow-lg shadow-prime-accent/5">
              {/* Highlighted header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-prime-accent to-prime-green rounded-xl flex items-center justify-center shadow-md">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.primeCoach.label}</p>
                  <p className="text-xs text-prime-text-muted">{t.primeCoach.task}</p>
                </div>
              </div>

              {/* Chat interaction */}
              <div className="space-y-3">
                <MessageBubble
                  text={t.primeCoach.userMessage}
                  delay={0.5}
                  prefersReducedMotion={prefersReducedMotion}
                />
                <ResponseBubble
                  text={t.primeCoach.aiResponse}
                  delay={0.9}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </div>

              {/* Time indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-xs text-prime-green">{t.primeCoach.time}</span>
              </div>

              {/* Done checkmark */}
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 bg-prime-green/10 rounded-full flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
