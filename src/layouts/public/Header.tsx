'use client';

// libraries
import Image from 'next/image';
import Link from 'next/link';
import { useDisclosure } from '@nextui-org/react';
import { LuMapPin, LuPlus, LuSearch, LuUser } from 'react-icons/lu';

// components
import { Button } from '@/components/Button';
import { TextInput } from '@/components/TextInput';

// layouts
import CitiesModal from '@/layouts/public/CitiesModal';
import AccountDropdown from '@/layouts/AccountDropdown';

const Header = () => {
  const { isOpen: isOpenCityModal, onOpen: onOpenCityModal, onOpenChange: onOpenChangeCityModal } = useDisclosure();

  return (
    <header className="fixed left-0 top-0 hidden h-[80px] w-full items-center justify-center gap-4 border-b border-b-secondary/10 bg-default lg:flex">
      <div className="grid w-full max-w-6xl grid-cols-12 p-4">
        <div className="col-span-9 flex items-center justify-start gap-2">
          <Link href="/" className="me-4">
            <Image src="/assets/images/logo.png" alt="نماگجت" width={40} height={40} />
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

          <TextInput
            name="search"
            type="text"
            variant="flat"
            size="md"
            startContent={<LuSearch size={16} />}
            placeholder="جستجو کنید"
            className="ms-4 max-w-64"
          />
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
