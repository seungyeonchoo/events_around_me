import { useRouter } from 'next/router';
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
  const router = useRouter();

  const { input: signinInput, handleInput: handleSigninInput } = useInput(initialSignin);

  const { mutate } = useMutation(() => API.post('/signin', signinInput), {
    onSuccess: user => {
      sessionStorage.setItem('access_Token', user.data?.accessToken);
      sessionStorage.setItem('user', JSON.stringify(user.data?.user));

      router.push(`/user/${user.data?.user?.id}`);
    },
  });

  return (
    <main className="flex items-center h-[100vh]">
      <SigninTemplate
        signinInput={signinInput}
        handleSigninInput={handleSigninInput}
        handleSignin={mutate}
      />
    </main>
  );
};

export default SignIn;
