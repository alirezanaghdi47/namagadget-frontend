'use client';

// libraries
import { LuKey } from 'react-icons/lu';

// components
import { Button } from '@/components/Button';
import { PasswordInput } from '@/components/PasswordInput';

const ChangePasswordFormData = ({ resetStep }) => {
  return (
    <>
      <PasswordInput
        name="password"
        label="رمز عبور"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        isRequired
      />

      <PasswordInput
        name="passwordRepeat"
        label="تکرار عبور"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        isRequired
      />

      <Button
        color="primary"
        size="md"
        variant="solid"
        className="mt-2 w-full"
        onPress={resetStep}
        startContent={<LuKey size={16} />}
      >
        ثبت رمز
      </Button>
    </>
  );
};

export default ChangePasswordFormData;
