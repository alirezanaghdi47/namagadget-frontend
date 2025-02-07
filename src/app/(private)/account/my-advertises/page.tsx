'use client';

// features
import ActionBar from '@/features/my-advertises/components/ActionBar';
import AdvertiseList from '@/features/my-advertises/components/AdvertiseList';

const MyAdvertisesPage = () => {
  return (
    <main className="flex h-full w-full flex-col items-start justify-start gap-4 p-4">
      <ActionBar />
      <AdvertiseList />
    </main>
  );
};

export default MyAdvertisesPage;
