// libraries
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { getSession } from '@/lib/auth';

// helpers
import { vazirmatn } from '@/lib/fonts';

// providers
import AuthProvider from '@/providers/AuthProvider';
import ThemeProvider from '@/providers/ThemeProvider';

// styles
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'نماگجت',
  description: 'مرجع فروش لوازم دسته دو',
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getSession();

  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirmatn.className}`}>
        <AuthProvider session={session}>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
