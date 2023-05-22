import { Meta, StoryFn } from '@storybook/react';
import BasicDetail, { BasicDetailProps } from '.';
import { mockHabit_1 } from '../../../../../../src/lib/mocks/mockData';

export default {
  title: 'Habit/HabitDetail/BasicDetail',
  component: BasicDetail,
  tags: ['autodocs'],
} as Meta<typeof BasicDetail>;

const Template: StoryFn<typeof BasicDetail> = (args: BasicDetailProps) => <BasicDetail {...args} />;

export const Default = Template.bind({});

Default.args = {
  habit: mockHabit_1,
};
