import { Meta, StoryFn } from '@storybook/react';
import HabitDescription from '.';

export default {
  title: 'User/CreateHabit/HabitDescription',
  component: HabitDescription,
  tags: ['autodocs'],
} as Meta<typeof HabitDescription>;

const Template: StoryFn<typeof HabitDescription> = () => <HabitDescription />;

export const Default = Template.bind({});
