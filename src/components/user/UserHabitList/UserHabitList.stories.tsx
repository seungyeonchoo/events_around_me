import { Meta, StoryFn } from '@storybook/react';
import UserHabitList, { UserHabitListProps } from '.';
import { mockHabit_1, mockHabit_2, mockHabit_3 } from '../../../lib/mocks/mockData';

export default {
  title: 'User/UserHabitList',
  component: UserHabitList,
  tags: ['autodocs'],
} as Meta<typeof UserHabitList>;

const Template: StoryFn<typeof UserHabitList> = (args: UserHabitListProps) => (
  <UserHabitList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  habits: [mockHabit_1, mockHabit_2, mockHabit_3],
};
