'use client';

// libraries
import { useDisclosure } from '@nextui-org/react';
import { LuFilter } from 'react-icons/lu';

// components
import { Button } from '@/components/Button';
import { Chip } from '@nextui-org/react';

// features
import FilterModal from '@/features/home/components/FilterModal';

const FilterBar = () => {
  const {
    isOpen: isOpenFilterModal,
    onOpen: onOpenFilterModal,
    onOpenChange: onOpenChangeFilterModal,
  } = useDisclosure();

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <h1 className="flex gap-2 text-base font-bold text-secondary">
        آگهی ها
        <Chip variant="flat" color="primary" size="sm">
          22
        </Chip>
      </h1>

      <Button
        color="secondary"
        size="md"
        variant="light"
        startContent={<LuFilter size={16} />}
        onPress={onOpenFilterModal}
      >
        فیلتر
      </Button>

      {isOpenFilterModal && <FilterModal isOpen={isOpenFilterModal} onOpenChange={onOpenChangeFilterModal} />}
    </div>
  );
};

export default FilterBar;
