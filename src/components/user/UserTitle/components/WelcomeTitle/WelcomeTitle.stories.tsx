import { Meta, StoryFn } from '@storybook/react';
import WelcomeTitle, { WelcomeTitleProps } from '.';
import { mockUser } from '../../../../../../src/lib/mocks/mockData';

export default {
  title: 'User/UserTitle/WelcomeTitle',
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
