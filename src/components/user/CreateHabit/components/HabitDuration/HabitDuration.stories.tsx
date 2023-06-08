import { Meta, StoryFn } from '@storybook/react';
import HabitDuration, { HabitDurationProps } from '.';

export default {
  title: 'User/CreateHabit/HabitDuration',
  component: HabitDuration,
  tags: ['autodocs'],
} as Meta<typeof HabitDuration>;

const Template: StoryFn<typeof HabitDuration> = (args: HabitDurationProps) => (
  <HabitDuration {...args} />
);

export const Default = Template.bind({});
