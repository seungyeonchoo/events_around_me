import { Meta, StoryFn } from '@storybook/react';
import CreateHabit, { CreateHabitProps } from '.';

export default {
  title: 'User/CreateHabit',
  component: CreateHabit,
  tags: ['autodocs'],
} as Meta<typeof CreateHabit>;

const Template: StoryFn<typeof CreateHabit> = (args: CreateHabitProps) => <CreateHabit {...args} />;

export const Default = Template.bind({});

Default.args = {};
