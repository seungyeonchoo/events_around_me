import { ChangeEvent } from 'react';
import useMatch from '../../../../../src/lib/hooks/useMatch';
import { isValidSignupInput } from '../../../../../src/lib/utils/checkIsValid';
import AuthButton from '../../common/AuthButton';
import AuthLink from '../../common/AuthLink';
import AuthTitle from '../../common/AuthTitle';
import SignupInputs from '../SignupInputs';

export interface SignupTemplateProps {
  signupInput: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };
  // eslint-disable-next-line no-unused-vars
  handleSignupInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSignup: () => void;
  duplicationCheck: () => void;
}

const SignupTemplate = ({
  signupInput,
  handleSignupInput,
  handleSignup,
  duplicationCheck,
}: SignupTemplateProps) => {
  const { isMatched, handleIsMatched } = useMatch(false, signupInput?.password);

  return (
    <section className="flex flex-col m-auto py-10 px-5 border border-primary w-[30rem] rounded-3xl shadow-lg max-sm:w-full max-sm:shadow-none max-sm:px-0 max-sm:border-none">
      <AuthTitle
        title_text="SIGN UP"
        description="Please fill informations below to sign up"
        text_color="secondary"
        title_color="primary"
      />
      <SignupInputs
        value={signupInput}
        isMatched={isMatched}
        handleIsMatched={handleIsMatched}
        onClick={duplicationCheck}
        onChange={handleSignupInput}
      />
      <AuthButton
        onClick={handleSignup}
        disabled={!isValidSignupInput(signupInput)}
        button_text="SIGN UP"
      />
      <AuthLink text="already have accout?" link="/" link_text="SIGN IN" />
    </section>
  );
};

export default SignupTemplate;
