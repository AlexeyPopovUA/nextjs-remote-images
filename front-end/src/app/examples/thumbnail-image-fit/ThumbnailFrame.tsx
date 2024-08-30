import React, { PropsWithChildren } from 'react';

export function ThumbnailFrame({ children, width, height }: PropsWithChildren & { width: number; height: number }) {
  return (
    <div className="relative">
      <div
        style={{ width, height }}
        className="absolute bottom-0 left-0 right-0 top-0 outline-dashed outline-4 outline-amber-500"
      />
      {children}
    </div>
  );
}
