'use client';

import { ImageLoaderProps } from 'next/image';
import { getContainImageURL } from './image';

export function imageLoader({ src, width, quality }: ImageLoaderProps) {
  return getContainImageURL({
    src,
    width,
    // note, that the next/image loader has no height parameter
    height: undefined,
    quality,
  });
}
