'use client';

// libraries
import { LuBookmark, LuClock, LuList, LuMapPin, LuPhone, LuShare2 } from 'react-icons/lu';

// components
import { Button } from '@shared/components/Button';

const Detail = () => {
  const handleCallToVendor = () => {
    window.open('tel:09195610753');
  };

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

  const handleAddToBookmark = () => {};

  return (
    <div className="flex w-full flex-col items-start justify-start gap-8">
      <h1 className="text-base font-bold leading-8 text-default-foreground">
        ۷۶متر ۲خوابه بازسازی شده خوش نور و نقشه فردوس
      </h1>

      <ul className="flex w-full items-center justify-end gap-2">
        <li className="me-auto">
          <Button
            color="primary"
            size="md"
            variant="flat"
            startContent={<LuPhone size={16} />}
            onPress={handleCallToVendor}
          >
            تماس با فروشنده
          </Button>
        </li>

        <li className="">
          <Button color="secondary" size="md" variant="light" isIconOnly onPress={handleShareAdvertise}>
            <LuShare2 size={20} />
          </Button>
        </li>

        <li className="">
          <Button color="secondary" size="md" variant="light" isIconOnly onPress={handleAddToBookmark}>
            <LuBookmark size={20} />
          </Button>
        </li>
      </ul>

      <ul className="grid w-full grid-cols-3 items-center justify-start">
        <li className="col-span-1 flex flex-col items-center justify-center gap-2 px-2 py-4">
          <LuClock size={20} className="text-secondary" />
          <span className="text-xs text-secondary">19 ساعت قبل</span>
        </li>

        <li className="col-span-1 flex flex-col items-center justify-center gap-2 border-l border-r border-solid border-secondary/10 px-2 py-4">
          <LuMapPin size={20} className="text-secondary" />
          <span className="text-xs text-secondary">تهران</span>
        </li>

        <li className="col-span-1 flex flex-col items-center justify-center gap-2 px-2 py-4">
          <LuList size={20} className="text-secondary" />
          <span className="text-xs text-secondary">املاک</span>
        </li>
      </ul>

      <div className="flex w-full flex-col items-start justify-start gap-2">
        <h3>ویژگی ها</h3>

        <ul className="flex w-full flex-col items-start justify-start gap-2">
          <li className="flex w-full items-start justify-between gap-2 border-b border-solid border-secondary/10 pb-2">
            <span className="text-sm font-light text-secondary">طبقه</span>
            <span className="text-sm font-light text-secondary"> 2 از 5</span>
          </li>

          <li className="flex w-full items-start justify-between gap-2 border-b border-solid border-secondary/10 pb-2">
            <span className="text-sm font-light text-secondary">آسانسور</span>
            <span className="text-sm font-light text-secondary">دارد</span>
          </li>

          <li className="flex w-full items-start justify-between gap-2 border-b border-solid border-secondary/10 pb-2">
            <span className="text-sm font-light text-secondary">انباری</span>
            <span className="text-sm font-light text-secondary">دارد</span>
          </li>

          <li className="flex w-full items-start justify-between gap-2">
            <span className="text-sm font-light text-secondary">پارکینگ</span>
            <span className="text-sm font-light text-secondary">دارد</span>
          </li>
        </ul>
      </div>

      <div className="flex w-full flex-col items-start justify-start gap-2">
        <h3>توضیحات</h3>

        <p className="text-sm font-light leading-8 text-default-foreground">
          با سلام سالن پرده خور با نور مستقیم آفتاب نقشه بینظیر و بدون کوچکترین پرتی امکانات کامل سندی با بالکن بازسازی
          کامل و دیزاین شده نما و مشاعات شیک و مرتب سند تک برگ شخصی آماده انتقال
        </p>
      </div>
    </div>
  );
};

export default Detail;
