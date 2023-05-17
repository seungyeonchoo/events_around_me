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
  text_color: 'dark',
};

export const Invalid = Template.bind({});

Invalid.args = {
  label: 'label',
  type: 'email',
  placeholder: 'default',
  value: 'hello',
  text_color: 'dark',
  invalid_message: 'invalid input!',
};
