'use client';

// libraries
import Link from 'next/link';
import Image from 'next/image';

const AppBar = () => {
  return (
    <header className="fixed left-0 top-0 z-30 flex h-[80px] w-full items-center justify-center gap-2 border-b border-b-secondary/10 bg-default lg:hidden">
      <div className="flex w-full max-w-2xl items-center justify-center p-4">
        <Link href="/">
          <Image src="/assets/images/logo.png" alt="نماگجت" width={40} height={40} />
        </Link>
      </div>
    </header>
  );
};

export default AppBar;
