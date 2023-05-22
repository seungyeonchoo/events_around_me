import { Meta, StoryFn } from '@storybook/react';
import SignupEmail, { SignupEmailProps } from '.';

export default {
  title: 'Auth/SignUp/SignupEmail',
  component: SignupEmail,
  tags: ['autodocs'],
} as Meta<typeof SignupEmail>;

const Template: StoryFn<typeof SignupEmail> = (args: SignupEmailProps) => <SignupEmail {...args} />;

export const Default = Template.bind({});

Default.args = {};
