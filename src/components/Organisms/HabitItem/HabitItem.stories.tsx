import { Meta, StoryFn } from '@storybook/react';
import HabitItem, { HabitItemProps } from '.';

export default {
  title: 'ORGANISMS/Habit Item',
  component: HabitItem,
  tags: ['autodocs'],
} as Meta<typeof HabitItem>;

const Template: StoryFn<typeof HabitItem> = (args: HabitItemProps) => <HabitItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  habit: {
    id: 1,
    end_date: '2023-07-01',
    start_date: '2023-06-01',
    title: 'habit title is ...',
    description: 'habit description is ...',
    userId: 1,
  },
};
