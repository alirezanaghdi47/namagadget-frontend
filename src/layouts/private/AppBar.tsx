'use client';

// libraries
import Link from 'next/link';
import Image from 'next/image';

const AppBar = () => {
  return (
    <header className="fixed left-0 top-0 flex h-[80px] w-full items-center justify-center gap-2 border-b border-b-secondary/10 bg-default p-4 lg:hidden">
      <Link href="/" className="me-4">
        <Image src="/assets/images/logo.png" alt="نماگجت" width={40} height={40} />
      </Link>
    </header>
  );
};

export default AppBar;
