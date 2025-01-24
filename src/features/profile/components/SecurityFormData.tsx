'use client';

// libraries
import { LuCheck } from 'react-icons/lu';

// components
import { PasswordInput } from '@/components/PasswordInput';
import { Button } from '@/components/Button';

const SecurityFormData = () => {
  return (
    <div className="flex w-full flex-col items-end justify-start gap-4">
      <PasswordInput
        name="username"
        label="رمز عبور"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        isRequired
      />

      <PasswordInput
        name="username"
        label="تکرار عبور"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        isRequired
      />

      <Button color="primary" size="md" variant="solid" startContent={<LuCheck size={16} />}>
        ثبت
      </Button>
    </div>
  );
};

export default SecurityFormData;
