import { Example } from '@/app/examples/thumbnail-image-fit/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.thumbnailImageFit.title,
  description: Messages.thumbnailImageFit.description,
};

export default function Home() {
  return (
    <>
      <Header text={Messages.thumbnailImageFit.description} />
      <Example />
    </>
  );
}
