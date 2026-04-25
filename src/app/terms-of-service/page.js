import { getMessages } from '@/lib/i18n';
import { APP_NAME, SITE_URL } from '@/lib/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PolicyLayout from '@/components/PolicyLayout';
import TermsContent from '@/components/TermsContent';

export const metadata = {
  title: 'Terms of Service',
  description: `${APP_NAME} Terms of Service — rules and guidelines for using our app.`,
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

export default function TermsPage() {
  const messages = getMessages('en');

  return (
    <>
      <Navbar locale="en" messages={messages} />
      <PolicyLayout locale="en" messages={messages}>
        <TermsContent locale="en" />
      </PolicyLayout>
      <Footer locale="en" messages={messages} />
    </>
  );
}
