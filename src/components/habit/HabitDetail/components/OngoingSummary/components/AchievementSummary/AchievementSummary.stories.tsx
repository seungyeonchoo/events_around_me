import { Meta, StoryFn } from '@storybook/react';
import AchievementSummary, { AchievementSummaryProps } from '.';

export default {
  title: 'Habit/HabitDetail/OngoingSummary/AchievementSummary',
  component: AchievementSummary,
  tags: ['autodocs'],
} as Meta<typeof AchievementSummary>;

const Template: StoryFn<typeof AchievementSummary> = (args: AchievementSummaryProps) => (
  <AchievementSummary {...args} />
);

export const Default = Template.bind({});

Default.args = {
  completed: 15,
  curr_date: 30,
  total_date: 50,
};
