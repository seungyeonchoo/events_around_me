import { SignupInput } from '@/src/types';
import { ChangeEvent } from 'react';
import Button from '../../Atoms/Button';
import InputWithLabel from '../../Molecules/InputWithLabel';

export interface EmailInputProps {
  value: SignupInput;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  isValid: boolean;
}

const EmailInput = ({ value, onChange, onClick, isValid }: EmailInputProps) => {
  return (
    <div className="m-auto flex justify-between w-[25rem] items-center relative max-sm:w-full">
      <InputWithLabel
        label="email"
        type="email"
        name="email"
        value={value?.email}
        onChange={onChange}
        input_size="full"
        responsive={true}
        placeholder="email@example.com"
        invalid_message="👀 please enter valid email"
        isValid={isValid}
      />
      <Button
        size="xs"
        color="primary"
        rounded
        onClick={onClick}
        extra_style="absolute right-[1rem] max-sm:right-[2rem]"
      >
        👀
      </Button>
    </div>
  );
};

export default EmailInput;
