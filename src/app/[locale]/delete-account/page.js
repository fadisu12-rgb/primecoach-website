import { locales, getMessages } from '@/lib/i18n';
import { APP_NAME, SITE_URL } from '@/lib/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PolicyLayout from '@/components/PolicyLayout';
import DeleteAccountContent from '@/components/DeleteAccountContent';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: `Delete Account`,
    description: `How to delete your ${APP_NAME} account`,
    alternates: {
      canonical: `${SITE_URL}/delete-account`,
      languages: {
        en: '/delete-account',
        ar: '/ar/delete-account',
        he: '/he/delete-account',
        'x-default': '/delete-account',
      },
    },
  };
}

export default async function DeleteAccountPage({ params }) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <>
      <Navbar locale={locale} messages={messages} />
      <PolicyLayout locale={locale} messages={messages}>
        <DeleteAccountContent />
      </PolicyLayout>
      <Footer locale={locale} messages={messages} />
    </>
  );
}
