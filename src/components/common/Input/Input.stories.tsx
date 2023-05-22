import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from '.';

export default {
  title: 'Common/Input',
  component: Input,
  tags: ['autodocs'],
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args: InputProps) => <Input {...args} />;

export const Medium = Template.bind({});

Medium.args = {
  input_size: 'md',
  placeholder: 'Medium',
};

export const Small = Template.bind({});

Small.args = {
  input_size: 'sm',
  placeholder: 'Small',
};

export const Large = Template.bind({});

Large.args = {
  input_size: 'lg',
  placeholder: 'Large',
};

export const Full = Template.bind({});

Full.args = {
  input_size: 'full',
  placeholder: 'Full',
};

export const Rounded = Template.bind({});

Rounded.args = {
  input_size: 'md',
  placeholder: 'Rounded',
  rounded: true,
};
