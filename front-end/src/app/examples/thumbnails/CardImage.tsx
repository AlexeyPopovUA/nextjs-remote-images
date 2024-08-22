import { ThumbnailImage } from '@/app/shared/animated-image-loading/thumbnail-image';

type CardProps = {
  src: string;
  blurDataURL: string;
  ratio: number;
  title: string;
  description: string;
};

export function CardImageContains({ src, blurDataURL, ratio, title, description }: CardProps) {
  return (
    <div className="rounded-md border-2 p-4 hover:border-amber-500 hover:text-amber-600">
      <div className="flex flex-col items-stretch pb-4 hover:text-amber-600">
        <ThumbnailImage
          className="mb-4 ml-auto mr-auto h-56"
          imageClassName="h-56 object-contain"
          unoptimized={true}
          src={src}
          blurDataURL={blurDataURL}
          alt={title}
          loading="lazy"
          width={560}
          height={560 / ratio}
        />
        <div className="mb-2 text-xl font-bold underline">{title}</div>
        <div className="text-md text-gray-600">{description}</div>
      </div>
    </div>
  );
}

export function CardImageCovers({ src, blurDataURL, ratio, title, description }: CardProps) {
  return (
    <div className="rounded-md border-2 p-4 hover:border-amber-500 hover:text-amber-600">
      <div className="flex flex-col items-stretch pb-4 hover:text-amber-600">
        <ThumbnailImage
          className="mb-4 ml-auto mr-auto h-56"
          imageClassName="h-56 object-cover object-center"
          unoptimized={true}
          src={src}
          blurDataURL={blurDataURL}
          alt={title}
          loading="lazy"
          width={560}
          height={560 / ratio}
        />

        <div className="mb-2 text-xl font-bold underline">{title}</div>
        <div className="text-md text-gray-600">{description}</div>
      </div>
    </div>
  );
}
