import { Meta, StoryFn } from '@storybook/react';
import Calendar, { CalendarProps } from '.';

export default {
  title: 'Habit/HabitDetail/OngoingSummary/Calendar',
  component: Calendar,
  tags: ['autodocs'],
} as Meta<typeof Calendar>;

const Template: StoryFn<typeof Calendar> = (args: CalendarProps) => <Calendar {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'title',
  date: 30,
};

export const DueDate = Template.bind({});

DueDate.args = {
  title: 'd-day',
  date: 30,
};

export const CurrDate = Template.bind({});

CurrDate.args = {
  title: 'day',
  date: 30,
};
