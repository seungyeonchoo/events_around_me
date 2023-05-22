import { SigninInput } from '@/src/lib/types';
import { ChangeEvent } from 'react';
import LabeledInput from '../../../../../src/components/common/LabeledInput';
import { inputValidation } from '../../../../../src/lib/utils/checkIsValid';

export interface SigninInputsProps {
  value: SigninInput;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SigninInputs = ({ value, onChange }: SigninInputsProps) => {
  return (
    <>
      <LabeledInput
        label="email"
        type="email"
        name="email"
        onChange={onChange}
        input_size="2xl"
        responsive={true}
        placeholder="email"
        isValid={inputValidation('email', value?.email)}
        invalid_message="Please enter valid email. 👀"
      />
      <LabeledInput
        label="password"
        type="password"
        name="password"
        value={value?.password}
        onChange={onChange}
        input_size="2xl"
        responsive={true}
        placeholder="password"
        isValid={inputValidation('password', value?.password)}
        invalid_message="8 - 16 (character / special symbol / number). 👀"
      />
    </>
  );
};

export default SigninInputs;
