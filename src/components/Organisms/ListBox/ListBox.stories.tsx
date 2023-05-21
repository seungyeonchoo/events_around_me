import { Meta, StoryFn } from '@storybook/react';
import ListBox, { ListBoxProps } from '.';
import { mockHabit_1, mockHabit_2, mockHabit_3 } from '../../../lib/mockData';

export default {
  title: 'ORGANISMS/List Box',
  component: ListBox,
  tags: ['autodocs'],
} as Meta<typeof ListBox>;

const Template: StoryFn<typeof ListBox> = (args: ListBoxProps) => <ListBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  habits: [mockHabit_1, mockHabit_2, mockHabit_3],
};
