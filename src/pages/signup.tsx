import SignupTemplate from '@/src/components/auth/signup/SignupTemplate';
import useInput from '../lib/hooks/useInput';

const initialSignUp = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const Signup = () => {
  const { input: signupInput, handleInput: handleSignupInput } = useInput(initialSignUp);

  return (
    <>
      <main className="flex items-center my-10">
        <SignupTemplate
          signupInput={signupInput}
          handleSignupInput={handleSignupInput}
          handleSignup={() => console.log()}
          duplicationCheck={() => console.log()}
        />
      </main>
    </>
  );
};

export default Signup;
