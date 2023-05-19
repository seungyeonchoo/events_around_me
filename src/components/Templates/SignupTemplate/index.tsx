import { SignupInput } from '@/src/types';
import React from 'react';
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

const SignupTemplate = ({ isValid, value, onClick, onChange }: SignupTemplateProps) => {
  return (
    <section className="flex flex-col py-10 px-5 border border-primary w-[30rem] rounded-3xl shadow-md max-sm:w-full max-sm:shadow-none max-sm:px-0 max-sm:border-none">
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
        isValid={inputValidation('email', 'email', value?.email)}
      />

      <InputWithLabel
        label="password"
        type="password"
        name="password"
        value={value?.password}
        onChange={onChange}
        text_color="dark"
        input_size="2xl"
        responsive={true}
        placeholder="password"
        isValid={inputValidation('password', 'password', value?.password)}
        invalid_message="👀 8 - 16 (character / special symbol / number)"
      />
      <InputWithLabel
        label="confirm password"
        type="password"
        name="password"
        // value={value?.password}
        // onChange={onChange}
        text_color="dark"
        input_size="2xl"
        responsive={true}
        placeholder="password"
        isValid={inputValidation('password', '', value?.password)}
        invalid_message="🤔 input is not same with password"
      />
      <NameInput value={value} onChange={onChange} />
      <Button
        onClick={onClick}
        disabled={!isValid}
        size="2xl"
        responsive={true}
        color="primary"
        extra_style="my-10 mx-auto"
      >
        Sign In
      </Button>
      <TextWithLink text="New to our web page?" link="/auth/signup" link_text="SIGN UP" />
    </section>
  );
};

export default SignupTemplate;
