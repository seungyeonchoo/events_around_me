import Button from '../../Atoms/Button';
import InputWithLabel from '../../Molecules/InputWithLabel';
import TextWithLink from '../../Molecules/TextWithLink';
import TitleWithDescription from '../../Molecules/TitleWithDescription';

export interface SigninTemplateProps {
  isValid: boolean;
  value: { email: string; password: string };
  onClick: () => void;
  onChange: () => void;
}

const SigninTemplate = ({ isValid, value, onClick, onChange }: SigninTemplateProps) => {
  return (
    <section className="sm:flex sm:flex-col sm:items-center max-sm:px-0 max-sm:border-none max-sm:m-0 py-10 px-5 sm:justify-between border border-primary w-[30rem] max-sm:w-full rounded-3xl shadow-md max-sm:shadow-none">
      <TitleWithDescription
        title_text="SIGN IN"
        description="Please enter email and password to sign in"
        text_color="secondary"
        title_color="primary"
      />
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
