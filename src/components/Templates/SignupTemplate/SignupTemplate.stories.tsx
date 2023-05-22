import { Meta, StoryFn } from '@storybook/react';
import SignupTemplate, { SignupTemplateProps } from '.';

export default {
  title: 'TEMPLATES/Sign Up',
  compoenet: SignupTemplate,
  tags: ['autodocs'],
} as Meta<typeof SignupTemplate>;

const Template: StoryFn<typeof SignupTemplate> = (args: SignupTemplateProps) => (
  <SignupTemplate {...args} />
);

export const Default = Template.bind({});

Default.args = {};
