import { Example } from '@/app/examples/responsive-image/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.resizeableImage.title,
  description: Messages.resizeableImage.description,
};

export default function Home() {
  return (
    <>
      <Header text={Messages.resizeableImage.description} />
      <Example />
    </>
  );
}
