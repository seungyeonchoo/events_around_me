import { Meta, StoryFn } from '@storybook/react';
import SigninTemplate, { SigninTemplateProps } from '.';

export default {
  title: 'Template/Sign In',
  component: SigninTemplate,
  tags: ['autodocs'],
} as Meta<typeof SigninTemplate>;

const Template: StoryFn<typeof SigninTemplate> = (args: SigninTemplateProps) => (
  <SigninTemplate {...args} />
);

export const Default = Template.bind({});

Default.args = {
  isValid: true,
  value: { email: '', password: '' },
  onClick: () => console.log('click'),
  onChange: () => console.log('change'),
};
