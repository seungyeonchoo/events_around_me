import { Meta, StoryFn } from '@storybook/react';
import StatusItem, { StatusItemProps } from '.';
import { mockHabit_1, mockHabit_3 } from '../../../lib/mocks/mockData';

export default {
  title: 'Habit/StatusItem',
  component: StatusItem,
  tags: ['autodocs'],
} as Meta<typeof StatusItem>;

const Template: StoryFn<typeof StatusItem> = (args: StatusItemProps) => <StatusItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: mockHabit_3.daily_status[0].id,
  date: mockHabit_3.daily_status[0].date,
  status: mockHabit_3.daily_status[0].status,
};

export const Status_False = Template.bind({});

Status_False.args = {
  id: mockHabit_1.daily_status[0].id,
  date: mockHabit_1.daily_status[0].date,
  status: mockHabit_1.daily_status[0].status,
};
