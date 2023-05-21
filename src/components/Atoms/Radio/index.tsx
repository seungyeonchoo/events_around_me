import { ComponentPropsWithoutRef } from 'react';
import Text from '../Text';

export interface RadioProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
}

const Radio = ({ label, ...rest }: RadioProps) => {
  return (
    <label className="flex items-center">
      <Text text_tag="span" size="xs" color="dark" bold>
        {label}
      </Text>
      <input type="radio" className="mx-2" {...rest} />
    </label>
  );
};

export default Radio;
