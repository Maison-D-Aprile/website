// Remove the existing content and replace with:
declare module 'next-intl/server' {
  export interface RequestConfigOptions {
    locale: string;
    requestLocale?: string;
  }
}