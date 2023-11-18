import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import SigninTemplate from '../components/auth/signin/SigninTemplate';
import useInput from '../lib/hooks/useInput';
import ApiService from '../lib/service';

const initialSignin = {
  email: '',
  password: '',
};

const API = new ApiService();

const SignIn = () => {
  const token = typeof window !== 'undefined' ? sessionStorage.getItem('access_Token') : null;
  const id =
    typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('user') as string)?.id : null;
  const router = useRouter();
  const [errorStatus, setErrorStatus] = useState(0);
  const { input: signinInput, handleInput: handleSigninInput, setInput } = useInput(initialSignin);

  const { mutate, isError, error } = useMutation(() => API.post('/signin', signinInput), {
    onSuccess: user => {
      sessionStorage.setItem('access_Token', user.data?.accessToken);
      sessionStorage.setItem('user', JSON.stringify(user.data?.user));

      router.push(`/user/${user.data?.user?.id}`);
    },
    onError: (error: AxiosError) => {
      setErrorStatus(error.response?.status as number);
      setInput(initialSignin);
    },
  });

  useEffect(() => {
    if (token) router.push(`/user/${id}`);
  }, []);

  return (
    <main className="flex relative items-center my-[5%]">
      <SigninTemplate
        signinInput={signinInput}
        handleSigninInput={handleSigninInput}
        handleSignin={mutate}
        isError={isError}
        errorStatus={errorStatus}
      />
    </main>
  );
};

export default SignIn;
