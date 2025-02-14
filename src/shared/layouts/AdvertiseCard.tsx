'use client';

// libraries
import Image from 'next/image';
import Link from 'next/link';
import { LuShare2, LuTrash2, LuX } from 'react-icons/lu';

// components
import { Button } from '@shared/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@shared/components/Popover';

const AdvertiseCard = ({ advertise, status, actions }) => {
  const handleShareAdvertise = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Awesome Content',
          text: 'Check out this awesome content!',
          url: 'https://example.com',
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Sharing failed:', error));
    } else {
      navigator.clipboard
        .writeText('https://example.com')
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Sharing failed:', error));
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-start">
      <div className="flex h-32 w-full items-start justify-start gap-2 rounded-lg border border-solid border-secondary/10 bg-default p-2">
        <Link href="/account/my-advertises/advertise" className="flex h-full w-full items-center justify-start gap-2">
          <div className="relative h-32 min-w-32 py-2">
            <Image
              src="/assets/images/adv-card.webp"
              alt="image"
              width={120}
              height={120}
              className="h-full w-full rounded-lg object-cover object-center"
            />

            {status && (
              <div
                className={`absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center justify-center p-2 bg-${status.type} w-full rounded-b-lg`}
              >
                <span className={`text-nowrap text-xxs font-bold text-${status.type}-foreground`}>منتشر شده</span>
              </div>
            )}
          </div>

          <div className="dir-rtl flex h-full w-full flex-col items-start justify-start gap-1">
            <h2 className="line-clamp-2 text-wrap text-right text-sm font-normal leading-6 text-default-foreground">
              ۷۶متر ۲خوابه بازسازی شده خوش نور و نقشه فردوس
            </h2>

            <span className="mb-2 mt-auto line-clamp-1 text-xs font-light text-secondary">
              7,550,000,000
              <span className="ms-1 text-xs">تومان</span>
            </span>

            <span className="line-clamp-1 text-xs font-light text-secondary">12 دقیقه پیش در تهران</span>
          </div>
        </Link>

        {actions && (
          <div className="flex h-full flex-col items-center justify-between gap-4">
            <Button color="primary" size="md" variant="light" isIconOnly onPress={handleShareAdvertise}>
              <LuShare2 size={16} />
            </Button>

            <Popover backdrop="blur" placement="bottom" offset={8}>
              <PopoverTrigger>
                <Button color="danger" size="md" variant="light" isIconOnly>
                  <LuTrash2 size={16} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex items-center justify-start gap-2 p-2">
                  <p className="me-4 text-xs font-bold leading-6 lg:text-nowrap">
                    آیا می خواهید آگهی را از نشان شده ها حذف کنید ؟
                  </p>

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
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvertiseCard;
