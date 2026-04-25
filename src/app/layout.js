import { Geist } from 'next/font/google';
import './globals.css';
import { APP_NAME, SITE_URL } from '@/lib/constants';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${APP_NAME} - AI Fitness Coaching App`,
    template: `%s | ${APP_NAME}`,
  },
  description: 'Personalized meal plans, smart workout routines, and AI coaching — all in one app. Available in English, Arabic, and Hebrew.',
  keywords: ['fitness app', 'AI coach', 'meal plan', 'workout plan', 'nutrition', 'exercise', 'health', 'prime coach'],
  authors: [{ name: APP_NAME }],
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    locale: 'en_US',
    url: SITE_URL,
    title: `${APP_NAME} - AI Fitness Coaching App`,
    description: 'Personalized meal plans, smart workout routines, and AI coaching — all in one app.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: APP_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} - AI Fitness Coaching App`,
    description: 'Personalized meal plans, smart workout routines, and AI coaching — all in one app.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: '/',
      ar: '/ar',
      he: '/he',
      'x-default': '/',
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: APP_NAME,
    operatingSystem: 'Android, iOS',
    applicationCategory: 'HealthApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'AI-powered fitness coaching app with personalized meal plans and workout routines.',
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    inLanguage: ['en', 'ar', 'he'],
  };

  return (
    <html lang="en" dir="ltr" className={`${geist.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-prime-bg text-prime-text">
        {children}
      </body>
    </html>
  );
}
