import React from 'react';
import inputValidation from '../../../lib/inputValidation';
import Button from '../../Atoms/Button';
import InputWithLabel from '../../Molecules/InputWithLabel';
import TextWithLink from '../../Molecules/TextWithLink';
import TitleWithDescription from '../../Molecules/TitleWithDescription';

export interface SigninTemplateProps {
  isValid: boolean;
  value: { email: string; password: string };
  onClick: () => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SigninTemplate = ({ isValid, value, onClick, onChange }: SigninTemplateProps) => {
  return (
    <section className="flex flex-col m-auto py-10 px-5 border border-primary w-[30rem] rounded-3xl shadow-lg max-sm:w-full max-sm:shadow-none max-sm:px-0 max-sm:border-none">
      <TitleWithDescription
        title_text="SIGN IN"
        description="Please enter email and password to sign in"
        text_color="secondary"
        title_color="primary"
      />
      <InputWithLabel
        label="email"
        type="email"
        name="email"
        value={value?.email}
        onChange={onChange}
        input_size="2xl"
        responsive={true}
        placeholder="email@example.com"
        invalid_message="👀 please enter valid email"
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

export default SigninTemplate;
