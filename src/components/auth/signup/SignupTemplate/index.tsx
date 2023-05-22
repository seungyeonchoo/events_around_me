import useInput from '../../../../../src/lib/hooks/useInput';
import useMatch from '../../../../../src/lib/hooks/useMatch';
import { isValidSignupInput } from '../../../../../src/lib/utils/checkIsValid';
import AuthButton from '../../common/AuthButton';
import AuthLink from '../../common/AuthLink';
import AuthTitle from '../../common/AuthTitle';
import SignupInputs from '../SignupInputs';

export interface SignupTemplateProps {
  handleSignup: () => void;
  duplicationCheck: () => void;
}

const initialSignUp = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const SignupTemplate = ({ handleSignup, duplicationCheck }: SignupTemplateProps) => {
  const { input: signupInput, handleInput: handleSignupInput } = useInput(initialSignUp);
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
