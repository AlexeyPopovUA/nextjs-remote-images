import React, { PropsWithChildren } from 'react';

import { Footer } from '@/app/Footer';

import './globals.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <main className="container mx-auto flex flex-col items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
