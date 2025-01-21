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

      <div className="dir-ltr fixed left-1/2 top-[80px] flex h-[calc(100dvh_-_160px)] w-full max-w-2xl -translate-x-1/2 flex-col items-start justify-start overflow-y-auto lg:h-[calc(100dvh_-_80px)] lg:max-w-6xl">
        {children}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default PrivateLayout;
