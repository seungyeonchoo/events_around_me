import Link from 'next/link';
import { ReactNode } from 'react';

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
  '4xl': 'text-[3rem]',
};

export interface TextProps {
  color: 'primary' | 'default' | 'secondary' | 'dark';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  text_tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
  children: ReactNode;
  link?: string;
  bold?: boolean | undefined;
  underline?: boolean;
  italic?: boolean;
  extra_style?: string | undefined;
}

const Text = ({
  children,
  color,
  bold,
  size,
  italic,
  text_tag,
  underline,
  extra_style,
  ...rest
}: TextProps) => {
  const Tag = text_tag;

  const text_color = TEXT_COLORS[color];
  const text_size = TEXT_SIZE[size];
  const text_isBold = bold ? 'font-bold' : '';
  const text_isUnderlined = underline ? 'underline' : '';
  const text_isItalic = italic ? 'italic' : '';

  const styles = `${text_color} ${text_isBold} ${text_isUnderlined} ${text_isItalic} ${text_size} ${extra_style}`;

  if (rest.link)
    return (
      <Link href={rest.link}>
        <Tag className={`${styles} cursor-pointer`} {...rest}>
          {children}
        </Tag>
      </Link>
    );
  return (
    <Tag className={styles} {...rest}>
      {children}
    </Tag>
  );
};

export default Text;
