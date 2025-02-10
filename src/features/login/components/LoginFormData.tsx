'use client';

// libraries
import Link from 'next/link';
import { LuLockKeyhole, LuLogIn, LuUserPlus } from 'react-icons/lu';

// components
import { TextInput } from '@shared/components/TextInput';
import { Button } from '@shared/components/Button';
import { PasswordInput } from '@shared/components/PasswordInput';

const LoginFormData = () => {
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
        name="username"
        label="رمز عبور"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        isRequired
      />

      <Button color="primary" size="md" variant="solid" className="mt-2 w-full" startContent={<LuLogIn size={16} />}>
        وارد شوید
      </Button>

      <div className="flex w-full items-center justify-between gap-4">
        <Button
          as={Link}
          href="/auth/register"
          color="primary"
          size="md"
          variant="light"
          className="w-1/2"
          startContent={<LuUserPlus size={16} />}
        >
          ایجاد حساب کاربری
        </Button>

        <Button
          as={Link}
          href="/auth/forget-password"
          color="primary"
          size="md"
          variant="light"
          className="w-1/2"
          startContent={<LuLockKeyhole size={16} />}
        >
          فراموشی رمز عبور
        </Button>
      </div>
    </div>
  );
};

export default LoginFormData;
