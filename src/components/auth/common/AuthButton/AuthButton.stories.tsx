import { Meta, StoryFn } from '@storybook/react';
import AuthButton, { AuthButtonProps } from '.';

export default {
  title: 'Auth/Common/AuthButton',
  component: AuthButton,
  tags: ['autodocs'],
} as Meta<typeof AuthButton>;

const Template: StoryFn<typeof AuthButton> = (args: AuthButtonProps) => <AuthButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  button_text: 'SIGN IN',
  disabled: true,
};

export const SignIn = Template.bind({});

SignIn.args = {
  button_text: 'SIGN IN',
  disabled: false,
};

export const SignUp = Template.bind({});

SignUp.args = {
  button_text: 'SIGN UP',
  disabled: false,
};
