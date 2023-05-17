import { Meta, StoryFn } from '@storybook/react';
import InputWithLabel, { InputWithLabelProps } from '.';

export default {
  title: 'Molecules/Input_With_Label',
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
  value: 'hel',
  text_color: 'primary',
  invalid_message: 'invalid input!',
};
