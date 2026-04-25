import { locales, getMessages } from '@/lib/i18n';
import { APP_NAME, SITE_URL } from '@/lib/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PolicyLayout from '@/components/PolicyLayout';
import PrivacyContent from '@/components/PrivacyContent';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: `Privacy Policy`,
    description: `${APP_NAME} Privacy Policy`,
    alternates: {
      canonical: `${SITE_URL}/privacy-policy`,
      languages: {
        en: '/privacy-policy',
        ar: '/ar/privacy-policy',
        he: '/he/privacy-policy',
        'x-default': '/privacy-policy',
      },
    },
  };
}

export default async function PrivacyPolicyPage({ params }) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <>
      <Navbar locale={locale} messages={messages} />
      <PolicyLayout locale={locale} messages={messages}>
        <PrivacyContent locale={locale} />
      </PolicyLayout>
      <Footer locale={locale} messages={messages} />
    </>
  );
}
