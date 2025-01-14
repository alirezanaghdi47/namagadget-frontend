'use client';

// libraries
import { ReactNode } from 'react';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

const AuthProvider = ({ children, session }: { session: Session | null; children: ReactNode }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
