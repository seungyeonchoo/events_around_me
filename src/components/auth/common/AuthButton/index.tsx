import Button from '../../../../../src/components/common/Button';

export interface AuthButtonProps {
  onClick: () => void;
  disabled: boolean;
  button_text: 'SIGN IN' | 'SIGN UP';
}

const AuthButton = ({ onClick, disabled, button_text }: AuthButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      size="xl"
      responsive={true}
      color="primary"
      extra_style="my-10 mx-auto"
    >
      {button_text}
    </Button>
  );
};

export default AuthButton;
