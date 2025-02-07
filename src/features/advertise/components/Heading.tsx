'use client';

// components
import { Breadcrumbs, BreadcrumbItem } from '@/components/Breadcrumbs';

const Heading = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <Breadcrumbs>
        <BreadcrumbItem href="/">خانه</BreadcrumbItem>
        <BreadcrumbItem href="/?category=1">دسته بندی</BreadcrumbItem>
        <BreadcrumbItem>عنوان</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
};

export default Heading;
