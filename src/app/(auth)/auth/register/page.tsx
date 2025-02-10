'use client';

// features
import RegisterFormData from '@features/register/components/RegisterFormData';

const RegisterPage = () => {
  return (
    <main className="flex w-full flex-col items-start justify-start gap-4">
      <h1 className="mb-2 text-xl font-bold text-default-foreground">عضویت</h1>

      <RegisterFormData />
    </main>
  );
};

export default RegisterPage;
