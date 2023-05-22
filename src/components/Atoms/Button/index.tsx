import { ButtonStyleProps } from '@/src/types';
import Link from 'next/link';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import getStyles from './getStyles';

type TButton = ButtonStyleProps & ComponentPropsWithoutRef<'button'>;
export interface ButtonProps extends TButton {
  disabled?: boolean | undefined;
  children: ReactNode;
  link?: string | undefined;
  extra_style?: string | undefined;
}

const Button = ({
  children,
  extra_style,
  color,
  rounded,
  responsive,
  size,
  link,
  ...rest
}: ButtonProps) => {
  const styles = getStyles({ color, size, rounded, responsive });

  if (link)
    return (
      <Link href={link}>
        <button className={`${styles} ${extra_style}`} {...rest}>
          {children}
        </button>
      </Link>
    );

  return (
    <button className={`${styles} ${extra_style}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
