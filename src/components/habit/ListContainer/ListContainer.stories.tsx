import { Meta, StoryFn } from '@storybook/react';
import ListContainer, { ListContainerProps } from '.';
import { mockHabit_3 } from '../../../../src/lib/mocks/mockData';

export default {
  title: 'Habit/ListContainer',
  component: ListContainer,
  tags: ['autodocs'],
} as Meta<typeof ListContainer>;

const Template: StoryFn<typeof ListContainer> = (args: ListContainerProps) => (
  <ListContainer {...args} />
);

export const Default = Template.bind({});

Default.args = {
  daily_status: mockHabit_3.daily_status,
};
