import { ChangeEvent } from 'react';
import { isValidSigninInput } from '../../../../../src/lib/utils/checkIsValid';
import AuthButton from '../../common/AuthButton';
import AuthLink from '../../common/AuthLink';
import AuthTitle from '../../common/AuthTitle';
import SigninInputs from '../SigninInputs';

export interface SigninTemplateProps {
  // eslint-disable-next-line no-unused-vars
  handleSigninInput: (e: ChangeEvent<HTMLInputElement>) => void;
  signinInput: { email: string; password: string };
  handleSignin: () => void;
  isError: boolean;
  errorStatus: number;
}

const ERROR_MESSAGE: { [key: number]: string } = {
  400: '이메일 혹은 비밀번호가 일치하지 않습니다.',
};

const SigninTemplate = ({
  signinInput,
  handleSigninInput,
  handleSignin,
  isError,
  errorStatus,
}: SigninTemplateProps) => {
  return (
    <section className="flex flex-col mx-auto py-10 px-5 border border-primary w-[30rem] rounded-3xl shadow-lg sm:w-full sm:shadow-none sm:px-0 sm:border-none">
      <AuthTitle
        title_text="로그인"
        description="이메일과 비밀번호를 입력해 주세요."
        text_color="secondary"
        title_color="primary"
      />
      {isError && (
        <div className="text-[0.75rem] mx-auto border border-secondary p-[0.75rem] bg-secondary_weak text-white font-bold">
          {errorStatus} : {ERROR_MESSAGE[errorStatus]}
        </div>
      )}
      <SigninInputs value={signinInput} onChange={handleSigninInput} />
      <AuthButton
        onClick={handleSignin}
        disabled={!isValidSigninInput(signinInput)}
        button_text="로그인"
      />
      <AuthLink text="아직 회원이 아니신가요?" link="/signup" link_text="회원가입 페이지로" />
    </section>
  );
};

export default SigninTemplate;
