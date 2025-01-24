// features
import Heading from '@/features/advertise/components/Heading';
import Content from '@/features/advertise/components/Content';

const AdvertisePage = () => {
  return (
    <main className="flex h-full w-full flex-col items-start justify-start gap-4 p-4">
      <Heading />
      <Content />
    </main>
  );
};

export default AdvertisePage;
