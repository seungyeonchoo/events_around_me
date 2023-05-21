import { Meta, StoryFn } from '@storybook/react';
import HabitItem, { HabitItemProps } from '.';
import { mockHabit_1 } from '../../../lib/mockData';

export default {
  title: 'ORGANISMS/Habit Item',
  component: HabitItem,
  tags: ['autodocs'],
} as Meta<typeof HabitItem>;

const Template: StoryFn<typeof HabitItem> = (args: HabitItemProps) => <HabitItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  habit: mockHabit_1,
};
