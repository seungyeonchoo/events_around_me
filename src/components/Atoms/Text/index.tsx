import { TextStyleProps, TextType } from '@/src/types';
import { ReactNode } from 'react';
import getStyles from './getStyles';

export interface TextProps extends TextStyleProps {
  children: ReactNode;
}

const getTag = (text_type?: TextType) => {
  if (!text_type || text_type === 'sub') return 'p';
  else return text_type;
};

const Text = ({ children, color, strength, text_type, ...rest }: TextProps) => {
  const TAG = getTag(text_type);
  return (
    <TAG className={getStyles({ color, strength, text_type })} {...rest}>
      {children}
    </TAG>
  );
};

export default Text;
