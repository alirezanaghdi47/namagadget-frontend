'use client';

// libraries
import Image from 'next/image';
import Link from 'next/link';

const AdvertiseCard = ({ advertise }) => {
  return (
    <Link href="/advertise" className="h-full w-full">
      <div className="flex h-[120px] w-full items-start justify-start gap-2 rounded-lg border border-solid border-secondary/10 bg-default p-2">
        <Image
          src="/assets/images/adv-card.webp"
          alt="image"
          width={120}
          height={120}
          className="h-full rounded-lg object-cover object-center"
        />

        <div className="dir-rtl flex h-full w-full flex-col items-start justify-start gap-1">
          <h2 className="line-clamp-2 text-wrap text-right text-sm font-normal leading-6 text-default-foreground">
            ۷۶متر ۲خوابه بازسازی شده خوش نور و نقشه فردوس
          </h2>

          <span className="mt-auto line-clamp-1 text-xs font-light text-secondary">
            7,550,000,000
            <span className="ms-1 text-xs">تومان</span>
          </span>

          <span className="line-clamp-1 text-xs font-light text-secondary">در تهران</span>
        </div>
      </div>
    </Link>
  );
};

export default AdvertiseCard;
