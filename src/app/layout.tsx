// libraries
import type { Metadata } from 'next';
import { getSession } from '@/utils/auth';

// helpers
import { vazirmatn } from '@/utils/fonts';

// providers
import AuthProvider from '@/providers/AuthProvider';
import ThemeProvider from '@/providers/ThemeProvider';

// styles
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'نماگجت',
  description: 'مرجع فروش لوازم دسته دو',
};

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { locale: string };
}) => {
  const session = await getSession();

  return (
    <html lang="fa" dir="rtl" className="" suppressHydrationWarning>
      <body className={vazirmatn.className}>
        <AuthProvider session={session}>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
