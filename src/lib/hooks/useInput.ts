import { ChangeEvent, useState } from 'react';

const useInput = <T>(initailInput: T) => {
  const [input, setInput] = useState(initailInput);

  const handleInput = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const resetInput = () => {
    setInput(initailInput);
  };

  return { input, handleInput, resetInput };
};

export default useInput;
