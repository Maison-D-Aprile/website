import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Maison D'Aprile - Noir",
  description: "Discover the latest collections from Maison D'Aprile",
  metadataBase: new URL('https://maisondaprile.com'),
  openGraph: {
    title: "Maison D'Aprile",
    description: 'Noir',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // You need to load messages manually, e.g. from a file or pass as props
  // Example: import messages from '../messages/en.json';
  // For now, use an empty object as a placeholder
  const messages = {};

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
