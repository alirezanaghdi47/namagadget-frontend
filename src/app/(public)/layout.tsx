// libraries
import { ReactNode } from 'react';

// layouts
import AppBar from '@/layouts/public/AppBar';
import Header from '@/layouts/public/Header';
import BottomNavigation from '@/layouts/public/BottomNavigation';

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-dvh w-full flex-col items-start justify-start">
      <AppBar />

      <Header />

      <div className="dir-ltr fixed left-1/2 top-[80px] flex h-[calc(100dvh_-_160px)] w-full max-w-2xl -translate-x-1/2 flex-col items-start justify-start overflow-y-auto lg:h-[calc(100dvh_-_80px)] lg:max-w-6xl">
        {children}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default PublicLayout;
