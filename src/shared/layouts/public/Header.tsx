'use client';

// libraries
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDisclosure } from '@nextui-org/react';
import { useMediaQuery } from 'usehooks-ts';
import { LuMapPin, LuPlus, LuSearch, LuUser } from 'react-icons/lu';

// components
import { Button } from '@shared/components/Button';
import { TextInput } from '@shared/components/TextInput';

// hooks
import useKeyboardShortcut from '@shared/hooks/useKeyboardShortcut';

// layouts
import CitiesModal from '@shared/layouts/public/CitiesModal';
import AccountDropdown from '@shared/layouts/AccountDropdown';

const SearchBar = () => {
  const searchRef = useRef(null);
  const isDesktop = useMediaQuery('(min-width: 992px)');

  useKeyboardShortcut(['alt', 's'], () => searchRef?.current.focus());

  return (
    <TextInput
      ref={searchRef}
      name="search"
      type="text"
      variant="flat"
      size="md"
      startContent={<LuSearch size={isDesktop ? 16 : 20} />}
      placeholder="جستجو کنید"
      className="ms-4 max-w-64"
    />
  );
};

const Header = () => {
  const { isOpen: isOpenCityModal, onOpen: onOpenCityModal, onOpenChange: onOpenChangeCityModal } = useDisclosure();

  return (
    <header className="fixed left-0 top-0 z-30 hidden h-[80px] w-full items-center justify-center gap-4 border-b border-b-secondary/10 bg-default lg:flex">
      <div className="grid w-full max-w-6xl grid-cols-12 p-4">
        <div className="col-span-9 flex items-center justify-start gap-2">
          <Link href="/" className="me-4 flex items-center justify-start gap-2">
            <Image src="/assets/images/logo.png" alt="نماگجت" width={40} height={40} />
            <span className="text-sm font-bold text-foreground">نماگجت</span>
          </Link>

          <Button
            color="secondary"
            size="md"
            variant="light"
            startContent={<LuMapPin size={16} />}
            onPress={onOpenCityModal}
          >
            تهران
          </Button>

          {isOpenCityModal && <CitiesModal isOpen={isOpenCityModal} onOpenChange={onOpenChangeCityModal} />}

          <SearchBar />
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
            startContent={<LuPlus size={16} />}
          >
            افزودن آگهی
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
