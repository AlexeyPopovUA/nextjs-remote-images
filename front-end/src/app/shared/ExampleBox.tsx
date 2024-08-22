import { PropsWithChildren } from 'react';
import clsx from 'clsx';

export function ExampleBox(props: PropsWithChildren<{ className?: string }>) {
  return <div className={clsx('w-full select-none rounded-md bg-amber-50 p-4', props.className)}>{props.children}</div>;
}
