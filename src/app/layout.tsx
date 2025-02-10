// libraries
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { getSession } from '@shared/lib/auth';

// helpers
import { vazirmatn } from '@shared/lib/fonts';

// providers
import AuthProvider from '@shared/providers/AuthProvider';
import ThemeProvider from '@shared/providers/ThemeProvider';

// styles
import '@shared/styles/globals.css';
import '@shared/styles/reset.css';

export const metadata: Metadata = {
  title: 'نماگجت',
  description: 'مرجع فروش لوازم دسته دو',
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getSession();

  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirmatn.className} custom-scrollbar`}>
        <AuthProvider session={session}>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
