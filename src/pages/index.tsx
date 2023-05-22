import SigninTemplate from '@/src/components/Templates/SigninTemplate';
import useInput from '@/src/hooks/useInput';
import getDateList from '../lib/getDateList';

const SignIn = () => {
  const { input, handleInput } = useInput({ email: '', password: '' });

  const test = getDateList('2023-05-01', '2023-06-30');
  console.log(test);

  return (
    <main className="flex items-center h-[100vh]">
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
