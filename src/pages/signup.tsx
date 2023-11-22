import SignupTemplate from '@/src/components/auth/signup/SignupTemplate';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
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
  const [errorStatus, setErrorCode] = useState<{ errorCode: number; errorMessage: string }>();
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

  const { mutate, isError } = useMutation(() => API.post('/users', signupInput), {
    onSuccess: () => {
      resetInput();
      router.push('/');
    },
    onError: (error: AxiosError) => {
      const errorCode = error?.response?.status as number;
      const errorMessage = error?.response?.data as string;
      setErrorCode({ errorCode, errorMessage });
    },
  });

  if (isError) console.log(errorStatus);

  return (
    <>
      <main className="flex items-center my-10">
        <SignupTemplate
          signupInput={signupInput}
          handleSignupInput={handleSignupInput}
          handleSignup={mutate}
          duplicationCheck={fetchUsers}
          setSignupInput={setInput}
          isError={isError}
          errorStatus={errorStatus}
        />
      </main>
    </>
  );
};

export default Signup;
