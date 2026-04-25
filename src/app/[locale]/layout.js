import { locales, getMessages, getDir } from '@/lib/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const dir = getDir(locale);

  return (
    <div dir={dir} lang={locale}>
      {children}
    </div>
  );
}
