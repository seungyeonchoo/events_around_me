import { Meta, StoryFn } from '@storybook/react';
import SignupInputs, { SignupInputsProps } from '.';

export default {
  title: 'Auth/Signup/SignupInputs',
  component: SignupInputs,
  tags: ['autodocs'],
} as Meta<typeof SignupInputs>;

const Template: StoryFn<typeof SignupInputs> = (args: SignupInputsProps) => (
  <SignupInputs {...args} />
);

export const Default = Template.bind({});

Default.args = {};
