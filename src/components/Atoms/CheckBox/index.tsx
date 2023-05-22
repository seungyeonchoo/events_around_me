import { ComponentPropsWithoutRef } from 'react';
import getStyles from './getStyles';

export interface CheckBoxProps extends ComponentPropsWithoutRef<'input'> {
  toggle_size: 'sm' | 'lg';
  color: 'primary' | 'secondary' | 'dark';
  extra_style?: string | undefined;
  showAll: boolean;
}

const SWITCH_COLOR = {
  primary: 'bg-primary border-primary',
  secondary: 'bg-secondary border-secondary',
  dark: 'bg-dark border-dark',
};

const CheckBox = ({ toggle_size, extra_style, color, showAll, ...rest }: CheckBoxProps) => {
  const { switch_style, button_style } = getStyles(toggle_size);
  return (
    <label
      className={`${switch_style} ${extra_style} ${
        showAll ? SWITCH_COLOR[color] : 'bg-gray-400 border-gray-400'
      }`}
    >
      <input className="peer sr-only" type="checkbox" readOnly {...rest} />
      <span className={button_style}></span>
    </label>
  );
};

export default CheckBox;
