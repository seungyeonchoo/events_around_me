import SignupTemplate from '@/src/components/auth/signup/SignupTemplate';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import useInput from '../lib/hooks/useInput';
import ApiService from '../lib/service';
import { SignupInput } from '../lib/types';

const initialSignUp: SignupInput = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  profileImage: '',
};

const API = new ApiService();

const Signup = () => {
  const router = useRouter();
  const {
    input: signupInput,
    handleInput: handleSignupInput,
    resetInput,
    setInput,
  } = useInput(initialSignUp);

  const fetchUsers = async () => {
    const res = await API.get('/users', { email: signupInput.email });
    return res?.length === 0;
  };

  const { mutate } = useMutation(() => API.post('/users', signupInput), {
    onSuccess: async () => {
      resetInput();
      router.push('/');
    },
  });

  return (
    <>
      <main className="flex items-center my-10">
        <SignupTemplate
          signupInput={signupInput}
          handleSignupInput={handleSignupInput}
          handleSignup={mutate}
          duplicationCheck={fetchUsers}
          setSignupInput={setInput}
        />
      </main>
    </>
  );
};

export default Signup;
