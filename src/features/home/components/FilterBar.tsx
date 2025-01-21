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
      <Button
        color="secondary"
        size="md"
        variant="light"
        endContent={<LuFilter size={16} />}
        onPress={onOpenFilterModal}
      >
        فیلتر
      </Button>

      {isOpenFilterModal && <FilterModal isOpen={isOpenFilterModal} onOpenChange={onOpenChangeFilterModal} />}

      <h1 className="text-base font-bold text-secondary">
        <Chip variant="flat" color="primary" size="sm" className="me-2">
          22
        </Chip>
        آگهی ها
      </h1>
    </div>
  );
};

export default FilterBar;
