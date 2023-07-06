import SignupTemplate from '@/src/components/auth/signup/SignupTemplate';
import { useRouter } from 'next/router';
import useInput from '../lib/hooks/useInput';
import ApiService from '../lib/service';

const initialSignUp = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const API = new ApiService();

const Signup = () => {
  const router = useRouter();
  const {
    input: signupInput,
    handleInput: handleSignupInput,
    resetInput,
  } = useInput(initialSignUp);

  const fetchUsers = async () => {
    const res = await API.get('/users', { email: signupInput.email });
    return res?.length === 0;
  };

  const handleSignup = async () => {
    await API.post('/users', signupInput);
    resetInput();
    await router.push('/');
  };

  return (
    <>
      <main className="flex items-center my-10">
        <SignupTemplate
          signupInput={signupInput}
          handleSignupInput={handleSignupInput}
          handleSignup={handleSignup}
          duplicationCheck={fetchUsers}
        />
      </main>
    </>
  );
};

export default Signup;
