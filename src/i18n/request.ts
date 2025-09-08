const defaultLocale = 'en';

export default async function getRequestConfig() {
  const locale = defaultLocale;
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
}
