'use client';

// features
import Heading from '@features/my-advertise/components/Heading';
import Content from '@features/my-advertise/components/Content';

const MyAdvertisePage = () => {
  return (
    <main className="flex h-full w-full flex-col items-start justify-start gap-4 p-4">
      <Heading />
      <Content />
    </main>
  );
};

export default MyAdvertisePage;
