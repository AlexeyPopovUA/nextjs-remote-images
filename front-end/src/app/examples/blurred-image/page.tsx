import { Example } from '@/app/examples/blurred-image/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.blurredImage.title,
  description: Messages.blurredImage.description,
};

export default function Home() {
  return (
    <>
      <Header text={Messages.blurredImage.description} />
      <Example />
    </>
  );
}
