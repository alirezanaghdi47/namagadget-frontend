// libraries
import { ReactNode } from 'react';

// layouts
import AppBar from '@/layouts/public/AppBar';
import Header from '@/layouts/public/Header';
import BottomNavigation from '@/layouts/public/BottomNavigation';
import Footer from '@/layouts/public/Footer';

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-full w-full flex-col items-start justify-start">
      <AppBar />

      <Header />

      <div className="mx-auto flex h-full min-h-dvh w-full max-w-6xl flex-col items-start justify-start py-[80px] lg:pb-0">
        {children}
      </div>

      <Footer />

      <BottomNavigation />
    </div>
  );
};

export default PublicLayout;
