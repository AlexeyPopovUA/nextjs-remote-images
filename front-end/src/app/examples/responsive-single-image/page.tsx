import { Example } from '@/app/examples/responsive-single-image/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.responsiveSingleImage.title,
  description: Messages.responsiveSingleImage.description,
};

export default function Home() {
  return (
    <>
      <Header text={Messages.responsiveSingleImage.description} />
      <Example />
    </>
  );
}
