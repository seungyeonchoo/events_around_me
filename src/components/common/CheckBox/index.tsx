import { ComponentPropsWithoutRef } from 'react';

export interface CheckBoxProps extends ComponentPropsWithoutRef<'input'> {
  toggle_size: 'sm' | 'lg';
  color: 'primary' | 'secondary' | 'dark';
  extra_style?: string | undefined;
  checked?: boolean | undefined;
}

const SWITCH_COLOR = {
  primary: 'bg-primary border-primary',
  secondary: 'bg-secondary border-secondary',
  dark: 'bg-dark border-dark',
};

const TOGGLE_SIZE = {
  sm: {
    toggle: 'w-[3rem] h-[1.5rem]',
    button: 'left-[2px] w-[1.2rem] h-[1.2rem] peer-checked:translate-x-[1.5rem]',
  },
  lg: {
    toggle: 'w-[5rem] h-[2.5rem]',
    button: 'left-[5px] w-[2rem] h-[2rem] peer-checked:translate-x-[2.25rem]',
  },
};

const CheckBox = ({ toggle_size, extra_style, color, checked, onChange }: CheckBoxProps) => {
  const toggle_base = 'border block relative rounded-3xl cursor-pointer';
  const button_base =
    'top-[50%] translate-y-[-50%] absolute bg-gray-200 border-gray-300 border shadow-md rounded-full transition-all';
  const toggle_checked = checked ? SWITCH_COLOR[color] : 'bg-[#fff] border-gray-400';

  const toggle_style = `${toggle_base} ${TOGGLE_SIZE[toggle_size].toggle} ${toggle_checked} ${extra_style}`;
  const button_style = `${button_base} ${TOGGLE_SIZE[toggle_size].button}`;

  return (
    <label className={toggle_style}>
      <input
        className="peer sr-only"
        type="checkbox"
        readOnly
        checked={checked}
        onChange={onChange}
      />
      <span className={button_style}></span>
    </label>
  );
};

export default CheckBox;
