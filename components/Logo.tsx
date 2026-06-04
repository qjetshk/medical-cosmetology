import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Врачебная косметология — на главную"
      className="shrink-0 group transition-opacity duration-150 hover:opacity-75"
    >
      <Image
        src="/svg/logo.svg"
        alt=""
        width={210}
        height={63}
        className="h-36 w-auto"
        priority
      />
    </Link>
  );
}
