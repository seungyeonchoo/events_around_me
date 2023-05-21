import SignupTemplate from '@/src/components/Templates/SignupTemplate';
import useInput from '@/src/hooks/useInput';

const Signup = () => {
  const { input, handleInput } = useInput({ email: '', password: '', firstName: '', lastName: '' });
  return (
    <main className="flex items-center">
      <SignupTemplate
        isValid={true}
        value={input}
        onClick={() => console.log('')}
        onChange={handleInput}
      />
    </main>
  );
};

export default Signup;
