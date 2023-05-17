import { Meta, StoryFn } from '@storybook/react';
import TextWithLink, { TextWithLinkProps } from '.';

export default {
  title: 'MOLECULES/Text_with_label',
  component: TextWithLink,
  tags: ['autodocs'],
} as Meta<typeof TextWithLink>;

const Template: StoryFn<typeof TextWithLink> = (args: TextWithLinkProps) => (
  <TextWithLink {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: 'This is default text',
  link: 'https://google.com',
  link_text: 'Link',
};

export const SignIn = Template.bind({});

SignIn.args = {
  text: 'Already have account?',
  link: '/auth/signin',
  link_text: 'SIGN IN',
};

export const SignUp = Template.bind({});

SignUp.args = {
  text: 'New to MY HABBIT?',
  link: '/auth/signup',
  link_text: 'SIGN UP',
};
