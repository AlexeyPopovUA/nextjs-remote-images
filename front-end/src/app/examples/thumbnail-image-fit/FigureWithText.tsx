import React, { PropsWithChildren } from 'react';

export function FigureWithText({ children, text }: PropsWithChildren & { text: string }) {
  return (
    <figure>
      {children}
      <figcaption className="mt-2">{text}</figcaption>
    </figure>
  );
}
