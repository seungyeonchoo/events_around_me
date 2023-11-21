import { ChangeEvent, useState } from 'react';

const useMatch = (initialState = false, comparedValue: string) => {
  const [isMatched, setIsMatched] = useState(initialState);

  const handleIsMatched = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    return setIsMatched(value == comparedValue);
  };

  return { isMatched, handleIsMatched };
};

export default useMatch;
