import { Meta, StoryFn } from '@storybook/react';
import LabeledInput, { LabeledInputProps } from '.';

export default {
  title: 'Common/Labeled Input',
  component: LabeledInput,
  tags: ['autodocs'],
} as Meta<typeof LabeledInput>;

const Template: StoryFn<typeof LabeledInput> = (args: LabeledInputProps) => (
  <LabeledInput {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: 'label',
  type: 'text',
  placeholder: 'default',
};

export const Invalid = Template.bind({});

Invalid.args = {
  label: 'label',
  type: 'email',
  placeholder: 'default',
  value: 'hello',
  invalid_message: 'invalid input!',
};
