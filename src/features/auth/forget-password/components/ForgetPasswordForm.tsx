'use client';

// libraries
import Link from 'next/link';

// components
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';

const ForgetPasswordForm = ({ goToNextStep }) => {
  return (
    <>
      <TextInput
        name="username"
        label="نام کاربری"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        className="w-full"
      />

      <div className="mt-2 flex w-full items-center justify-center gap-4">
        <Button as={Link} href="/auth/login" color="danger" size="md" variant="light" className="w-1/2">
          انصراف
        </Button>

        <Button color="primary" size="md" variant="solid" className="w-1/2" onPress={goToNextStep}>
          بعدی
        </Button>
      </div>
    </>
  );
};

export default ForgetPasswordForm;
