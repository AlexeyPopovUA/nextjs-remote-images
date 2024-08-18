import { Example } from '@/app/examples/thumbnails/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.thumbnails.title,
  description: Messages.thumbnails.description,
};

export default function Home() {
  return (
    <>
      <Header text={Messages.thumbnails.description} />
      <Example />
    </>
  );
}
