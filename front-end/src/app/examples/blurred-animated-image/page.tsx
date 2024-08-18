import { Example } from '@/app/examples/blurred-animated-image/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.blurredAnimatedImage.title,
  description: Messages.blurredAnimatedImage.description,
};

export default function Home() {
  return (
    <>
      <Header text={Messages.blurredAnimatedImage.description} />
      <Example />
    </>
  );
}
