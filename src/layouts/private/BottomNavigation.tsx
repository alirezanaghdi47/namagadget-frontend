'use client';

// libraries
import Link from 'next/link';
import { LuBookmark, LuChartPie, LuFileText, LuPlus, LuUser } from 'react-icons/lu';

// components
import { Button } from '@/components/Button';

// layouts
import AccountDropdown from '@/layouts/AccountDropdown';

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-30 flex h-[80px] w-full items-center justify-center gap-4 border-t border-t-secondary/10 bg-default lg:hidden">
      <div className="grid w-full max-w-2xl grid-cols-12 px-4 py-2">
        <div className="col-span-3 flex items-center justify-center">
          <Button
            as={Link}
            size="sm"
            color="secondary"
            variant="light"
            startContent={<LuChartPie size={20} />}
            href="/account/dashboard"
            className="h-max flex-col p-2"
          >
            داشبورد
          </Button>
        </div>

        <div className="col-span-3 flex items-center justify-center">
          <Button
            as={Link}
            size="sm"
            color="secondary"
            variant="light"
            startContent={<LuFileText size={20} />}
            href="/account/my-advertises"
            className="h-max flex-col p-2"
          >
            آگهی های من
          </Button>
        </div>

        <div className="absolute bottom-14 left-1/2 right-1/2 z-10 flex items-center justify-center">
          <Button as={Link} size="lg" color="primary" variant="solid" href="/account/my-advertises/create" isIconOnly>
            <LuPlus size={20} />
          </Button>
        </div>

        <div className="col-span-3 flex items-center justify-center">
          <Button
            as={Link}
            size="sm"
            color="secondary"
            variant="light"
            href="/account/favorites"
            startContent={<LuBookmark size={20} />}
            className="h-max flex-col p-2"
          >
            نشان شده ها
          </Button>
        </div>

        <div className="col-span-3 flex items-center justify-center">
          <AccountDropdown
            trigger={
              <Button
                size="sm"
                color="secondary"
                variant="light"
                startContent={<LuUser size={20} />}
                className="h-max flex-col p-2"
              >
                حساب من
              </Button>
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
