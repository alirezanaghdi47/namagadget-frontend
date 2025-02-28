'use client';

// libraries
import Link from 'next/link';
import { LuArrowLeft, LuX } from 'react-icons/lu';

// components
import { TextInput } from '@shared/components/TextInput';
import { Button } from '@shared/components/Button';

const ForgetPasswordFormData = ({ goToNextStep }) => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <TextInput
        name="username"
        label="نام کاربری"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        isRequired
      />

      <div className="mt-2 flex w-full items-center justify-center gap-4">
        <Button
          as={Link}
          href="/auth/login"
          color="danger"
          size="md"
          variant="light"
          className="w-1/2"
          startContent={<LuX size={16} />}
        >
          انصراف
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

export default ForgetPasswordFormData;
