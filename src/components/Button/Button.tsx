// libraries
import { Button as NextButton } from '@nextui-org/react';

const Button = (props) => (
  <NextButton disableRipple {...props}>
    {props.children}
  </NextButton>
);

export default Button;
