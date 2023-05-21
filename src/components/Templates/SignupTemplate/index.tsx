import { SignupInput } from '@/src/types';
import React, { ChangeEvent, useState } from 'react';
import { isValidSignupInput } from '../../../lib/checkIsValid';
import inputValidation from '../../../lib/inputValidation';
import Button from '../../Atoms/Button';
import InputWithLabel from '../../Molecules/InputWithLabel';
import TextWithLink from '../../Molecules/TextWithLink';
import TitleWithDescription from '../../Molecules/TitleWithDescription';
import EmailInput from '../../Organisms/EmailInput';
import NameInput from '../../Organisms/NameInput';

export interface SignupTemplateProps {
  isValid: boolean;
  value: SignupInput;
  onClick: () => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignupTemplate = ({ value, onClick, onChange }: SignupTemplateProps) => {
  const [isMatched, setIsMatched] = useState(false);
  const confirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    return setIsMatched(e.target.value === value?.password);
  };

  return (
    <section className="flex flex-col m-auto py-10 px-5 border border-primary w-[30rem] rounded-3xl shadow-lg max-sm:w-full max-sm:shadow-none max-sm:px-0 max-sm:border-none">
      <TitleWithDescription
        title_text="SIGN UP"
        description="Please fill informations below to sign up"
        text_color="secondary"
        title_color="primary"
      />
      <EmailInput
        value={value}
        onChange={onChange}
        onClick={onClick}
        // 이메일 중복 확인
        isValid={inputValidation('email', value?.email)}
      />

      <InputWithLabel
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
      <InputWithLabel
        label="confirm password"
        type="password"
        onChange={confirmPassword}
        input_size="2xl"
        responsive={true}
        placeholder="confirm password"
        isValid={isMatched}
        invalid_message="🤔 input is not same with password"
      />
      <NameInput value={value} onChange={onChange} />
      <Button
        onClick={onClick}
        disabled={!isValidSignupInput(value)}
        size="2xl"
        responsive={true}
        color="primary"
        extra_style="my-10 mx-auto"
      >
        Sign Up
      </Button>
      <TextWithLink text="already have accout?" link="/" link_text="SIGN IN" />
    </section>
  );
};

export default SignupTemplate;
