// libraries
import { Input } from '@nextui-org/react';
import { useToggle } from 'usehooks-ts';
import { LuEye, LuEyeOff } from 'react-icons/lu';

// components
import { Button } from '@shared/components/Button';

const PasswordInput = (props) => {
  const [showPassword, togglePassword] = useToggle(false);

  return (
    <Input
      {...props}
      type={showPassword ? 'text' : 'password'}
      endContent={
        <Button size="sm" color="default" variant="light" isIconOnly onPress={togglePassword}>
          {showPassword ? <LuEye size={20} /> : <LuEyeOff size={20} />}
        </Button>
      }
    />
  );
};

export default PasswordInput;
