import Input, { InputProps } from '../../common/Input';
import Text from '../../common/Text';

export interface LabeledInputProps extends InputProps {
  label: string;
  label_style?: string | undefined;
  invalid_message?: string | undefined;
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
  ...rest
}: LabeledInputProps) => {
  const styles = `flex flex-col my-5 w-[25rem] m-auto max-sm:w-full ${label_style}`;
  const text_styles = `${!isValid ? 'peer-focus:visible' : ''} invisible max-sm:m-auto`;

  return (
    <label className={styles}>
      <Text text_tag="span" size="xs" bold color="dark" extra_style="max-sm:ml-5">
        {getFirstCharToUpperCase(label)}
      </Text>
      <Input extra_style="peer my-2 m-auto" isValid={isValid} {...rest} />
      <Text text_tag="p" size="xs" color="secondary" extra_style={text_styles}>
        {invalid_message}
      </Text>
    </label>
  );
};

export default LabeledInput;
