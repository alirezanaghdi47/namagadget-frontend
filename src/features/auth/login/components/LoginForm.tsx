'use client';

// libraries
import Link from 'next/link';
import { useToggle } from 'usehooks-ts';
import { LuEye, LuEyeOff } from 'react-icons/lu';

// components
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';

const LoginForm = () => {
  const [showPassword, togglePassword] = useToggle(false);

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

      <TextInput
        type={showPassword ? 'text' : 'password'}
        name="username"
        label="رمز عبور"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        className="w-full"
        endContent={
          <Button size="sm" color="default" variant="light" isIconOnly onPress={togglePassword}>
            {showPassword ? <LuEye size={20} /> : <LuEyeOff size={20} />}
          </Button>
        }
      />

      <Button color="primary" size="md" variant="solid" className="mt-2 w-full">
        وارد شوید
      </Button>

      <div className="flex w-full items-center justify-between gap-4">
        <Button as={Link} href="/auth/register" color="primary" size="md" variant="light" className="w-1/2">
          ایجاد حساب کاربری
        </Button>

        <Button as={Link} href="/auth/forget-password" color="primary" size="md" variant="light" className="w-1/2">
          فراموشی رمز عبور
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
