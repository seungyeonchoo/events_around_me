import { Meta, StoryFn } from '@storybook/react';
import InputWithLabel, { InputWithLabelProps } from '.';

export default {
  title: 'Molecules/Input_with_label',
  component: InputWithLabel,
  tags: ['autodocs'],
} as Meta<typeof InputWithLabel>;

const Template: StoryFn<typeof InputWithLabel> = (args: InputWithLabelProps) => (
  <InputWithLabel {...args} />
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
