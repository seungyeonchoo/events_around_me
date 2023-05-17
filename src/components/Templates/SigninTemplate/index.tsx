import Button from '../../Atoms/Button';
import InputWithLabel from '../../Molecules/InputWithLabel';
import TextWithLink from '../../Molecules/TextWithLink';

export interface SigninTemplateProps {
  isValid: boolean;
  value: { email: string; password: string };
  onClick: () => void;
  onChange: () => void;
}

const SigninTemplate = ({ isValid, value, onClick, onChange }: SigninTemplateProps) => {
  return (
    <section>
      <InputWithLabel
        label="email"
        type="email"
        name="email"
        value={value?.email}
        onChange={onChange}
        text_color="dark"
        input_size="2xl"
        responsive={true}
        placeholder="email@example.com"
        invalid_message="👀 invalid input"
      />
      <InputWithLabel
        label="password"
        type="password"
        name="password"
        value={value?.password}
        onChange={onChange}
        text_color="dark"
        input_size="2xl"
        responsive={true}
        placeholder="8 - 16 (character / special symbol / number)"
        invalid_message="👀 invalid input"
      />
      <Button
        onClick={onClick}
        disabled={isValid}
        size="2xl"
        responsive={true}
        color="primary"
        extra_style="my-4"
      >
        Sign In
      </Button>
      <TextWithLink text="New to our web page?" link="/auth/signup" link_text="SIGN UP" />
    </section>
  );
};

export default SigninTemplate;
