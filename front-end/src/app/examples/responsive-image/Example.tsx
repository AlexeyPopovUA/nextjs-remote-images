'use client';

import React from 'react';
import Image from 'next/image';
import { ExampleBox } from '@/app/shared/ExampleBox';
import { imageLoader } from '@/app/shared/image-loader';

export function Example() {
  return (
    <ExampleBox>
      <Image
        src="/20231105_143110.jpg"
        loader={imageLoader}
        alt="Picture of the author"
        sizes="100vw"
        className="h-auto w-full"
        width={500}
        height={300}
      />
    </ExampleBox>
  );
}
