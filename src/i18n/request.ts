import { routing } from './routing';

// Define the parameter type
interface RequestConfigParams {
  locale: string;
}

export default async function getRequestConfig({ locale }: RequestConfigParams) {
  // Validate if the locale is supported
  const isValidLocale = (locales: string[], locale: string): boolean => {
    return locales.includes(locale);
  };
  
  // Use the provided locale if valid, otherwise fall back to default
  const finalLocale = isValidLocale(routing.locales, locale) 
    ? locale 
    : routing.defaultLocale;

  // Dynamically import the JSON file for the selected locale
  try {
    const messages = (await import(`../locales/${finalLocale}.json`)).default;
    
    return {
      locale: finalLocale,
      messages
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${finalLocale}`, error);
    
    // Fallback to default locale if the requested one fails
    const fallbackMessages = (await import(`../locales/${routing.defaultLocale}.json`)).default;
    
    return {
      locale: routing.defaultLocale,
      messages: fallbackMessages
    };
  }
}