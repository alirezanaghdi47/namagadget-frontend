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
  const dropdownLinks = [
    { id: 1, label: 'داشبورد', icon: LuChartPie({ size: 20 }), href: '/account/dashboard' },
    { id: 2, label: 'آگهی های من', icon: LuFileText({ size: 20 }), href: '/account/my-advertises' },
    { id: 3, label: 'نشان شده ها', icon: LuBookmark({ size: 20 }), href: '/account/favorites' },
  ];

  return (
    <header className="fixed left-0 top-0 z-30 hidden h-[80px] w-full items-center justify-center gap-4 border-b border-b-secondary/10 bg-default lg:flex">
      <div className="grid w-full max-w-4xl grid-cols-12 p-4">
        <div className="col-span-9 flex items-center justify-start gap-2">
          <Link href="/" className="me-4 flex items-center justify-start gap-2">
            <Image src="/assets/images/logo.png" alt="نماگجت" width={40} height={40} />
            <span className="text-sm font-bold text-foreground">نماگجت</span>
          </Link>

          {dropdownLinks.map((dropdownLink) => (
            <Button
              key={dropdownLink.id}
              as={Link}
              href={dropdownLink.href}
              color="secondary"
              size="md"
              variant="light"
              startContent={dropdownLink.icon}
            >
              {dropdownLink.label}
            </Button>
          ))}
        </div>

        <div className="col-span-3 flex items-center justify-end gap-2">
          <AccountDropdown
            trigger={
              <Button color="secondary" size="md" variant="light" isIconOnly>
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
      </div>
    </header>
  );
};

export default Header;
