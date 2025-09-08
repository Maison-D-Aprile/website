// lib/sanity/image.ts
import createImageUrlBuilder from '@sanity/image-url';
import { config } from './config';

const imageBuilder = createImageUrlBuilder(config);

export const urlForImage = (source: any) => {
  return imageBuilder.image(source);
};