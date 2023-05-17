import SigninTemplate from '@/src/components/Templates/SigninTemplate';
import React, { useState } from 'react';

const SignIn = () => {
  const [input, setInput] = useState({ email: '', password: '' });

  return (
    <main className="flex justify-center items-center h-[100vh]">
      <SigninTemplate
        isValid={false}
        value={input}
        onClick={() => console.log('click')}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value);
          console.log(e.target.name);
          setInput({ ...input, [e.target.name]: e.target.value });
          console.log(input);
        }}
      />
    </main>
  );
};

export default SignIn;
