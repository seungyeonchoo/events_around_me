import { InputStyleProps } from '@/src/types';
import { ComponentPropsWithoutRef } from 'react';
import getStyles from './getStyles';

type TInput = InputStyleProps & ComponentPropsWithoutRef<'input'>;

export interface InputProps extends TInput {
  extra_style?: string | undefined;
}

const Input = ({ input_size, rounded, extra_style, responsive, border, ...rest }: InputProps) => {
  const styles = getStyles({ input_size, responsive, rounded, border });
  return <input className={`${styles} ${extra_style}`} {...rest} />;
};

export default Input;
