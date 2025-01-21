'use client';

// features
import LoginForm from '@/features/auth/login/components/LoginForm';

const LoginPage = () => {
  return (
    <main className="flex w-full flex-col items-start justify-start gap-4">
      <h1 className="mb-2 text-2xl font-bold text-default-foreground">ورود</h1>

      <LoginForm />
    </main>
  );
};

export default LoginPage;
