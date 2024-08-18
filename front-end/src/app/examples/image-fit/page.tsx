import { Example } from '@/app/examples/image-fit/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.imageFit.title,
  description: Messages.imageFit.description,
};

export default function Home() {
  return (
    <>
      <Header text={Messages.imageFit.description} />
      <Example />
    </>
  );
}
