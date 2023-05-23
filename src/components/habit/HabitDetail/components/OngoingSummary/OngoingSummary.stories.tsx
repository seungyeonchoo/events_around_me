import { Meta, StoryFn } from '@storybook/react';
import OngoingSummary, { OngoingSummaryProps } from '.';
import { mockHabit_3 } from '../../../../../../src/lib/mocks/mockData';

export default {
  title: 'Habit/HabitDetail/OngoingSummary',
  component: OngoingSummary,
  tags: ['autodocs'],
} as Meta<typeof OngoingSummary>;

const Template: StoryFn<typeof OngoingSummary> = (args: OngoingSummaryProps) => (
  <OngoingSummary {...args} />
);

export const Default = Template.bind({});

Default.args = {
  habit: mockHabit_3,
};
