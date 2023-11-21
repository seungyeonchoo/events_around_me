import Link from 'next/link';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

const BUTTON_COLOR = {
  primary: 'text-default bg-primary hover:bg-primary_strong disabled:bg-primary_weak',
  secondary: 'text-default bg-secondary hover:bg-secondary_strong disabled:bg-secondary_weak',
  dark: 'text-default bg-dark hover:bg-dark_strong disabled:bg-dark_weak',
  default: 'text-dark bg-default',
};

const BUTTON_SIZE = {
  xs: 'w-[2rem] h-[2rem] ',
  sm: 'w-[3rem] h-[3rem] p-2 ',
  md: 'w-[8rem] h-[2.5rem] p-2 ',
  lg: 'w-[12.5rem] h-[2.5rem] p-2 ',
  xl: 'w-[15rem] h-[2.5rem] p-2 ',
  '2xl': 'w-[25rem] h-[2.5rem] p-2 ',
  full: 'w-full h-[2.5rem] p-2 ',
};

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  disabled?: boolean | undefined;
  children: ReactNode;
  link?: string | undefined;
  extra_style?: string | undefined;
  color: 'primary' | 'default' | 'secondary' | 'dark';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  rounded?: boolean | undefined;
  responsive?: boolean | undefined;
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
  const button_color = BUTTON_COLOR[color];
  const button_size = BUTTON_SIZE[size];
  const button_rounded = rounded ? 'rounded-full' : '';
  const button_responsive = responsive ? 'max-sm:w-[90%]' : '';

  const styles = `font-bold text-sm ${button_color} ${button_size} ${button_rounded} ${button_responsive} ${extra_style}`;

  if (link)
    return (
      <Link href={link}>
        <button className={styles} {...rest}>
          {children}
        </button>
      </Link>
    );

  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
};

export default Button;
