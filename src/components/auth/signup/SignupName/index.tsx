import { SignupInput } from '@/src/lib/types';
import { ChangeEvent } from 'react';
import LabeledInput from '../../../common/LabeledInput';

export interface SignupNameProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  valid_first: boolean;
  valid_last: boolean;
  value: SignupInput;
}

const SignupName = ({ value, onChange, valid_first, valid_last }: SignupNameProps) => {
  return (
    <div className="m-auto flex justify-between w-full max-sm:flex-col">
      <LabeledInput
        label="first name"
        type="text"
        name="firstName"
        value={value?.firstName}
        onChange={onChange}
        input_size="lg"
        responsive
        placeholder="First Name"
        invalid_message="First name can not be empty. 👀"
        isValid={valid_first}
      />
      <LabeledInput
        label="last name"
        type="text"
        name="lastName"
        value={value?.lastName}
        onChange={onChange}
        input_size="lg"
        responsive
        placeholder="Last Name"
        invalid_message="Last name can not be empty. 👀"
        isValid={valid_last}
      />
    </div>
  );
};

export default SignupName;
