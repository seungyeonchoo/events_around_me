import { SignupInput } from '@/src/lib/types';
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
  setSignupInput: React.Dispatch<React.SetStateAction<SignupInput>>;
  isError: boolean;
  errorStatus?: { errorCode: number; errorMessage: string };
}

const SignupTemplate = ({
  signupInput,
  handleSignupInput,
  handleSignup,
  duplicationCheck,
  setSignupInput,
  errorStatus,
  isError,
}: SignupTemplateProps) => {
  const { isMatched, handleIsMatched } = useMatch(false, signupInput?.password);

  return (
    <section className="flex flex-col m-auto py-10 px-5 border border-primary w-[30rem] rounded-3xl shadow-lg sm:w-full sm:shadow-none sm:px-0 sm:border-none">
      <AuthTitle
        title_text="회원가입"
        description="회원 가입을 위해 아래 정보들을 입력해 주세요."
        text_color="secondary"
        title_color="primary"
      />
      {isError && (
        <div className="fixed top-[5rem] right-[5rem] text-[0.75rem] border border-secondary p-[0.75rem] bg-secondary_weak text-white font-bold">
          {errorStatus?.errorCode} :{errorStatus?.errorMessage}
        </div>
      )}
      <SignupInputs
        value={signupInput}
        isMatched={isMatched}
        handleIsMatched={handleIsMatched}
        onClick={duplicationCheck}
        onChange={handleSignupInput}
        setSignupInput={setSignupInput}
      />
      <AuthButton
        onClick={handleSignup}
        disabled={!isValidSignupInput(signupInput)}
        button_text="회원가입"
      />
      <AuthLink text="회원이신가요?" link="/" link_text="로그인 페이지로" />
    </section>
  );
};

export default SignupTemplate;
