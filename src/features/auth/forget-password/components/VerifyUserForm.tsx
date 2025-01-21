'use client';

// libraries
import { useEffect } from 'react';
import { useCountdown } from 'usehooks-ts';
import { LuRefreshCcw } from 'react-icons/lu';

// components
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';

const VerifyUserForm = ({ goToNextStep, goToPrevStep }) => {
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
    <>
      <TextInput
        type="number"
        name="code"
        label="کد اعتبارسنجی"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        className="w-full"
        onKeyDown={(e) => ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault()}
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
        <Button color="danger" size="md" variant="light" className="w-1/2" onPress={goToPrevStep}>
          قبلی
        </Button>

        <Button color="primary" size="md" variant="solid" className="w-1/2" onPress={goToNextStep}>
          بعدی
        </Button>
      </div>
    </>
  );
};

export default VerifyUserForm;
