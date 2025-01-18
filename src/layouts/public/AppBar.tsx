'use client';

// libraries
import { useDisclosure } from '@nextui-org/react';
import { LuMapPin, LuSearch } from 'react-icons/lu';

// components
import { Button } from '@/components/Button';
import { TextInput } from '@/components/TextInput';

// layouts
import CitiesModal from '@/layouts/public/CitiesModal';

const AppBar = () => {
  const { isOpen: isOpenCityModal, onOpen: onOpenCityModal, onOpenChange: onOpenChangeCityModal } = useDisclosure();

  return (
    <header className="fixed left-0 top-0 flex h-[80px] w-full items-center justify-center gap-2 border-b border-b-secondary/10 bg-default p-4 lg:hidden">
      <TextInput
        name="search"
        type="text"
        variant="flat"
        size="md"
        startContent={<LuSearch size={20} />}
        placeholder="جستجو کنید"
        className="w-3/4"
      />

      <Button
        color="secondary"
        size="md"
        variant="light"
        startContent={<LuMapPin size={20} />}
        onClick={onOpenCityModal}
      >
        تهران
      </Button>

      {isOpenCityModal && <CitiesModal isOpen={isOpenCityModal} onOpenChange={onOpenChangeCityModal} />}
    </header>
  );
};

export default AppBar;
