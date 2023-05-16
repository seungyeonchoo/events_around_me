import { TextStyleProps } from '@/src/types';

const TEXT_COLORS = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  dark: 'text-dark',
};

const getStyles = ({ color, bold, underline, size, italic }: TextStyleProps) => {
  const text_color = color ? TEXT_COLORS[color] : 'text-default';
  const isBold = bold ? 'font-bold' : '';
  const underlined = underline ? 'underline' : '';
  const isItalic = italic ? 'italic' : '';

  return `${text_color} ${isBold} ${underlined} ${isItalic} text-${size}`;
};

export default getStyles;
