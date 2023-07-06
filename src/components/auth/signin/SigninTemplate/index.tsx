import { ChangeEvent } from 'react';
import { isValidSigninInput } from '../../../../../src/lib/utils/checkIsValid';
import AuthButton from '../../common/AuthButton';
import AuthLink from '../../common/AuthLink';
import AuthTitle from '../../common/AuthTitle';
import SigninInputs from '../SigninInputs';

export interface SigninTemplateProps {
  handleSigninInput: (e: ChangeEvent<HTMLInputElement>) => void;
  signinInput: { email: string; password: string };
  handleSignin: () => void;
}

const SigninTemplate = ({ signinInput, handleSigninInput, handleSignin }: SigninTemplateProps) => {
  return (
    <section className="flex flex-col m-auto py-10 px-5 border border-primary w-[30rem] rounded-3xl shadow-lg max-sm:w-full max-sm:shadow-none max-sm:px-0 max-sm:border-none">
      <AuthTitle
        title_text="SIGN IN"
        description="Please enter email and password to sign in"
        text_color="secondary"
        title_color="primary"
      />
      <SigninInputs value={signinInput} onChange={handleSigninInput} />
      <AuthButton
        onClick={handleSignin}
        disabled={!isValidSigninInput(signinInput)}
        button_text="SIGN IN"
      />
      <AuthLink text="are you first?" link="/signup" link_text="SIGN UP" />
    </section>
  );
};

export default SigninTemplate;
