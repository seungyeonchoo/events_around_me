import { ComponentPropsWithoutRef } from 'react';

const INPUT_SIZE = {
  xs: 'w-[3rem]',
  sm: 'w-[5rem]',
  md: 'w-[8rem]',
  lg: 'w-[12rem]',
  xl: 'w-[15rem]',
  '2xl': 'w-[25rem]',
  full: 'w-full',
};

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  input_size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  extra_style?: string | undefined;
  rounded?: boolean | undefined;
  responsive?: boolean | undefined;
  isValid?: boolean | undefined;
}

const input_base =
  'p-5 h-[2.5rem] border border-dark text-dark text-xs outline-offset-2 focus:border-none';

const Input = ({ input_size, rounded, extra_style, responsive, isValid, ...rest }: InputProps) => {
  const width_size = INPUT_SIZE[input_size];
  const input_rounded = rounded ? 'rounded-full' : '';
  const input_responsive = responsive ? 'max-sm:w-[90%]' : '';
  const input_invalid = isValid ? '' : 'focus:outline-secondary';
  const styles = `${width_size} ${input_rounded} ${input_responsive} ${input_invalid} ${input_base} ${extra_style}`;

  return <input className={styles} {...rest} />;
};

export default Input;
