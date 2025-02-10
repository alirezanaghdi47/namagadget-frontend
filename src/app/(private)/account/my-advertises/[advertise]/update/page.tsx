'use client';

// features
import Heading from '@features/update-my-advertise/components/Heading';
import Content from '@features/update-my-advertise/components/Content';

const UpdateMyAdvertisePage = () => {
  return (
    <main className="flex h-full w-full flex-col items-start justify-start gap-8 p-4">
      <Heading />
      <Content />
    </main>
  );
};

export default UpdateMyAdvertisePage;
