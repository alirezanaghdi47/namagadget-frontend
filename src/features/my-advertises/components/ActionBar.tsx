'use client';

// libraries
import {LuArrowUpDown} from 'react-icons/lu';

// components
import { Button } from '@/components/Button';
import { Chip } from '@/components/Chip';
import {Popover, PopoverContent, PopoverTrigger} from "@/components/Popover";
import {Radio, RadioGroup} from "@/components/Radio";

// hooks
import useSort from "@/features/my-advertises/hooks/useSort";

const ActionBar = () => {
    const { sort, changeSort } = useSort();

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <h1 className="flex gap-2 text-base font-bold text-secondary">
        آگهی های من
        <Chip variant="flat" color="primary" size="sm">
          22
        </Chip>
      </h1>

        <Popover backdrop="blur" placement="bottom" offset={8}>
            <PopoverTrigger>
                <Button
                    color="secondary"
                    size="md"
                    variant="light"
                    startContent={<LuArrowUpDown size={16} />}
                >
                    مرتب سازی
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="p-2">
                    <RadioGroup value={sort}>
                        <Radio
                            value="newest"
                            classNames={{ label: 'text-secondary text-sm' }}
                            onChange={(e) => changeSort(e.target.value)}
                        >
                            جدید ترین
                        </Radio>

                        <Radio
                            value="oldest"
                            classNames={{ label: 'text-secondary text-sm' }}
                            onChange={(e) => changeSort(e.target.value)}
                        >
                            قدیمی ترین
                        </Radio>
                    </RadioGroup>
                </div>
            </PopoverContent>
        </Popover>
    </div>
  );
};

export default ActionBar;
