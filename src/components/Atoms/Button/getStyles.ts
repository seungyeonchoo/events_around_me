import { ButtonStyleProps, Colors, Sizes } from '@/src/types';

const getColor = (color?: Colors) => {
  switch (color) {
    case 'primary':
      return 'text-default bg-primary hover:bg-primary_strong disabled:bg-primary_weak';
    case 'secondary':
      return 'text-default bg-secondary hover:bg-secondary_strong disabled:bg-secondary_weak';
    default:
      return 'bg-default hover:bg-default_strong disabled:bg-default_weak text-dark';
  }
};

const getSize = (size?: Sizes) => {
  switch (size) {
    case 'xs':
      return 'w-[3rem]';
    case 'sm':
      return 'w-[5rem]';
    case 'lg':
      return 'w-[10rem]';
    case 'xl':
      return 'w-[15rem]';
    case 'full':
      return 'w-full';
    default:
      return 'w-[8rem]';
  }
};

const getStyles = ({ color, size, rounded, responsive }: ButtonStyleProps) => {
  const base_style = 'm-auto p-2 h-[2.5rem] font-bold text-sm';
  const color_style = getColor(color);
  const size_style = getSize(size);
  const isRounded = rounded && 'rounded-full';
  const isResponsive = responsive && 'max-sm:w-full';

  return `${base_style} ${color_style} ${size_style} ${isRounded} ${isResponsive}`;
};

export default getStyles;
