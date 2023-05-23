import { Meta, StoryFn } from '@storybook/react';
import HabitDetail, { HabitDetailProps } from '.';
import { mockHabit_3 } from '../../../../src/lib/mocks/mockData';

export default {
  title: 'Habit/HabitDetail',
  component: HabitDetail,
  tags: ['autodocs'],
} as Meta<typeof HabitDetail>;

const Template: StoryFn<typeof HabitDetail> = (args: HabitDetailProps) => <HabitDetail {...args} />;

export const Default = Template.bind({});

Default.args = {
  habit: mockHabit_3,
};
