import { ComponentPropsWithoutRef } from 'react';

interface ColorCheckBoxProps extends ComponentPropsWithoutRef<'input'> {}

const ColorCheckBox = ({ ...rest }: ColorCheckBoxProps) => {
  return (
    <label className="mx-[0.2rem]">
      <input type="checkbox" name="color" className="sr-only peer" {...rest} />
      <div
        className={`w-[1rem] h-[1rem] ${rest.value} rounded-full peer-cheked:border border-white peer-checked:border-2`}
      />
    </label>
  );
};

export default ColorCheckBox;
