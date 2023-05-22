import { Meta, StoryFn } from '@storybook/react';
import HabitDate, { HabitDateProps } from '.';

export default {
  title: 'User/UserHabitList/HabitItem/HabitDate',
  component: HabitDate,
  tags: ['autodocs'],
} as Meta<typeof HabitDate>;

const Template: StoryFn<typeof HabitDate> = (args: HabitDateProps) => <HabitDate {...args} />;

export const Default = Template.bind({});

Default.args = {
  start_date: '2023-05-21',
  end_date: '2023-06-22',
};
