import { Meta, StoryFn } from '@storybook/react';
import NewHabit, { NewHabitProps } from '.';

export default {
  title: 'User/UserHabitList/NewHabit',
  component: NewHabit,
  tags: ['autodocs'],
} as Meta<typeof NewHabit>;

const Template: StoryFn<typeof NewHabit> = (args: NewHabitProps) => <NewHabit {...args} />;

export const Default = Template.bind({});

Default.args = {};
