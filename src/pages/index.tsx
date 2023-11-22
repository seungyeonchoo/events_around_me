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
  const isRendered = typeof window !== 'undefined';
  const token = isRendered ? localStorage.getItem('access_Token') : null;
  const id = isRendered ? JSON.parse(localStorage.getItem('user') as string)?.id : null;
  const router = useRouter();
  const [errorStatus, setErrorStatus] = useState(0);
  const { input: signinInput, handleInput: handleSigninInput, setInput } = useInput(initialSignin);

  const { mutate, isError } = useMutation(() => API.post('/signin', signinInput), {
    onSuccess: user => {
      localStorage.setItem('access_Token', user.data?.accessToken);
      localStorage.setItem('user', JSON.stringify(user.data?.user));

      const userId = user.data?.user.id;

      console.log(userId);

      if (userId !== undefined) router.push(`/user/${userId}`);
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
