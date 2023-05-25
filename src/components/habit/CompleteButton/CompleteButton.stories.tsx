import { Meta, StoryFn } from '@storybook/react';
import CompleteButton, { CompleteButtonProps } from '.';

export default {
  title: 'Habit/CompleteButton',
  component: CompleteButton,
  tags: ['autodocs'],
} as Meta<typeof CompleteButton>;

const Template: StoryFn<typeof CompleteButton> = (args: CompleteButtonProps) => (
  <CompleteButton {...args} />
);

export const Default = Template.bind({});

Default.args = {};
