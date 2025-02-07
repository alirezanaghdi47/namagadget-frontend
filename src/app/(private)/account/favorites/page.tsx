'use client';

// features
import FilterBar from '@/features/favorites/components/FilterBar';
import AdvertiseList from '@/features/favorites/components/AdvertiseList';

const FavoritesPage = () => {
  return (
    <main className="flex h-full w-full flex-col items-start justify-start gap-4 p-4">
      <FilterBar />
      <AdvertiseList />
    </main>
  );
};

export default FavoritesPage;
