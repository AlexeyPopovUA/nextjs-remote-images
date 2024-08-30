import { Example } from '@/app/examples/blurred-animated-single-image/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.blurredAnimatedSingleImage.title,
  description: Messages.blurredAnimatedSingleImage.description,
};

export default function Home() {
  return (
    <>
      <Header text={Messages.blurredAnimatedSingleImage.description} />
      <Example />
    </>
  );
}
