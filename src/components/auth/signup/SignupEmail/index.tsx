import { SignupInput } from '@/src/lib/types';
import { ChangeEvent } from 'react';
import Button from '../../../../../src/components/common/Button';
import InputWithLabel from '../../../common/LabeledInput';

export interface SignupEmailProps {
  value: SignupInput;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  isValid: boolean;
}

const SignupEmail = ({ value, onChange, onClick, isValid }: SignupEmailProps) => {
  return (
    <div className="m-auto flex justify-between w-full items-center relative ">
      <InputWithLabel
        label="이메일"
        type="email"
        name="email"
        value={value?.email}
        onChange={onChange}
        input_size="full"
        responsive
        placeholder="email@example.com"
        invalid_message="👀 유효한 이메일 주소를 입력해 주세요."
        isValid={isValid}
      />
      <Button
        size="xs"
        color="primary"
        rounded
        onClick={onClick}
        extra_style="absolute right-10 max-sm:right-16"
      >
        👀
      </Button>
    </div>
  );
};

export default SignupEmail;
