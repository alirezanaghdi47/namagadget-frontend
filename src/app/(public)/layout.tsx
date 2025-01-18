// libraries
import { ReactNode } from 'react';

// layouts
import AppBar from '@/layouts/public/AppBar';
import Header from '@/layouts/public/Header';
import BottomNavigation from '@/layouts/public/BottomNavigation';

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-dvh w-full flex-col items-start justify-start">
      <AppBar />

      <Header />

      <div className="dir-ltr fixed left-0 top-[80px] flex h-[calc(100dvh_-_160px)] w-full flex-col items-start justify-start overflow-y-auto p-4 lg:h-[calc(100dvh_-_80px)]">
        {children}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default PublicLayout;
