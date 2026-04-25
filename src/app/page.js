import { getMessages } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhoItsFor from '@/components/WhoItsFor';
import WhyPrimeCoach from '@/components/WhyPrimeCoach';
import Screenshots from '@/components/Screenshots';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';

export default function Home() {
  const messages = getMessages('en');

  return (
    <>
      <Navbar locale="en" messages={messages} />
      <main className="flex-1">
        <Hero locale="en" messages={messages} />
        <Features messages={messages} />
        <WhoItsFor messages={messages} />
        <Screenshots messages={messages} />
        <WhyPrimeCoach messages={messages} />
        <DownloadCTA locale="en" messages={messages} />
      </main>
      <Footer locale="en" messages={messages} />
    </>
  );
}
