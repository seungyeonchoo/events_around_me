import { Meta, StoryFn } from '@storybook/react';
import HabitTitle, { HabitTitleProps } from '.';

export default {
  title: 'User/UserHabitList/HabitItem/HabitTitle',
  component: HabitTitle,
  tags: ['autodocs'],
} as Meta<typeof HabitTitle>;

const Template: StoryFn<typeof HabitTitle> = (args: HabitTitleProps) => <HabitTitle {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'this is habit title component!!',
};
