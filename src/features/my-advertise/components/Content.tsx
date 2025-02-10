'use client';

// libraries
import dynamic from "next/dynamic";

// components
import StatusBar from '@features/my-advertise/components/StatusBar';
import Gallery from '@shared/layouts/advertises/Gallery';
import Detail from '@shared/layouts/advertises/Detail';

const Location = dynamic(() => import("@shared/layouts/advertises/Location") , {ssr: false});

const Content = () => {
  return (
    <div className="grid w-full grid-cols-12 items-start justify-start gap-y-4">
      <div className="order-1 col-span-12 col-start-1 row-start-1">
        <StatusBar />
      </div>

      <div className="order-2 col-span-12 col-start-1 row-start-2 lg:order-2 lg:col-span-7 lg:col-start-8 lg:row-span-6 lg:row-start-2">
          <Gallery />
      </div>

      <div className="order-4 col-span-12 col-start-1 row-start-4 lg:order-3 lg:col-span-7 lg:col-start-8 lg:row-span-6 lg:row-start-8">
        <Location />
      </div>

      <div className="order-3 col-span-12 col-start-1 row-start-3 lg:order-4 lg:col-span-5 lg:col-start-1 lg:row-span-12 lg:row-start-2">
        <Detail />
      </div>
    </div>
  );
};

export default Content;
