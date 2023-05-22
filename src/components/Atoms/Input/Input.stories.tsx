import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args: InputProps) => <Input {...args} />;

export const Medium = Template.bind({});

Medium.args = {
  input_size: 'md',
  border: 'dark',
  placeholder: 'Medium',
};

export const Small = Template.bind({});

Small.args = {
  input_size: 'sm',
  border: 'dark',
  placeholder: 'Small',
};

export const Large = Template.bind({});

Large.args = {
  input_size: 'lg',
  border: 'dark',
  placeholder: 'Large',
};

export const Full = Template.bind({});

Full.args = {
  input_size: 'full',
  border: 'dark',
  placeholder: 'Full',
};

export const Rounded = Template.bind({});

Rounded.args = {
  input_size: 'md',
  border: 'dark',
  placeholder: 'Rounded',
  rounded: true,
};
