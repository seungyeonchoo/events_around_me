export type Colors = 'primary' | 'secondary' | 'dark' | 'default' | undefined;

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';

export type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export interface ButtonStyleProps {
  color?: Colors;
  size: Sizes;
  rounded?: boolean | undefined;
  responsive?: boolean | undefined;
}

export interface TextStyleProps {
  color?: Colors;
  bold?: boolean | undefined;
  underline?: boolean;
  italic?: boolean;
  size: TextSizes;
}

export interface InputStyleProps {
  input_size: Sizes;
  rounded?: boolean | undefined;
  responsive?: boolean | undefined;
  border?: Colors;
  isValid?: boolean | undefined;
}

export interface SigninInput {
  email: string;
  password: string;
}

export interface SignupInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IUser extends SignupInput {
  id: number;
  habits: IHabit[];
}

export interface IHabit {
  id: number;
  title: string;
  start_date: string;
  end_date: string;
  duration: number;
  description: string;
  userId: number;
  daily_status: boolean[];
  // daily_status: IDailyStatus[];
}

export interface IDailyStatus {
  id: number;
  date: string;
  status: boolean;
}
