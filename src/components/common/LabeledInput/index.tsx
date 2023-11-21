import { ComponentPropsWithoutRef } from 'react';
import Input from '../../common/Input';
import Text from '../../common/Text';

export interface LabeledInputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  label_style?: string | undefined;
  invalid_message?: string | undefined;
  isValid?: boolean | undefined;
  input_size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  responsive?: boolean | undefined;
}

const getFirstCharToUpperCase = (label: string) => {
  return label
    .split(' ')
    .map(el => el[0].toUpperCase() + el.slice(1))
    .join(' ');
};

const LabeledInput = ({
  label,
  label_style,
  invalid_message,
  isValid,
  input_size,
  responsive,
  ...rest
}: LabeledInputProps) => {
  const styles = `flex flex-col my-5 m-auto w-[90%] ${label_style}`;
  const text_styles = `${
    !isValid ? 'peer-focus:visible' : ''
  } invisible mx-auto w-[80%] max-sm:my-0`;

  return (
    <label className={styles}>
      <Text text_tag="span" size="xs" bold color="dark" extra_style="max-sm:mx-auto max-sm:w-[90%]">
        {getFirstCharToUpperCase(label)}
      </Text>
      <Input
        extra_style="peer my-2 m-auto"
        isValid={isValid}
        input_size={input_size}
        responsive={responsive}
        {...rest}
      />
      <Text text_tag="p" size="xs" color="secondary" extra_style={text_styles}>
        {invalid_message}
      </Text>
    </label>
  );
};

export default LabeledInput;
