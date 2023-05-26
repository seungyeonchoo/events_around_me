import { Meta, StoryFn } from '@storybook/react';
import HabitDuration from '.';

export default {
  title: 'User/CreateHabit/HabitDuration',
  component: HabitDuration,
  tags: ['autodocs'],
} as Meta<typeof HabitDuration>;

const Template: StoryFn<typeof HabitDuration> = () => <HabitDuration />;

export const Default = Template.bind({});
