import Input, { InputProps } from '../../Atoms/Input';
import Text from '../../Atoms/Text';

export interface InputWithLabelProps extends InputProps {
  label: string;
  label_style?: string | undefined;
  invalid_message?: string | undefined;
}

const InputWithLabel = ({
  label,
  placeholder,
  type,
  rounded,
  onChange,
  responsive,
  label_style,
  name,
  value,
  invalid_message,
  input_size,
  isValid,
}: InputWithLabelProps) => {
  return (
    <label className={`flex flex-col my-5 ${label_style} w-[25rem] m-auto max-sm:w-full`}>
      <Text text_tag="span" size="xs" bold color="dark" extra_style="max-sm:ml-5">
        {label
          .split(' ')
          .map(el => el[0].toUpperCase() + el.slice(1))
          .join(' ')}
      </Text>
      <Input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        rounded={rounded}
        responsive={responsive}
        border="dark"
        input_size={input_size}
        extra_style="peer my-2 m-auto"
        isValid={isValid}
      />
      <Text
        text_tag="p"
        size="xs"
        color="secondary"
        extra_style={`${!isValid && 'peer-focus:visible'} invisible max-sm:m-auto`}
      >
        {invalid_message}
      </Text>
    </label>
  );
};

export default InputWithLabel;
