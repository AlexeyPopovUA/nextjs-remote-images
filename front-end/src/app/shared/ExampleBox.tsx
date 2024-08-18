import { PropsWithChildren } from 'react';

export function ExampleBox(props: PropsWithChildren<{}>) {
  return <div className="w-full select-none rounded-md bg-amber-50 p-4">{props.children}</div>;
}
