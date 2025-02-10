'use client';

// components
import { Breadcrumbs, BreadcrumbItem } from '@shared/components/Breadcrumbs';

const Heading = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <Breadcrumbs>
        <BreadcrumbItem href="/account/my-advertises">آگهی های من</BreadcrumbItem>
        <BreadcrumbItem>عنوان</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
};

export default Heading;
