import { Meta, StoryFn } from '@storybook/react';
import DetailButton, { DetailButtonProps } from '.';

export default {
  title: 'User/UserHabitList/HabitItem/DetailButton',
  component: DetailButton,
  tags: ['autodocs'],
} as Meta<typeof DetailButton>;

const Template: StoryFn<typeof DetailButton> = (args: DetailButtonProps) => (
  <DetailButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  id: 1,
};
