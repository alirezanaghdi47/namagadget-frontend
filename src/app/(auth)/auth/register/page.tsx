'use client';

// features
import RegisterForm from '@/features/auth/register/components/RegisterForm';

const RegisterPage = () => {
  return (
    <main className="flex w-full flex-col items-start justify-start gap-4">
      <h1 className="mb-2 text-2xl font-bold text-default-foreground">عضویت</h1>

      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
