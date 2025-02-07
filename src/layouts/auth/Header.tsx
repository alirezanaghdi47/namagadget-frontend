'use client';

// libraries
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex w-full items-center justify-center gap-4">
      <Link href="/" className="flex items-center justify-start gap-2">
        <Image src="/assets/images/logo.png" alt="نماگجت" width={40} height={40} />
        <span className="text-sm font-bold text-foreground">نماگجت</span>
      </Link>
    </header>
  );
};

export default Header;
