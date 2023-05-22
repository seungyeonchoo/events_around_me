import { Meta, StoryFn } from '@storybook/react';
import SignupName, { SignupNameProps } from '.';

export default {
  title: 'Auth/SignUp/SignupName',
  component: SignupName,
  tags: ['autodocs'],
} as Meta<typeof SignupName>;

const Template: StoryFn<typeof SignupName> = (args: SignupNameProps) => <SignupName {...args} />;

export const Default = Template.bind({});

Default.args = {};
