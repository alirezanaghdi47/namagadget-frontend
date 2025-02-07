'use client';

// libraries
import { useEffect } from 'react';
import { useCountdown } from 'usehooks-ts';
import { LuArrowLeft, LuArrowRight, LuRefreshCcw } from 'react-icons/lu';

// components
import { Button } from '@/components/Button';
import { NumberInput } from '@/components/NumberInput';

const VerifyUserFormData = ({ goToNextStep, goToPrevStep }) => {
  const [count, { startCountdown, resetCountdown }] = useCountdown({
    countStart: 5,
    intervalMs: 1000,
  });

  const resendCode = () => {
    resetCountdown();
    startCountdown();
  };

  useEffect(() => {
    startCountdown();
  });

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <NumberInput
        name="code"
        label="کد اعتبارسنجی"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        isRequired
        endContent={
          count > 0 ? (
            <span className="text-nowrap text-sm text-secondary">{count} ثانیه </span>
          ) : (
            <Button color="secondary" size="sm" variant="light" isIconOnly onPress={resendCode}>
              <LuRefreshCcw size={20} />
            </Button>
          )
        }
      />

      <div className="mt-2 flex w-full items-center justify-center gap-4">
        <Button
          color="danger"
          size="md"
          variant="light"
          className="w-1/2"
          onPress={goToPrevStep}
          startContent={<LuArrowRight size={16} />}
        >
          قبلی
        </Button>

        <Button
          color="primary"
          size="md"
          variant="solid"
          className="w-1/2"
          onPress={goToNextStep}
          endContent={<LuArrowLeft size={16} />}
        >
          بعدی
        </Button>
      </div>
    </div>
  );
};

export default VerifyUserFormData;
