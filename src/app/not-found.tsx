'use client';

// libraries
import Image from 'next/image';
import Link from 'next/link';
import { LuChevronLeft } from 'react-icons/lu';

// components
import { Button } from '@/components/Button';

const RootNotFound = () => {
  return (
    <main className="flex h-full min-h-dvh w-full flex-col items-center justify-center gap-8 overflow-y-auto p-4">
      <Image
        src="/assets/images/not-found.svg"
        alt="یافت نشد"
        width={200}
        height={200}
        className="h-full w-64"
      />

      <h1 className="text-base font-bold text-secondary">صفحه مورد نظر یافت نشد</h1>

      <Button size="md" as={Link} href="/" color="danger" variant="flat" endContent={<LuChevronLeft size={20} />}>
        بازگشت به خانه
      </Button>
    </main>
  );
};

export default RootNotFound;
