import React from 'react';

import { ExampleBox } from '@/app/shared/ExampleBox';
import { readBlurredImageSrcPair } from '@/app/shared/image';
import { ThumbnailImage } from '@/app/shared/animated-image-loading/thumbnail-image';
import { imageLoader } from '@/app/shared/image-loader';

export async function Example() {
  const blurredImageSrcPair = await readBlurredImageSrcPair({ src: '/20231105_143110.jpg' });

  return (
    <ExampleBox>
      <ThumbnailImage
        src="/20231105_143110.jpg"
        alt="Picture of the author"
        blurDataURL={blurredImageSrcPair.blurDataURL}
        sizes="100vw"
        className="h-auto w-full"
        imageClassName="w-full h-auto"
        width={1000}
        height={1000 / blurredImageSrcPair.ratio}
        loader={imageLoader}
      />
    </ExampleBox>
  );
}
