import { Meta, StoryFn } from '@storybook/react';
import EmailInput, { EmailInputProps } from '.';

export default {
  title: 'ORGANISMS/Email Input',
  component: EmailInput,
  tags: ['autodoc'],
} as Meta<typeof EmailInput>;

const Template: StoryFn<typeof EmailInput> = (args: EmailInputProps) => <EmailInput {...args} />;

export const Default = Template.bind({});

Default.args = {};
