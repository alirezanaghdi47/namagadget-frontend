'use client';

// libraries
import { useToggle } from 'usehooks-ts';
import { LuEye, LuEyeOff } from 'react-icons/lu';

// components
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';

const ChangePasswordForm = ({ reset }) => {
  const [showPassword, togglePassword] = useToggle(false);
  const [showPasswordRepeat, togglePasswordRepeat] = useToggle(false);

  const submitNewPassword = () => {
    reset();
  };

  return (
    <>
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

      <Button color="primary" size="md" variant="solid" className="mt-2 w-full" onPress={submitNewPassword}>
        ثبت رمز
      </Button>
    </>
  );
};

export default ChangePasswordForm;
