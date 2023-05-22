import SignupTemplate from '@/src/components/auth/signup/SignupTemplate';

const Signup = () => {
  return (
    <>
      <main className="flex items-center my-10">
        <SignupTemplate handleSignup={() => console.log()} duplicationCheck={() => console.log()} />
      </main>
    </>
  );
};

export default Signup;
