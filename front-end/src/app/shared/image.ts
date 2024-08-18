import Jimp from 'jimp';

const BASE_URL = 'https://images.oleksiipopov.com';
const BUCKET = 'serverless-image-handler-image-source';
const BASE_PATH = 'examples/nextjs-remote-images';
const DEFAULT_IMAGE_QUALITY = 75;

type Props = {
  src: string;
  width: number;
  height?: number;
  quality?: number;
};

function getDefaultBucketProps(src: string) {
  return {
    bucket: BUCKET,
    key: `${BASE_PATH}${src}`,
  };
}

function getDefaultImageFormatProps(quality: number) {
  return {
    webp: {
      quality,
    },
    png: {
      quality,
    },
    jpg: {
      quality,
    },
  };
}

function encodePayloadForUrl(configuration: { [key: string]: unknown }) {
  return `${BASE_URL}/${btoa(JSON.stringify(configuration))}`;
}

export function getContainImageURL(props: Props) {
  const { src, width, height, quality = DEFAULT_IMAGE_QUALITY } = props;

  const taskToEncode = {
    ...getDefaultBucketProps(src),
    edits: {
      ...getDefaultImageFormatProps(quality),
      resize: {
        width,
        height,
        fit: 'contain',
      },
    },
  };

  return encodePayloadForUrl(taskToEncode);
}

async function getImageDimensionsRatio(props: { src: string }) {
  const url = encodePayloadForUrl({
    ...getDefaultBucketProps(props.src),
    edits: {
      png: {
        quality: 100,
      },
      resize: {
        // should be relatively big to determine the ratio w/o effect of internal numbers rounding
        width: 100,
      },
    },
  });

  const blob = await (await fetch(url)).arrayBuffer();
  const imgData = await Jimp.read(Buffer.from(blob));
  return imgData.getWidth() / imgData.getHeight();
}

async function getBlurDataURL({ src, width, height }: { src: string; width: number; height: number }) {
  const payloadURL = encodePayloadForUrl({
    ...getDefaultBucketProps(src),
    edits: {
      png: {
        quality: 75,
      },
      resize: {
        width,
        height,
        fit: 'outside',
      },
    },
  });
  const blob = await (await fetch(payloadURL)).arrayBuffer();
  const imgData = await Jimp.read(Buffer.from(blob));
  return imgData.getBase64Async(-1);
}

export const readBlurredImageSrcPair = async ({ src }: { src: string }) => {
  const ratio = await getImageDimensionsRatio({ src });
  const blurDataURL = await getBlurDataURL({ src, width: 10, height: 10 / ratio });

  return {
    src,
    ratio,
    blurDataURL,
  };
};
