// features
import FilterBar from '@/features/home/components/FilterBar';
import AdvertiseList from '@/features/home/components/AdvertiseList';

const HomePage = () => {
  return (
    <main className="col-span-9 flex h-full w-full flex-col items-start justify-start gap-4 overflow-y-auto p-4">
      <FilterBar />
      <AdvertiseList />
    </main>
  );
};

export default HomePage;
