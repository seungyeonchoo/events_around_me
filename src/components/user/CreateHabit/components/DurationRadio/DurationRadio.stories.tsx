import { Meta, StoryFn } from '@storybook/react';
import DurationRadio, { DurationRadioProps } from '.';

export default {
  title: 'User/CreateHabit/DurationRadio',
  component: DurationRadio,
  tags: ['autodocs'],
} as Meta<typeof DurationRadio>;

const Template: StoryFn<typeof DurationRadio> = (args: DurationRadioProps) => (
  <DurationRadio {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: 'label',
};
