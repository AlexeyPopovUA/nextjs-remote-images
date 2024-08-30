import { Example } from '@/app/examples/blurred-single-image/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.blurredSingleImage.title,
  description: Messages.blurredSingleImage.description,
};

export default function Home() {
  return (
    <>
      <Header text={Messages.blurredSingleImage.description} />
      <Example />
    </>
  );
}
