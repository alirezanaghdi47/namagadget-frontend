'use client';

// libraries
import Link from 'next/link';
import { useToggle } from 'usehooks-ts';
import { LuEye, LuEyeOff } from 'react-icons/lu';

// components
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';

const RegisterForm = () => {
  const [showPassword, togglePassword] = useToggle(false);
  const [showPasswordRepeat, togglePasswordRepeat] = useToggle(false);

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

      <TextInput
        type={showPasswordRepeat ? 'text' : 'password'}
        name="username"
        label="تکرار عبور"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        className="w-full"
        endContent={
          <Button size="sm" color="default" variant="light" isIconOnly onPress={togglePasswordRepeat}>
            {showPasswordRepeat ? <LuEye size={20} /> : <LuEyeOff size={20} />}
          </Button>
        }
      />

      <div className="mt-2 flex w-full items-center justify-center gap-4">
        <Button color="primary" size="md" variant="solid" className="w-1/2">
          عضو شوید
        </Button>

        <Button as={Link} href="/auth/login" color="primary" size="md" variant="light" className="w-1/2">
          وارد شوید
        </Button>
      </div>
    </>
  );
};

export default RegisterForm;
