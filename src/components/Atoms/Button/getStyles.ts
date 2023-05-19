import { ButtonStyleProps } from '@/src/types';

const BUTTON_COLOR = {
  primary: 'text-default bg-primary hover:bg-primary_strong disabled:bg-primary_weak',
  secondary: 'text-default bg-secondary hover:bg-secondary_strong disabled:bg-secondary_weak',
  dark: 'text-default bg-dark hover:bg-dark_strong disabled:bg-dark_weak',
  default: 'text-dark bg-default',
};

const BUTTON_SIZE = {
  xs: 'w-[3rem]',
  sm: 'w-[5rem]',
  md: 'w-[8rem]',
  lg: 'w-[12.5rem]',
  xl: 'w-[15rem]',
  '2xl': 'w-[25rem]',
  full: 'w-full',
};

const base_style = 'p-2 h-[2.5rem] font-bold text-sm';

const getStyles = ({ color, size, rounded, responsive }: ButtonStyleProps) => {
  const default_color = 'bg-default hover:bg-default_strong disabled:bg-default_weak text-dark';
  const color_style = color ? BUTTON_COLOR[color] : default_color;
  const button_size = BUTTON_SIZE[size];
  const isRounded = rounded && 'rounded-full';
  const isResponsive = responsive && 'max-sm:w-[90%]';

  return `${base_style} ${color_style} ${button_size} ${isRounded} ${isResponsive}`;
};

export default getStyles;
