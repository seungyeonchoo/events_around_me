import { ButtonStyleProps } from '@/src/types';
import Link from 'next/link';
import { ReactNode } from 'react';
import getStyles from './getStyles';

export interface ButtonProps extends ButtonStyleProps {
  disabled?: boolean | undefined;
  children: ReactNode;
  onClick?: () => void;
  link?: string | undefined;
}

const Button = ({ children, color, rounded, responsive, size, link, ...rest }: ButtonProps) => {
  if (link)
    return (
      <Link href={link}>
        <button className={getStyles({ color, size, rounded, responsive })} {...rest}>
          {children}
        </button>
      </Link>
    );

  return (
    <button className={getStyles({ color, size, rounded, responsive })} {...rest}>
      {children}
    </button>
  );
};

export default Button;
