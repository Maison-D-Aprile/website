import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const isProd = process.env.NODE_ENV === 'production';
const apiVersion = '2024-09-05';

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion,
  useCdn: isProd,
});

export default client;
export const urlFor = (source: SanityImageSource) => imageUrlBuilder(client).image(source);
