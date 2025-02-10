// libraries
import { ReactNode } from 'react';

// layouts
import AppBar from '@shared/layouts/public/AppBar';
import Header from '@shared/layouts/public/Header';
import BottomNavigation from '@shared/layouts/public/BottomNavigation';

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-full w-full flex-col items-start justify-start">
      <AppBar />

      <Header />

      <div className="mx-auto flex h-full min-h-dvh w-full max-w-6xl flex-col items-start justify-start py-[80px] lg:pb-0">
        {children}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default PublicLayout;
