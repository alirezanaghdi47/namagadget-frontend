'use client';

// features
import Heading from '@/features/create-my-advertise/components/Heading';
import Content from '@/features/create-my-advertise/components/Content';

const CreateMyAdvertisePage = () => {
  return (
    <main className="flex h-full w-full flex-col items-start justify-start gap-8 p-4">
      <Heading />
      <Content />
    </main>
  );
};

export default CreateMyAdvertisePage;
