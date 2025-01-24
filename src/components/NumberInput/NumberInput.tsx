// libraries
import { Input } from '@nextui-org/react';

const NumberInput = (props) => {
  return (
    <Input
      {...props}
      type="number"
      onKeyDown={(e) => ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault()}
    />
  );
};

export default NumberInput;
