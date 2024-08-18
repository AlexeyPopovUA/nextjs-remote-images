import { ExampleBox } from '@/app/shared/ExampleBox';
import { imageLoader } from '@/app/shared/image-loader';
import Image from 'next/image';
import React from 'react';
import { readBlurredImageSrcPair } from '@/app/shared/image';

export async function Example() {
  const blurredImageSrcPair = await readBlurredImageSrcPair({ src: '/20231105_143110.jpg' });

  return (
    <ExampleBox>
      <Image
        src="/20231105_143110.jpg"
        loader={imageLoader}
        placeholder={'blur'}
        blurDataURL={blurredImageSrcPair.blurDataURL}
        alt="Picture of the author"
        sizes="100vw"
        className="h-auto w-full"
        width={500}
        height={500 / blurredImageSrcPair.ratio}
      />
    </ExampleBox>
  );
}
