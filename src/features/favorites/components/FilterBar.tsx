'use client';

// components
import { Chip } from '@shared/components/Chip';

const FilterBar = () => {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      <h1 className="flex gap-2 text-base font-bold text-secondary">
        نشان شده ها
        <Chip variant="flat" color="primary" size="sm">
          22
        </Chip>
      </h1>
    </div>
  );
};

export default FilterBar;
