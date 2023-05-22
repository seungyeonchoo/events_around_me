import { Meta, StoryFn } from '@storybook/react';
import AuthLink, { AuthLinkProps } from '.';

export default {
  title: 'Auth/Common/AuthLink',
  component: AuthLink,
  tags: ['autodocs'],
} as Meta<typeof AuthLink>;

const Template: StoryFn<typeof AuthLink> = (args: AuthLinkProps) => <AuthLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'This is default text',
  link: 'https://google.com',
  link_text: 'Link',
};

export const SignIn = Template.bind({});

SignIn.args = {
  text: 'Already have account?',
  link: '/',
  link_text: 'SIGN IN',
};

export const SignUp = Template.bind({});

SignUp.args = {
  text: 'New to MY HABBIT?',
  link: '/signup',
  link_text: 'SIGN UP',
};
