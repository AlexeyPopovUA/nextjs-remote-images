import Image from 'next/image';
import React from 'react';
import { ExampleBox } from '@/app/shared/ExampleBox';
import {
  getContainImageURL,
  getCoverImageURL,
  getFillImageURL,
  getInsideImageURL,
  getOutsideImageURL,
} from '@/app/shared/image';
import { ThumbnailFrame } from '@/app/examples/thumbnail-image-fit/ThumbnailFrame';
import { FigureWithText } from '@/app/examples/thumbnail-image-fit/FigureWithText';

export function Example() {
  const containUrlProps: getContainImageURL.Props = { width: 250, height: 250, src: '/20231105_143110.jpg' };
  const containUrl = getContainImageURL(containUrlProps);
  const containText = 'Image fit example - contain';

  const coverUrlProps: getCoverImageURL.Props = {
    width: 250,
    height: 250,
    src: '/20231105_143110.jpg',
    position: 'left bottom',
  };
  const coverUrl = getCoverImageURL(coverUrlProps);
  const coverText = 'Image fit example - cover';

  const fillUrlProps: getFillImageURL.Props = { width: 100, height: 250, src: '/20231105_143110.jpg' };
  const fillImageURL = getFillImageURL(fillUrlProps);
  const fillText = 'Image fit example - fill. (Squashed)';

  const insideUrlProps: getInsideImageURL.Props = { width: 250, height: 250, src: '/20231105_143110.jpg' };
  const insideImageURL = getInsideImageURL(insideUrlProps);
  const insideText = 'Image fit example - inside';

  const outsideUrlProps: getOutsideImageURL.Props = { width: 250, height: 250, src: '/20231105_143110.jpg' };
  const outsideImageURL = getOutsideImageURL(outsideUrlProps);
  const outsideText = 'Image fit example - outside';

  return (
    <ExampleBox>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:justify-normal">
        <FigureWithText text={containText}>
          <ThumbnailFrame width={containUrlProps.width} height={containUrlProps.height!}>
            <Image
              src={containUrl}
              alt={containText}
              unoptimized={true}
              width={containUrlProps.width}
              height={containUrlProps.height}
            />
          </ThumbnailFrame>
        </FigureWithText>

        <FigureWithText text={coverText}>
          <ThumbnailFrame width={coverUrlProps.width} height={coverUrlProps.height}>
            <Image
              src={coverUrl}
              alt={coverText}
              unoptimized={true}
              width={coverUrlProps.width}
              height={coverUrlProps.height}
            />
          </ThumbnailFrame>
        </FigureWithText>

        <FigureWithText text={fillText}>
          <div
            // set the same width and height to make the placeholder square
            style={{ width: fillUrlProps.height, height: fillUrlProps.height }}
            className="border-2 border-solid border-gray-400"
          >
            <ThumbnailFrame width={fillUrlProps.width} height={fillUrlProps.height}>
              <Image
                src={fillImageURL}
                alt={fillText}
                unoptimized={true}
                width={fillUrlProps.width}
                height={fillUrlProps.height}
              />
            </ThumbnailFrame>
          </div>
        </FigureWithText>

        <FigureWithText text={insideText}>
          {/*Extra wrapper with a defined size to let the figure caption position correctly, without an overlap with a frame*/}
          <div style={{ width: insideUrlProps.width, height: insideUrlProps.height }}>
            <ThumbnailFrame width={insideUrlProps.width} height={insideUrlProps.height}>
              {/*image is smaller than the frame*/}
              <Image
                src={insideImageURL}
                alt={insideText}
                unoptimized={true}
                width={insideUrlProps.width}
                height={insideUrlProps.height}
              />
            </ThumbnailFrame>
          </div>
        </FigureWithText>

        <FigureWithText text={outsideText}>
          <ThumbnailFrame width={outsideUrlProps.width} height={outsideUrlProps.height}>
            <Image
              src={outsideImageURL}
              alt={outsideText}
              unoptimized={true}
              // bigger width is set only for demonstration purposes
              width={outsideUrlProps.width + 84}
              height={outsideUrlProps.height}
            />
          </ThumbnailFrame>
        </FigureWithText>
      </div>
    </ExampleBox>
  );
}
