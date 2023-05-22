import { Meta, StoryFn } from '@storybook/react';
import WelcomeTitle, { WelcomeTitleProps } from '.';
import { mockUser } from '../../../lib/mockData';

export default {
  title: 'MOLECULES/Welcome Title',
  component: WelcomeTitle,
  tags: ['autodocs'],
} as Meta<typeof WelcomeTitle>;

const Template: StoryFn<typeof WelcomeTitle> = (args: WelcomeTitleProps) => (
  <WelcomeTitle {...args} />
);

export const Default = Template.bind({});

Default.args = {
  user: mockUser,
};
