export type Colors = 'primary' | 'secondary' | undefined;

export type Sizes = 'xs' | 'sm' | 'lg' | 'xl' | 'full' | undefined;

export interface ButtonStyleProps {
  color?: Colors;
  size?: Sizes;
  rounded?: boolean | undefined;
  responsive?: boolean | undefined;
}

export type TextType = 'h1' | 'h2' | 'h3' | 'sub' | undefined;

export type TextStrength = 'strong' | 'weak' | undefined;

export interface TextStyleProps {
  text_type: TextType;
  color?: Colors;
  strength?: TextStrength;
}
