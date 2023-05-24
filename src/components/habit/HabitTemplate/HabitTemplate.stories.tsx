import { Meta, StoryFn } from '@storybook/react';
import HabitTemplate, { HabitTemplateProps } from '.';
import { mockHabit_3 } from '../../../../src/lib/mocks/mockData';

export default {
  title: 'Habit/HabitTemplate',
  component: HabitTemplate,
  tags: ['autodocs'],
} as Meta<typeof HabitTemplate>;

const Template: StoryFn<typeof HabitTemplate> = (args: HabitTemplateProps) => (
  <HabitTemplate {...args} />
);

export const Default = Template.bind({});

Default.args = {
  habit: mockHabit_3,
};
