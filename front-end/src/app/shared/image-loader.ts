'use client';

import { ImageLoaderProps } from 'next/image';
import { getContainImageURL } from './image';

export function imageLoader(props: ImageLoaderProps) {
  const { src, width, quality } = props;

  return getContainImageURL({ src, width, quality });
}
