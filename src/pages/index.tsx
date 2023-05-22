import SigninTemplate from '../components/auth/signin/SigninTemplate';

const SignIn = () => {
  return (
    <main className="flex items-center h-[100vh]">
      <SigninTemplate handleSignin={() => console.log()} />
    </main>
  );
};

export default SignIn;
