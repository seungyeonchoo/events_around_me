import { Meta, StoryFn } from '@storybook/react';
import DateSummary, { DateSummaryProps } from '.';

export default {
  title: 'Habit/HabitDetail/OngoingSummary/DateSummary',
  component: DateSummary,
  tags: ['autodocs'],
} as Meta<typeof DateSummary>;

const Template: StoryFn<typeof DateSummary> = (args: DateSummaryProps) => <DateSummary {...args} />;

export const Default = Template.bind({});

Default.args = {
  due_date: 30,
  curr_date: 2,
};
