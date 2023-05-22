import { Meta, StoryFn } from '@storybook/react';
import HabitContainer, { HabitContainerProps } from '.';
import { mockHabit_1, mockHabit_2, mockHabit_3 } from '../../../../../lib/mocks/mockData';

export default {
  title: 'User/UserHabitList/HabitContainer',
  component: HabitContainer,
  tags: ['autodocs'],
} as Meta<typeof HabitContainer>;

const Template: StoryFn<typeof HabitContainer> = (args: HabitContainerProps) => (
  <HabitContainer {...args} />
);

export const Default = Template.bind({});

Default.args = {
  habits: [mockHabit_1, mockHabit_2, mockHabit_3],
};
