import en from '@/messages/en.json';
import ar from '@/messages/ar.json';
import he from '@/messages/he.json';

const allMessages = { en, ar, he };

export const locales = ['ar', 'he'];
export const allLocales = ['en', 'ar', 'he'];
export const defaultLocale = 'en';
export const rtlLocales = ['ar', 'he'];

export function getMessages(locale) {
  return allMessages[locale] || allMessages.en;
}

export function isRtl(locale) {
  return rtlLocales.includes(locale);
}

export function getDir(locale) {
  return isRtl(locale) ? 'rtl' : 'ltr';
}

export function getLocalePath(locale, path = '') {
  if (locale === defaultLocale) return `/${path}`;
  return `/${locale}${path ? `/${path}` : ''}`;
}
