'use client';

// libraries

// layouts
import AdvertiseCard from '@/layouts/AdvertiseCard';

const AdvertiseList = () => {
  const advertises = Array(36).fill('');

  return (
    <ul className="grid w-full grid-cols-12 items-start justify-start gap-4">
      {advertises.map((advertise, index) => (
        <li key={index} className="col-span-12 sm:col-span-6 lg:col-span-4">
          <AdvertiseCard advertise={advertise} />
        </li>
      ))}
    </ul>
  );
};

export default AdvertiseList;
