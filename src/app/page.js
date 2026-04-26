import { getMessages } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import AIChatPreview from '@/components/AIChatPreview';
import AppComparison from '@/components/AppComparison';
import FeatureDeepDives from '@/components/FeatureDeepDives';
import WhoItsFor from '@/components/WhoItsFor';
import Screenshots from '@/components/Screenshots';
import WhyPrimeCoach from '@/components/WhyPrimeCoach';
import FAQ from '@/components/FAQ';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';

export default function Home() {
  const messages = getMessages('en');

  return (
    <>
      <Navbar locale="en" messages={messages} />
      <main className="flex-1">
        <Hero locale="en" messages={messages} />
        <HowItWorks messages={messages} />
        <Features messages={messages} />
        <AIChatPreview messages={messages} />
        <AppComparison messages={messages} />
        <FeatureDeepDives messages={messages} />
        <WhoItsFor messages={messages} />
        <Screenshots messages={messages} />
        <WhyPrimeCoach messages={messages} />
        <FAQ messages={messages} />
        <DownloadCTA locale="en" messages={messages} />
      </main>
      <Footer locale="en" messages={messages} />
    </>
  );
}
