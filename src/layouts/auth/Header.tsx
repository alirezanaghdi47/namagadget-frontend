'use client';

// libraries
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex w-full items-center justify-center gap-4">
      <Link href="/">
        <Image src="/assets/images/logo.png" alt="نماگجت" width={40} height={40} />
      </Link>
    </header>
  );
};

export default Header;
