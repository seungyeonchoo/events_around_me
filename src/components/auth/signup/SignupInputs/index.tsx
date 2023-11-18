import ProfileImage from '@/src/components/common/ProfileImage';
import { SignupInput } from '@/src/lib/types';
import { ChangeEvent, SetStateAction } from 'react';
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
  setSignupInput: React.Dispatch<SetStateAction<SignupInput>>;
}

const SignupInputs = ({
  value,
  onClick,
  onChange,
  isMatched,
  handleIsMatched,
  setSignupInput,
}: SignupInputsProps) => {
  return (
    <>
      <ProfileImage setInput={setSignupInput} input={value} />
      <SignupEmail
        value={value}
        onChange={onChange}
        onClick={onClick}
        isValid={inputValidation('email', value?.email)}
      />
      <LabeledInput
        label="비밀번호"
        type="password"
        name="password"
        value={value?.password}
        onChange={onChange}
        input_size="full"
        responsive
        placeholder="비밀번호"
        isValid={inputValidation('password', value?.password)}
        invalid_message="👀 8 - 16 (문자 / 특수문자 / 숫자)"
      />
      <LabeledInput
        label="비밀번호 확인"
        type="password"
        onChange={handleIsMatched}
        input_size="full"
        responsive
        placeholder="비밀번호 확인"
        isValid={isMatched}
        invalid_message="🤔 입력하신 비밀번호가 일치하지 않습니다."
      />
      <LabeledInput
        label="성"
        type="text"
        name="firstName"
        value={value?.firstName}
        onChange={onChange}
        input_size="full"
        responsive
        placeholder="성"
        invalid_message="Firstname can not be empty. 👀"
        isValid={inputValidation('firstName', value?.firstName)}
      />
      <LabeledInput
        label="이름"
        type="text"
        name="lastName"
        value={value?.lastName}
        onChange={onChange}
        input_size="full"
        responsive
        placeholder="이름"
        invalid_message="Lastname can not be empty. 👀"
        isValid={inputValidation('lastName', value?.lastName)}
      />
    </>
  );
};

export default SignupInputs;
