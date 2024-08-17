import Link from 'next/link';

export function BackButton() {
  return <Link
    className="flex flex-row aspect-square h-14 rounded-full bg-amber-50 justify-center items-center"
    href="/"
  >
    <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 96 960 960" width="36" fill="black">
      <path d="M560 936 160 536l400-400 56 56-344 344 344 344-56 56Z"/>
    </svg>
  </Link>;
}

