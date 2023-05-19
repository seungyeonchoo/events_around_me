import SigninTemplate from '@/src/components/Templates/SigninTemplate';
import useInput from '@/src/hooks/useInput';

const SignIn = () => {
  const { input, handleInput } = useInput({ email: '', password: '' });

  return (
    <main className="flex justify-center items-center h-[100vh]">
      <SigninTemplate
        isValid={false}
        value={input}
        onClick={() => console.log('click')}
        onChange={handleInput}
      />
    </main>
  );
};

export default SignIn;
