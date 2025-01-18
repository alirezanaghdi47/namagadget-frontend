'use client';

// libraries
import Image from 'next/image';
import Link from 'next/link';
import { useDisclosure, User } from '@nextui-org/react';
import { LuFileText, LuInfo, LuList, LuLogOut, LuMoon, LuPlus, LuSun, LuUser, LuUserRound } from 'react-icons/lu';

// components
import { Button } from '@/components/Button';

// layouts
import CategoriesModal from '@/layouts/public/CategoriesModal';
import AccountDropdown from '@/layouts/AccountDropdown';

const BottomNavigation = () => {
  const {
    isOpen: isOpenCategoryModal,
    onOpen: onOpenCategoryModal,
    onOpenChange: onOpenChangeCategoryModal,
  } = useDisclosure();

  return (
    <nav className="fixed bottom-0 left-0 grid h-[80px] w-full grid-cols-12 items-center justify-center gap-4 border-t border-t-secondary/10 bg-default px-4 py-2 lg:hidden">
      <div className="col-span-3 flex items-center justify-center">
        <Button
          as={Link}
          size="sm"
          color="secondary"
          variant="light"
          href="/"
          startContent={<Image src="/assets/images/logo.png" alt="نماگجت" width={24} height={24} />}
          className="h-max flex-col p-2"
        >
          نماگجت
        </Button>
      </div>

      <div className="col-span-3 flex items-center justify-center">
        <Button
          size="sm"
          color="secondary"
          variant="light"
          startContent={<LuList size={20} />}
          onClick={onOpenCategoryModal}
          className="h-max flex-col p-2"
        >
          دسته ها
        </Button>

        {isOpenCategoryModal && (
          <CategoriesModal isOpen={isOpenCategoryModal} onOpenChange={onOpenChangeCategoryModal} />
        )}
      </div>

      <div className="absolute bottom-14 left-1/2 right-1/2 z-10 flex items-center justify-center">
        <Button as={Link} size="lg" color="primary" variant="solid" href="/account/my-advertises/create" isIcon>
          <LuPlus size={20} />
        </Button>
      </div>

      <div className="col-span-3 flex items-center justify-center">
        <Button
          as={Link}
          size="sm"
          color="secondary"
          variant="light"
          href="/account/my-advertises"
          startContent={<LuFileText size={20} />}
          className="h-max flex-col p-2"
        >
          آگهی های من
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
    </nav>
  );
};

export default BottomNavigation;
