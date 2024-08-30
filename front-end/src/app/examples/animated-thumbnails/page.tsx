import { Example } from '@/app/examples/animated-thumbnails/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.animatedThumbnails.title,
  description: Messages.animatedThumbnails.description,
};

export default function Home() {
  return (
    <>
      <Header text={Messages.animatedThumbnails.description} />
      <Example />
    </>
  );
}
