// libraries
import { ReactNode } from 'react';

// libraries
import Header from '@/layouts/private/Header';
import BottomNavigation from '@/layouts/private/BottomNavigation';
import AppBar from '@/layouts/private/AppBar';

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-dvh w-full flex-col items-start justify-start">
      <AppBar />

      <Header />

      <div className="dir-ltr fixed left-0 top-[80px] flex h-[calc(100dvh_-_160px)] w-full flex-col items-start justify-start overflow-y-auto p-4 lg:h-[calc(100dvh_-_80px)]">
        {children}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default PrivateLayout;
