import { SignupInput } from '@/src/types';
import { ChangeEvent } from 'react';
import InputWithLabel from '../../Molecules/InputWithLabel';

export interface NameInputProps {
  value: SignupInput;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}

const NameInput = ({ value, onChange, isValid }: NameInputProps) => {
  return (
    <div className="m-auto flex justify-between w-[25rem] max-sm:flex-col max-sm:w-full">
      <InputWithLabel
        label="first name"
        type="text"
        name="firstName"
        value={value?.firstName}
        onChange={onChange}
        text_color="dark"
        input_size="lg"
        responsive={true}
        placeholder="First Name"
        invalid_message="👀 please enter valid email"
        isValid={isValid}
      />
      <InputWithLabel
        label="last name"
        type="text"
        name="firstName"
        value={value?.firstName}
        onChange={onChange}
        text_color="dark"
        input_size="lg"
        responsive={true}
        placeholder="Last Name"
        invalid_message="👀 please enter valid email"
        isValid={isValid}
      />
    </div>
  );
};

export default NameInput;
