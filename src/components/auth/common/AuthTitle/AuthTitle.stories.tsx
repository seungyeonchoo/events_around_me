import { Meta, StoryFn } from '@storybook/react';
import AuthTitle, { AuthTitleProps } from '.';

export default {
  title: 'Auth/Common/AuthTitle',
  component: AuthTitle,
  tags: ['autotag'],
} as Meta<typeof AuthTitle>;

const Template: StoryFn<typeof AuthTitle> = (args: AuthTitleProps) => <AuthTitle {...args} />;

export const Default = Template.bind({});

Default.args = {
  title_text: 'TITLE',
  description: 'descriptions...',
  title_color: 'primary',
  text_color: 'dark',
};

export const SignIn = Template.bind({});

SignIn.args = {
  title_text: 'SIGN IN',
  description: 'Please enter Email/password to sign in',
  title_color: 'primary',
  text_color: 'dark',
};

export const SignUp = Template.bind({});

SignUp.args = {
  title_text: 'SIGN UP',
  description: 'Please fill informations to sign up',
  title_color: 'primary',
  text_color: 'dark',
};
