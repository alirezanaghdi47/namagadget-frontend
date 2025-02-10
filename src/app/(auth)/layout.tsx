// libraries
import { ReactNode } from 'react';

// layouts
import Header from '@shared/layouts/auth/Header';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center p-8">
      <div className="flex w-full max-w-lg flex-col items-center justify-center gap-4">
        <Header />

        <div className="flex w-full flex-col items-start justify-start rounded-lg border border-solid border-secondary/10 bg-default p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
