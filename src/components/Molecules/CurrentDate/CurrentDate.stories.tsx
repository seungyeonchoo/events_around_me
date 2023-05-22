import { Meta, StoryFn } from '@storybook/react';
import CurrentDate, { CurrentDateProps } from '.';

export default {
  title: 'MOLECULES/Current Date',
  component: CurrentDate,
  tags: ['autodocs'],
} as Meta<typeof CurrentDate>;

const Template: StoryFn<typeof CurrentDate> = (args: CurrentDateProps) => <CurrentDate {...args} />;

export const Default = Template.bind({});

Default.args = {};
