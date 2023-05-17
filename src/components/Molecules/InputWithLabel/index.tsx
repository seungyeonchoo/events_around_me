import Input, { InputProps } from '../../Atoms/Input';
import Text from '../../Atoms/Text';

export interface InputWithLabelProps extends InputProps {
  label: string;
  label_style?: string | undefined;
  invalid_message?: string | undefined;
  text_color: 'dark' | 'primary' | 'secondary' | 'default' | undefined;
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
  text_color,
  invalid_message,
  input_size,
}: InputWithLabelProps) => {
  return (
    <label className={`flex flex-col ${label_style}`}>
      <Text text_tag="span" size="sm" bold={true} color={text_color} extra_style="ml-3">
        {label.split(' ').map(el => el[0].toUpperCase() + el.slice(1))}
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
        extra_style="peer my-2"
      />
      <Text
        text_tag="p"
        size="xs"
        color="secondary"
        extra_style="peer-invalid:visible invisible ml-3"
      >
        {invalid_message}
      </Text>
    </label>
  );
};

export default InputWithLabel;
