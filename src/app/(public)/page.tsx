// features
import FilterBar from '@features/home/components/FilterBar';
import AdvertiseList from '@features/home/components/AdvertiseList';

const HomePage = () => {
  return (
    <main className="flex h-full w-full flex-col items-start justify-start gap-4 p-4">
      <FilterBar />
      <AdvertiseList />
    </main>
  );
};

export default HomePage;
