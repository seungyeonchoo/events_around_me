import { Meta, StoryFn } from '@storybook/react';
import TitleWithDescription, { TitleWithDescriptionProps } from '.';

export default {
  title: 'MOLECULES/Title_with_description',
  component: TitleWithDescription,
  tags: ['autotag'],
} as Meta<typeof TitleWithDescription>;

const Template: StoryFn<typeof TitleWithDescription> = (args: TitleWithDescriptionProps) => (
  <TitleWithDescription {...args} />
);

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
