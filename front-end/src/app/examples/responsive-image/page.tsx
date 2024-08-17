import {Example} from '@/app/examples/responsive-image/Example';
import {Metadata} from 'next';
import {Header} from '@/app/Header';
import {Messages} from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.responsiveImage.title,
  description: Messages.responsiveImage.description,
};

export default function Home() {
  return (
    <>
      <Header text={Messages.responsiveImage.description}/>
      <Example/>
    </>
  );
}
