'use client';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BreadcrumbItem } from '@nextui-org/react';

const Heading = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <Breadcrumbs>
        <BreadcrumbItem href="/">خانه</BreadcrumbItem>
        <BreadcrumbItem href="/?category=1">دسته بندی</BreadcrumbItem>
        <BreadcrumbItem href="/adv">عنوان</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
};

export default Heading;
