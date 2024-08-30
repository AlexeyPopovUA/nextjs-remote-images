import { ExampleBox } from '@/app/shared/ExampleBox';
import { getInsideImageURL, readBlurredImageSrcPair } from '@/app/shared/image';
import { CardImageContains, CardImageCovers } from '@/app/examples/animated-thumbnails/CardImage';

const images = [
  {
    src: '/20231105_143110.jpg',
    title: "Exploring Vienna's Historic Sites",
    description: "Discover the rich history and stunning architecture of Austria's capital city.",
  },
  {
    src: '/20240724_132423_2.jpg',
    title: 'A Journey Through the Austrian Alps',
    description: 'Experience the breathtaking beauty and adventure of the Austrian Alps.',
  },
  {
    src: '/20240724_132423_2.jpg',
    title: 'Salzburg: The City of Music',
    description: 'Explore the birthplace of Mozart and the filming location of The Sound of Music.',
  },
  {
    src: '/20231105_143110.jpg',
    title: 'The Best Ski Resorts in Austria',
    description: 'Find out the top ski destinations in Austria for an unforgettable winter holiday.',
  },
  {
    src: '/20231105_143110.jpg',
    title: 'A Culinary Tour of Austria',
    description: "Indulge in Austria's delicious cuisine, from Wiener Schnitzel to Sachertorte.",
  },
];

export async function Example() {
  const imagesDataForRendering = await Promise.all(
    images.map(async (image) => {
      const blurredImageSrcPair = await readBlurredImageSrcPair({ src: image.src });
      const unoptUrl = getInsideImageURL({ src: image.src, width: 560, height: 560, quality: 75 });
      return {
        src: unoptUrl,
        blurDataURL: blurredImageSrcPair.blurDataURL,
        ratio: blurredImageSrcPair.ratio,
        title: image.title,
        description: image.description,
      };
    }),
  );

  return (
    <>
      <ExampleBox className="mb-8">
        <h2 className="mb-8 text-2xl font-bold">Full image thumbnails</h2>
        <h3 className="mb-8 text-xl font-bold">Scroll down 👇 to see more examples</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {imagesDataForRendering.map((image) => (
            <CardImageContains
              key={image.title}
              src={image.src}
              blurDataURL={image.blurDataURL}
              ratio={image.ratio}
              title={image.title}
              description={image.description}
            />
          ))}
        </div>
      </ExampleBox>
      <ExampleBox>
        <h2 className="mb-8 text-2xl font-bold">Cropped image thumbnails</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {imagesDataForRendering.map((image) => (
            <CardImageCovers
              key={image.title}
              src={image.src}
              blurDataURL={image.blurDataURL}
              ratio={image.ratio}
              title={image.title}
              description={image.description}
            />
          ))}
        </div>
      </ExampleBox>
    </>
  );
}
