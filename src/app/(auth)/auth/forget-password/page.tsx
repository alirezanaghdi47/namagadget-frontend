'use client';

// libraries
import { useStep } from 'usehooks-ts';

// features
import ForgetPasswordFormData from '@features/forget-password/components/ForgetPasswordFormData';
import VerifyUserFormData from '@features/forget-password/components/VerifyUserFormData';
import ChangePasswordFormData from '@features/forget-password/components/ChangePasswordFormData';

const ForgetPasswordPage = () => {
  const [currentStep, { goToNextStep, goToPrevStep, reset: resetStep }] = useStep(3);

  return (
    <main className="flex w-full flex-col items-start justify-start gap-4">
      <h1 className="mb-2 text-xl font-bold text-default-foreground">فراموشی رمز</h1>

      {currentStep === 1 && <ForgetPasswordFormData goToNextStep={goToNextStep} />}
      {currentStep === 2 && <VerifyUserFormData goToNextStep={goToNextStep} goToPrevStep={goToPrevStep} />}
      {currentStep === 3 && <ChangePasswordFormData resetStep={resetStep} />}
    </main>
  );
};

export default ForgetPasswordPage;
