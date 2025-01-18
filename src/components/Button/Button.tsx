// libraries
import { CSSProperties, HTMLProps, ReactNode } from 'react';
import { Button as NextButton } from '@nextui-org/react';

const Button = ({
  children,
  as,
  href,
  color,
  size,
  variant,
  isIcon,
  startContent,
  endContent,
  onClick,
  ...props
}: IButtonProps) => (
  <NextButton
    as={as}
    href={href}
    color={color}
    size={size}
    variant={variant}
    disableRipple
    isIconOnly={isIcon}
    startContent={startContent}
    endContent={endContent}
    onPress={onClick}
    {...props}
  >
    {children}
  </NextButton>
);

type TColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
type TSize = 'sm' | 'md' | 'lg' | undefined;
type TVariant = 'flat' | 'solid' | 'bordered' | 'light' | 'faded' | 'shadow' | 'ghost' | undefined;

interface IButtonProps {
  as?: any;
  href?: string;
  children: ReactNode;
  color: TColor;
  size: TSize;
  variant: TVariant;
  startContent?: ReactNode;
  endContent?: ReactNode;
  isIcon?: boolean;
  onClick?: () => void;
  className?: HTMLProps<HTMLElement>['className'];
  style?: CSSProperties;
}

export default Button;
