import { InputStyleProps } from '@/src/types';

const BORDER_COLOR = {
  primary: 'border border-primary',
  secondary: 'border border-secondary',
  dark: 'border border-dark',
  default: 'border border-default',
};

const INPUT_SIZE = {
  xs: 'w-[3rem]',
  sm: 'w-[5rem]',
  md: 'w-[8rem]',
  lg: 'w-[12rem]',
  xl: 'w-[15rem]',
  '2xl': 'w-[25rem]',
  full: 'w-full',
};

const base_style = 'p-5 h-[2.5rem] text-dark text-xs outline-offset-2 focus:border-none';

const getStyles = ({ input_size, rounded, responsive, border, isValid }: InputStyleProps) => {
  const size_style = INPUT_SIZE[input_size];
  const border_style = border ? BORDER_COLOR[border] : '';
  const isRounded = rounded ? 'rounded-full' : '';
  const isResponsive = responsive ? 'max-sm:w-[90%]' : '';
  const invalid_style = isValid ? '' : 'focus:outline-secondary';

  return `${base_style} ${size_style} ${isRounded} ${isResponsive} ${border_style} ${invalid_style}`;
};

export default getStyles;
