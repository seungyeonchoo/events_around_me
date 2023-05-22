import { Meta, StoryFn } from '@storybook/react';
import CheckBox, { CheckBoxProps } from '.';

export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
} as Meta<typeof CheckBox>;

const Template: StoryFn<typeof CheckBox> = (args: CheckBoxProps) => <CheckBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  toggle_size: 'sm',
};
