import { HomeNavLink } from '@/app/HomeNavLink';
import type { Metadata } from 'next';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.home.title,
  description: Messages.home.description,
};

export default function Home() {
  return (
    <>
      <div className="px-4 py-16 text-center text-2xl">
        This is a simple demo web application showcasing the integration of the AWS Serverless Image Handler with a
        statically exported Next.js website
      </div>
      <div className="mb-32 grid text-center lg:mt-32 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <HomeNavLink
          path="/examples/responsive-single-image/"
          label={Messages.responsiveSingleImage.title}
          description={Messages.responsiveSingleImage.description}
        />
        <HomeNavLink
          path="/examples/blurred-single-image/"
          label={Messages.blurredSingleImage.title}
          description={Messages.blurredSingleImage.description}
        />
        <HomeNavLink
          path="/examples/blurred-animated-single-image/"
          label={Messages.blurredAnimatedSingleImage.title}
          description={Messages.blurredAnimatedSingleImage.description}
        />
        <HomeNavLink
          path="/examples/thumbnail-image-fit/"
          label={Messages.thumbnailImageFit.title}
          description={Messages.thumbnailImageFit.description}
        />
        <HomeNavLink
          path="/examples/animated-thumbnails/"
          label={Messages.animatedThumbnails.title}
          description={Messages.animatedThumbnails.description}
        />
      </div>
    </>
  );
}
