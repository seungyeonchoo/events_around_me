import { SignupInput } from '@/src/types';
import { ChangeEvent } from 'react';
import inputValidation from '../../../lib/inputValidation';
import InputWithLabel from '../../Molecules/InputWithLabel';

export interface NameInputProps {
  value: SignupInput;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NameInput = ({ value, onChange }: NameInputProps) => {
  return (
    <div className="m-auto flex justify-between w-[25rem] max-sm:flex-col max-sm:w-full">
      <InputWithLabel
        label="first name"
        type="text"
        name="firstName"
        value={value?.firstName}
        onChange={onChange}
        input_size="lg"
        responsive={true}
        placeholder="First Name"
        invalid_message="First name can not be empty. 👀"
        isValid={inputValidation('firstName', value?.firstName)}
      />
      <InputWithLabel
        label="last name"
        type="text"
        name="lastName"
        value={value?.lastName}
        onChange={onChange}
        input_size="lg"
        responsive={true}
        placeholder="Last Name"
        invalid_message="Last name can not be empty. 👀"
        isValid={inputValidation('firstName', value?.lastName)}
      />
    </div>
  );
};

export default NameInput;
