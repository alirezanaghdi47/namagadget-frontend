// features
import Heading from '@/features/profile/components/Heading';
import Content from '@/features/profile/components/Content';

const ProfilePage = () => {
  return (
    <main className="flex h-full w-full flex-col items-start justify-start gap-8 p-4">
      <Heading />
      <Content />
    </main>
  );
};

export default ProfilePage;
