import { Meta, StoryFn } from '@storybook/react';
import ListBox, { ListBoxProps } from '.';

export default {
  title: 'ORGANISMS/List Box',
  component: ListBox,
  tags: ['autodocs'],
} as Meta<typeof ListBox>;

const Template: StoryFn<typeof ListBox> = (args: ListBoxProps) => <ListBox {...args} />;

export const Default = Template.bind({});

Default.args = {};
