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
  const token = isRendered ? sessionStorage.getItem('access_Token') : null;
  const id = isRendered ? JSON.parse(sessionStorage.getItem('user') as string)?.id : null;
  const { pathname, push } = useRouter();
  const [errorStatus, setErrorStatus] = useState(0);
  const { input: signinInput, handleInput: handleSigninInput, setInput } = useInput(initialSignin);

  const { mutate, isError } = useMutation(() => API.post('/signin', signinInput), {
    onSuccess: user => {
      sessionStorage.setItem('access_Token', user.data?.accessToken);
      sessionStorage.setItem('user', JSON.stringify(user.data?.user));

      const userId = user.data?.user.id;

      console.log(userId);

      if (userId !== undefined) push(`/user/${userId}`);
    },
    onError: (error: AxiosError) => {
      setErrorStatus(error.response?.status as number);
      setInput(initialSignin);
    },
  });

  useEffect(() => {
    if (token) push(`/user/${id}`);
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
