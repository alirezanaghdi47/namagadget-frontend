'use client';

// libraries
import Image from 'next/image';
import Link from 'next/link';
import { useDisclosure } from '@nextui-org/react';
import { LuList, LuMapPin, LuPlus, LuSearch, LuUser } from 'react-icons/lu';

// components
import { Button } from '@/components/Button';
import { TextInput } from '@/components/TextInput';

// layouts
import CitiesModal from '@/layouts/public/CitiesModal';
import CategoriesModal from '@/layouts/public/CategoriesModal';
import AccountDropdown from '@/layouts/AccountDropdown';

const Header = () => {
  const { isOpen: isOpenCityModal, onOpen: onOpenCityModal, onOpenChange: onOpenChangeCityModal } = useDisclosure();
  const {
    isOpen: isOpenCategoryModal,
    onOpen: onOpenCategoryModal,
    onOpenChange: onOpenChangeCategoryModal,
  } = useDisclosure();

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
            startContent={<LuMapPin size={20} />}
            onPress={onOpenCityModal}
          >
            تهران
          </Button>

          <Button
            color="secondary"
            size="md"
            variant="light"
            startContent={<LuList size={20} />}
            onPress={onOpenCategoryModal}
          >
            دسته ها
          </Button>

          {isOpenCityModal && <CitiesModal isOpen={isOpenCityModal} onOpenChange={onOpenChangeCityModal} />}
          {isOpenCategoryModal && (
            <CategoriesModal isOpen={isOpenCategoryModal} onOpenChange={onOpenChangeCategoryModal} />
          )}

          <TextInput
            name="search"
            type="text"
            variant="flat"
            size="md"
            startContent={<LuSearch size={20} />}
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
