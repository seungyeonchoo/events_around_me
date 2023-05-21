import { Meta, StoryFn } from '@storybook/react';
import HabitList, { HabitListProps } from '.';
import { mockHabit_1, mockHabit_2 } from '../../../lib/mockData';

export default {
  title: 'ORGANISMS/Habit List',
  component: HabitList,
  tags: ['autodocs'],
} as Meta<typeof HabitList>;

const Template: StoryFn<typeof HabitList> = (args: HabitListProps) => <HabitList {...args} />;

export const Default = Template.bind({});

Default.args = {
  habits: [mockHabit_1, mockHabit_2],
};
