import {withSentryConfig} from '@sentry/nextjs';
import withPWA from 'next-pwa';
import withBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

// Update this line to point to your request config
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  // Updated turbopack configuration (replaces deprecated experimental.turbo)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
      ],
    },
  ],
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

// PWA configuration
const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching: [],
});

export default withSentryConfig(
  withNextIntl(
    withBundleAnalyzerConfig(
      pwaConfig(nextConfig)
    )
  ), 
  {
    org: "maison-daprile",
    project: "javascript-nextjs",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    tunnelRoute: "/monitoring",
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);