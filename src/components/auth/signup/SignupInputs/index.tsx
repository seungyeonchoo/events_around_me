import { SignupInput } from '@/src/lib/types';
import { ChangeEvent } from 'react';
import LabeledInput from '../../../../../src/components/common/LabeledInput';
import { inputValidation } from '../../../../../src/lib/utils/checkIsValid';
import SignupEmail from '../SignupEmail';
import SignupName from '../SignupName';

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
        input_size="2xl"
        responsive={true}
        placeholder="password"
        isValid={inputValidation('password', value?.password)}
        invalid_message="👀 8 - 16 (character / special symbol / number)"
      />
      <LabeledInput
        label="confirm password"
        type="password"
        onChange={handleIsMatched}
        input_size="2xl"
        responsive={true}
        placeholder="confirm password"
        isValid={isMatched}
        invalid_message="🤔 input is not same with password"
      />
      <SignupName
        value={value}
        onChange={onChange}
        valid_first={inputValidation('firstName', value?.firstName)}
        valid_last={inputValidation('lastName', value?.lastName)}
      />
    </>
  );
};

export default SignupInputs;
