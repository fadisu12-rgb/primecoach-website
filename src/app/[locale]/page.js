import { locales, getMessages } from '@/lib/i18n';
import { APP_NAME, SITE_URL } from '@/lib/constants';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return {
    title: messages.hero.title,
    description: messages.hero.subtitle,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        en: '/',
        ar: '/ar',
        he: '/he',
        'x-default': '/',
      },
    },
    openGraph: {
      locale: locale === 'ar' ? 'ar_SA' : locale === 'he' ? 'he_IL' : 'en_US',
    },
  };
}

export default async function LocaleHome({ params }) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <>
      <Navbar locale={locale} messages={messages} />
      <main className="flex-1">
        <Hero locale={locale} messages={messages} />
        <Features messages={messages} />
        <Screenshots messages={messages} />
        <DownloadCTA locale={locale} messages={messages} />
      </main>
      <Footer locale={locale} messages={messages} />
    </>
  );
}
