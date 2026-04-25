import { getMessages } from '@/lib/i18n';
import { APP_NAME, SITE_URL } from '@/lib/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PolicyLayout from '@/components/PolicyLayout';
import PrivacyContent from '@/components/PrivacyContent';

export const metadata = {
  title: 'Privacy Policy',
  description: `${APP_NAME} Privacy Policy — how we collect, use, and protect your information.`,
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

export default function PrivacyPolicyPage() {
  const messages = getMessages('en');

  return (
    <>
      <Navbar locale="en" messages={messages} />
      <PolicyLayout locale="en" messages={messages}>
        <PrivacyContent locale="en" />
      </PolicyLayout>
      <Footer locale="en" messages={messages} />
    </>
  );
}
