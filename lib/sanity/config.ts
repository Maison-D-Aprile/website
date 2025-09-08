// lib/sanity/config.ts
const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  apiVersion: '2024-05-17',
  useCdn: process.env.NODE_ENV === 'production',
};

export default config;
