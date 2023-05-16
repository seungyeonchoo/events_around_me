import { InputStyleProps } from '@/src/types';
import { ComponentPropsWithoutRef } from 'react';
import getStyles from './getStyles';

type TInput = InputStyleProps & ComponentPropsWithoutRef<'input'>;

export interface InputProps extends TInput {}

const Input = ({ input_size, rounded, responsive, border, ...rest }: InputProps) => {
  const styles = getStyles({ input_size, responsive, rounded, border });
  return <input className={styles} {...rest} />;
};

export default Input;
