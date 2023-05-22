import { Meta, StoryFn } from '@storybook/react';
import HabitListButton, { HabitListButtonProps } from '.';

export default {
  title: 'MOLECULES/Habit List Button',
  component: HabitListButton,
  tags: ['autodocs'],
} as Meta<typeof HabitListButton>;

const Template: StoryFn<typeof HabitListButton> = (args: HabitListButtonProps) => (
  <HabitListButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  toggle: 'total',
};
