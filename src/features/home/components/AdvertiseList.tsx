'use client';

// layouts
import AdvertiseCard from '@shared/layouts/AdvertiseCard';

const AdvertiseList = () => {
  const advertises = Array(24).fill('');

  return (
    <ul className="grid w-full grid-cols-12 items-start justify-start gap-4">
      {advertises.map((advertise, index) => (
        <li key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
          <AdvertiseCard advertise={advertise} />
        </li>
      ))}
    </ul>
  );
};

export default AdvertiseList;
