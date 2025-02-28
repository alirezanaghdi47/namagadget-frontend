'use client';

// libraries
import Link from 'next/link';
import { LuLogIn, LuUserPlus } from 'react-icons/lu';

// components
import { TextInput } from '@shared/components/TextInput';
import { Button } from '@shared/components/Button';
import { PasswordInput } from '@shared/components/PasswordInput';

const RegisterFormData = () => {
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

      <div className="mt-2 flex w-full items-center justify-center gap-4">
        <Button color="primary" size="md" variant="solid" className="w-1/2" startContent={<LuUserPlus size={16} />}>
          عضو شوید
        </Button>

        <Button
          as={Link}
          href="/auth/login"
          color="primary"
          size="md"
          variant="light"
          className="w-1/2"
          startContent={<LuLogIn size={16} />}
        >
          وارد شوید
        </Button>
      </div>
    </div>
  );
};

export default RegisterFormData;
