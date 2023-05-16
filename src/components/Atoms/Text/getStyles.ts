import { Colors, TextStrength, TextStyleProps } from '@/src/types';

const getColors = (color?: Colors, strength?: TextStrength) => {
  let text_color = '';
  switch (color) {
    case 'primary':
      text_color = `text-primary`;
      break;
    case 'secondary':
      text_color = `text-secondary`;
      break;
    default:
      text_color = `text-dark`;
  }

  return strength ? `${text_color}_${strength}` : text_color;
};

// const getTypeStyle = (text_type: TextType) => {};

const getStyles = ({ color, strength, text_type }: TextStyleProps) => {
  const text_color = getColors(color, strength);
  return text_color;
};

export default getStyles;
