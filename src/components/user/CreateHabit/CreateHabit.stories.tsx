import { Meta, StoryFn } from '@storybook/react';
import CreateHabit from '.';

export default {
  title: 'User/CreateHabit',
  component: CreateHabit,
  tags: ['autodocs'],
} as Meta<typeof CreateHabit>;

const Template: StoryFn<typeof CreateHabit> = () => <CreateHabit />;

export const Default = Template.bind({});
