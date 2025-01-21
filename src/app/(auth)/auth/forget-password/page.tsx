'use client';

// libraries
import { useStep } from 'usehooks-ts';

// features
import ForgetPasswordForm from '@/features/auth/forget-password/components/ForgetPasswordForm';
import VerifyUserForm from '@/features/auth/forget-password/components/VerifyUserForm';
import ChangePasswordForm from '@/features/auth/forget-password/components/ChangePasswordForm';

const ForgetPasswordPage = () => {
  const [currentStep, { goToNextStep, goToPrevStep, reset }] = useStep(3);

  return (
    <main className="flex w-full flex-col items-start justify-start gap-4">
      <h1 className="mb-2 text-2xl font-bold text-default-foreground">فراموشی رمز</h1>

      {currentStep === 1 && <ForgetPasswordForm goToNextStep={goToNextStep} />}
      {currentStep === 2 && <VerifyUserForm goToNextStep={goToNextStep} goToPrevStep={goToPrevStep} />}
      {currentStep === 3 && <ChangePasswordForm reset={reset} />}
    </main>
  );
};

export default ForgetPasswordPage;
