import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import { APP_NAME, SITE_URL } from '@/lib/constants';

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow-condensed',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/screenshots/image_header.png',
    shortcut: '/screenshots/image_header.png',
    apple: '/screenshots/image_header.png',
  },
  title: {
    default: `${APP_NAME} - AI Fitness Coaching App`,
    template: `%s | ${APP_NAME}`,
  },
  description: 'Your all-in-one fitness and nutrition app — personalized workouts, smart meal plans, food scanner, and an AI coach you can chat with. Available in English, Arabic, and Hebrew.',
  keywords: ['fitness app', 'AI fitness coach', 'meal plan', 'workout planner', 'nutrition', 'exercise', 'health', 'prime coach', 'food scanner', 'macro tracker', 'calorie counter', 'personal trainer app'],
  authors: [{ name: APP_NAME }],
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    locale: 'en_US',
    url: SITE_URL,
    title: `${APP_NAME} - AI Fitness Coaching App`,
    description: 'Personalized workouts, smart meal plans, and an AI coach you can chat with — like texting a trainer, not fighting menus.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: APP_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} - AI Fitness Coaching App`,
    description: 'Personalized workouts, smart meal plans, and an AI coach you can chat with — like texting a trainer, not fighting menus.',
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
    description: 'Your all-in-one fitness and nutrition app — personalized workouts, smart meal plans, food scanner, and an AI coach you can chat with.',
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    inLanguage: ['en', 'ar', 'he'],
  };

  return (
    <html lang="en" dir="ltr" className={`${barlow.variable} ${barlowCondensed.variable} antialiased`}>
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
