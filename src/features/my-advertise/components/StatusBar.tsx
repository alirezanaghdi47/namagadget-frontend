'use client';

// libraries
import dynamic from "next/dynamic";
import Link from 'next/link';
import { useDisclosure } from '@nextui-org/react';
import { LuChartLine, LuEye, LuPencil, LuTrash2, LuX } from 'react-icons/lu';

// components
import { Button } from '@shared/components/Button';
import { Chip } from '@shared/components/Chip';
import { Popover, PopoverContent, PopoverTrigger } from '@shared/components/Popover';

// features
const VisitModal = dynamic(() => import('@features/my-advertise/components/VisitModal') , {ssr: false});

const StatusBar = () => {
  const { isOpen: isOpenVisitModal, onOpen: onOpenVisitModal, onOpenChange: onOpenChangeVisitModal } = useDisclosure();

  return (
    <ul className="flex w-full items-center justify-end gap-2">
      <li className="me-auto flex items-center justify-start gap-2">
        <span className="text-sm">وضعیت :</span>
        <Chip variant="flat" color="success" size="sm">
          منتشر شده
        </Chip>
      </li>

      <li className="">
        <Button color="secondary" size="md" variant="light" isIconOnly onPress={onOpenVisitModal}>
            <LuChartLine size={20} />
        </Button>

        {isOpenVisitModal && <VisitModal isOpen={isOpenVisitModal} onOpenChange={onOpenChangeVisitModal} />}
      </li>

      <li className="">
        <Popover backdrop="blur" placement="bottom" offset={8}>
          <PopoverTrigger>
            <Button color="secondary" size="md" variant="light" isIconOnly>
                <LuEye size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex items-center justify-start gap-2 p-2">
              <p className="me-4 text-xs font-bold leading-6 lg:text-nowrap">آیا می خواهید آگهی را منتشر کنید ؟</p>

              <div className="flex items-center justify-end gap-2">
                <Button color="secondary" size="sm" variant="light" startContent={<LuX size={16} />}>
                  انصراف
                </Button>

                <Button color="primary" size="sm" variant="solid" startContent={<LuEye size={16} />}>
                  انتشار
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </li>

      <li className="">
        <Button
          as={Link}
          href="/account/my-advertises/advertise/update"
          color="secondary"
          size="md"
          variant="light"
          isIconOnly
        >
            <LuPencil size={20} />
        </Button>
      </li>

      <li className="">
        <Popover backdrop="blur" placement="bottom" offset={8}>
          <PopoverTrigger>
            <Button color="danger" size="md" variant="light" isIconOnly>
                <LuTrash2 size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex items-center justify-start gap-2 p-2">
              <p className="me-4 text-xs font-bold leading-6 lg:text-nowrap">آیا می خواهید آگهی را حذف کنید ؟</p>

              <div className="flex items-center justify-end gap-2">
                <Button color="secondary" size="sm" variant="light" startContent={<LuX size={16} />}>
                  انصراف
                </Button>

                <Button color="danger" size="sm" variant="solid" startContent={<LuTrash2 size={16} />}>
                  حذف
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </li>
    </ul>
  );
};

export default StatusBar;
