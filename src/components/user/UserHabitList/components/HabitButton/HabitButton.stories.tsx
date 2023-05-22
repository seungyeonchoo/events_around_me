import { Meta, StoryFn } from '@storybook/react';
import HabitButton, { HabitButtonProps } from '.';

export default {
  title: 'User/UserHabitList/HabitButton',
  component: HabitButton,
  tags: ['autodocs'],
} as Meta<typeof HabitButton>;

const Template: StoryFn<typeof HabitButton> = (args: HabitButtonProps) => <HabitButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  toggle: 'total',
};
