import { useRouter } from 'next/router';
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

  const hadnleSignin = async () => {
    const { data } = await API.post('/signin', signinInput);

    sessionStorage.setItem('access_Token', data?.accessToken);
    sessionStorage.setItem('user', JSON.stringify(data?.user));

    router.push(`/user/${data?.user?.id}`);
  };

  return (
    <main className="flex items-center h-[100vh]">
      <SigninTemplate
        signinInput={signinInput}
        handleSigninInput={handleSigninInput}
        handleSignin={hadnleSignin}
      />
    </main>
  );
};

export default SignIn;
