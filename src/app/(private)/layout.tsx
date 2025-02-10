// libraries
import { ReactNode } from 'react';

// libraries
import Header from '@shared/layouts/private/Header';
import BottomNavigation from '@shared/layouts/private/BottomNavigation';

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-start">
      <Header />

        <div className="mx-auto flex h-full min-h-dvh w-full max-w-6xl flex-col items-start justify-start pb-[80px] lg:pt-[80px] lg:pb-0">
            {children}
        </div>

        <BottomNavigation/>
    </div>
  );
};

export default PrivateLayout;
