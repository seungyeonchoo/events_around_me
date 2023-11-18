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
        label="이메일"
        type="email"
        name="email"
        onChange={onChange}
        value={value.email}
        input_size="full"
        responsive
        placeholder="이메일"
        isValid={inputValidation('email', value?.email)}
        invalid_message="유효한 이메일 주소를 입력해 주세요. 👀"
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
        invalid_message="8 - 16 (문자 / 특수문자 / 숫자). 👀"
      />
    </>
  );
};

export default SigninInputs;
