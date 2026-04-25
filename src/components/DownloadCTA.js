import AnimatedSection from './AnimatedSection';
import SmartDownloadButton from './SmartDownloadButton';

export default function DownloadCTA({ locale, messages }) {
  const t = messages.download;

  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-prime-accent/5 via-prime-accent/10 to-prime-accent/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-prime-text-muted mb-10 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="flex justify-center">
            <SmartDownloadButton messages={messages} locale={locale} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
