import { Meta, StoryFn } from '@storybook/react';
import DueDate, { DueDateProps } from '.';

export default {
  title: 'ATOMS/Due Date',
  component: DueDate,
  tag: ['autodocs'],
} as Meta<typeof DueDate>;

const Template: StoryFn<typeof DueDate> = (args: DueDateProps) => <DueDate {...args} />;

export const Default = Template.bind({});

Default.args = {
  due_date: '2023-06-30',
};
