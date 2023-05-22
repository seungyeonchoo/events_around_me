import { Meta, StoryFn } from '@storybook/react';
import CurrentDate from '.';

export default {
  title: 'User/UserTitle/CurrentDate',
  component: CurrentDate,
  tags: ['autodocs'],
} as Meta<typeof CurrentDate>;

const Template: StoryFn<typeof CurrentDate> = () => <CurrentDate />;

export const Default = Template.bind({});

Default.args = {};
