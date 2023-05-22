import { Meta, StoryFn } from '@storybook/react';
import SigninInputs, { SigninInputsProps } from '.';

export default {
  title: 'Auth/Signin/SigninInputs',
  component: SigninInputs,
  tags: ['autodocs'],
} as Meta<typeof SigninInputs>;

const Template: StoryFn<typeof SigninInputs> = (args: SigninInputsProps) => (
  <SigninInputs {...args} />
);

export const Default = Template.bind({});

Default.args = {};
