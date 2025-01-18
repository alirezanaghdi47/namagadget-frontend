'use client';

// libraries
import Image from 'next/image';
import Link from 'next/link';
import { LuBookmark, LuChartPie, LuFileText, LuPlus, LuUser } from 'react-icons/lu';

// components
import { Button } from '@/components/Button';

// layouts
import AccountDropdown from '@/layouts/AccountDropdown';

const Header = () => {
  return (
    <header className="fixed left-0 top-0 hidden h-[80px] w-full grid-cols-12 items-center justify-between gap-4 border-b border-b-secondary/10 bg-default p-4 lg:grid">
      <div className="col-span-9 flex items-center justify-start gap-2">
        <Link href="/" className="me-4">
          <Image src="/assets/images/logo.png" alt="نماگجت" width={40} height={40} />
        </Link>

        <Button
          as={Link}
          href="/account/dashboard"
          color="secondary"
          size="md"
          variant="light"
          startContent={<LuChartPie size={20} />}
        >
          داشبورد
        </Button>

        <Button
          as={Link}
          href="/account/my-advertises"
          color="secondary"
          size="md"
          variant="light"
          startContent={<LuFileText size={20} />}
        >
          آگهی های من
        </Button>

        <Button
          as={Link}
          href="/account/favorites"
          color="secondary"
          size="md"
          variant="light"
          startContent={<LuBookmark size={20} />}
        >
          نشان شده ها
        </Button>
      </div>

      <div className="col-span-3 flex items-center justify-end gap-2">
        <AccountDropdown
          trigger={
            <Button color="secondary" size="md" variant="light" isIcon>
              <LuUser size={20} />
            </Button>
          }
        />

        <Button
          as={Link}
          href="/account/my-advertises/create"
          color="primary"
          size="md"
          variant="solid"
          startContent={<LuPlus size={20} />}
        >
          افزودن آگهی
        </Button>
      </div>
    </header>
  );
};

export default Header;
