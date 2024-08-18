import { HomeNavLink } from '@/app/HomeNavLink';
import type { Metadata } from 'next';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.home.title,
  description: Messages.home.description,
};

export default function Home() {
  return (
    <div className="mb-32 grid text-center lg:mt-32 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      <HomeNavLink
        path="/examples/responsive-image/"
        label={Messages.responsiveImage.title}
        description={Messages.responsiveImage.description}
      />
      <HomeNavLink
        path="/examples/thumbnails/"
        label={Messages.thumbnails.title}
        description={Messages.thumbnails.description}
      />
      <HomeNavLink
        path="/examples/image-fit/"
        label={Messages.imageFit.title}
        description={Messages.imageFit.description}
      />
      <HomeNavLink
        path="/examples/blurred-image/"
        label={Messages.blurredImage.title}
        description={Messages.blurredImage.description}
      />
      <HomeNavLink
        path="/examples/blurred-animated-image/"
        label={Messages.blurredAnimatedImage.title}
        description={Messages.blurredAnimatedImage.description}
      />
    </div>
  );
}
