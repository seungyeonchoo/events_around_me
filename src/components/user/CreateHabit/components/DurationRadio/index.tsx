import { ComponentPropsWithoutRef } from 'react';

export interface DurationRadioProps extends ComponentPropsWithoutRef<'input'> {
  label: string | number;
}

const DurationRadio = ({ label, ...rest }: DurationRadioProps) => {
  return (
    <label className="flex items-center checked:bg-primary checked:font-bold">
      <input type="radio" className="mr-2 peer" {...rest} />
      <span className="peer-checked:text-primary">{label}</span>
    </label>
  );
};

export default DurationRadio;
