export type Colors = 'primary' | 'secondary' | 'dark' | undefined;

export type Sizes = 'xs' | 'sm' | 'lg' | 'xl' | 'full' | undefined;

export interface ButtonStyleProps {
  color?: Colors;
  size?: Sizes;
  rounded?: boolean | undefined;
  responsive?: boolean | undefined;
}

export type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';

export type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export interface TextStyleProps {
  color?: Colors;
  bold?: boolean | undefined;
  underline?: boolean;
  italic?: boolean;
  size?: TextSizes;
}
