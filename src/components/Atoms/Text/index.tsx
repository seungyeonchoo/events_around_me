import { TagType, TextStyleProps } from '@/src/types';
import Link from 'next/link';
import { ReactNode } from 'react';
import getStyles from './getStyles';

export interface TextProps extends TextStyleProps {
  text_tag: TagType;
  children: ReactNode;
  link?: string;
}

const Text = ({ children, color, bold, size, italic, text_tag, underline, ...rest }: TextProps) => {
  const TAG = text_tag;
  const styles = getStyles({ color, bold, size, underline, italic });

  if (rest.link)
    return (
      <Link href={rest.link}>
        <TAG className={`${styles} cursor-pointer`} {...rest}>
          {children}
        </TAG>
      </Link>
    );
  return (
    <TAG className={styles} {...rest}>
      {children}
    </TAG>
  );
};

export default Text;
