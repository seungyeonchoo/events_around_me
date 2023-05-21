import { Meta, StoryFn } from '@storybook/react';
import HabitItem, { HabitItemProps } from '.';

export default {
  title: 'MOLECULES/Habit Item',
  component: HabitItem,
  tags: ['autodocs'],
} as Meta<typeof HabitItem>;

const Template: StoryFn<typeof HabitItem> = (args: HabitItemProps) => <HabitItem {...args} />;

export const Default = Template.bind({});

Default.args = {};
