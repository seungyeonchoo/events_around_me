import { SignupInput } from '@/src/lib/types';
import { ChangeEvent } from 'react';
import LabeledInput from '../../../../../src/components/common/LabeledInput';
import { inputValidation } from '../../../../../src/lib/utils/checkIsValid';
import SignupEmail from '../SignupEmail';

export interface SignupInputsProps {
  value: SignupInput;
  onClick: () => void;
  isMatched: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  handleIsMatched: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SignupInputs = ({
  value,
  onClick,
  onChange,
  isMatched,
  handleIsMatched,
}: SignupInputsProps) => {
  return (
    <>
      <SignupEmail
        value={value}
        onChange={onChange}
        onClick={onClick}
        isValid={inputValidation('email', value?.email)}
      />
      <LabeledInput
        label="password"
        type="password"
        name="password"
        value={value?.password}
        onChange={onChange}
        input_size="full"
        responsive
        placeholder="password"
        isValid={inputValidation('password', value?.password)}
        invalid_message="👀 8 - 16 (character / special symbol / number)"
      />
      <LabeledInput
        label="confirm password"
        type="password"
        onChange={handleIsMatched}
        input_size="full"
        responsive
        placeholder="confirm password"
        isValid={isMatched}
        invalid_message="🤔 input is not same with password"
      />
      <LabeledInput
        label="first name"
        type="text"
        name="firstName"
        value={value?.firstName}
        onChange={onChange}
        input_size="full"
        responsive
        placeholder="First Name"
        invalid_message="First name can not be empty. 👀"
        isValid={inputValidation('firstName', value?.firstName)}
      />
      <LabeledInput
        label="last name"
        type="text"
        name="lastName"
        value={value?.lastName}
        onChange={onChange}
        input_size="full"
        responsive
        placeholder="Last Name"
        invalid_message="Last name can not be empty. 👀"
        isValid={inputValidation('lastName', value?.lastName)}
      />
      {/* <SignupName
        value={value}
        onChange={onChange}
        valid_first={inputValidation('firstName', value?.firstName)}
        valid_last={inputValidation('lastName', value?.lastName)}
      /> */}
    </>
  );
};

export default SignupInputs;
