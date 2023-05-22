import { TextStyleProps } from '@/src/types';

const TEXT_COLORS = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  dark: 'text-dark',
  default: 'text-default',
};

const TEXT_SIZE = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-[2rem]',
  '3xl': 'text-[2.5rem]',
  '4xl': 'text-[4rem]',
};

const getStyles = ({ color, bold, underline, size, italic }: TextStyleProps) => {
  const text_color = color ? TEXT_COLORS[color] : 'text-default';
  const isBold = bold ? 'font-bold' : '';
  const underlined = underline ? 'underline' : '';
  const isItalic = italic ? 'italic' : '';

  return `${text_color} ${isBold} ${underlined} ${isItalic} ${TEXT_SIZE[size]}`;
};

export default getStyles;
