'use client';

// features
import LoginFormData from '@/features/login/components/LoginFormData';

const LoginPage = () => {
  return (
    <main className="flex w-full flex-col items-start justify-start gap-4">
      <h1 className="mb-2 text-xl font-bold text-default-foreground">ورود</h1>

      <LoginFormData />
    </main>
  );
};

export default LoginPage;
