// lib/sanity/image.ts
import imageUrlBuilder from '@sanity/image-url';
import config from './config.js';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const urlFor = (source: SanityImageSource) => imageUrlBuilder(config).image(source);
