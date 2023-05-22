import { Meta, StoryFn } from '@storybook/react';
import SigninTemplate, { SigninTemplateProps } from '.';

export default {
  title: 'Auth/Signin/SigninTemplate',
  compoenet: SigninTemplate,
  tags: ['autodocs'],
} as Meta<typeof SigninTemplate>;

const Template: StoryFn<typeof SigninTemplate> = (args: SigninTemplateProps) => (
  <SigninTemplate {...args} />
);

export const Default = Template.bind({});

Default.args = {};
