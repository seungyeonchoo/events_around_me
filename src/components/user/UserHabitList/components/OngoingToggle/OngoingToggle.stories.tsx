import { Meta, StoryFn } from '@storybook/react';
import OngoingToggle, { OngoingToggleProps } from '.';

export default {
  title: 'User/UserHabitList/OngoingToggle',
  component: OngoingToggle,
  tags: ['autodocs'],
} as Meta<typeof OngoingToggle>;

const Template: StoryFn<typeof OngoingToggle> = (args: OngoingToggleProps) => (
  <OngoingToggle {...args} />
);

export const Default = Template.bind({});

Default.args = {
  ongoing: false,
};
