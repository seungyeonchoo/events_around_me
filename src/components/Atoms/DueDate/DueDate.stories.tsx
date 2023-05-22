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

export const Due = Template.bind({});

Due.args = {
  due_date: new Date().toDateString(),
};

export const End = Template.bind({});

End.args = {
  due_date: '2023-02-30',
};
