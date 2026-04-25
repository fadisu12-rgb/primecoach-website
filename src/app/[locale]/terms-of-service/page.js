import { locales, getMessages } from '@/lib/i18n';
import { APP_NAME, SITE_URL } from '@/lib/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PolicyLayout from '@/components/PolicyLayout';
import TermsContent from '@/components/TermsContent';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: `Terms of Service`,
    description: `${APP_NAME} Terms of Service`,
    alternates: {
      canonical: `${SITE_URL}/terms-of-service`,
      languages: {
        en: '/terms-of-service',
        ar: '/ar/terms-of-service',
        he: '/he/terms-of-service',
        'x-default': '/terms-of-service',
      },
    },
  };
}

export default async function TermsPage({ params }) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <>
      <Navbar locale={locale} messages={messages} />
      <PolicyLayout locale={locale} messages={messages}>
        <TermsContent locale={locale} />
      </PolicyLayout>
      <Footer locale={locale} messages={messages} />
    </>
  );
}
