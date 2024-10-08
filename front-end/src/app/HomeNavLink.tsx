import Link from 'next/link';

interface HomeNavLinkProps {
  path: string;
  label: string;
  description: string;
}

export const HomeNavLink = (props: HomeNavLinkProps) => {
  return (
    <Link
      href={props.path}
      className="flex flex-col items-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <h2 className="mb-3 text-2xl font-medium">
        {props.label}&nbsp;
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          →
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">{props.description}</p>
    </Link>
  );
};
