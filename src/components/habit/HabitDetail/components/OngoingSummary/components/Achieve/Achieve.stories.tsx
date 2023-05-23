import { Meta, StoryFn } from '@storybook/react';
import Achieve, { AchieveProps } from '.';

export default {
  title: 'Habit/HabitDetail/OngoingSummary/Achieve',
  component: Achieve,
  tags: ['autodocs'],
} as Meta<typeof Achieve>;

const Template: StoryFn<typeof Achieve> = (args: AchieveProps) => <Achieve {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'default',
  complete_date: 10,
  total_date: 50,
};
