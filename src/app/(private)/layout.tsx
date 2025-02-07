// libraries
import { ReactNode } from 'react';

// libraries
import Header from '@/layouts/private/Header';
import BottomNavigation from '@/layouts/private/BottomNavigation';
import AppBar from '@/layouts/private/AppBar';

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-start">
      <AppBar />

      <Header />

      <div className="mx-auto flex h-full min-h-dvh w-full max-w-4xl flex-col items-start justify-start py-[80px] lg:pb-0">
        {children}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default PrivateLayout;
