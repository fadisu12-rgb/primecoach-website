'use client';

import AnimatedSection from './AnimatedSection';
import { motion, useReducedMotion } from 'framer-motion';

function ChatBubble({ text, isUser, delay, prefersReducedMotion }) {
  const content = (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? 'bg-gradient-to-r from-prime-accent to-orange-600 text-white rounded-br-md'
            : 'bg-prime-surface border border-white/5 text-prime-text-muted rounded-bl-md'
        }`}
      >
        {text}
      </div>
    </div>
  );

  if (prefersReducedMotion) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {content}
    </motion.div>
  );
}

export default function AIChatPreview({ messages }) {
  const t = messages.aiChatPreview;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-prime-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-display)] tracking-tight">
              {t.title}
            </h2>
            <p className="text-lg text-prime-text-muted max-w-2xl mx-auto">
              {t.subtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-prime-accent to-prime-green mx-auto rounded-full mt-4" />
          </div>
        </AnimatedSection>

        <div className="max-w-lg mx-auto">
          {/* Chat window */}
          <AnimatedSection>
            <div className="bg-prime-bg border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-prime-accent/5">
              {/* Chat header */}
              <div className="border-b border-white/5 bg-prime-surface/50">
                <div className="flex items-center gap-3 px-5 py-4">
                  <div className="w-9 h-9 bg-gradient-to-br from-prime-accent to-prime-green rounded-xl flex items-center justify-center shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{t.coachName}</p>
                    <p className="text-xs text-prime-text-subtle">{t.coachLabel}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-prime-green rounded-full animate-pulse" />
                    <p className="text-xs text-prime-green">{t.status}</p>
                  </div>
                </div>

                {/* Section tabs */}
                {t.chatTabs && (
                  <div className="flex px-5 gap-1">
                    {t.chatTabs.map((tab, i) => (
                      <div
                        key={i}
                        className={`px-3 py-2 text-xs font-medium rounded-t-lg ${
                          i === 0
                            ? 'bg-prime-bg text-prime-accent border-t border-x border-prime-accent/20'
                            : 'text-prime-text-subtle hover:text-prime-text-muted'
                        }`}
                      >
                        {tab}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Chat messages */}
              <div className="p-5 space-y-4">
                {t.conversation.map((msg, i) => (
                  <ChatBubble
                    key={i}
                    text={msg.text}
                    isUser={msg.isUser}
                    delay={0.2 + i * 0.3}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                ))}
              </div>

              {/* Input bar */}
              <div className="px-5 pb-5">
                <div className="flex items-center gap-2 bg-prime-surface rounded-xl px-4 py-3 border border-white/5">
                  <p className="text-sm text-prime-text-subtle flex-1">{t.inputPlaceholder}</p>
                  <div className="w-8 h-8 bg-prime-accent rounded-lg flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
