import { getMessages } from '@/lib/i18n';
import { APP_NAME, SITE_URL } from '@/lib/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PolicyLayout from '@/components/PolicyLayout';
import DeleteAccountContent from '@/components/DeleteAccountContent';

export const metadata = {
  title: 'Delete Account',
  description: `How to delete your ${APP_NAME} account and what happens to your data.`,
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

export default function DeleteAccountPage() {
  const messages = getMessages('en');

  return (
    <>
      <Navbar locale="en" messages={messages} />
      <PolicyLayout locale="en" messages={messages}>
        <DeleteAccountContent />
      </PolicyLayout>
      <Footer locale="en" messages={messages} />
    </>
  );
}
